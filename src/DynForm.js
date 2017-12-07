import React, { Component } from 'react';
import SimpleField from './components/simple_field';
import SimpleSelect from './components/simple_select';
import MagicSelect from './components/magic_select';
import Row from './components/row';
import './DynForm.css';

class DynForm extends Component {
  constructor(props){
    super(props);

    this.rowBuffer = [];
    this.metadata = (this.props.metadata ? JSON.parse(this.props.metadata) : null);
    this.state = { content : {}};
  }
  
  componentDidMount(){
    fetch(`${this.metadata.source}/${this.props.subject}`)
    .then(result => result.json())
    .then(data => {
      this.renderForm(data);
      if (data.constructor !== Array){
        this.setState({content: data});
      } else {
        this.setState({content: {}});
      }
    });
  }

  renderForm(content){
    if (!this.metadata){
      this.rowBuffer.push (
        <div className="form-control">Metadado inválido.</div>
      );
        console.log("Metadado inválido.");
      return ;
    }
    const FIELDS = this.metadata.fields;
    const MAXWIDTH = 12;
    let widthOffset = 0;
    let childrenBuffer = [];

    for (let i = 0; i < FIELDS.length; i++){
      const field = FIELDS[i];
      const CSSCLASS = "col-md-" + field.width;        
      switch (field.type) {
        case "simplefield":
            childrenBuffer.push (
              <SimpleField 
                    key={field.parameters.fieldname} 
                    fieldname={field.parameters.fieldname}
                    label={field.parameters.label}
                    class={CSSCLASS}
                    value={content[field.srvatt]}
              />);
            break;
        case "simpleselect":
            childrenBuffer.push (
              <SimpleSelect 
                    key={field.parameters.fieldname} 
                    fieldname={field.parameters.fieldname}
                    options={field.parameters.options}
                    optionsUrl={field.parameters.optionsUrl}
                    label={field.parameters.label}
                    class={CSSCLASS}
                    value={content[field.srvatt]}
              />);
            break;
        case "magicselect":
            childrenBuffer.push (
              <MagicSelect 
                    key={field.parameters.fieldname}
                    fieldname={field.parameters.fieldname}
                    class={CSSCLASS}
              />);
            break;
        default:
            childrenBuffer.push (
            <div 
              key={field.parameters.fieldname} 
              className="form-control">Componente não reconhecido</div>);
            console.log("Componente não reconhecido.");
      }
      
      widthOffset += field.width;
      //Imprime row quando soma width dos filhos sao maiores que MAXWIDTH
      //Imprime row quando estiver na ultima posição de FIELDS
      if (widthOffset >= MAXWIDTH || field === FIELDS[FIELDS.length -1]){
        this.rowBuffer.push(<Row key={i}>{childrenBuffer}</Row>);
        widthOffset = 0;
        childrenBuffer = [];
      }
    }
  }
  render() {
    return (
      <div className="" key={this.props.key}>
        {this.rowBuffer}
      </div>
    );
  }
}


export default DynForm;
