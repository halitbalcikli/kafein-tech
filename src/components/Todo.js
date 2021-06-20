import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import Checkbox from '@material-ui/core/Checkbox';

function Todo({todos, completeTodo, removeTodo}) {
    return todos.map((todo, index) => (
        <div className={"wrapper"} key={index}>
            <Checkbox name={todo.text}
                      color="primary"
                      checked={todo.isComplete}
                      onChange={event => completeTodo(event, todo.id)}/>

            <div key={todo.id} className={"text-area"}>
                <span className={todo.isComplete ? 'complete' : 'incomplete'}>{todo.text}</span>
            </div>
            <div className={"delete-icons"}>
                <FaTrashAlt onClick={() => removeTodo(todo.id)}
                            className={"delete-icon"}/>
            </div>
        </div>
    ))
}

export default Todo;
