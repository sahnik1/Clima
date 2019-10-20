import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import GetApi from './Views/HomeView.js'
import MainView from './Views/MainView.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import * as serviceWorker from './serviceWorker';

class Index extends Component{
    
    render(){
        return(
        <div>
             <MainView />
        </div>
        )
    }
}

render(<Index />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();