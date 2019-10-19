import React, { Component } from 'react';
import { render } from 'react-dom';

class GetApi extends Component{

    state = {
        loading: true,
        weather: null
    }

    async componentDidMount(){
        const proxyurl = "https://crossorigin.me/";
        const url = proxyurl + "http://api.randomuser.me";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({weather: data.results[0], loading: false});
    }

    render(){
        if(this.state.loading){
            return (<div>
                LOADING.....
            </div>)
        }
        return (
            <div>
                <h1>Person is: </h1>
                <h1>{this.state.name.first}</h1>
            </div>
        );
    }
}

export default GetApi