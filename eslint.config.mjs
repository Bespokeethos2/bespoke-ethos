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
      "src/components/generated/**",
      "src/components/games/**",
      "site-template/**",
    ],
  },
  // Disable overly strict rules for content
  {
    rules: {
      // Allow apostrophes and quotes in JSX text content
      'react/no-unescaped-entities': 'off',
      // Allow jsx comments
      'react/jsx-no-comment-textnodes': 'off',
    },
  },
];

export default config;
