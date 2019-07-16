import React from 'react';
import {Question} from '../components/Question';
import './Home.css';
import { Container, Row, Col, Button, Form, Input, FormGroup, Label, } from 'reactstrap';
import firebase from '../Firestore';
import { Redirect } from 'react-router-dom';

let questions = [
  {
    id:1,
    text: "You find it takes effort to introduce yourself to other people."
  },
  {
    id:2,
    text: "You consider yourself more practical than creative."
  },
  {
    id:3,
    text: "Winning a debate matters less to you than making sure no one gets upset."
  },
  {
    id:4,
    text: "You get energized going to social events that involve many interactions."
  },
  {
    id:5,
    text: "You often spend time exploring unrealistic and impractical yet intriguing ideas."
  },
  {
    id:6,
    text: "Deadlines seem to you to be of relative rather than absolute importance."
  },
  {
    id:7,
    text: "Logic is usually more important than heart when it comes to making important decisions."
  },
  {
    id:8,
    text: "Your home and work environments are quite tidy."
  },
  {
    id:9,
    text: "You do not mind being at the center of attention."
  },
  {
    id:10,
    text: "Keeping your options open is more important than having a to-do list."
  },
]

 class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          hasErrors: true,
          questions: questions,
          redirect: false
        }
    }
    updateValues = (id, value)=>{
      this.setState({
        questions: {
          ...this.state.questions,
          [id-1]: { 
            ...this.state.questions[id-1],
            value: value
          }  
        }
      },this.checkErrors
      );
    } 

    checkErrors = () => {
      let counter = 0;
      Object.keys(this.state.questions).forEach(([key, value]) => {
        if (this.state.questions[key].value != null) {
          counter += 1;
        }
        if (counter >= Object.keys(this.state.questions).length) {
          this.setState({hasErrors:false})
        }
      })
  }

    handleSubmit = () => {
      if (this.state.email.length <= 0) {
        alert('Please fill in your email to continue');
      }
      
      if (this.state.hasErrors) {
        alert('Please fill all the questions to continue');
      }

      if (!this.state.hasErrors) {
        const db = firebase.firestore();
        if (this.state.email.length > 0) {
            const userRef = db.collection('questions').doc(this.state.email).set({
                email: this.state.email, questions: this.state.questions
              }).then(()=> {
                console.log("data successfully written!");
              }, this.setState({redirect:true})).catch(function(error) {
                console.error("Error writing data: ", error);
              });
        }
      }
    }

    handleEmailChange = (e) => {
      this.setState({email:e.target.value})
    }
    
    render() {
      return (
        this.state.redirect ? <Redirect to={{pathname:"/results",email:this.state.email}}/>:
        <Container className="root-container">
              <h5>Discover Your Perspective</h5>
            <p>Complete the 7 min test and get a detailed report of your lenses on the world.</p>
        <Row className="row" style={{marginTop:10}}>
          <Col>
        <div className="App">
            <Question questions={questions} updateValues={this.updateValues}/>
            <FormGroup className="formgroup formgroup-email">
            <Label for="exampleEmail" sm={2}>Your Email</Label>
              <Col sm={10} style={{maxWidth:'100%'}}>
                <Input type="email" name="email" id="exampleEmail" placeholder="your@email.com" onChange={this.handleEmailChange}/>
              </Col>
              <Col sm={10}>
              </Col>
            </FormGroup>
            <Button color="primary" onClick={this.handleSubmit} style={{borderRadius:0,marginTop:30,backgroundColor:'#0043ff'}}>Save & Continue</Button>
        </div>
        </Col>
        </Row>
        </Container>
      );
    }
}

export default Home;