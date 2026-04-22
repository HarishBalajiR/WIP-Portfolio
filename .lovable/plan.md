

## Add live coding stats to the portfolio

Replace the static "Find me across the web" cards with a new **Live Stats** section that pulls real numbers from LeetCode, GitHub, and Codeforces — then keeps the existing profile cards below it for navigation.

### What you'll see on the page

A new section between **Experience** and **Profiles** titled *"Numbers, not promises."* with three branded stat cards in a row:

```text
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  LeetCode       │  │  GitHub         │  │  Codeforces     │
│  127            │  │  342            │  │  1247           │
│  problems solved│  │  contributions  │  │  current rating │
│                 │  │  (last year)    │  │  pupil          │
│  Easy 80 · Med  │  │  18 public repos│  │  max 1289       │
│  42 · Hard 5    │  │  12 followers   │  │  24 contests    │
│  Rank: 845,231  │  │  Top: TS, Py    │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
                  Last updated: just now · Auto-refreshes
```

Each card uses the brand's existing color (LeetCode orange, GitHub white-on-dark, Codeforces blue), shows a skeleton loader while fetching, and gracefully degrades to a "stats unavailable" state if an API is down.

### How the data is fetched

Three free, no-auth public APIs — called directly from the browser, no backend needed:

| Platform | Endpoint | Returns |
|---|---|---|
| LeetCode | `https://leetcode-stats-api.herokuapp.com/HarishBalajiR` | totalSolved, easy/medium/hard, ranking, acceptance rate |
| GitHub | `https://api.github.com/users/HarishBalajiR` + `/repos` | public repos, followers, top languages |
| Codeforces | `https://codeforces.com/api/user.info?handles=HarishBalajiR` | current rating, max rating, rank title, contest count |

GitHub contribution count comes from `https://github-contributions-api.jogruber.de/v4/HarishBalajiR?y=last` (free, no auth, returns the same numbers as the green squares graph).

### Technical changes

1. **New file: `src/components/portfolio/LiveStats.tsx`**
   - Three `useQuery` hooks (TanStack Query is already installed in the project) fetching the APIs in parallel.
   - 1-hour `staleTime` so we don't hammer the APIs on every page view.
   - Per-card loading skeleton (`<Skeleton />` from shadcn) and error fallback ("Couldn't load — visit profile →").
   - Each card is also a link to the underlying profile, so the section doubles as navigation.

2. **New file: `src/hooks/useLiveStats.ts`**
   - `useLeetCodeStats(handle)`, `useGitHubStats(handle)`, `useCodeforcesStats(handle)` — typed wrappers around the fetch calls.
   - Each returns `{ data, isLoading, error }`.

3. **Edit `src/pages/Index.tsx`**
   - Import and render `<LiveStats />` between `<Experience />` and `<Profiles />`.

4. **Edit `src/components/portfolio/Nav.tsx`**
   - Add a `Stats` link to the nav between **Experience** and **Profiles** (anchors to `#stats`).

### Design details

- Section follows the existing pattern: `py-28 border-t border-border`, `max-w-6xl mx-auto px-6`.
- Heading: `font-display text-4xl md:text-5xl` — *"Numbers, not <em>promises</em>."*
- Stat numbers: large `font-display` (matches the `1st / 3+ / ∞` stats in About).
- Brand accents reuse the colors already defined for each platform in `Profiles.tsx`.
- Refresh timestamp in `font-mono text-xs text-muted-foreground` at the bottom of the section.

### What I'm assuming

- Your handle is **`HarishBalajiR`** on all three platforms (matches what's in `Profiles.tsx`).
- You're fine with client-side fetches (simpler, no backend, no rate-limit issues at portfolio traffic levels). If a platform later blocks browser requests via CORS, we can move that one call into a Lovable Cloud edge function.
- The existing `Profiles.tsx` section stays as-is — it serves a different purpose (navigation/branding vs. proof).

