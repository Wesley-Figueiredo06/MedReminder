# Planejamentos Futuros — MedRemind
> Ideias e decisões técnicas documentadas para implementação futura.
> Ao implementar um item, mover para a seção "Concluídos" com a data.

---

# 🔜 Pendentes

## 🧱 Estrutura (App)

### 1. Autenticação (Supabase Auth) — pré-requisito da persistência de dados
- Hoje o logout é só `router.replace` para o login, sem sessão real.
- Futuro: `authService.signOut()` antes do redirect.
- `login.tsx` usa `validateMockCredentials` (mock) — trocar pelo `signIn` do
  `authService` (já existe e não é usado por nenhuma tela).
- `register.tsx`: o handler de submit está vazio (código Supabase comentado) —
  ligar ao `signUp` do `authService` e exibir erro na tela (hoje não há nem
  `errorMessage`, diferente do login).
- `index.tsx` usa `mockAuth.hasSession` — trocar pelo `AuthContext` real
  (o provider já existe e já escuta `onAuthStateChange`, mas o index não o usa).
- Saudação "Olá, Usuário!" na Home é hardcoded — usar o nome do perfil/sessão.
- Ícone `Eye` no login/register é decorativo — implementar toggle real de
  visibilidade de senha.
- Ordem obrigatória: auth primeiro → tabelas (feedback, medications) depois.

### 2. Validações de formulários — front
> A metade "back" (constraints + RLS) está na seção Banco de Dados, item 7.
- Padrão sugerido: validadores puros em `src/utils/validation.ts`
  (ex: `isValidEmail`, `isCompleteTime`, `isCompleteDate`), reutilizados por
  hooks de formulário (seguir o padrão do `useFeedbackForm`).
- **Login**: formato de e-mail + senha não vazia antes de chamar o service;
  mensagens de erro específicas por campo.
- **Cadastro**: nome obrigatório, e-mail válido, senha com mínimo de caracteres.
- **Novo Medicamento** (`addMedication.tsx`): hoje dá pra salvar medicamento
  totalmente vazio. Validar: nome obrigatório, dosagem obrigatória, frequência
  selecionada, horário completo (HH:mm — a máscara aceita valor parcial tipo "0"),
  data completa e não no passado.
  - Bug relacionado: o campo "Observações (Opcional)" não tem estado — está
    desconectado do save.
- **Editar Medicamento** (`MedicationEditForm.tsx`, dentro do modo de edição do
  `MedicationDetailsModal.tsx`): mesmo gap do formulário de cadastro — hoje dá
  pra salvar com Nome/Dosagem/Horário vazios ou horário incompleto.
- **Feedback**: mensagem não vazia, tamanho mínimo/máximo (espelhar o `CHECK`
  do banco: 1–1000 caracteres).

### 3. Ações de botões pendentes (localização)
> Lista única de todo botão/interação sem ação real, para fácil localização.
- `MedicationDetailsModal.tsx` → botão **"Excluir"** (sem ação; exigirá
  confirmação antes de excluir).
- `MedicationDoseCard.tsx` → botão **"Tomar"** é só visual. Implementar a ação
  real: registrar um `DoseRecord` e atualizar o contador "TOMADOS" na Home.
- `home.tsx` → cards **"ATIVOS"** e **"TOMADOS"** com valores fixos em `0`
  (precisam de dados reais).
- `settings.tsx` → card de perfil **"Usuário"** (`TouchableOpacity` sem destino —
  futura tela/modal de perfil).
- `settings.tsx` → switch **"Notificações"** só altera estado local (não persiste
  preferência nem agenda/cancela notificações).
- **Central de Ajuda** → "Perguntas Frequentes", "Falar com Suporte" e
  "Guia de Uso" ainda sem ação definida. Decidir: telas próprias, links externos
  ou conteúdo no próprio modal.

### 4. Próximas Doses — evoluções futuras
- Hoje `src/mocks/medications.ts` + `useUpcomingDoses` são um mock em memória
  (perdem estado ao recarregar o app). Substituir por `medicationService.ts`
  (já stub em `src/services/index.ts`) e um `useMedications` real (já stub em
  `src/hooks/index.ts`) consultando o Supabase.
- `addMedication.tsx` não tem campo de forma farmacêutica (comprimido/cápsula/
  gota/etc.), então toda dose salva hoje usa `iconType: "pill"` fixo. Adicionar
  esse campo ao formulário para determinar o `iconType` corretamente.
- A "próxima dose" hoje é só o horário cadastrado no formulário. Calcular de fato
  a próxima dose a partir do horário + frequência (ex: próximo horário do dia
  ainda não tomado), em vez de sempre exibir o horário de cadastro.
- Ao buscar detalhes do medicamento, usar algo como `getMedicationById` no
  Supabase, evitando trazer `instructions` na query de listagem.
- A edição de medicamento hoje persiste só no mock em memória, via
  `updateUpcomingDose` (`src/mocks/medications.ts`) e `updateDose`
  (`useUpcomingDoses`). A assinatura de `updateDose` já é assíncrona de
  propósito — quando `medicationService.updateMedication` existir, basta
  trocar o corpo de `updateDose`, sem alterar nenhum consumidor.

### 5. Notificações locais de dose
> A notificação é o núcleo do produto — confiabilidade aqui importa mais que qualquer outra feature.
- Instalar `expo-notifications` (ainda não é dependência do projeto).
- **Limitação de desenvolvimento**: notificações locais não funcionam no Expo Go
  (desde o SDK 53) — exige development build via EAS para testar de verdade.
- Pedir permissão de notificação no momento certo: ao salvar o primeiro
  medicamento (com contexto), não na abertura do app.
- Android 12+: usar alarmes exatos (`SCHEDULE_EXACT_ALARM`) — notificação de
  remédio atrasada por otimização de bateria é produto quebrado.
- Fabricantes (Xiaomi, Samsung etc.) matam apps em background: exibir dica na
  UI orientando a desativar a otimização de bateria para o app.
- Reagendar notificações ao: salvar, editar e excluir medicamento, e ao
  reiniciar o aparelho (boot).
- Respeitar o switch "Notificações" dos Ajustes (ver item 3).
- Extra de baixo custo: ação "adiar 10 min" na própria notificação.

### 6. Refatorações / dívidas técnicas
- **Frequências duplicadas**: o dropdown do `addMedication` define lista inline
  que diverge de `DOSE_FREQUENCIES` em `src/constants` ("A cada 4 horas" existe
  num, "Somente quando necessário" no outro). Unificar em fonte única.
- **Footer duplicado**: a barra de navegação inferior é duplicada entre
  `home.tsx` e `settings.tsx` — extrair para um componente `BottomNav`.
- **Path alias quebrado**: `tsconfig.json` define `@/*` → `./@src*`, que não
  corresponde ao diretório `src/`. Corrigir e migrar imports gradualmente.
- **Export deprecated**: remover `export const colors = lightColors` em
  `Colors.ts` ao fim da Fase 4 (migração completa para `useTheme()`).
- **Pickers nativos**: substituir as máscaras de texto de data e horário em
  `addMedication.tsx` por `@react-native-community/datetimepicker` — melhor UX
  (2 toques em vez de digitação) e elimina as validações de formato do item 2,
  restando só as de obrigatoriedade e "data não no passado".

---

## 🗄️ Banco de Dados (Supabase)

### 7. Validações de formulários — back (constraints + RLS)
> Não depender só do front: a anon key é pública, então todo insert/update
> precisa ser validado também no banco.
- `NOT NULL` em todos os campos obrigatórios.
- `CHECK` de tamanho em campos de texto (ver SQL do feedback como referência).
- `frequency` restrito aos valores de `DOSE_FREQUENCIES` (enum Postgres ou
  `CHECK ... IN (...)`) — depende da unificação das frequências (item 6).
- RLS em **todas** as tabelas: usuário só lê/escreve os próprios registros
  (`user_id = auth.uid()`).

### 8. Persistência de Feedback
- Arquitetura já preparada no app: FeedbackModal → useFeedbackForm → feedbackService.
  O service é a única fronteira com o Supabase; ao implementar, só o corpo dele muda.
- Convenção: banco em snake_case, app em camelCase; tradução acontece no service.
- Client a instalar: @supabase/supabase-js. O app nunca escreve SQL cru.
- Segurança: a anon key é pública, então RLS é obrigatório.
- SQL de referência (executar no SQL Editor do Dashboard do Supabase, NÃO no app):

  ```sql
  create table feedbacks (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references auth.users(id) default auth.uid(),
    message text not null check (char_length(trim(message)) between 1 and 1000),
    created_at timestamptz not null default now()
  );

  alter table feedbacks enable row level security;

  create policy "users insert own feedback"
    on feedbacks for insert
    with check (auth.uid() = user_id);

  create policy "users read own feedback"
    on feedbacks for select
    using (auth.uid() = user_id);
  ```

- Corpo futuro do service:

  ```ts
  const { error } = await supabase.from("feedbacks").insert({ message: input.message });
  if (error) throw new Error("Não foi possível enviar o feedback.");
  ```

### 9. Tabelas `medications` e `dose_records`
- Os tipos TS já existem e servem de contrato: `Medication`, `DoseRecord`
  (`src/types/index.ts`).
- `medications`: alimenta a listagem de doses e o card "ATIVOS".
- `dose_records`: registra doses tomadas (botão "Tomar") e alimenta o card
  "TOMADOS" e futuro histórico.
- `instructions` permanece como coluna simples (`TEXT`) na tabela `medications`;
  reavaliar tabela relacional apenas se surgir necessidade de múltiplas
  instruções por medicamento ou instruções reutilizáveis entre eles.
- Aplicar o mesmo padrão do feedback: RLS por `user_id`, constraints de
  validação (item 7), tradução snake_case ↔ camelCase no service.
- O modo de edição do `MedicationDetailsModal.tsx` (`MedicationEditForm.tsx` +
  `useMedicationEditForm`) já salva via `onSave`, mas hoje isso só persiste no
  mock em memória (`updateUpcomingDose` em `src/mocks/medications.ts` e
  `updateDose` em `useUpcomingDoses`). Quando a tabela `medications` existir,
  trocar o corpo de `onSave`/`updateDose` por uma chamada a
  `medicationService.updateMedication` (PUT), sem precisar mudar a assinatura
  usada pelos componentes.

---

## 📱 Produto e Publicação

### 10. Acessibilidade (público 60+)
> Quem mais usa lembrete de remédio tem 60+. Acessibilidade aqui não é extra.
- Respeitar o tamanho de fonte do sistema: testar com fonte grande ativa no
  Android/iOS — alturas fixas atuais (ex: `infoBox` com `height: 80`) quebram.
- Alvos de toque com mínimo de 44pt em botões e cards interativos.
- Fontes um pouco maiores e alto contraste nos textos principais.
- `accessibilityLabel` / `accessibilityRole` nos botões de ícone (logout,
  voltar, Tomar, Editar, Excluir).
- Feedback de ação: toast/snackbar de confirmação ao salvar medicamento
  ("Medicamento salvo") — hoje o save não confirma nada.

### 11. Privacidade e LGPD
> Dados de medicação são dados sensíveis de saúde pela LGPD.
- Criar política de privacidade em URL pública (pode ser página simples no
  GitHub Pages) — obrigatória para o Play Console.
- Espelhar a política no modal "Privacidade" já existente no app.
- Descrição da loja sem claims médicos: "ajuda a lembrar" sim; "melhora sua
  saúde/tratamento" não (risco de enquadramento em categoria regulada).
- O app deve funcionar offline-first: cadastro e notificação locais primeiro,
  Supabase como sincronização/backup por cima. Remédio não pode depender de rede.

### 12. Publicação (Play Store primeiro)
- Conta de desenvolvedor Google Play: US$25 (taxa única).
- Contas pessoais criadas após 13/11/2023: teste fechado obrigatório com
  mínimo de 12 testadores por 14 dias contínuos antes de solicitar produção;
  depois, formulário de produção + análise do Google (3–7 dias úteis).
  Planejar ~1 mês entre "app pronto" e "público".
- Preencher formulário Data Safety declarando coleta de dados de saúde.
- Pipeline EAS já existe (projectId no app.json, versionCode 3) — falta:
  screenshots, descrição, ícone em alta resolução, classificação etária.
- App Store (iOS): fase 2 — US$99/ano, exige bloco `ios` com
  `bundleIdentifier` no app.json (hoje inexistente).
- Web própria: apenas como vitrine/landing com link pra loja (notificação
  confiável em web mobile é fraca; não é canal principal).

---

# ✅ Concluídos

### 21/07/2026 — Modo de edição no `MedicationDetailsModal`
- Modo de edição dentro do `MedicationDetailsModal.tsx` — mesmo modal, view
  interna alternando entre `"details"` e `"edit"` com transição *slide* via
  `Animated` nativo (hook `useSlideTransition`).
- Novos componentes: `MedicationDetailsView` (extraído do modal) e
  `MedicationEditForm`.
- Novo hook `useMedicationEditForm` (estado do formulário separado da UI, com
  `reset`).
- Máscara de horário extraída para `utils/formatTimeInput.ts`, reutilizada por
  `addMedication.tsx` e pelo formulário de edição (DRY).
- `updateUpcomingDose` no mock + `updateDose` assíncrono no
  `useUpcomingDoses` (assinatura já preparada para Supabase).
- `home.tsx` passou a derivar `selectedDose` da lista via `selectedDoseId`
  (fonte única de verdade — o modal reflete automaticamente a dose
  atualizada).

**Decisões/lições de layout registradas para referência futura:**
- Renderizar apenas o *pane* ativo por vez, em vez de manter dois panes lado a
  lado com altura animada (a abordagem medida via `onLayout` + interpolação de
  height foi descartada por fragilidade — causava stretch ou colapso de
  altura).
- `ModalButton` mantém `width: "100%"` (correto para layouts em coluna); em
  *rows*, o consumidor envolve cada botão em uma `View` com `flex: 1` (padrão
  aplicado no footer do modal).