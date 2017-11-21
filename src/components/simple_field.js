import React, { Component } from 'react';
// {Component} = const Component = React.Component

class SimpleField extends Component {
    constructor(props) {
        super(props);

        this.state = { value: props.value};
    }

    render() {        
        // arrow function
        return (
            <div className={"form-group " + this.props.class} >
                {this.props.label ? <label htmlFor={this.props.fieldname} >{this.props.label}</label> : "" }
                <input 
                    className="form-control"
                    id={this.props.fieldname}
                    name={this.props.fieldname}
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })} />
            </div>
        );      
    }
}

export default SimpleField;