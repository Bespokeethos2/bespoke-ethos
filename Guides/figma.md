Bring your design system package to Figma Make
Who can use this feature

Figma Make is available for Full seats on paid plans.
All users can import packages from the public npm registry.
Users on paid plans can publish and use private packages.
Users with Full seats can publish and use Make templates. Other paid plan users can use templates in their drafts.
Note: Support for packages in Figma Make is rolling out over the next few weeks.

Import your production React design system package into Figma Make to generate apps and prototypes that match your brand. For more information about the advantages of creating and using design system packages, see our Help Center.

Follow these steps to publish and configure your package. Teammates can start using your package immediately after step 1. Steps 2 and 3 are optional but make it easier for teammates to use your package. Before you start, review the requirements.

Publish your package
Add guidelines to teach Figma Make how to use your package
Create templates to provide a starting point


Requirements
Your design system package must meet these requirements:

React 18+
Compatible with Vite
Published as an npm package:
Public package: Published to the npm public registry
Private package: Published to a Figma-maintained npm registry private to your organization
Note: Private packages are Customer Content and are covered by your agreement with Figma.

Vite
Figma Make uses Vite as its build system. To ensure compatibility:

Confirm your package builds with Vite and React 18+
Configure Vite plugins in your vite.config.ts if needed:
Babel plugins: Add them to the plugin-react configuration. See example.
Polyfills: Use @vitejs/plugin-legacy and configure your targets. See example.
1. Publish your package
To use your design system package in Figma Make, you need to publish the package either publicly or privately (organization and enterprise plans only).

Publish a public package
If you want to share your design system publicly, publish it to the public npm registry.

Publish a private package
If your design system packages are private to your organization, publish them to the private npm registry for your Figma team or organization.

Any packages you publish to your organization’s private registry are available to any Figma Make file in your organization (but not to any Figma Make files outside your organization). Packages published to your organization’s private registry are Customer Content and are covered by your agreement with Figma.

To publish a private package:

Create a new Figma Make file.
In the upper-right corner of Figma Make, click ⚙️ Make settings, and then click Figma npm registry.
Click Get started.
Enter your organization's scope for private npm packages (e.g., @exampleco).
Click Generate key. A Figma organization admin must complete this step.
Copy the code snippet and paste it into your .npmrc file. The snippet won't be visible again.
Run npm publish for each package.
To use your private package:

Create a new Figma Make file.
Ask the chat to install your package (e.g. 'install @mycompany/mypackage') or edit the package.json and add the package there.
The first time you set up the npm registry, you'll need to create another new file before installing your package.

2. Teach Make how to use your design system
Figma Make's AI can inspect your package to understand available components and tokens. For best results, you should also provide guidelines that teach Make about your design system. See Write design system guidelines for instructions.

3. Create a Make template
After installing your package in a Figma Make file, publish that file as a template.

Template options:

Packages and guidelines only: Teammates can generate new apps that automatically use your design system components according to your guidelines.
Starter app: Create a starter app for teammates to iterate on. This ensures everyone prototypes from the same starting point.
What's next?
Share your templates with teammates. They can also install the packages directly in files they create.

To update your package, run npm publish. If your package.json is configured to use the latest version, changes will appear the next time the Make file builds.

Troubleshooting
If you're having trouble getting your package to work in Figma Make, it can help to test that your package builds with Vite by creating a local Vite project, installing your package, and debugging any errors that appear.

npm create vite@latest make-setup-app -- --template react-ts

Note: If you have issues and need to reach out to support, we can more easily troubleshoot if you include an archive of this local Vite project with your support request.

Previous
Intro to Figma Make
Next
Write design system guidelines for Figma Make
Was this page helpful?
Leave us feedback
Community Forum
Discord Server
GitHub Samples
FigJam
Enterprise
Learn
Educat