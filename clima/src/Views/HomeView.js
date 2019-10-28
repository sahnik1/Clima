import React, { Component } from 'react';
import { render } from 'react-dom';
import * as material from '@material-ui/core';
import ReactLoading from 'react-loading';

class GetApi extends Component{

    constructor(props) {
        super(props);
    
        console.log(this.props)
    }

    state = {
        loading: true,
        weather: null
    }

    async componentDidMount(){
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        const access_key = ``;
        const publicIp = await (require('public-ip')).v4();

        let url = proxy + `http://api.weatherstack.com/current?access_key=${access_key}&query=${this.props.city}, ${this.props.country}`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data){
            this.setState({weather: data, loading: false});
        }
    }

    render(){
        if(this.state.loading){
            return (
            <div style={{background: `linear-gradient(#74b9ff, #00cec9)`, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3em', position: 'absolute', top: '10%', left: '42%'}}>
                <ReactLoading
                        type={"spinningBubbles"}
                        color={'#1E3799'}
                        height={392}
                        width={221}
                    />
                </div>
            </div>
            )
        }
        if(!this.state.weather || this.state.weather.error){
            return (
                <div style={{background: `linear-gradient(#74b9ff, #00cec9)`, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3em', position: 'absolute', top: '10%', left: '42%'}}>
                    An Unknown Error Occurred!
                </div>
            </div>
            )
        }
        return (
            <div style={{background: `linear-gradient(#74b9ff, #00cec9)`, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3em', position: 'absolute', top: '10%', left: '42%'}}>
                <material.MuiThemeProvider>
                <material.Grid container direction="column" justify="center" alignItems="center">
                    <material.Grid xs={12} style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <h1>
                            <img src={this.state.weather.current.weather_icons[0]} style={{ fontSize: '30px'}}/>
                            <span style={{ justifyContent: 'space-between', fontWeight: 375, fontSize: '50px' }}>
                            {this.state.weather.location.name}
                            </span>
                    </h1>
                    <span style={{ justifyContent: 'center', alignItems: 'center', top: '40%', fontWeight: 350, fontSize: '35px' }}>
                    {this.state.weather.current.weather_descriptions[0]}
                    </span>
                <h3 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3em', position: 'absolute', top: '15%', left: '25%', fontSize: '45px'}}>
                {this.state.weather.current.temperature}&deg;C</h3>
                </material.Grid>
                </material.Grid>
                </material.MuiThemeProvider>
            </div>
            </div>
        );
    }
}

export default GetApi