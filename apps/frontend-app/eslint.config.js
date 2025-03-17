import { config } from "@repo/eslint-config/next";

/** @type {import("eslint").Linter.Config} */
const eslintConfig = [
    ...config.config({
        extends: ['next'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    }),
]

export default eslintConfig;
