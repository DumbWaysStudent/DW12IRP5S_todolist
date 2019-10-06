import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Button} from 'react-native';

export default class AddTodo extends Component{
    constructor(){
        super();
     
    this.state = {
        add:'Add',
        text:'New Todo',
        array:[],
        input:null
        
    }
    this.Todolist = [
        {id:1, items:'work'},
        {id:2, items:'swim'},
        {id:3, items:'study'},
        {id:4, items:'sleep'},
        {id:5, items:'run'}
    ]
    }

    handleJoin = () => {
        this.Todolist.push({items: this.state.input});
        this.setState({array: [...this.Todolist]});
        this.textInputRef.clear();
    }
    ToRemove (id) {
        this.Todolist.splice(id, 1);
        this.setState({array: [...this.Todolist]});
    }

    render(){
        return (
        <View style={style.container}>
            <View style={style.AddInput}>
                <TextInput autoCorrect={false}
                ref={ref => this.textInputRef = ref}
                placeholder={this.state.text}
                style={style.inputStyle} onChangeText={data => this.setState({input:data})}/>
                <Button title={this.state.add} style={style.addButton} onPress={this.handleJoin}/>
                
            </View>
        
        <View>
            <FlatList
            data={this.Todolist}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => 
            <View style={style.list}>
            <Text style={style.textList}> {item.items} </Text>
            <Button title="X" onPress={(id) => this.ToRemove(id)} />
    
            </View>
        }
        />
        </View>
        </View>
    
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#C0C0C0',
        margin:4,
        padding:4
    },

    AddInput: {
        flexDirection: 'row',
        margin : 4,
        justifyContent : 'center'
    },

    inputStyle: {
        width : "80%",
        marginHorizontal:4,
        backgroundColor:'white',
        borderRadius:5,
        padding:4
        
    },

    addButton: {
        width : "10"

    },

    todoContent:{

    },

    list:{
        backgroundColor:'white',
        borderRadius:5,
        margin:6,
        padding:8,
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    textList: {
        fontSize: 16
    }
})
    
