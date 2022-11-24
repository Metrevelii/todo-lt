import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Todo List</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All List</Link>
          </li>
          <li>
            <Link href='/new-item'>Add New Todo Item</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
