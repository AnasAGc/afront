import axios from "axios";
import React, { Component } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import FormModal from "./FormModal";


export class Later extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laterData: [],
      updateObj:{},
      title:'',
      content:'',
      id:'',
      show:false,
    };
  }

  componentDidMount = () => {
      let server=process.env.REACT_APP_SER;
      console.log(server);
    let url = `${server}/getnews`;

    axios.get(url).then((result) => {
    //   console.log(result.data);
      this.setState({
        laterData: result.data,
      });
    });
  };

  removeNews = (idx) => {
    let server=process.env.REACT_APP_SER;

    let url = `${server}/delete`;
    let itemID = this.state.laterData[idx]._id;

    axios.delete(`${url}?id=${itemID}`).then((result) => {
      this.setState({
        laterData: result.data,
      });
    });
  };


  update=(idx)=>{
    this.openAndCloes();
    this.setState({
        title:this.state.laterData[idx].title,
        content:this.state.laterData[idx].content,
        id:this.state.laterData[idx]._id,
    })

}

sendnewUpdat=(newObject)=>{
    let server=process.env.REACT_APP_SER;
    
    let url = `${server}/updatenews`;
    let obj=newObject;
    axios.put(url,obj).then(result=>{
        console.log(result.data);
        this.setState({
            laterData:result.data,
        })
        // this.componentDidMount()
    })
    this.openAndCloes();

}



openAndCloes=()=>{
    this.setState({
        show:!this.state.show
    })
}

  render() {
    return (
      <div>
        <Row xs={1} md={2} className="g-4">
          {this.state.laterData.map((article, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={article.img} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.content}</Card.Text>
                  <Button
                    onClick={() => this.removeNews(idx)}
                    variant="primary"
                  >
                    Remove
                  </Button>
                  <Button
                    onClick={() => this.update(idx)}
                    variant="primary"
                  >
                    update
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <FormModal
        show={this.state.show}
        open={this.openAndCloes}
        title={this.state.title}
        content={this.state.content}
        id={this.state.id}
        sendData={this.sendnewUpdat}

        />
      </div>
    );
  }
}

export default Later;
