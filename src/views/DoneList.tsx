import React, { useEffect, useRef } from 'react'
import { TaskList } from '../components/TaskList'

export const DoneList = () => {

    return (
        <TaskList status={true} /> // Se ingresa el status true para mostrar las que ya se encuentran listas
    )
}
