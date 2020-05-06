import React from 'react';
import TodoItemRef from './TodoItemRef'
import TodoItemFunc from './TodoItemFunc'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'


function TodoList(props) {
    const todos = props.todos
    return (
        <div>
           
            <h1>TodoListFunc</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>title</TableCell>
                            <TableCell>dueDate</TableCell>
                            <TableCell>completed</TableCell>
                            <TableCell>actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.todos.map(todo => <TodoItemFunc todo = {todo}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        dueDate: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
    onDeleteItem:PropTypes.func.isRequired
  }

export default TodoList;
