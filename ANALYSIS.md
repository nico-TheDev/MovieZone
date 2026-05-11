# MovieZone — Codebase Analysis vs. Modern React Standards

> **Goal:** Identify what to fix, modernize, and showcase before adding this project to a portfolio.

---

## Executive Summary

MovieZone is a well-structured single-page application built on TMDB. The foundation is solid — functional components throughout, a clear custom-hook data layer, sensible Context + useReducer state management, skeleton loaders, and animated transitions. A portfolio reviewer would see that you understand React architecture.

**The headline problems are:**
1. The entire dependency tree is 4–5 years out of date (React 16, CRA, SWR 0.3, Router v5, Framer Motion 2)
2. No TypeScript — the single biggest signal for professional React work today
3. Zero tests despite a testing library being installed
4. No Error Boundaries, no code splitting, no accessibility

These gaps don't hide that you know React — but they do signal that the project was never brought to a professional/production standard. The rework plan below fixes that.

---

## Dependency Audit

| Package | Current | Latest (2025) | Risk |
|---|---|---|---|
| `react` / `react-dom` | **16.13.1** | **18.3** | High — missing concurrent features, `use`, transitions, automatic batching |
| `react-scripts` (CRA) | 4.x | **deprecated** | Critical — CRA is officially unmaintained; Vite is the standard |
| `react-router-dom` | **5.2.0** | **6.x** | High — v6 has data routers, `useNavigate`, `loader`/`action`, nested layouts |
| `swr` | **0.3.0** | **2.x** | High — completely different API; v2 adds `useSWRMutation`, optimistic UI, React 18 Suspense |
| `framer-motion` | **2.4.1** | **11.x** | Medium — breaking API changes across major versions; v11 is far more performant |
| `styled-components` | **5.1.1** | **6.x** | Low-Medium — v6 dropped legacy browser support, performance improvements |
| `axios` | **0.21.1** | **1.x** | Low — v1 added ESM support and fixed many edge cases |
| `swiper` | **6.1.2** | **11.x** | Medium — significant API changes; v11 is leaner with a new module system |
| `@testing-library/react` | **9.5.0** | **16.x** | High — v9 does not support React 18 |
| `@testing-library/user-event` | **7.2.1** | **14.x** | High — v14 uses async API by default |
| `node-sass` | **6.0.1** | deprecated | Low — unused given styled-components is the main styling solution; remove it |

---

## Modern React Standards Checklist

| Standard | Status | Notes |
|---|---|---|
| Functional components only | ✅ Yes | All components are functional |
| Custom hooks for logic | ✅ Yes | Consistent `useXxx` pattern across the app |
| Context + useReducer | ✅ Yes | Auth state well-managed |
| Skeleton / loading states | ✅ Yes | Every major section has a skeleton |
| Responsive design | ✅ Yes | `respondTo` utility with 4 breakpoints |
| React 18 | ❌ No | Still on React 16 |
| TypeScript | ❌ No | Plain JS with no type checking |
| Tests | ❌ No | Library installed; zero tests written |
| Error Boundaries | ❌ No | Uncaught errors crash the full app |
| Code splitting / lazy routes | ❌ No | All routes bundled into one chunk |
| Vite (or modern bundler) | ❌ No | CRA (deprecated) |
| React Router v6 | ❌ No | v5 — no data loaders, no nested layouts |
| SWR v2 | ❌ No | v0.3 — no mutation, no optimistic updates |
| Accessibility (ARIA) | ❌ No | No ARIA roles, labels, or keyboard traps |
| Image lazy loading | ❌ No | All images load eagerly |
| `useMemo` / `useCallback` | ❌ No | No memoization to prevent re-renders |
| ESLint + Prettier enforced | ⚠️ Partial | CRA default ESLint only; no Prettier config |
| Environment variable safety | ⚠️ Partial | No validation; silent crash if key is missing |
| Dead code removed | ⚠️ No | Empty `UserContext`, empty `AppReducer` |
| PWA fully implemented | ⚠️ Partial | Service worker registered but not used |
| CI/CD pipeline | ❌ No | No GitHub Actions or similar |

---

## Architectural Weaknesses (Ranked by Portfolio Impact)

### 1. No TypeScript — Critical

**What:** The project uses plain JavaScript with no static type checking.

**Why it matters:** TypeScript is the default in professional React development. Any serious job or freelance client assumes TypeScript. A portfolio project without it signals the work was done before 2020 and hasn't been maintained.

**Fix:**
```bash
# After migrating to Vite
npm install -D typescript @types/react @types/react-dom
```

Start with interfaces for the TMDB API response shapes — that alone demonstrates the most valuable use of TypeScript in a data-heavy app:

```ts
// types/tmdb.ts
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
  overview: string;
  genre_ids: number[];
}

export interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
```

Then type your custom hooks:
```ts
// Before
const usePopularMovies = (page) => { ... }

// After
const usePopularMovies = (page: number): { data: ApiResponse<Movie> | undefined; isLoading: boolean; hasError: boolean } => { ... }
```

---

### 2. Create React App → Vite — Critical

**What:** CRA was officially deprecated in 2023 and is no longer maintained. It has slow build times, outdated Webpack config, and no active community support.

**Why it matters:** A portfolio reviewer running `npm run dev` will notice a 10–30 second cold start. Vite starts in under 1 second. This is an immediate first impression.

**Fix:**
```bash
npm create vite@latest moviezone-v2 -- --template react-ts
```

Key differences to handle:
- Move `public/` contents — Vite serves from `public/` identically
- Replace `process.env.REACT_APP_*` with `import.meta.env.VITE_*`
- Remove the CRA-specific `src/index.js` patterns and replace with Vite entry
- Remove `react-scripts` from package.json

---

### 3. React 16 → React 18 — High

**What:** React 18 introduced concurrent rendering, automatic batching, `useTransition`, `useDeferredValue`, the `use()` hook, and Suspense for data fetching.

**Why it matters:** React 18 shipped in 2022. Using 16 in a portfolio project makes it look like abandoned work.

**Key React 18 features to demonstrate:**

```tsx
// useTransition — mark search input updates as non-urgent
const [isPending, startTransition] = useTransition();

const handleSearch = (query: string) => {
  startTransition(() => setSearchQuery(query)); // UI stays responsive
};
```

```tsx
// useDeferredValue — defer expensive re-renders
const deferredQuery = useDeferredValue(searchQuery);
// Pass deferredQuery to heavy components; they update without blocking input
```

```tsx
// Automatic batching — React 18 batches all state updates, even in async callbacks
// This works automatically — no code change needed, but requires React 18
```

---

### 4. Zero Tests — High

**What:** `@testing-library/react` is installed but no test files exist in the project.

**Why it matters:** Tests are the single most visible signal that a developer takes code quality seriously. An empty test suite is worse than no testing library at all — it shows awareness but no follow-through.

**What to test for maximum portfolio impact:**

```tsx
// 1. Custom hooks — test that usePopularMovies returns the right shape
import { renderHook, waitFor } from '@testing-library/react';
import { usePopularMovies } from 'hooks/usePopularMovies';

test('returns movies data', async () => {
  const { result } = renderHook(() => usePopularMovies(1));
  await waitFor(() => expect(result.current.isLoading).toBe(false));
  expect(result.current.data?.results).toBeDefined();
});
```

```tsx
// 2. MovieCard renders with correct data
import { render, screen } from '@testing-library/react';
import MovieCard from 'components/MovieCard';

test('renders movie title', () => {
  render(<MovieCard title="Inception" rating={8.8} posterPath="/test.jpg" />);
  expect(screen.getByText('Inception')).toBeInTheDocument();
});
```

```tsx
// 3. Auth context — test login/logout state transitions
// 4. Search — test that input triggers the right query
// 5. Error state — test that error pages render on API failure
```

**Coverage target for a portfolio project:** 60–70% coverage on hooks and core components is enough to demonstrate the skill.

---

### 5. No Error Boundaries — High

**What:** React does not catch JavaScript errors in component trees unless you wrap them in an Error Boundary. Currently, any rendering error crashes the entire app to a blank white screen.

**Fix:**
```tsx
// components/ErrorBoundary/index.tsx
import { Component, type ReactNode } from 'react';

interface Props { children: ReactNode; fallback?: ReactNode; }
interface State { hasError: boolean; error?: Error; }

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
```

Wrap each page route with it so one broken page doesn't kill the whole app.

---

### 6. React Router v5 → v6 — Medium-High

**What:** React Router v6 (2021) is a near-complete rewrite. v5 patterns (`<Switch>`, `component=`, `useHistory`) are all deprecated.

**Key v6 patterns to showcase:**

```tsx
// v5 (current)
<Switch>
  <Route path="/movie/:id" component={MoviePage} />
</Switch>

// v6
<Routes>
  <Route path="/movie/:id" element={<MoviePage />} />
</Routes>
```

```tsx
// v5
const history = useHistory();
history.push('/home');

// v6
const navigate = useNavigate();
navigate('/home');
```

```tsx
// v6 Data Router (advanced — great portfolio signal)
const router = createBrowserRouter([
  {
    path: '/movie/:id',
    element: <MoviePage />,
    loader: async ({ params }) => fetchMovieData(params.id), // data fetching at router level
    errorElement: <MovieError />,
  },
]);
```

---

### 7. SWR v0.3 → v2 — Medium-High

**What:** SWR 0.3 was released in 2020. v2 (2022) has a completely different and more powerful API.

**v2 improvements to demonstrate:**

```ts
// useSWRMutation — for POST/PUT/DELETE operations (add to favorites, rate a movie)
import useSWRMutation from 'swr/mutation';

const { trigger, isMutating } = useSWRMutation(
  `/account/${accountId}/favorite`,
  async (url, { arg }: { arg: { mediaId: number; mediaType: string } }) => {
    return addToFavorites(arg);
  }
);

// Optimistic UI
await trigger({ mediaId: 123, mediaType: 'movie' }, { optimisticData: ... });
```

```ts
// SWR v2 config with React 18 Suspense support
<SWRConfig value={{ suspense: true }}>
  <Suspense fallback={<MovieSkeleton />}>
    <MoviePage />
  </Suspense>
</SWRConfig>
```

---

### 8. No Code Splitting / Lazy Routes — Medium

**What:** All route components are imported at the top of `App.js` and bundled into a single JavaScript file. On a slow connection, the user waits for the entire app to download before seeing anything.

**Fix:**
```tsx
// Before (App.js)
import MoviePage from 'components/pages/MoviePage';
import TVShowPage from 'components/pages/TVShowPage';

// After
const MoviePage = lazy(() => import('components/pages/MoviePage'));
const TVShowPage = lazy(() => import('components/pages/TVShowPage'));

// Wrap routes
<Suspense fallback={<PageSkeleton />}>
  <Routes>
    <Route path="/movie/:id" element={<MoviePage />} />
  </Routes>
</Suspense>
```

This alone can cut the initial bundle size by 40–60% and is visible in Lighthouse scores.

---

### 9. Dead Code — Medium

**What:** Two files exist that do nothing:
- `src/contexts/UserContext.js` — empty context, not used anywhere
- `src/reducers/AppReducer.js` — empty reducer, likely a leftover

**Fix:** Delete both files. Dead code in a portfolio project signals incomplete work or poor cleanup habits.

---

### 10. Accessibility (a11y) — Medium

**What:** No ARIA roles, labels, or focus management. Screen readers and keyboard-only users cannot navigate the app.

**High-impact, low-effort fixes:**

```tsx
// Images — always include meaningful alt text
<img src={posterUrl} alt={`${movie.title} poster`} />

// Icon-only buttons — add aria-label
<button aria-label="Add to favorites">
  <Icon name="heart" />
</button>

// Navigation landmark
<nav aria-label="Main navigation">

// Modal/Trailer — trap focus inside when open
// Use a library like focus-trap-react

// Search input
<input
  type="search"
  aria-label="Search movies and TV shows"
  aria-controls="search-results"
/>
<ul id="search-results" role="listbox">
```

---

### 11. No Image Lazy Loading — Low-Medium

**What:** Every poster image on every card loads on page mount, even cards far below the fold. On a page with 20+ cards this causes dozens of simultaneous image requests.

**Fix (native — no library needed):**
```tsx
<img
  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
  alt={`${title} poster`}
  loading="lazy"          // browser handles lazy loading natively
  decoding="async"        // non-blocking decode
/>
```

---

### 12. No Memoization — Low-Medium

**What:** Components re-render on every parent update, even when their props haven't changed. This is especially visible in list components with many cards.

**Fix — apply selectively, not everywhere:**
```tsx
// Memoize expensive list items
const MovieCard = memo(({ title, rating, posterPath }: MovieCardProps) => {
  return <Card>...</Card>;
});

// Memoize callbacks passed as props
const handleAddToFavorites = useCallback((id: number) => {
  triggerMutation({ mediaId: id });
}, [triggerMutation]);

// Memoize expensive derived values
const sortedMovies = useMemo(
  () => movies.sort((a, b) => b.vote_average - a.vote_average),
  [movies]
);
```

---

### 13. No CI/CD Pipeline — Low

**What:** There is no automated pipeline to run lint, type checks, or tests on push.

**Fix — add GitHub Actions:**
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test -- --coverage
```

A green CI badge on a portfolio README is a strong trust signal.

---

### 14. No Environment Variable Validation — Low

**What:** If `REACT_APP_KEY` is missing, the app makes all API calls without an API key and fails silently with mysterious 401 errors.

**Fix:**
```ts
// src/config/env.ts
const requiredEnvVars = ['VITE_API_KEY', 'VITE_API_BASE_URL'] as const;

for (const key of requiredEnvVars) {
  if (!import.meta.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

export const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
} as const;
```

---

## Prioritized Improvement Roadmap

### Tier 1 — Foundation (Do These First)

These unblock everything else and are required before the project can be called "modern."

| # | Task | Effort | Impact |
|---|---|---|---|
| 1 | Migrate CRA → Vite | 2–4 hrs | Unblocks TS, CI, modern DX |
| 2 | Upgrade React 16 → 18 | 1–2 hrs | Concurrent features, React 18 testing |
| 3 | Add TypeScript | 3–6 hrs | Biggest portfolio signal |
| 4 | Upgrade React Router v5 → v6 | 2–4 hrs | Required for modern routing patterns |
| 5 | Delete dead code (UserContext, AppReducer) | 15 min | Cleanliness |

### Tier 2 — Quality (Makes It Portfolio-Ready)

These turn a functional app into a professional one.

| # | Task | Effort | Impact |
|---|---|---|---|
| 6 | Write tests (hooks + key components) | 4–8 hrs | Second biggest portfolio signal |
| 7 | Add Error Boundaries | 1 hr | Robustness |
| 8 | Add code splitting (lazy routes) | 1–2 hrs | Measurable Lighthouse improvement |
| 9 | Upgrade SWR 0.3 → 2.x | 2–4 hrs | Demonstrates modern data patterns |
| 10 | Add CI/CD with GitHub Actions | 1 hr | Trust signal, green badge in README |
| 11 | Add env variable validation | 30 min | Production readiness |

### Tier 3 — Polish (Makes It Stand Out)

These are differentiators that show attention to detail.

| # | Task | Effort | Impact |
|---|---|---|---|
| 12 | Accessibility improvements (ARIA, keyboard nav) | 3–5 hrs | Rare in portfolio projects |
| 13 | Image lazy loading | 30 min | Easy, visible performance win |
| 14 | Memoization (memo, useCallback, useMemo) | 2–3 hrs | Shows React performance knowledge |
| 15 | Upgrade Framer Motion 2 → 11 | 2–4 hrs | Fix deprecation warnings, better performance |
| 16 | Remove node-sass (unused) | 15 min | Cleaner dependency tree |
| 17 | Add Prettier + strict ESLint rules | 1 hr | Code consistency |

---

## What Is Already Good (Keep It)

- **Component architecture** — Clean separation of page, feature, layout, and shared components. No giant components doing everything.
- **Custom hooks pattern** — Every data-fetching concern is isolated into a named hook with a consistent `{ data, isLoading, hasError }` return. This is exactly the right pattern and just needs TypeScript types added.
- **Context + useReducer** — Auth state is handled correctly. No prop drilling, no Redux overkill.
- **Skeleton loaders** — Every section has a matching skeleton component. This shows understanding of perceived performance.
- **Absolute imports** — `jsconfig.json` with `baseUrl: "src"` avoids `../../../../` import chains.
- **Responsive utility** — The `respondTo` helper is a clean abstraction for breakpoints.
- **Parallel data fetching** — `useHomeData` and `useMediaData` fire multiple requests in parallel correctly.
- **Animated page transitions** — Framer Motion integration with Intersection Observer is the right approach, just needs a version upgrade.

---

## Suggested README Update

After the rework, the README should include:

- Live demo link (deploy to Vercel — free)
- Tech stack badges (React 18, TypeScript, Vite, SWR, Framer Motion, React Router v6)
- Architecture diagram or folder structure explanation
- CI badge from GitHub Actions
- Instructions for local setup with `.env.example`
- Brief explanation of design decisions (why SWR, why Context over Redux, etc.)

The "design decisions" section is the highest-value addition — it shows you can articulate trade-offs, which is what interviews test.
