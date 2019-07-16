import * as React from 'react';
import { Container, Row, Col, Button, Form, Input, FormGroup, Label, Progress} from 'reactstrap';
import './Home.css'
import firebase from '../Firestore';

export class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: this.props.location.email,
          data: [],
          EI: '',
          SN: '',
          TF: '',
          JP: ''
        }
    }

    componentDidMount() {
      const db = firebase.firestore();
      var docRef = db.collection("questions").doc(this.state.email);
      docRef.get().then((doc)=> {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            this.setState({data:doc.data()},this.determineScore)
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    }

    determineScore = () => {
      let EIscore = 0;
      let SNscore = 0;
      let TFscore = 0;
      let JPscore = 0;
      Object.keys(this.state.data.questions).forEach((key, value) => {
       switch (this.state.data.questions[key].id) {
         case 1:
          if (this.state.data.questions[key].value < 4) {
            if (this.state.data.questions[key].value == 1) {
              EIscore = EIscore + 3;
            } else if (this.state.data.questions[key].value == 3) {
              EIscore = EIscore + 1
            } else {
              EIscore = EIscore + 2
            }
          } else if (this.state.data.questions[key].value > 4) {
            EIscore = EIscore - (this.state.data.questions[key].value - 4)
          }
          break;
          case 4:
          if (this.state.data.questions[key].value > 4) {
            EIscore = EIscore + (this.state.data.questions[key].value - 4)
          } else if (this.state.data.questions[key].value < 4) {
            if (this.state.data.questions[key].value == 1) {
              EIscore = EIscore -3;
            } else if (this.state.data.questions[key].value == 3) {
              EIscore = EIscore - 1;
            } else {
              EIscore = EIscore - 2;
            }
          }
          break;
          case 9:
          if (this.state.data.questions[key].value > 4) {
            EIscore = EIscore + (this.state.data.questions[key].value - 4)
          } else if (this.state.data.questions[key].value < 4) {
            if (this.state.data.questions[key].value == 1) {
              EIscore = EIscore - 3;
            } else if (this.state.data.questions[key].value == 3) {
              EIscore = EIscore - 1;
            } else {
              EIscore = EIscore - 2;
          }
        }
          break;
          case 2:
          if (this.state.data.questions[key].value > 4) {
            SNscore = SNscore - (this.state.data.questions[key].value - 4);
          } else if (this.state.data.questions[key].value < 4) {
            if (this.state.data.questions[key].value == 1) {
              SNscore = SNscore + 3;
            } else if (this.state.data.questions[key].value == 3) {
              SNscore = SNscore + 1;
            } else {
              SNscore = SNscore + 2;
          }
        }
          break;
          case 5:
          if (this.state.data.questions[key].value > 4) {
            SNscore = SNscore + (this.state.data.questions[key].value - 4)
          } else if (this.state.data.questions[key].value < 4) {
            if (this.state.data.questions[key].value == 1) {
              SNscore = SNscore - 3;
            } else if (this.state.data.questions[key].value == 3) {
              SNscore = SNscore - 1;
            } else {
              SNscore = SNscore - 2;
          }
          }
          break;
          case 3:
          if (this.state.data.questions[key].value > 4) {
            TFscore = TFscore + (this.state.data.questions[key].value - 4);
          } else if (this.state.data.questions[key].value < 4)  {
            if (this.state.data.questions[key].value == 1) {
              TFscore = TFscore - 3;
            } else if (this.state.data.questions[key].value == 3) {
              TFscore = TFscore - 1;
            } else {
              TFscore = TFscore - 2;
          }
          }
          break;
          case 7:
              if (this.state.data.questions[key].value > 4) {
                TFscore = TFscore - (this.state.data.questions[key].value - 4)
              } else if (this.state.data.questions[key].value < 4) {
                if (this.state.data.questions[key].value == 1) {
                  TFscore = TFscore + 3;
                } else if (this.state.data.questions[key].value == 3) {
                  TFscore = TFscore + 1;
                } else {
                  TFscore = TFscore + 2;
              }
              }
          break;
          case 6:
            if (this.state.data.questions[key].value > 4) {
              JPscore = JPscore + (this.state.data.questions[key].value - 4);
            } else if (this.state.data.questions[key].value < 4) {
              if (this.state.data.questions[key].value == 1) {
                JPscore = JPscore - 3;
              } else if (this.state.data.questions[key].value == 3) {
                JPscore = JPscore - 1;
              } else {
                JPscore = JPscore - 2;
            }
            }
          break;
          case 8:
            if (this.state.data.questions[key].value < 4) {
              if (this.state.data.questions[key].value == 1) {
                JPscore = JPscore + 3;
              } else if (this.state.data.questions[key].value == 3) {
                JPscore = JPscore + 1;
              } else {
                JPscore = JPscore + 2;
            }
            } else if (this.state.data.questions[key].value > 4) {
              JPscore = JPscore - (this.state.data.questions[key].value - 4)
            }
          break;
          case 10:
              if (this.state.data.questions[key].value > 4) {
                JPscore = JPscore + (this.state.data.questions[key].value - 4);
              } else if (this.state.data.questions[key].value < 4) {
                if (this.state.data.questions[key].value == 1) {
                  JPscore = JPscore - 3;
                } else if (this.state.data.questions[key].value == 3) {
                  JPscore = JPscore - 1;
                } else {
                  JPscore = JPscore - 2;
              }
              }
          break;
       }
      })
      this.EI(EIscore);
      this.SN(SNscore);
      this.TF(TFscore);
      this.JP(JPscore);
    }

    EI = (score) => {
      if (score >= 0 ) {
        this.setState({EI:'E'})
      } else {
        this.setState({EI: 'I'})
      } 
    }

    SN = (score) => {
      if (score > 0 ) {
        this.setState({SN:'N'})
      } else {
        this.setState({SN: 'S'})
      } 
    }

    TF = (score) => {
      if (score > 0 ) {
        this.setState({TF:'F'})
      } else {
        this.setState({TF: 'T'})
      } 
    }

    JP = (score) => {
      if (score > 0 ) {
        this.setState({JP:'P'})
      } else {
        this.setState({JP: 'J'})
      } 
    }

    render() {
      return(
        <Container>
        <Row className="row row-border" style={{marginTop:10}}>
          <Col xs="5">
          <div><h3>Your Perspective</h3>
            <p>Your Perspective Type is: {this.state.EI}{this.state.SN}{this.state.TF}{this.state.JP}</p>
          </div>
          </Col>
          <Col xs="2">
          <div className="text-center">Introversion(I)</div>
          <div className="text-center">Sensing(S)</div>
          <div className="text-center">Thinking(T)</div>
          <div className="text-center">Judging(J)</div>
          </Col>
          <Col xs="3">
          {this.state.EI=="E" ? 
          <Progress multi>
            <Progress bar className="gray-fill" value="50" />
            <Progress bar className="purple-fill" value="50" />
          </Progress>
          :
          <Progress multi>
            <Progress bar className="purple-fill" value="50" />
            <Progress bar className="gray-fill" value="50" />
          </Progress>
          }
          {this.state.SN=="N" ? 
          <Progress multi>
            <Progress bar className="gray-fill" value="50" />
            <Progress bar className="purple-fill" value="50" />
          </Progress>
          :
          <Progress multi>
            <Progress bar className="purple-fill" value="50" />
            <Progress bar className="gray-fill" value="50" />
          </Progress>
          }
          {this.state.TF=="F" ? 
          <Progress multi>
            <Progress bar className="gray-fill" value="50" />
            <Progress bar className="purple-fill" value="50" />
          </Progress>
          :
          <Progress multi>
            <Progress bar className="purple-fill" value="50" />
            <Progress bar className="gray-fill" value="50" />
          </Progress>
          }
          {this.state.JP=="P" ? 
          <Progress multi>
            <Progress bar className="gray-fill" value="50" />
            <Progress bar className="purple-fill" value="50" />
          </Progress>
          :
          <Progress multi>
            <Progress bar className="purple-fill" value="50" />
            <Progress bar className="gray-fill" value="50" />
          </Progress>
          }
          </Col>
          <Col xs="2">
          <div className="text-center">Extroversion(E)</div>
          <div className="text-center">Intuition(N)</div>
          <div className="text-center">Feeling(F)</div>
          <div className="text-center">Perceiving(P)</div>
          </Col>
        </Row>
        </Container>
      )
    }
}
