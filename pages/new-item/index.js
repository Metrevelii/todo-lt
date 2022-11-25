import { useRouter } from 'next/router';

import NewToDoForm from '../../components/items/NewTodoForm';

function NewTodoForm() {
    const router = useRouter();

    async function addTodoHandler(enteredTodoData) {
        const response = await fetch('/api/new-item', {
            method: 'POST',
            body: JSON.stringify(enteredTodoData),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        // Going to starting page after inserting new item
        router.push('/');
    }

     return (
        <NewToDoForm onAddTodo={addTodoHandler}/>
    )
}

export default NewTodoForm;