import { useRef } from "react";

import Card from "../ui/Card";

function NewTodoForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const todoData = {
      title: enteredTitle,
      description: enteredDescription,
    };

    props.onAddTodo(todoData);
  }

  return (
    <Card>
      <form className="px-4 py-4" onSubmit={submitHandler}>
        <div className="block font-bold mb-2">
          <label htmlFor="title">To Do Title</label>
          <input
            className="block rounded border border-solid border-lightWhite py-1 px-1 w-full"
            type="text"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description">Description</label>
          <textarea
            className="block rounded border border-solid border-lightWhite py-1 px-1 w-full"
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="mt-4 text-right">
          <button className="cursor-pointer bg-darkRed text-primaryWhite py-2 px-6 border border-solid border-darkRed rounded font-bold hover:bg-secondDarkRed active:bg-secondDarkRed hover:border-secondDarkRed active:bg-secondDarkRed">
            Add To Do Item
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewTodoForm;
