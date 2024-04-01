import React from 'react'
 
//this project
import store from './src/redux/store/index.js';
import App from './App.js'

//third party
import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo';
 
const NewRootComponent = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
}

 
registerRootComponent(NewRootComponent);