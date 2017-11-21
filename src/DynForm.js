import React, { Component } from 'react';
import SimpleField from './components/simple_field';
import SimpleSelect from './components/simple_select';
import Row from './components/row';
import meta from './metadata.js';
import './DynForm.css';
import axios from 'axios';

class DynForm extends Component {
  constructor(props){
    super(props);

    this.rowBuffer = [];
    
    this.metadata = JSON.parse(this.props.metadata) || meta;
    this.state = { content : {}};

    this.getFormData();
  }
  
  getFormData(){
    axios.get(`${this.metadata.source}/11`)
    .then(res => {
      const content = res.data;
      this.renderForm(content);
    });
  }

  renderForm(content){
      const FIELDS = this.metadata.fields;
      const MAXWIDTH = 12;
      let widthOffset = 0;
      let childrenBuffer = [];

      for (let field of FIELDS){
        const CSSCLASS = "col-md-" + field.width;

        switch (field.type) {
          case "simplefield":
              childrenBuffer.push (
                <SimpleField 
                      key={field.parameters.fieldname} 
                      fieldname={field.parameters.fieldname}
                      label={field.parameters.label}
                      class={CSSCLASS}
                      value={content[field.parameters.fieldname]}
                />);
              break;
          case "simpleselect":
              childrenBuffer.push (
                <SimpleSelect 
                      key={field.parameters.fieldname} 
                      fieldname={field.parameters.fieldname}
                      options={field.parameters.optionsUrl}
                      label={field.parameters.label}
                      class={CSSCLASS}
                      value={content[field.parameters.fieldname]}
                />);
              break;
          default:
              console.log("Campo não reconhecido.");
        }
        
        widthOffset += field.width;
        //Imprime row quando soma width dos filhos sao maiores que MAXWIDTH
        //Imprime row quando estiver na ultima posição de FIELDS
        if (widthOffset >= MAXWIDTH || field === FIELDS[FIELDS.length -1]){
          this.rowBuffer.push(<Row>{childrenBuffer}</Row>);
          widthOffset = 0;
          childrenBuffer = [];
        }
        // Para redesenhar
        this.setState({content});
      }
  }
  render() {
    return (
      <div className="">
        {this.rowBuffer}
      </div>
    );
  }
}


export default DynForm;
