# Agent Behavioral Routines (MANDATORY)

1. **Knowledge Updates**: After every feature implementation or project change, review this file and update it with any new architectural rules, naming conventions, or "gotchas" discovered.
2. **Debris Cleanup**: Immediately delete any temporary diagnostic files (`.txt`, `.log`, `.tmp`) created during research or debugging before finalizing the task.
3. **Build Validation**: Always run `npm run build` or `npm run lint` to verify stability before concluding a task.

# Security & Privacy Guidelines (MANDATORY)

To ensure the integrity and privacy of this portfolio, all AI agents MUST follow these rules:

1. **Privacy**: Never commit or stage `.pdf` files. Source resumes must remain local.
2. **Secrets**: Never hardcode API keys, secrets, or sensitive personal data (phone, address).
3. **Hardening**: Maintain a strict Content Security Policy (CSP) in `next.config.ts`.
4. **Cleanup**: Ensure the `scripts/` directory is excluded from production deployments via `.vercelignore`.
5. **Logic**: Use `createRequire` for CommonJS modules (like `pdf-parse`) in this ESM environment.
6. **Sync Scope**: The automated resume sync script extracts `Experience`, `Skills`, and `Summary`. `Projects` MUST remain manually managed in `src/lib/data.ts`.
7. **Iconography**: Use `src/components/ui/Icons.tsx` for social icons (e.g., `LinkedinIcon`, `GithubIcon`) to maintain style consistency. Only use `lucide-react` for standard UI symbols.
8. **Skills Categorization**: When adding new skills to `Skills.tsx`, categorize them into Frontend, Backend, Tools, or Languages sections according to the established pattern.
9. **Build Integrity**: Always verify JSX for unescaped entities (like `'` or `"`) before committing, as this project uses strict linting that blocks production builds.
