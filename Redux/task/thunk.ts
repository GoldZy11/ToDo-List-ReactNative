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
const saveData = async (key: string, obj: Task) => {
    try {
        const jsonString = JSON.stringify(obj);
        await SInfo.setItem(key, jsonString, {});
    } catch (e) {
        console.error('Error saving object:', e);
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
        await saveData("tasks", task)
        const value = await getData("tasks")
        if (value) {
            dispatch(loadTasks({ value: value }))
        }
    }
}