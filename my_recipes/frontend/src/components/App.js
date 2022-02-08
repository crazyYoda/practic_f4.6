import React, { Component } from 'react';
import ReactDDM from 'react-dom';

import CategoryList from './layout/CategoryList';

import { Provider } from 'react-redux';
import store from '../store'

class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <div>
                    <CategoryList />
                </div>
            </Provider>

        )
    }
}

ReactDDM.render(<App/>, document.getElementById('app'));