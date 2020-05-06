
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
const todos = (state= {todoList : data},action) =>{
    console.log(state)
    console.log(action)
    switch(action.type){
      case 'DELETE_TODO':
        const todo_to_delete = action.payload
        state = {todoList: data.filter(todo=> todo_to_delete != todo?true:false)}
        return state
      default:
        return state
    }
}


export default todos;