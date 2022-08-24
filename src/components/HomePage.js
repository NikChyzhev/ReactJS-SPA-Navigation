import React, { Component } from 'react'
import Header from './Header'

export default class HomePage extends Component {
    render() {
        const baseUrl = this.props.location.pathname;
        return (
            <div style={{display:'flex', flexDirection:'column', height:'100%'}}>      
                <Header url={baseUrl}/>         
                <div className='homePage'>
                    <p>HomePage</p>
                </div>                
            </div>
        )
    }
}
