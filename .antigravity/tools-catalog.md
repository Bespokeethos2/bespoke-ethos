# Antigravity Tooling Catalog (Design + Debug)

This catalog is meant to be used across all three workspaces (Firebase + the two Vercel repos) via the sync script.

Principles:

- Prefer allowlist-only browser tooling and preinject.
- Log findings in writing (issues + next actions).
- When working from GitHub Copilot Mobile: keep changes small, provide commands, avoid multi-step UI navigation.

## MCPs (Agent Tools)

### firebase (MCP)

Use for Firebase project inspection, emulators context, rules/indexes sanity checks, and deploy-related workflows.

### github (MCP)

Use for PR/issue workflows, reviewing diffs, and tracking deploy automation.

### filesystem (MCP)

Use for safe, read-focused inspection and targeted edits in the active workspace.

### memory (MCP)

Use for saving and recalling decisions, standards, and recurring fixes.

Recommended usage patterns:

- Capture “why” in issues/PR descriptions.
- Keep a lightweight changelog in commits or PR body.

## VS Code (Editor Power Tools)

### Core

- ESLint + Prettier: keep diffs deterministic; avoid surprise fixes on save.
- Error Lens + Pretty TS Errors: reduce time-to-fix by surfacing actionable diagnostics.
- GitLens / Git Graph: faster review of why/when changes happened.

### TypeScript/Next.js

- TS Server restart when types get stuck.
- Next.js devtools: use `next dev` logs and error overlays.

### Firebase/Cloud Functions

- Cloud Code (Google): logs, auth hints, and cloud resource awareness.
- Firebase Emulator Suite: fast local iterations for Firestore + Functions.

## Browser DevTools + Extensions (Design + Debug)

### Accessibility

- Axe (Chrome): run on every new UI/page; note critical + serious issues.

### Performance

- Lighthouse: capture baseline and top 3 opportunities.
- Chrome Performance panel: identify long tasks and hydration issues.

### React

- React Developer Tools: inspect component tree, re-renders, props/state.

### Network

- DevTools Network tab: API latency, caching headers, payload size.

## UI / Design System Tools

### Tailwind

- Tailwind CSS IntelliSense: class completion + hover docs.
- Tailwind formatter (via Prettier plugin): consistent class ordering.

### Shadcn/UI workflow

- Prefer existing components and tokens; avoid new hard-coded colors.
- Validate dark mode and mobile touch targets.

## Observability / AI Debug

### Tracing

- OTLP trace viewer (local): verify spans and identify slow steps.
- Production tracing (Cloud Trace): use when debugging real incidents.

### Genkit

- Genkit UI: run flows locally, inspect prompts/outputs.
- Structured error logging: always include `flow`, `step`, and error details.

## "Preinject" Available Tools (Allowlist-only)

Preinject should only be used to:

- Add quick diagnostic overlays (a11y/perf hints)
- Surface debug panels (trace links, request IDs)
- Provide consistent instrumentation toggles

Preinject should NOT:

- Inject into all sites
- Read/collect credentials
- Modify production pages without explicit approval

Where to configure:

- Allowlist: `.antigravity/browserAllowlist.txt`
- Playbook: `.antigravity/playbooks/preinject.json`
