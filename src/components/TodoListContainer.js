import React from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import {deleteTodo} from '../actions'

const mapStateToProps = state => {
    return {
        todos: state.todoList
    }
}

const mapDispatchToProps = dispatch => ({
    onDeleteItem: todo => dispatch(deleteTodo(todo))
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)


export default TodoListContainer