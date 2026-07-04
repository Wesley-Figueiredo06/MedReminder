# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

MedReminder (slug `medreminder`) is a React Native + Expo app (Expo Router) for managing medication reminders. It is in early/active development — many screens contain hardcoded/placeholder data (e.g. dose counts, "Usuário" username) and TODO-like stubs (e.g. `handleLogin` in [login.tsx](src/app/login.tsx) has the actual Supabase query commented out).

## Commands

- `npm start` — start the Expo dev server
- `npm run android` / `npm run ios` / `npm run web` — start dev server targeting a specific platform
- There are no configured lint, typecheck, test, or build scripts in `package.json`. Use `npx tsc --noEmit` for a manual typecheck if needed.

## Environment

Supabase credentials are required at runtime, loaded via `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` env vars (see `.env.exemple`). The Supabase client is created once in [supabase.ts](supabase.ts) (repo root, not under `src/`) and persists sessions via `AsyncStorage`.

## Architecture

- **Routing**: Expo Router with the file-based convention — every file in `src/app/` is a route, registered via `"main": "expo-router/entry"` in `package.json`. Navigation between screens uses `router.push(...)` / `router.replace(...)` / `<Link href="...">` from `expo-router`, not React Navigation directly.
  - [src/app/_layout.tsx](src/app/_layout.tsx) is the root layout: wraps every screen in `SafeAreaProvider`/`SafeAreaView`, locks screen orientation to portrait, and renders a header-less `Stack` with a fade transition.
  - [src/app/index.tsx](src/app/index.tsx) is the entry route. Note: it currently renders `SettingsScreen` directly for development purposes rather than the real landing flow (`Login`/`Home`) — check this file before assuming `/` behaves like a typical login-gated entry point.
  - Screens: `login.tsx`, `register.tsx`, `home.tsx`, `addMedication.tsx`, `settings.tsx`.
- **Styling**: No styling library/theme system — each screen has a hand-written companion stylesheet under `src/assets/styles/` (e.g. `style.ts` for login/register/addMedication, `styleHome.ts`, `styleSettings.ts`, `styleModal.ts`), built with `StyleSheet.create`. Each style module also exports a `color` object with the screen's color palette (e.g. `color.primaryColor`, `color.placeholderLoginColor`). When adding a new screen, follow this pattern: create a matching `style<ScreenName>.ts` file rather than inlining large style blocks or introducing a new styling approach.
- **Shared components** live in `src/components/`:
  - `Modal.tsx` (`ModalCustom`) — generic modal shell (title, close, optional confirm button) used as a wrapper.
  - `SettingsModal.tsx` — renders modal *body content* based on a `type` prop (`"Privacy" | "HelpCenter" | "FeedBack" | "About" | "Exit" | null`); composed inside `ModalCustom` from `settings.tsx`. When adding new modal content types, extend this union and add a corresponding branch rather than creating a new modal component.
  - `Dropdown.tsx` — wraps `react-native-dropdown-picker`, used in `addMedication.tsx` for the dose-frequency selector.
- **Icons**: `lucide-react-native` is used throughout for all iconography — prefer it over adding a new icon library.
- **Animations**: `react-native-reanimated` (`useSharedValue`/`useAnimatedStyle`/`withRepeat`/`withTiming`) is used for simple looping UI animation (e.g. the bouncing heart icon in `login.tsx`).
- **Data layer**: Supabase is the backend (auth + data), but most screens currently use local `useState` only and do not yet read/write through Supabase — when wiring up persistence, follow the existing (commented-out) pattern in `login.tsx` (`supabase.from(...).select(...)`) rather than introducing a separate data-fetching library.
- **Path alias**: `tsconfig.json` defines `@/*` → `./@src*`, but this alias does not currently match the actual `src/` directory name — relative imports (`../assets/styles/...`) are used throughout instead. Don't assume `@/` imports work without first fixing/verifying this alias.
- **Localization**: UI copy is in Portuguese (pt-BR) throughout (labels, dates via `toLocaleDateString("pt-BR", ...)`). Keep new user-facing strings in Portuguese for consistency.

## Commits

Antes de commitar, analise o diff completo (`git diff --staged`) para entender exatamente o que mudou desde o último commit. A mensagem deve refletir apenas o que foi alterado naquele intervalo — sem mensagens genéricas como "update" ou "fix". Use o padrão `tipo: descrição curta` em inglês:
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `refactor:` mudança sem alterar comportamento
- `style:` apenas estilo/formatação
- `chore:` configuração, dependências, arquivos mortos

Se o diff cobrir múltiplas mudanças distintas, sugira commits separados em vez de um único commit amplo.
