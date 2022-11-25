import { useRouter } from "next/router";

import Card from "../ui/Card";

function TodoItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    // Pushes a new page onto the stack of pages, and is almost the same as Link component.
    router.push("/" + props.id);
  }

  return (
    <li className="my-4 mx-0">
      <Card>
        <div className="text-center px-4 py-4">
          <h3 className="text-xl text-textPurple">{props.title}</h3>
        </div>
        <div className="px-6 py-6 text-center">
          <button
            className="cursor-pointer text-darkRed border border-solid border-darkRed rounded bg-transparent py-2 px-6 hover:bg-lightRed active:bg-lightRed"
            onClick={showDetailsHandler}
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default TodoItem;
