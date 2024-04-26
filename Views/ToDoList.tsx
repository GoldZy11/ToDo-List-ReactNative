import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../Hooks/redux'
import { LoadSavedTasks } from '../Redux/task/thunk'

export const ToDoList = () => {
    const dispatch = useAppDispatch()
    const { tasks } = useAppSelector((state) => state.task)
    useEffect(() => {
        dispatch(LoadSavedTasks())
    }, [])

    return (
        <View>
            {
                tasks.map((task, zIndex) => {
                    if (typeof task === "string")
                        return (
                            <Text key={zIndex}>
                                {task}
                            </Text>
                        )
                })
            }

        </View>
    )
}
