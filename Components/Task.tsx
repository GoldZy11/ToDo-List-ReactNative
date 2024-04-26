import React from 'react'
import { Text, View, FlatList} from 'react-native'


export const TaskComponent = ({ task }: { task: Task }) => {
    return (
        <View>
            <Text>{task.name}</Text>
        </View>
    )
}
