

## Remove "Built in Chennai · v1.0" from the footer

In `src/components/portfolio/Contact.tsx`, delete the right-hand text block in the footer so only the copyright line remains.

### Change
Replace the footer's two-column layout with a single centered copyright:

```tsx
<footer className="relative mt-24 max-w-6xl mx-auto px-6 text-center text-xs font-mono text-muted-foreground">
  © 2026 Harish Balaji R. Crafted with care.
</footer>
```

### Still pending from earlier (say the word and I'll bundle them in)
- Remove `alex.dev` from the top-left nav
- Remove the `/ 0X — SECTION` mono labels above each section heading
- Remove the "Message on LinkedIn" CTA button

