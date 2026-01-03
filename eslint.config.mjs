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
      ".antigravity/**",
      "site-template/**",
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
  {
    files: ["src/app/blog/**/*.tsx", "src/app/case-studies/**/*.tsx"],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;
