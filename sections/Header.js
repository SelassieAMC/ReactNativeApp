import React from 'react';
import { StyleSheet,Text, View, Image } from 'react-native';

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false};
    }

    toggleUser = ()=>{
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn};
        });
    }

    render(){
        let display = this.state.isLoggedIn ? 'sample user' : this.props.message;
        return(
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={require('./img/Shparp.png')}
                />
                <Text style={styles.headText} onPress={this.toggleUser}>{display}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        paddingTop: 30,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        borderBottomWidth: 2,
        borderColor: 'red'
    },
    logoStyle: {
         flex: 1,
         width: undefined,
         height: undefined
    }
});