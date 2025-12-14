# Guide: Setting Up Your First Vertex AI Notebook

This guide will walk you through creating a low-cost, secure Vertex AI Notebook for your development work.

## 1. Navigate to Vertex AI Workbench

1.  Open your web browser and go to the **Google Cloud Console**: `https://console.cloud.google.com`.
2.  Make sure you have the correct Google Cloud project selected at the top of the page.
3.  Click the **Navigation menu** (☰) in the top-left corner.
4.  Scroll down to the "AI" section and select **Vertex AI**.
5.  From the Vertex AI menu, choose **Workbench**.
6.  On the Workbench page, select the **USER-MANAGED NOTEBOOKS** tab and click **CREATE NEW**.

## 2. Configure Your Notebook Instance (Focus on Low Cost)

This is the most important step for managing your costs.

-   **Instance Name**: Give your notebook a memorable name (e.g., `my-dev-notebook`).
-   **Region and Zone**: Choose a location physically close to you.
-   **Environment**: Select an environment based on your needs. `Python (with Python 3)` is a good general-purpose starting point.
-   **Machine Type**: **CRITICAL FOR COST.**
    -   Click the dropdown and select the `E2` machine series.
    -   Choose `e2-standard-2` (2 vCPU, 8 GB RAM) or an even smaller instance if you are just starting out.
    -   **DO NOT** select a machine with a GPU unless you are certain you need one, as they are much more expensive.
-   **Idle Shutdown**: **ENABLE THIS.**
    -   Check the box for "Enable idle shutdown".
    -   Set the time to `60 minutes`. This will automatically turn off the notebook when you forget to, saving you money.
-   **Disk Configuration**: The default 100 GB Standard Persistent Disk is fine to start.
-   **Security**: You can leave the default service account settings for now.

## 3. Create and Launch

1.  Review your settings one last time.
2.  Click the **CREATE** button at the bottom of the page.
3.  Provisioning will take 5-10 minutes.
4.  Once the instance is ready, a green checkmark will appear next to its name. Click the **OPEN JUPYTERLAB** link to launch your new environment.

## 4. CRITICAL: Confirm Your Billing Alerts

Before you start any work, double-check that you have a **Budget and Billing Alerts** configured for your project. This is your safety net against unexpected charges.

1.  Go to the **Navigation menu** (☰).
2.  Select **Billing**.
3.  Go to **Budgets & alerts**.
4.  Ensure you have a budget set up with alerts that will notify you by email as you approach your spending limit.

Your notebook is now ready! Remember to manually stop it from the Workbench page when you are finished for the day to ensure you are not billed for idle time.
