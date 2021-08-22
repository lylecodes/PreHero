import Link from "next/link";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PreHero</div>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/survey">Survey</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
