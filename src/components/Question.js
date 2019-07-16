import * as React from 'react';
import { Input, FormGroup, Label, } from 'reactstrap';

export class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:null
        }
    }

    handleValueChange = (e,id) => {
      this.props.updateValues(id,e.target.value);
      this.setState({value:e.target.value});
    }

    render() {
    return(
      this.props.questions.map(q => {
        return(
        <FormGroup className="formgroup" key={q.id}>
        <p>{q.text}</p>
        <FormGroup className="check-new">
          <Label style={{color:'red'}}>Disagree</Label>
          <Input type="radio" value={1} name={"radio"+ q.id} className="form-check-input-new" onChange={(e)=>this.handleValueChange(e,q.id)}/>{' '}
          <Input type="radio" value={2} name={"radio"+ q.id} className="form-check-input-new" onChange={(e)=>this.handleValueChange(e,q.id)}/>{' '}
          <Input type="radio" value={3} name={"radio"+ q.id} className="form-check-input-new" onChange={(e)=>this.handleValueChange(e,q.id)}/>{' '}
          <Input type="radio" value={4} name={"radio"+ q.id} className="form-check-input-new" onChange={(e)=>this.handleValueChange(e,q.id)}/>{' '}
          <Input type="radio" value={5} name={"radio"+ q.id} className="form-check-input-new" onChange={(e)=>this.handleValueChange(e,q.id)}/>{' '}
          <Input type="radio" value={6} name={"radio"+ q.id} className="form-check-input-new" onChange={(e)=>this.handleValueChange(e,q.id)}/>{' '}
          <Input type="radio" value={7} name={"radio"+ q.id} className="form-check-input-new" onChange={(e)=>this.handleValueChange(e,q.id)}/>{' '}
          <Label style={{color:'green'}}>Agree</Label>
        </FormGroup>
      </FormGroup>)
      })
    )
    }
}
