/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict'
var React = require('react-native')
var AV = require('avoscloud-sdk')
import listviewdemo  from './jscore/listViewDemo'
var {
    AppRegistry,
    StyleSheet,
    Navigator,
    BankAndroid,
    View,
    StatusBar,
    Component
    } = React;
AV.init('moipzlogHWK3nTqWqJxVI4YT-gzGzoHsz','w8v4mqnRxxHa3rbebPRDAyut');

class MyAwesomeApp extends Component {
    constructor (props) {
        super(props)
    }

    render(){
        return(
            <View style = {styles.container}>
                
                <Navigator
                    ref = {component => this.navigator = component}
                   initialRoute={{
                        component: listviewdemo
                      }}
                    renderScene = {(route,navigator) => {
                        return <route.component navigator = {navigator} {...route} {...route.passProps} />
                    }}/>
            </View>
        )
       
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1
    }
})

AppRegistry.registerComponent('MyAwesomeApp', () => MyAwesomeApp)