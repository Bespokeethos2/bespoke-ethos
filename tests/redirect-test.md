# Domain Redirect Test Documentation

## Overview
This document describes the 301 permanent redirect from bespokeethos.com to alignment-ai.io.

## Implementation Details

### 1. Middleware (middleware.ts)
- Checks if the host is `bespokeethos.com` or `www.bespokeethos.com`
- Redirects to `alignment-ai.io` with status code 301 (permanent redirect)
- Preserves the full path and query parameters

### 2. Vercel Configuration (vercel.json)
- Provides a backup redirect at the platform level
- Catches all paths (`/:path*`) and redirects to `https://alignment-ai.io/:path*`
- Uses status code 301 for SEO benefits

## Test Cases

### Test Case 1: Root Domain
- **Input:** `http://bespokeethos.com`
- **Expected Output:** `301 redirect to https://alignment-ai.io`

### Test Case 2: WWW Subdomain
- **Input:** `http://www.bespokeethos.com`
- **Expected Output:** `301 redirect to https://alignment-ai.io`

### Test Case 3: Subpath Preservation
- **Input:** `http://bespokeethos.com/about`
- **Expected Output:** `301 redirect to https://alignment-ai.io/about`

### Test Case 4: Query Parameters Preservation
- **Input:** `http://bespokeethos.com/contact?ref=email`
- **Expected Output:** `301 redirect to https://alignment-ai.io/contact?ref=email`

### Test Case 5: HTTPS to HTTPS
- **Input:** `https://www.bespokeethos.com/solutions`
- **Expected Output:** `301 redirect to https://alignment-ai.io/solutions`

## Manual Testing

Once deployed to Vercel, you can test the redirects using:

```bash
# Test root domain redirect
curl -I http://bespokeethos.com

# Test www subdomain redirect
curl -I http://www.bespokeethos.com

# Test path preservation
curl -I http://bespokeethos.com/about

# Test query parameter preservation
curl -I "http://bespokeethos.com/contact?ref=email"
```

Expected response headers should include:
```
HTTP/1.1 301 Moved Permanently
Location: https://alignment-ai.io/[path]
```

## SEO Impact

- **301 Status Code**: Indicates a permanent redirect, transferring page authority and SEO value
- **Path Preservation**: All existing URLs maintain their structure
- **Link Equity**: Search engines will transfer ranking signals to the new domain
- **Crawl Budget**: Redirects are efficient and don't waste crawler resources

## Notes

- The middleware runs at the edge, providing fast redirects globally
- Vercel.json provides a fallback at the platform level
- Both implementations preserve the full URL structure (path + query parameters)
- Static assets are excluded from middleware processing for performance
