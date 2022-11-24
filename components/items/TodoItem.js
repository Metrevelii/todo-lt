import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './TodoItem.module.css';

function TodoItem(props) {
  const router = useRouter();
  
  function showDetailsHandler() {
    // Pushes a new page onto the stack of pages, and is almost the same as Link component.
    router.push('/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
        <div className={classes.actions}>
          <button>Completed</button>
        </div>
      </Card>
    </li>
  );
}

export default TodoItem;
