# Contributing to VoyageVista

VoyageVista is a cinematic React + Vite + Tailwind travel experience celebrating Colombia. Contributions are welcome—just follow the guidelines below to keep the project consistent and maintainable.

## Getting the project running locally
1. Ensure you have a recent LTS version of Node.js and npm installed.
2. Clone the repository and install dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Run a production build before submitting changes to ensure the build succeeds:
   npm run build

## Coding style
- Use the existing React + Vite + Tailwind patterns for layout, animations, and component structure.
- Prefer functional components with hooks and minimal state; derive UI from props/context where possible.
- Keep styling within Tailwind utility classes or shared style modules; avoid ad-hoc inline styles unless essential.
- Write small, composable components and add brief comments only when logic is not obvious.

## Git and branching
- Create feature branches off `main` using a descriptive name (e.g., `feature/city-carousel`, `fix/video-preload`).
- Keep branches focused; avoid mixing unrelated fixes and features.
- Rebase or merge the latest `main` into your branch before opening a pull request to minimize conflicts.
- Keep commit history clean and logical; squash locally if you create noisy WIP commits.

## Commit message style
- Use the present tense and a concise summary, e.g., `Add Medellín hero video preload`.
- When relevant, include a short body describing why the change is needed or referencing an issue ID.
- Avoid generic messages like “update” or “fix stuff”.

## Proposing features or bugfixes
- Open an issue describing the problem or feature idea with context, screenshots, or reproduction steps.
- For features, outline the user story and acceptance criteria; for bugs, detail the expected versus actual behavior.
- Wait for maintainers to confirm scope or approach before investing in large changes.
- Once aligned, implement the change, ensure `npm run build` passes, and open a pull request linking to the corresponding issue.
