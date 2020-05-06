


export const deleteTodo = (todo) => ({ type: "DELETE_TODO", payload: todo })
export const addTodo = (todo) => ({ type: "ADD_TODO", payload: todo })
export const updateTodoForm = (form) => ({ type: "UPDATE_FORM", payload: form })


export const loadTodos = () =>{
    
    return async (dispatch) =>{
        const response = await fetch('http://localhost:3300/todos')
        const todos = await response.json()
        const action = { type: "LOADED_TODO", payload: todos } 
        dispatch(action)
    }

}
