import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header style={{ display: "flex", gap: 20 }}>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/posts">Посты</Link>
      </header>

      <hr />

      <main>
        <Outlet />
      </main>

      <hr />

      <footer>© 2025</footer>
    </div>
  );
};
