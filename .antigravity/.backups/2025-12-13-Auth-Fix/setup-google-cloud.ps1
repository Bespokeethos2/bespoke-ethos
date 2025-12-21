#!/usr/bin/env pwsh
# Google Cloud Setup Script - Automated Configuration
# Author: Antigravity AI
# Last Updated: 2025-12-13
# Purpose: One-command setup for Google Cloud authentication and API keys

param(
    [switch]$VerifyOnly,
    [switch]$UpdateKeys,
    [switch]$CheckQuota
)

$ErrorActionPreference = "Stop"

# Configuration
$PROJECT_ID = "bespokeethos-analytics-475007"
$BILLING_ACCOUNT = "01D82D-EE885B-C29459"
$REGION = "us-central1"

Write-Host "🚀 Google Cloud Setup Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Function: Check if gcloud is installed
function Test-GCloudInstalled {
    try {
        $null = gcloud --version 2>&1
        return $true
    } catch {
        return $false
    }
}

# Function: Check authentication
function Test-GCloudAuth {
    try {
        $account = gcloud config get-value account 2>&1
        if ($account -match "contact@bespokeethos.com") {
            Write-Host "✅ Authenticated as: $account" -ForegroundColor Green
            return $true
        } else {
            Write-Host "⚠️  Not authenticated as contact@bespokeethos.com" -ForegroundColor Yellow
            return $false
        }
    } catch {
        return $false
    }
}

# Function: Verify project configuration
function Test-ProjectConfig {
    try {
        $project = gcloud config get-value project 2>&1
        if ($project -eq $PROJECT_ID) {
            Write-Host "✅ Project configured: $project" -ForegroundColor Green
            return $true
        } else {
            Write-Host "⚠️  Wrong project: $project (expected: $PROJECT_ID)" -ForegroundColor Yellow
            return $false
        }
    } catch {
        return $false
    }
}

# Function: Check .env.local for API keys
function Test-EnvFile {
    if (Test-Path ".env.local") {
        $content = Get-Content ".env.local" -Raw
        
        $hasGoogleKey = $content -match "GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ"
        $hasGeminiKey = $content -match "GOOGLE_GEMINI_API=AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ"
        $hasApiKey = $content -match "GOOGLE_API_KEY=AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ"
        
        if ($hasGoogleKey -and $hasGeminiKey -and $hasApiKey) {
            Write-Host "✅ All API keys configured in .env.local" -ForegroundColor Green
            return $true
        } else {
            Write-Host "⚠️  Missing or outdated API keys in .env.local" -ForegroundColor Yellow
            return $false
        }
    } else {
        Write-Host "❌ .env.local file not found" -ForegroundColor Red
        return $false
    }
}

# Main execution
Write-Host "Step 1: Checking gcloud installation..." -ForegroundColor Cyan
if (-not (Test-GCloudInstalled)) {
    Write-Host "❌ gcloud CLI not installed" -ForegroundColor Red
    Write-Host "Install from: https://cloud.google.com/sdk/docs/install" -ForegroundColor Yellow
    exit 1
}
Write-Host "✅ gcloud CLI installed" -ForegroundColor Green
Write-Host ""

Write-Host "Step 2: Checking authentication..." -ForegroundColor Cyan
if (-not (Test-GCloudAuth)) {
    Write-Host "🔐 Initiating authentication..." -ForegroundColor Yellow
    Write-Host "Opening browser for OAuth login..." -ForegroundColor Yellow
    gcloud auth application-default login
    
    # Verify after login
    if (Test-GCloudAuth) {
        Write-Host "✅ Authentication successful" -ForegroundColor Green
    } else {
        Write-Host "❌ Authentication failed" -ForegroundColor Red
        exit 1
    }
}
Write-Host ""

Write-Host "Step 3: Verifying project configuration..." -ForegroundColor Cyan
if (-not (Test-ProjectConfig)) {
    Write-Host "🔧 Setting project to: $PROJECT_ID" -ForegroundColor Yellow
    gcloud config set project $PROJECT_ID
    Write-Host "✅ Project configured" -ForegroundColor Green
}
Write-Host ""

Write-Host "Step 4: Checking environment variables..." -ForegroundColor Cyan
if (-not (Test-EnvFile)) {
    if ($UpdateKeys) {
        Write-Host "🔧 Updating .env.local with latest API keys..." -ForegroundColor Yellow
        
        $envContent = Get-Content ".env.local" -Raw
        
        # Update all Google API keys
        $envContent = $envContent -replace 'GOOGLE_API_KEY=AIzaSy[A-Za-z0-9_-]+','GOOGLE_API_KEY=AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ'
        $envContent = $envContent -replace 'GOOGLE_GEMINI_API=AIzaSy[A-Za-z0-9_-]+','GOOGLE_GEMINI_API=AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ'
        $envContent = $envContent -replace 'GOOGLE_GENERATIVE_AI_API_KEY=AIzaSy[A-Za-z0-9_-]+','GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ'
        
        Set-Content ".env.local" -Value $envContent -NoNewline
        Write-Host "✅ API keys updated in .env.local" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Run with -UpdateKeys to fix this" -ForegroundColor Yellow
    }
}
Write-Host ""

if ($CheckQuota) {
    Write-Host "Step 5: Checking API quota status..." -ForegroundColor Cyan
    Write-Host "Opening quota dashboard..." -ForegroundColor Yellow
    Start-Process "https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=$PROJECT_ID"
    Write-Host "✅ Quota dashboard opened in browser" -ForegroundColor Green
    Write-Host ""
}

Write-Host "================================" -ForegroundColor Cyan
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Summary:" -ForegroundColor Cyan
Write-Host "  Project: $PROJECT_ID" -ForegroundColor White
Write-Host "  Billing: $BILLING_ACCOUNT" -ForegroundColor White
Write-Host "  Region: $REGION" -ForegroundColor White
Write-Host "  API Key: AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ" -ForegroundColor White
Write-Host ""
Write-Host "🔗 Quick Links:" -ForegroundColor Cyan
Write-Host "  API Keys: https://aistudio.google.com/app/apikey" -ForegroundColor Blue
Write-Host "  Quotas: https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=$PROJECT_ID" -ForegroundColor Blue
Write-Host "  Billing: https://console.cloud.google.com/billing/linkedaccount?project=$PROJECT_ID" -ForegroundColor Blue
Write-Host ""
Write-Host "💡 Usage:" -ForegroundColor Cyan
Write-Host "  Verify setup:    .\scripts\setup-google-cloud.ps1 -VerifyOnly" -ForegroundColor White
Write-Host "  Update keys:     .\scripts\setup-google-cloud.ps1 -UpdateKeys" -ForegroundColor White
Write-Host "  Check quota:     .\scripts\setup-google-cloud.ps1 -CheckQuota" -ForegroundColor White
Write-Host ""
