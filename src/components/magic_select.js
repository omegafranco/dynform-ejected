import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class MagicSelect extends Component {
    constructor(props) {
        super(props);
        this.valueBuffer = [];

        this.state = { 
            value: props.value,
            selectedOption: ''
        };
    }

    handleChange = (selectedOptions) => {
      this.setState({ selectedOptions });
      this.setState({value: selectedOptions});
      console.log(`Selected: ${ selectedOptions.map((option) => {return option.label}) }`);
    }
    
    render() {
      return (
        <Select
          name="form-field-name"
          multi={true}
          removeSelected={false}
          value={this.state.value}
          onChange={this.handleChange}
          className={this.props.class}
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            { value: 'three', label: 'Three' },
          ]}
        />
      );
    }
  }

export default MagicSelect;