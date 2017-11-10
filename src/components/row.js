import React, { Component } from 'react';
// {Component} = const Component = React.Component

class Row extends Component {
    render() {        
        // arrow function
        return (
            <div className="row " >
                {this.props.children}
            </div>
        );      
    }
}

export default Row;