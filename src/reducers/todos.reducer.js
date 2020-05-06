const todoForm = {
  title: "todo 1",
  date: new Date(),
  completed: false,
}

const todos = (state = { todoList: [],todoForm }, action) => {
  switch (action.type) {

    case 'LOADED_TODO':
      const todos = action.payload
      return {...state,todoList:todos}

    case 'ADD_TODO':
      const todo_to_push = action.payload
      todo_to_push.id=24
      todo_to_push.userId=34
      todo_to_push.dueDate=new Date().getTime()
      let todoList = [...state.todoList]
      todoList.push(todo_to_push)
      return {...state,todoList}

    case 'DELETE_TODO':
      // const todo_to_delete = action.payload
      // state = { todoList: data.filter(todo => todo_to_delete != todo ? true : false) }
      return state
      
    case 'UPDATE_FORM':
      console.log("UPDATE_FORM")
      const todo_updated = action.payload
      state = { 
        todoForm:{...state.todoForm,...todo_updated},
        todoList:[...state.todoList]
      }
      console.log("new state",state)

      return state
    default:
      return state
  }
}


export default todos;