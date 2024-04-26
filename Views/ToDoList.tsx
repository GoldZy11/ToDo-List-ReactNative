import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../Hooks/redux'
import { LoadSavedTasks } from '../Redux/task/thunk'
import { InputTask } from '../Components/InputTask'
import { Screen } from 'react-native-screens'
import { TaskComponent } from '../Components/Task'

export const ToDoList = () => {
    const dispatch = useAppDispatch()
    const { tasks } = useAppSelector((state: any) => state.task)
    useEffect(() => {
        dispatch(LoadSavedTasks())
    }, [])

    return (
        <Screen
            style={{ flex: 1 }}
        >
            {
                tasks.map((task: Task, zIndex: number) => {
                    return (
                        <TaskComponent task={task} />

                    )
                })
            }
            <InputTask />
        </Screen>
    )
}
