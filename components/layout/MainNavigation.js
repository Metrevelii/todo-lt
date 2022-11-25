import Link from "next/link";

function MainNavigation() {
  return (
    <header className="w-full h-20 flex items-center justify-between px-7 bg-darkRed">
      <div className="text-3xl text-primaryWhite font-bold">Todo List</div>
      <nav>
        <ul className="flex m-0 p-0 items-baseline">
          <li className="no-underline text-2xl text-textColorPink hover:text-primaryWhite">
            <Link href="/">All List</Link>
          </li>
          <li className="no-underline text-2xl text-textColorPink hover:text-primaryWhite mx-12">
            <Link href="/new-item">Add New Todo Item</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
