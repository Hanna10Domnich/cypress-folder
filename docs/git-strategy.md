# Git Strategy for Automation Framework

## Branching Model
- **main**: Only stable, verified, and production-ready automation test code.
- **<what-is-planned-to-be-developed>**: For adding new test cases, scenarios, or utilities (merge into `main`).

## Commit Messages
- Write meaningful, concise messages about the essence of the change.
- Use [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: add login test`, `fix: update selector for logout`).

## Pull Requests
- All changes go through a PR to `main`.
- Assign a reviewer with automation experience.
- All checks and automated tests must pass before merging.
- In the PR description, specify related tasks/bugs/test cases.

## Code Reviews
- Check the reliability, readability, and maintainability of the tests.
- Ensure there is no hardcoding, flaky patterns, or duplication.
- Provide suggestions for improvement and ask questions.

## Best Practices
- Pull the latest changes before starting work.
- Regularly rebase or merge to minimize conflicts.
- Do not commit sensitive data, passwords, or secrets.
- Organize test data and selectors for reuse.
- Document new utilities and approaches within the framework.
