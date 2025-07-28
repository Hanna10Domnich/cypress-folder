# Git Strategy

## Branching Model
- **main**: Stable, production-ready code.
- **develop**: Integration branch for features and fixes.
- **feature/\***: New features (merge into `develop`).
- **bugfix/\***: Bug fixes (merge into `develop`).
- **hotfix/\***: Critical fixes for production (merge into `main` and `develop`).

## Commit Messages
- Use clear, concise messages.
- Follow [Conventional Commits](https://www.conventionalcommits.org/).

## Pull Requests
- Create PRs for all changes to `main` and `develop`.
- Request reviews from at least one team member.
- Ensure all checks pass before merging.

## Code Reviews
- Review for code quality, security, and style.
- Suggest improvements and ask questions.

## Tagging & Releases
- Tag releases using [semantic versioning](https://semver.org/).
- Document changes in `CHANGELOG.md`.

## Best Practices
- Pull latest changes before starting work.
- Rebase or merge frequently to avoid conflicts.
- Do not commit sensitive data or secrets.
