import React from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log(state)
    return {
        todos: state.todoList
    }
}

const mapDispatchToProps = dispatch => ({
    onDeleteItem: todo => dispatch(deleteTodo(todo))
  })

const TodoListContainer = connect(mapStateToProps)(TodoList)


export default TodoListContainer