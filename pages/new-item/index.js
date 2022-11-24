import NewToDoForm from '../../components/items/NewTodoForm';

function NewTodoForm() {
    function addTodoHandler(enteredTodoData) {
        console.log(enteredTodoData);
    }

     return (
        <NewToDoForm onAddTodo={addTodoHandler}/>
    )
}

export default NewTodoForm;