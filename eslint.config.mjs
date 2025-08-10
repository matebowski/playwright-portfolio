import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["node_modules", "dist", "playwright-report", "test-results"] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**", "**/*.spec.ts", "**/*.test.ts"],
  },
  prettier
);
