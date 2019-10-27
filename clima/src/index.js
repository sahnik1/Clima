import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import GetApi from './Views/HomeView.js'
import MainView from './Views/MainView.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sky from 'react-sky';
import * as material from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import $ from 'jquery';
import Popper from 'popper.js';
import * as serviceWorker from './serviceWorker';

class Index extends Component{

    handleClick(){
        render(
            <div>
                <GetApi />
            </div>,
            document.getElementById('root')
        );
    }

    render(){
        return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1em', color:'#3498db', position: 'absolute', top: '30%', left: '47%'}}>
            <Sky
                images={{}}
            />
            <material.MuiThemeProvider>
                <material.Grid container direction="column" justify="center" alignItems="center">
                    <material.Grid xs={12} style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                        <h1>
                            <CloudIcon style={{bottom: '-2px'}}/>
                            <span style={{ justifyContent: 'space-between', left: '-50px', fontWeight: 350, fontSize: '35px' }}>
                            Clima
                            </span>
                        </h1>
                        <material.Button raised={true} primary={true} style={{top: '30px', backgroundColor: '#3498db'}} active onClick={this.handleClick}>
                            <h6 style={{ color: '#ffffff' }}>
                                Find My Weather
                            </h6>
                        </material.Button>
                    </material.Grid>
                </material.Grid>
            </material.MuiThemeProvider>
        </div>
        )
    }
}

render(<Index />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();