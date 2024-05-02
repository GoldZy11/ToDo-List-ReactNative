import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Screen } from 'react-native-screens'
import { useAppDispatch } from '../hooks/redux'
import { CreateTask } from '../redux/task/thunk'
import Icon from 'react-native-vector-icons/MaterialIcons'
import generateUniqueId from '../functions/generateUniqueId'

export const InputTask = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()
    const handleAddTask = () => {
        if (text.length > 0) {
            const id = generateUniqueId()
            dispatch(CreateTask({
                name: text,
                status: false,
                deleted: false,
                id: id
            }))
            setText('')
        }
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
                style={text.length !== 0 ? styles.addButton : styles.disabledButton}
                onPress={handleAddTask}>
                <Icon name={'add'} size={24} color="white" />
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
        backgroundColor: "#268cff",
        borderRadius: 25,
        padding: 10,
    },
    disabledButton: {
        backgroundColor: "#e0e0e0",
        borderRadius: 25,
        padding: 10,
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