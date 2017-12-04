import React, { Component } from 'react';
// {Component} = const Component = React.Component

class MagicSelect extends Component {
    constructor(props) {
        super(props);

        this.state = { value: props.value};
    }

    render() {        
        return (
            <div className={"form-group " + this.props.class} >
                Futuro magic select
            </div>
        );      
    }
}

export default MagicSelect;