import React, { Component } from 'react';
// {Component} = const Component = React.Component

class SimpleSelect extends Component {
    constructor(props) {
        super(props);

        this.optionsBuffer = [];
        this.state = { value: ''};
        this.options = this.props.options;
        this.processOptions();
    }

    processOptions(){
        for (const option of this.options){
            this.optionsBuffer.push (<option key={option.value} value={option.value}>{option.label}</option>)
        }
    }
    render() {
        // arrow function
        return (
                <div className={"form-group " + this.props.class} >
                {this.props.label ? <label htmlFor={this.props.fieldname} >{this.props.label}</label> : "" }
                    <select 
                        id={this.props.fieldname}
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })} 
                        className="form-control">
                    {this.optionsBuffer}
                    </select>
                </div>
        );       
    }
}

export default SimpleSelect;