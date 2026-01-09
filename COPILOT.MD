# Redirect change brief

## Summary
- Added a sitewide permanent redirect from `bespokeethos.com` and `www.bespokeethos.com` to `alignment-ai.io`, preserving the path.
- Verified current behavior with `curl -I`.

## Verification
- `curl -I https://bespokeethos.com/anything` returned 308 with `Location: https://alignment-ai.io/anything`.
- `curl -I https://www.bespokeethos.com/anything` returned 308 with `Location: https://alignment-ai.io/anything`.

## File changes
- `vercel.json`: added a `redirects` rule mapping `/:path*` to `https://alignment-ai.io/:path*` with `permanent: true`.
- `COPILOT.MD`: created this brief to document the change and verification.

## Why this was done
- Migrating from `bespokeethos.com` to `alignment-ai.io` as part of a targeted rebrand. As of today that rebrand is live, we need you to plug the holes.

## Follow-up
- Update Google Search Console using the Change of Address tool once you have access.
