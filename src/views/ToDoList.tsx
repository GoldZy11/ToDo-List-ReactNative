import React, { useEffect, useRef } from 'react'
import { TaskList } from '../components/TaskList'

export const ToDoList = () => {

    return (
        <TaskList status={false} /> // Se ingresa el status false para mostrar las que aun no se encuentran listas
    )
}
