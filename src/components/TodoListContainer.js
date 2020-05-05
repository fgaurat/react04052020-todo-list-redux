import React from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log(state)
    return {
        todos: state.todoList
    }
}


const TodoListContainer = connect(mapStateToProps)(TodoList)


export default TodoListContainer