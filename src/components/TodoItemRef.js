import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

export default function TodoItemRef(props){

    const todo = props.todo
    console.log("TodoItemRef",todo)
    return(<TableRow key={todo.id}>
        <TableCell>{todo.id}</TableCell>
        <TableCell>{todo.title}</TableCell>
        <TableCell>{todo.dueDate}</TableCell>
        <TableCell>
            {todo.completed && "done"} {todo.completed ? "ok":"!ok"}
        </TableCell>
        <TableCell>
            <Button onClick={e => props.onDeleteItem(todo)} variant="contained" color="secondary">delete</Button>


        </TableCell>
    </TableRow>)
}
TodoItemRef.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
}