import React, { Component } from 'react';
import ReactDDM from 'react-dom';

import CategoryList from './layout/CategoryList';

class App extends Component{
    render(){
        return (
            <>
                <CategoryList />
            </>
        )
    }
}

ReactDDM.render(<App/>, document.getElementById('app'));