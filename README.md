# React + TypeScript + Vite + TailwindCSS + ShadCN

This project is a Single Page Application built with a modern tech stack designed for rapid development via **Vibe Coding** and a great user experience.

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite:** A fast build tool and development server.
- **React Router:** For handling client-side routing.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **ShadCN/UI:** Re-usable components built using Radix UI and Tailwind CSS.
- **Lucide React:** Beautifully simple, pixel-perfect icons.

## Getting Started

To get the project running locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically available at `http://localhost:5173`.

## Development Workflow

This project is optimized for development using AI-powered agentic tools like GitHub Copilot Chat or Cursor. Instead of writing code manually, describe the changes you want to make in plain English.

**Example Prompts:**

- "Add a new page component named `ContactPage` and add a route for it at `/contact`."
- "Create a footer component and add it to the main `App` layout."
- "Add a button from ShadCN to the `HomePage`."
- "Refactor the `Navigation` component to use a different icon for the theme toggle."
- "Add an image asset to the `public` folder and display it at the bottom of the `AboutPage`."

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.

- **Documentation:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Configuration:** Tailwind is configured primarily within `src/index.css`.

## ShadCN/UI

ShadCN/UI provides beautifully designed components that you can copy and paste into your apps. It's built on top of Radix UI and Tailwind CSS.

- **Documentation:** [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs)
- **Available Components:** [https://ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

**Adding a new component:**

You typically add ShadCN components using their CLI, but since this project is set up for agentic development, you can ask your AI assistant:

```
"Add the ShadCN Alert Dialog component to the project and show me how to use it in HomePage.tsx"
```

The assistant should handle adding the necessary component files (usually within `src/components/ui`) and provide usage examples.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Serves the production build locally.
