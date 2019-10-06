import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class Todolist extends Component {
    render(){
        const Todolist = ['work','swim','study','sleep','run']
        return (
            <View>
                {Todolist.map((Todolist, id) => {
                    return (
                        <Text key={id} style={style.border}> {Todolist}</Text> 
                    )
                }

                )}

                </View>
        );
    }
}
const style= StyleSheet.create({
    border: {
        fontSize:20,
        borderWidth:1,
        borderRadius:3,
        margin:6,
        padding:3
    }
}

)


