
const data = [
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true,
    "dueDate": 1582620058000
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true,
    "dueDate": 1582620058000
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true,
    "dueDate": 1582620058000
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false,
    "dueDate": 1582620058000
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true,
    "dueDate": 1582620058000
  }
]

const todoForm = {
  title: "todo 1",
  date: new Date(),
  completed: false,
}

const todos = (state = { todoList: data,todoForm }, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo_to_push = action.payload
      todo_to_push.id=24
      todo_to_push.userId=34
      todo_to_push.dueDate=new Date().getTime()
      let todoList = [...state.todoList]
      todoList.push(todo_to_push)
      return {...state,todoList}

    case 'DELETE_TODO':
      const todo_to_delete = action.payload
      state = { todoList: data.filter(todo => todo_to_delete != todo ? true : false) }
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