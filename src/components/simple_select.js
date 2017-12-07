import React, { Component } from 'react';
// {Component} = const Component = React.Component

class SimpleSelect extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            value: props.value,
            options: props.options
        };
        // this.getOptions();
    }

    componentDidMount(){
        fetch(this.props.optionsUrl)
        .then(response => response.json())
        .then(data => this.setState({options: data}));
    }
    render() {
        return (
                <div className={"form-group " + this.props.class} >
                {this.props.label ? <label htmlFor={this.props.fieldname} >{this.props.label}</label> : "" }
                    <select 
                        id={this.props.fieldname}
                        name={this.props.fieldname}
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })} 
                        className="form-control">
                    {this.state.options.map((option) => {
                        return <option key={option.id} value={option.id}>{option.nome}</option>
                    }) }
                    </select>
                </div>
        );       
    }
}

export default SimpleSelect;