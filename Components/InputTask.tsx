import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Screen } from 'react-native-screens'
import { useAppDispatch } from '../Hooks/redux'
import { CreateTask } from '../Redux/task/thunk'

export const InputTask = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()
    const handleAddTask = () => {
        if (text.length > 0) {
            dispatch(CreateTask({
                name: text,
                status: false,
                deleted: false
            }))
        }
        console.log(text)
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Ingrese una tarea"
                value={text}
                onChangeText={(text) => setText(text)}
            />
            <TouchableOpacity
                disabled={text.length === 0}
                style={styles.addButton}
                onPress={handleAddTask}>
                <Text style={styles.addButtonText}>
                    {/* {editIndex !== -1 ? "Update Task" : "Add Task"} */}
                    hola
                </Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 3,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 18,
        flex: 2,
        height: 50,
    },
    addButton: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        fontSize: 18,
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    }
}); 