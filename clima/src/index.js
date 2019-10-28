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

    constructor(props) {
        super(props);
        this.handleCity = this.handleCity.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        cityinfo: '',
        countryinfo: ''
    }

    handleCity(event){
        this.setState({cityinfo: event.target.value});
    }

    handleCountry(event){
        this.setState({countryinfo: event.target.value});
    }

    handleSubmit(event){
        console.log(this.state.cityinfo);
        console.log(this.state.countryinfo);
        event.preventDefault();
        render(
            <div>
                <GetApi country={this.state.countryinfo}
                        city={this.state.cityinfo}/>
            </div>,
            document.getElementById('root')
        );
    }

    render(){
        return(
        <div style={{background: `linear-gradient(#74b9ff, #00cec9)`, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3%', color:'#1E3799', position: 'absolute', top: '20%', left: '45%'}}>
            <material.MuiThemeProvider>
                <material.Grid container direction="column" justify="center" alignItems="center">
                    <material.Grid xs={12} style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                        <h1>
                            <CloudIcon style={{ fontSize: '40px'}}/>
                            <span style={{ justifyContent: 'space-between', fontWeight: 375, fontSize: '50px' }}>
                            Clima
                            </span>
                        </h1>

                        <form onSubmit={this.handleSubmit}>
                        <material.TextField label="City" type="text" id="City" value={this.state.cityinfo} 
                        style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', top: '10%', color: '#ffffff', textOverflow: 'clip', cursor: 'pointer', marginTop: '10%' }} 
                        onChange={this.handleCity}/>

                        <material.TextField label="Country" type="text" value={this.state.countryinfo} id="Country" 
                        style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', top: '50%', color: '#ffffff', marginTop: '10%' }}
                        onChange={this.handleCountry}/>

                        <material.Fab variant="extended" size="medium" type="submit"
                        style={{alignContent: 'center', display: 'flex', alignItems: 'center', top: '100%', backgroundColor: '#1E3799', marginTop: '20%'}}
                        active onClick={this.handleClick} >
                            <h6 style={{ color: '#dfe6e9' }}>
                                Find My Weather
                            </h6>
                        </material.Fab>
                        </form>

                    </material.Grid>
                </material.Grid>
            </material.MuiThemeProvider>
            </div>
        </div>
        )
    }
}

render(<Index />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();