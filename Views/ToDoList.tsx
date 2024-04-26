import React, { useEffect, useRef } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View, ViewToken } from 'react-native'
import { useAppDispatch, useAppSelector } from '../Hooks/redux'
import { LoadSavedTasks } from '../Redux/task/thunk'
import { InputTask } from '../Components/InputTask'
import { Screen } from 'react-native-screens'
import { TaskComponent } from '../Components/Task'
import Animated, { useSharedValue } from 'react-native-reanimated'
import AnimatedListItem from '../Components/AnimatedListItem'

export const ToDoList = () => {
    const dispatch = useAppDispatch()
    const { tasks } = useAppSelector((state: any) => state.task)
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
                data={tasks}
                contentContainerStyle={styles.flatlistContainer}

                renderItem={({ item, index }) => (
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
                )}
                keyExtractor={(item) => item.id?.toString()}
            />
            {/* <ScrollView>

                {
                    tasks.map((task: Task, zIndex: number) => {
                        return (
                            <TaskComponent task={task} key={zIndex} />

                        )
                    })
                }
            </ScrollView> */}
            <InputTask />
        </View>
    )
}
const styles = StyleSheet.create({
    flatlistContainer: { gap: 12, paddingBottom: 100, paddingTop: 8 },
    flatlistStyle: { marginTop: 8 },
});