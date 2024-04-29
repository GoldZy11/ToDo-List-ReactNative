import React, { MutableRefObject, useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAppDispatch } from '../hooks/redux';
import { ChangueStatus } from '../redux/task/thunk';

//Componente que contiene la informacion de una tarea, ademas de las acciones posibles a realizar
export const TaskComponent = ({ task, index, isNewItem }: { task: Task, index: number, isNewItem: MutableRefObject<boolean> }) => {
    const dispatch = useAppDispatch()
    const [checked, setChecked] = useState(task.status); // Estado de la tarea
    const toggleCheckbox = () => {// Funcion para cambiar el estado de la tarea
        let newStatus = !checked
        setChecked(newStatus);
        setTimeout(() => {
            dispatch(ChangueStatus(task.id, newStatus))
        }, 500);
    };

    const scale = useSharedValue(index === 0 && isNewItem.current ? 0.5 : 1);
    const opacity = useSharedValue(index === 0 && isNewItem.current ? 0 : 1);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            opacity: opacity.value,
        };
    });

    useEffect(() => {
        if (index === 0 && isNewItem.current) {
            scale.value = withTiming(1, { duration: 400 });
            opacity.value = withTiming(1, { duration: 400 });
        } else {
            isNewItem.current = true;
        }
    }, []);

    return (
        <Animated.View style={[style.container, animatedStyles]}>
            <TouchableOpacity onPress={toggleCheckbox} style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Icon name={checked ? 'check-box' : 'check-box-outline-blank'} size={24} color="black" />
                <Text style={[{ marginLeft: 8, fontSize: 20, color: "#000000" }, checked && style.checkedText]}>{task.name}</Text>
            </TouchableOpacity>
            <View style={style.buttonsContainer}>
                <TouchableOpacity onPress={() => console.log('Editar')} style={style.button}>
                    <Icon name={'edit'} size={24} color="#268cff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Eliminar')} style={style.button}>
                    <Icon name={'delete'} size={24} color="#b80c0c" />
                </TouchableOpacity>

            </View>
        </Animated.View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "rgba( 224, 239, 255 ,0.9)",
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        borderRadius: 3,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        marginLeft: 16,
    },
    checkedText: {
        textDecorationLine: 'line-through',
    },
})