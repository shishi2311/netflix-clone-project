# Netflix Clone – Architecture Explained for Beginners

## What is This Project?

This project is a web application that looks and works like Netflix. You can log in, see a list of movies, add movies to your favorites, and watch them. It is built using modern web technologies, but you do not need to know any of them to understand this guide. We will explain everything step by step.

---

## 1. How Does the App Work?

When you open the website, you see a login page. After logging in, you see a home page with movies. You can click on a movie to watch it, or add it to your favorites. All your data is saved, so when you log in again, your favorites are still there.

---

## 2. What is the App Made Of?

The app is made of two main parts:
- **Frontend**: What you see and interact with (buttons, images, pages).
- **Backend**: The hidden part that saves your data, checks your password, and sends information to the frontend.

---

## 3. How Does the Frontend Work?

- The frontend is built with **React** and **Next.js**. These are tools that help build websites using small pieces called "components" (like Lego blocks).
- **Pages**: Each screen (login, home, watch) is a "page". Pages are in the `pages/` folder.
- **Components**: Reusable pieces like buttons, menus, and movie cards are in the `components/` folder.
- **Styling**: The look and feel (colors, layout) is done with **Tailwind CSS**. This is a tool that lets you use special words (like `bg-red-600`) to style things easily.

### Example:
- The home page (`pages/index.tsx`) shows a list of movies using the `MovieList` component.
- Each movie is shown using a `Moviecard` component.
- The navigation bar at the top is the `Navbar` component.

---

## 4. How Does the Backend Work?

- The backend is built into the same project using **Next.js API routes**. These are special files in `pages/api/` that run on the server.
- The backend talks to a **database** (MongoDB) to save and get your data (users, movies, favorites).
- **Prisma** is a tool that helps the backend talk to the database easily.

### Example:
- When you log in, the backend checks your email and password in the database.
- When you add a movie to favorites, the backend updates your user data in the database.

---

## 5. How Does Login Work?

- The app uses **NextAuth.js** for login and authentication.
- You can log in with email/password, Google, or GitHub.
- When you log in, the app creates a "session" (like a pass) so you stay logged in.
- Your password is never saved directly; it is turned into a secret code (hashed) using **bcryptjs**.

---

## 6. How is Data Fetched and Updated?

- The frontend uses **SWR** (a tool for getting data from the backend) and custom hooks (special functions in `hooks/` folder).
- When you open the home page, the frontend asks the backend for the list of movies.
- When you add/remove a favorite, the frontend tells the backend, and then updates the list.
- **Zustand** is used for simple state management, like opening and closing popups (modals).

---

## 7. What is the Database?

- The database is **MongoDB**. It stores all the information: users, movies, favorites, etc.
- The structure of the data is defined in `prisma/schema.prisma`.
- **Prisma** helps the backend read and write data in the database.

---

## 8. How Do All the Pieces Talk to Each Other?

1. **User opens the website** → sees the login page.
2. **User logs in** → frontend sends login info to backend → backend checks database → if correct, user is logged in.
3. **User sees home page** → frontend asks backend for movies → backend gets movies from database → sends to frontend → frontend shows movies.
4. **User adds a favorite** → frontend tells backend → backend updates database → frontend updates the list.
5. **User clicks a movie** → frontend shows movie details or video player.

---

## 9. What are the Most Important Files and Folders?

- `pages/` — All the pages/screens of the app.
  - `api/` — All the backend routes (login, register, movies, favorites, etc.).
- `components/` — All the building blocks for the UI (buttons, cards, menus).
- `hooks/` — Special functions for getting data and managing state.
- `lib/` — Helper files for database and authentication.
- `prisma/schema.prisma` — Defines what data is stored in the database.
- `styles/globals.css` — Main CSS file for the app.

---

## 10. What Happens When You Click a Button?

- If it is a UI button (like opening a menu), it changes something on the page right away.
- If it is a data button (like adding a favorite), it sends a message to the backend, which updates the database, then the frontend updates what you see.

---

## 11. How Do You Run or Change the App?

- To run the app: `npm run dev` (in the terminal)
- To build for production: `npm run build`
- To start the app: `npm run start`
- To check for code problems: `npm run lint`

---

## 12. What are Environment Variables?

- These are secret settings (like database passwords) saved outside the code.
- Examples: `DATABASE_URL` (where the database is), `NEXTAUTH_SECRET` (for login security).

---

## 13. How Can You Add More Features?

- Add new data types in `prisma/schema.prisma` (for example, add TV shows).
- Add new backend routes in `pages/api/` (for example, for reviews).
- Add new UI components or pages in `components/` or `pages/`.

---

## 14. Where Can You Learn More?

- [Next.js Docs](https://nextjs.org/docs) — How the web framework works.
- [Prisma Docs](https://www.prisma.io/docs) — How the database tool works.
- [NextAuth.js Docs](https://next-auth.js.org/getting-started/introduction) — How login works.
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation) — How styling works.
- [SWR Docs](https://swr.vercel.app/docs/getting-started) — How data fetching works.
- [Zustand Docs](https://docs.pmnd.rs/zustand/getting-started/introduction) — How state management works.

---

*This guide explains the architecture in the simplest way possible. If you have any questions, just ask!*
