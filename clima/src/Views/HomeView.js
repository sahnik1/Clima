import React, { Component } from 'react';
import { render } from 'react-dom';

class GetApi extends Component{

    state = {
        loading: true,
        weather: null,
        temp: null
    }

    async componentDidMount(){
        const proxy = `https://cors-anywhere.herokuapp.com/`
        const access_key = null;
        const url = proxy + `http://api.weatherstack.com/current?access_key=${access_key}&query=Toronto`;
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                let long = position.coords.longitude;
                let lat = position.coords.latitude;
                const url = proxy + `http://api.weatherstack.com/current?access_key=${access_key}&query=${lat},${long}`;
            });
        }
        const response = await fetch(url);
        const data = await response.json();
        this.setState({weather: data, temp: data.current.temperature, loading: false});
    }

    render(){
        if(this.state.loading){
            return (<div>
                LOADING...
            </div>)
        }
        if(!this.state.weather){
            return (
                <div>An Unknown Error Occured!</div>
            )
        }
        return (
            <div>
                <h1>Temperature is: </h1>
                <div>{this.state.temp} C</div>
            </div>
        );
    }
}

export default GetApi