import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Button,TouchableOpacity} from 'react-native';
import {Icon, CheckBox, ListItem} from 'native-base';


export default class AddTodo extends Component{
    constructor(){
        super();
     
    this.state = {
        add:'Add',
        text:'New Todo',
        array:[],
        input:null,
        Todolist: [
            {id:1, items:'work'},
            {id:2, items:'swim'},
            {id:3, items:'study'},
            {id:4, items:'sleep'},
            {id:5, items:'run'}
        ]
        
    }
    }

    handleJoin = () => {
        // this.Todolist.push({items: this.state.input});
        // this.setState({array: [...this.Todolist]});
        // this.textInputRef.clear();
        const data = this.state.Todolist;
        const dataId = data.length + 1; 
        const input = {
            id : dataId,
            items: this.state.input
        };
        data.push(input);
        this.setState({data:input});
        this.empty.clear()
     
    }
    ToRemove = (id) => {
        // this.Todolist.splice(id, 1);
        // this.setState({array: [...this.Todolist]});
      
        const data = this.state.Todolist;
        const newData = data.filter(dataref => dataref.id !== id);
        this.setState({
            Todolist : newData
        })
    }
    // item =({id,items,onDelete}) => {
    //     return(
    //         <View style={StyleSheet.list}>
    //         <Text style={style.items}>{title}</Text>
    //     </View>
    //     ) 
    // }

    render(){
        return (
        <View style={style.container}>
            <View style={style.AddInput}>
                <TextInput autoCorrect={false}
                ref={ref => this.empty = ref}
                placeholder={this.state.text}
                style={style.inputStyle} onChangeText={data => this.setState({input:data})}/>
                <Button title={this.state.add} style={style.addButton} onPress={this.handleJoin}/>
                
            </View>
        
        <View>
            <FlatList
            data={this.state.Todolist}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => 
            <View style={style.list}>
            <Text style={style.textList}> {item.items} </Text>
           <TouchableOpacity style={style.btndel} onPress = {()=> this.ToRemove(item.id)}>
           <Icon type="FontAwesome" name="trash" style={style.icon}/>
           </TouchableOpacity>
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
        borderRadius:4,
        margin:4,
        padding:4,
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    btndel:{
        backgroundColor : '#808080',
        borderRadius : 10,
        height : 40,
        alignItems : 'center',
        padding : 8,  
    },
    textList: {
        fontSize: 16
    }
})
    
