# Planejamentos Futuros — MedRemind
> Ideias e decisões técnicas documentadas para implementação futura.
> Ao implementar um item, mover para a seção "Concluídos" com a data.

## 🔜 Pendentes

### 1. Persistência de Feedback (Supabase)
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

### 2. Autenticação (Supabase Auth) — pré-requisito do item 1
- Hoje o logout é só `router.replace` para o login, sem sessão real.
- Futuro: `authService.signOut()` antes do redirect.
- Ordem obrigatória: auth primeiro → tabela de feedback depois.

### 3. Central de Ajuda — destinos dos botões
- "Perguntas Frequentes", "Falar com Suporte" e "Guia de Uso" ainda sem ação definida.
- Decidir: telas próprias, links externos ou conteúdo no próprio modal.

### 4. Próximas Doses — evoluções futuras
- Hoje `src/mocks/medications.ts` + `useUpcomingDoses` são um mock em memória (perdem
  estado ao recarregar o app). Substituir por `medicationService.ts` (já stub em
  `src/services/index.ts`) e um `useMedications` real (já stub em `src/hooks/index.ts`)
  consultando o Supabase.
- O botão "Tomar" no `MedicationDoseCard` é só visual. Implementar a ação real:
  registrar um `DoseRecord` e atualizar o contador "TOMADOS" no card verde da Home.
- `addMedication.tsx` não tem campo de forma farmacêutica (comprimido/cápsula/gota/
  etc.), então toda dose salva hoje usa `iconType: "pill"` fixo. Adicionar esse campo
  ao formulário para determinar o `iconType` corretamente.
- A "próxima dose" hoje é só o horário cadastrado no formulário. Calcular de fato a
  próxima dose a partir do horário + frequência (ex: próximo horário do dia ainda não
  tomado), em vez de sempre exibir o horário de cadastro.

## ✅ Concluídos
(vazio por enquanto)