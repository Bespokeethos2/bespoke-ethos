# Performance & Mobile-First Design Standards

## Mobile-First Design Checklist
- [ ] **Meta Viewport**: Ensure `<meta name="viewport" content="width=device-width, initial-scale=1">` is present.
- [ ] **Media Queries**: Start with mobile styles (base CSS) and use `@media (min-width: ...)` for larger screens.
- [ ] **Touch Targets**: All interactive elements must be at least 44x44px.
- [ ] **Font Sizes**: Base font size should be at least 16px to prevent iOS zoom on focus.
- [ ] **Flex/Grid**: Use flexible layouts (%, fr, vh/vw) over fixed pixels.

## Performance Optimization
- [ ] **Images**: Use WebP/AVIF formats. Implement lazy loading (`loading="lazy"`).
- [ ] **Bundling**: 
    - **Vite**: Use `splitVendorChunkPlugin`.
    - **Next.js**: Utilize `next/image` and dynamic imports (`next/dynamic`).
- [ ] **Lighthouse Score**: Target > 90 in all categories.

## Visual Editing Support
- [ ] **Component Structure**: Break down UI into atomic components (Button, Card, Hero).
- [ ] **Storybook**: Recommend installing Storybook for isolated visual testing.
- [ ] **Clean DOM**: Avoid excessive nesting of `div`s.

## Git Workflow
- Use the `autonomous_git.ps1` script for all commits.
- **Rule**: If a test fails once, it must pass TWICE consecutively after fixing before commit logic allows it.
