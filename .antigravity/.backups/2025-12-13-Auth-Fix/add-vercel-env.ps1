#!/usr/bin/env pwsh
# Add Google API Keys to Vercel Environment Variables

$API_KEY = "AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ"

Write-Host "Adding GOOGLE_API_KEY to Vercel..." -ForegroundColor Cyan

# Add to Production
Write-Host "  → Production..." -ForegroundColor Yellow
echo $API_KEY | vercel env add GOOGLE_API_KEY production

# Add to Preview
Write-Host "  → Preview..." -ForegroundColor Yellow
echo $API_KEY | vercel env add GOOGLE_API_KEY preview

# Add to Development
Write-Host "  → Development..." -ForegroundColor Yellow
echo $API_KEY | vercel env add GOOGLE_API_KEY development

Write-Host ""
Write-Host "Adding GOOGLE_GEMINI_API to Vercel..." -ForegroundColor Cyan

# Add to Production
Write-Host "  → Production..." -ForegroundColor Yellow
echo $API_KEY | vercel env add GOOGLE_GEMINI_API production

# Add to Preview
Write-Host "  → Preview..." -ForegroundColor Yellow
echo $API_KEY | vercel env add GOOGLE_GEMINI_API preview

# Add to Development
Write-Host "  → Development..." -ForegroundColor Yellow
echo $API_KEY | vercel env add GOOGLE_GEMINI_API development

Write-Host ""
Write-Host "✅ All environment variables added!" -ForegroundColor Green
Write-Host ""
Write-Host "Verify at: https://vercel.com/bespokeethos/bespoke-ethos/settings/environment-variables" -ForegroundColor Blue
