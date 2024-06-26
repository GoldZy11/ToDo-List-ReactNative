import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import SInfo from 'react-native-sensitive-info';
import { loadTasks } from "./slice";

const getData = async (key: string) => {
    try {
        const jsonString = await SInfo.getItem(key, {});
        if (jsonString !== null) {
            const obj = JSON.parse(jsonString);
            return obj;
        } else {
            return null;
        }
    } catch (e) {
        return null;
    }
}
const saveData = async (key: string, obj: Task[]) => {
    try {
        const jsonString = JSON.stringify(obj);
        await SInfo.setItem(key, jsonString, {});
    } catch (e) {
        console.error('Error saving object:', e);
    }
};

const removeData = async (key: string) => {
    try {
        await SInfo.deleteItem(key, {});
    } catch (e) {
        console.error('Error removing data:', e);
    }
};

export const LoadSavedTasks = (): ThunkAction<void, RootState, unknown, any> => {
    return async (dispatch) => {
        const value = await getData("tasks")
        if (value) {
            dispatch(loadTasks({ value: value }))
        }
    }
}


export const CreateTask = (task: Task): ThunkAction<void, RootState, unknown, any> => {
    return async (dispatch) => {
        // await removeData('tasks')
        const value = await getData("tasks")
        if (value) {
            const newTasks: Task[] = [...value, task]
            await saveData("tasks", newTasks)
            dispatch(loadTasks({ value: newTasks }))
        }
        else {
            await saveData("tasks", [task])
            dispatch(loadTasks({ value: [task] }))
        }
    }
}

export const ChangueStatus = (id: string, status: boolean): ThunkAction<void, RootState, unknown, any> => {
    return async (dispatch) => {
        const tasks: Task[] = await getData("tasks")
        if (tasks) {
            let taskIndex = tasks.findIndex(item => item.id === id)
            tasks[taskIndex].status = status
            await saveData("tasks", tasks)
            dispatch(loadTasks({ value: tasks }))
        }
    }
}

export const DeleteTask = (id: string): ThunkAction<void, RootState, unknown, any> => {
    return async (dispatch) => {
        const tasks: Task[] = await getData("tasks")
        if (tasks) {
            let newTasksList = tasks.filter(item => item.id !== id)
            await saveData("tasks", newTasksList)
            dispatch(loadTasks({ value: newTasksList }))
        }
    }
}