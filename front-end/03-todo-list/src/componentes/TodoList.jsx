import { useState } from "react"
import TodoItem from "./TodoItem"


const TodoList = () => {
    {/*Estado para manejar el input para agregar una terea*/}
    const [InputValue, setInputValue]= useState('')


    {/*Estado para almacenar la lista de tareas que voy agregando en un arreglo */}
    const [todos,setTodos] = useState([])


    {/*Funcion que agrega tareas a mi lista*/}
    const handleAddItem = () => {
        if(InputValue.trim()){ {/*trim ayuda a quitar espacios en blanco al inicio y al final */}
            setTodos([...todos, InputValue])
            setInputValue('')
        }
    }

    const handleDelete = (index) =>{
        setTodos(todos.filter(item, i) => i !== index)
    }



   const handleAddItem = () =>{
    console.log("Nueva Tarea: ",InputValue)
   }


  return (
    <div>
        <h1>Lista de tareas</h1>
        {/*para guardar la informarcion del input se usa onChange y se guarda en el estado*/ }
        <input type='text' value = {InputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button onClick={(handleAddItem)}>Agregar</button>
        <ul>
           <todos.map((item, index) =>{
            <TodoItem
               todo={item}
               handleDelete={handleDelete}
               />
            )}    
        </ul>
    </div>
  )
           }


export default TodoList