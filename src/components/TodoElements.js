import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    todo_input: {
        width: '70%',
        marginRight: '30px',
    },
    button: {
        padding: '10px',
        height: '40px',
    }
}));

function TodoElements(props) {
    const classes = useStyles();
    const [input, setInput] = useState('');

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChangeInput = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
            isComplete: false
        })

        setInput('');
    }

    return (
        <form className={"todo-form"} onSubmit={handleSubmit}>
            <TextField type={"text"}
                   color={"primary"}
                   placeholder={"Add a todo"}
                   value={input}
                   name={"text"}
                   variant="outlined"
                   onChange={handleChangeInput}
                   className={classes.todo_input}
                   ref={inputRef}
            />
            <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>Add</Button>
        </form>
    )
}

export default TodoElements;
