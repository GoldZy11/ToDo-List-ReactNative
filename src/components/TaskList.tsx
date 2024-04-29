import React, { useEffect, useRef } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View, ViewToken } from 'react-native'
import { LoadSavedTasks } from '../redux/task/thunk'
import { InputTask } from '../components/InputTask'
import { Screen } from 'react-native-screens'
import { TaskComponent } from '../components/Task'
import Animated, { useSharedValue } from 'react-native-reanimated'
import AnimatedListItem from '../components/AnimatedListItem'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

export const TaskList = ({ status }: { status: boolean }) => { // Status sera el estado que debe tener la tarea para mostrarse en el listado
    const dispatch = useAppDispatch()
    const { tasks } = useAppSelector((state) => state.task)
    const viewableItems = useSharedValue<ViewToken[]>([]);
    let isNewItem = useRef(true);


    useEffect(() => {
        dispatch(LoadSavedTasks())
    }, [])

    return (
        <View
            style={{ flex: 1, paddingHorizontal: 15 }}
        >
            <Animated.FlatList
                onViewableItemsChanged={({ viewableItems: vItems }) => {
                    viewableItems.value = vItems;
                }}
                showsVerticalScrollIndicator={false}
                data={tasks.filter((item) => item.status === status)}
                contentContainerStyle={styles.flatlistContainer}
                renderItem={({ item, index }) => {
                    return (
                        <AnimatedListItem
                            key={item?.id}
                            viewableItems={viewableItems}
                            item={item}
                        >
                            <TaskComponent
                                task={item}
                                index={index}
                                isNewItem={isNewItem}
                            />
                        </AnimatedListItem>
                    )

                }}
                keyExtractor={(item) => item.id?.toString()}
            />
            <InputTask />
        </View>
    )
}
const styles = StyleSheet.create({
    flatlistContainer: { gap: 12, paddingBottom: 100, paddingTop: 8 },
    flatlistStyle: { marginTop: 8 },
});