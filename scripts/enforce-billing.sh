#!/bin/bash
# -----------------------------------------------------------------------------
# 🚨 CRITICAL BILLING ENFORCER 🚨
# This script forces the environment to the correct PAID billing context.
# Run this before any heavy API operations.
# -----------------------------------------------------------------------------

echo "🔍 Verifying Critical Cloud Configuration..."

# 1. Enforce Project ID
CURRENT_PROJECT=$(gcloud config get-value project 2> /dev/null)
REQUIRED_PROJECT="bespokeethos-analytics-475007"

if [ "$CURRENT_PROJECT" != "$REQUIRED_PROJECT" ]; then
    echo "❌ WRONG PROJECT DETECTED: $CURRENT_PROJECT"
    echo "🔄 Switchng to $REQUIRED_PROJECT..."
    gcloud config set project $REQUIRED_PROJECT
else
    echo "✅ Project Correct: $REQUIRED_PROJECT"
fi

# 2. Enforce Account
CURRENT_ACCOUNT=$(gcloud config get-value account 2> /dev/null)
REQUIRED_ACCOUNT="contact@bespokeethos.com"

if [ "$CURRENT_ACCOUNT" != "$REQUIRED_ACCOUNT" ]; then
    echo "❌ WRONG ACCOUNT DETECTED: $CURRENT_ACCOUNT"
    echo "🔄 Switching to $REQUIRED_ACCOUNT..."
    gcloud config set account $REQUIRED_ACCOUNT
else
    echo "✅ Account Correct: $REQUIRED_ACCOUNT"
fi

# 3. Verify Billing Link (Output Only)
echo "💳 Billing Account Verification:"
gcloud beta billing projects describe $REQUIRED_PROJECT --format="value(billingAccountName)"

echo "----------------------------------------------------------------"
echo "✅ ENVIRONMENT SECURE. READY FOR PAID API USAGE."
echo "----------------------------------------------------------------"
