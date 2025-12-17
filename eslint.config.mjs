import next from "eslint-config-next";

const config = [
  // Next.js + React + TS rules (Flat config)
  ...next,
  // Project-specific ignores to keep lint fast and focused
  {
    ignores: [
      "public/**",
      ".vscode/**",
      ".backups/**",
      ".next/**",
      "extensions/**",
      "social_calendar/**",
      "Manus/**",
      "Deep-Context/**",
      "tsconfig.json",
      "dist/**",
      "coverage/**",
      ".vercel/**",
      "pnpm-lock.yaml",
      ".backups/**",
    ],
  },
  // Disable stylistic rules that don't affect functionality
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react/jsx-no-comment-textnodes": "off",
    },
  },
];

export default config;
