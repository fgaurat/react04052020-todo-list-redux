import React from 'react';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import {deleteTodo} from '../actions'

const mapStateToProps = state => {
    console.log(state)
    return {
        todoForm: state.todoForm
    }
}

const mapDispatchToProps = dispatch => ({
    handleChange: event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        return dispatch({type:'UPDATE_FORM',form_values:{[name]:value}})
    },        
    handleSubmit: event => {
        event.preventDefault();
        const todo = {
            title:event.target.title.value,
            completed:event.target.completed.checked,
            dueDate:event.target.dueDate.value
        }
        dispatch(addTodo(todo))
    },
    handleInputChange: event => dispatch(deleteTodo(todo)),
})

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)


export default TodoFormContainer