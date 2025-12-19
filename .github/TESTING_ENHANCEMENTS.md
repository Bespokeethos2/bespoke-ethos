# Testing Enhancements for Page Deployment

This document summarizes the comprehensive testing suite added to ensure flawless user experience before production deployment.

---

## GitHub Actions Workflows

### 1. CI Workflow (`.github/workflows/ci.yml`)

**Triggers**: Every push and PR to main branch

**Mandatory Checks** (must pass):
- ✅ Deployment quality checks (50 automated validations)
- ✅ Preflight checks
- ✅ Build verification
- ✅ Smoke tests
- ✅ Accessibility audit

**Advisory Checks** (warnings only):
- Type checking (reports errors but doesn't block)
- Linting (reports issues but doesn't block)
- E2E tests (if configured)
- Security audit (advisory)

**Additional Features**:
- Bundle size analysis
- Dependency security scanning

---

### 2. Quality Assurance Workflow (`.github/workflows/quality-assurance.yml`)

**Triggers**:
- Manual execution (workflow_dispatch)
- Weekly schedule (Mondays 9 AM UTC)
- PRs that modify src/ or public/ directories

#### Job: Comprehensive Quality Check

**Code Quality Checks**:
- ✅ Strict deployment quality validation
- ✅ Missing alt tag detection on images
- ✅ TODO/FIXME comment scanning
- ✅ Console.log statement detection in production code
- ✅ Hardcoded URL detection
- ✅ TypeScript strict mode verification
- ✅ Duplicate dependency detection

**SEO Checks**:
- ✅ Metadata export verification in page files
- ✅ Image optimization usage (next/image vs img tags)

**Accessibility Checks**:
- ✅ onClick handler accessibility patterns
- ✅ ARIA compliance patterns

**Security Checks**:
- ✅ Dependency vulnerability scanning
- ✅ Security audit reporting

**Performance Checks**:
- ✅ Bundle size analysis with detailed breakdown
- ✅ Largest file identification
- ✅ Static assets size tracking

#### Job: Lighthouse Audit

**Triggers**: Manual or scheduled runs only

**Features**:
- Automated Lighthouse CI testing
- Performance scoring
- Accessibility scoring
- SEO scoring
- Best practices validation
- Results uploaded as artifacts
- Public storage for easy sharing

**Checks**:
- Performance score (target: 90+)
- Accessibility score (target: 90+)
- Best Practices score (target: 90+)
- SEO score (target: 90+)

#### Job: Security Scan

**Features**:
- Trivy vulnerability scanner
- Filesystem security scanning
- SARIF format output
- GitHub Security integration
- Automated security alerts

---

## Automated Quality Checks

### Missing Alt Tag Detection
```bash
grep -r "img src\|<Image" src/ | grep -v "alt="
```
Ensures all images have accessibility-compliant alt tags.

### Console.log Detection
```bash
grep -rn "console\.log" src/
```
Prevents debug statements from reaching production.

### SEO Metadata Verification
```bash
find src/app -name "page.tsx" -exec grep -q "export const metadata" {} \;
```
Ensures all pages have proper SEO metadata exports.

### Accessibility Pattern Check
```bash
grep -r "onClick=" src/ | grep -v "onKeyDown\|onKeyPress\|role="
```
Detects onClick handlers without keyboard alternatives.

### Hardcoded URL Detection
```bash
grep -rn "http://localhost\|https://bespokeethos.com" src/
```
Ensures environment variables are used instead of hardcoded URLs.

### Image Optimization Check
```bash
grep -r "<img" src/ | grep -v "next/image"
```
Verifies Next.js Image component usage for optimal performance.

---

## Usage

### Running Checks Locally

**Standard quality check**:
```bash
pnpm run deploy:check
```

**Strict mode (warnings as failures)**:
```bash
pnpm run deploy:check:strict
```

**Full test suite**:
```bash
pnpm run preflight
pnpm run typecheck
pnpm run lint
pnpm build
pnpm run smoke
pnpm run audit:css
pnpm run test:e2e
```

### Triggering GitHub Actions

**Manual Quality Assurance Run**:
1. Go to Actions tab in GitHub
2. Select "Quality Assurance" workflow
3. Click "Run workflow"
4. Select branch and run

**Viewing Results**:
- CI results appear in PR checks automatically
- Quality Assurance results in Actions tab
- Lighthouse reports in workflow artifacts
- Security findings in Security tab

---

## Benefits

### User Experience Protection
- ✅ Prevents accessibility violations before deployment
- ✅ Ensures SEO best practices are followed
- ✅ Validates performance standards
- ✅ Catches security vulnerabilities early

### Code Quality
- ✅ Enforces TypeScript strict mode
- ✅ Prevents debug code in production
- ✅ Ensures proper error handling patterns
- ✅ Validates build stability

### Performance Optimization
- ✅ Monitors bundle size growth
- ✅ Tracks largest files in build
- ✅ Verifies image optimization
- ✅ Lighthouse CI integration

### Security
- ✅ Dependency vulnerability scanning
- ✅ Filesystem security checks
- ✅ Automated security alerts
- ✅ SARIF format for GitHub Security

---

## Maintenance

### Weekly Automated Checks
The Quality Assurance workflow runs every Monday at 9 AM UTC to catch:
- Drift in code quality standards
- New security vulnerabilities
- Performance regressions
- Accessibility issues

### Continuous Improvement
- Review failed checks in Actions tab
- Update validation patterns as needed
- Add new checks based on production issues
- Adjust thresholds based on real-world data

---

## Troubleshooting

### CI Failures

**Deployment quality check fails**:
- Run locally: `pnpm run deploy:check`
- Review output for specific failures
- Fix issues and re-run

**Accessibility audit fails**:
- Run locally: `pnpm run audit:css`
- Review Axe violations
- Fix contrast/ARIA issues

**Smoke tests fail**:
- Run locally: `pnpm run smoke`
- Check for missing assets
- Verify file structure

### Quality Assurance Warnings

**Console.log detected**:
- Search codebase: `grep -rn "console.log" src/`
- Remove or replace with proper logging

**Missing alt tags**:
- Search: `grep -r "<Image" src/ | grep -v "alt="`
- Add descriptive alt text

**Hardcoded URLs**:
- Use `process.env.NEXT_PUBLIC_SITE_URL`
- Replace hardcoded URLs with environment variables

---

## Configuration

### Adjusting Check Severity

Edit workflow files to change `continue-on-error`:
- `false`: Check must pass (blocking)
- `true`: Check reports but doesn't block

### Adding New Checks

1. Add check in appropriate workflow file
2. Test locally first
3. Set appropriate `continue-on-error` flag
4. Document in this file

### Modifying Schedule

Edit `quality-assurance.yml`:
```yaml
schedule:
  - cron: '0 9 * * 1'  # Weekly Monday 9 AM UTC
```

---

## Related Documentation

- **[PAGE_DEPLOYMENT_CHECKLIST.md](../PAGE_DEPLOYMENT_CHECKLIST.md)** - Complete deployment requirements
- **[DEPLOYMENT.md](../DEPLOYMENT.md)** - Deployment process guide
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** - Contribution guidelines

---

**Last Updated**: 2025-12-16  
**Version**: 1.0.0  
**Maintained By**: Bespoke Ethos Development Team
