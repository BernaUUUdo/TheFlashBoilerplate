import React, { Component } from 'react'

export default class Welcome extends Component {
    
    
    componentWillMount(){
        console.log('Welcome.componentWillMount')
    }

    render() {
        return (
            <div className='' >
                <h1>Welcome to The flash boilerplate! </h1>
            </div>
        )
    }
}
