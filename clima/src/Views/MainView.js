import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';

class MainView extends Component{
    
    render(){
        return(
            <div>
                <Button variant="primary" size="lg" active>
                Primary button
                </Button>
            </div>
        )
    }
};

export default MainView