import React, { Component } from "react";
import axios from "axios";
import { Card, Col, Row, Button } from "react-bootstrap";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNews: [],
    };
  }

  componentDidMount = () => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2021-07-05&sortBy=publishedAt&apiKey=6d921101d84c4a80a66c2559721f7783`;
    axios.get(url).then((result) => {
      console.log(result.data.articles);
      this.setState({
        allNews: result.data.articles,
      });
    });
  };

  addTolater = (idx) => {
    let server = process.env.REACT_APP_SER;

    let obj = {
      title: this.state.allNews[idx].title,
      img: this.state.allNews[idx].urlToImage,
      content: this.state.allNews[idx].content,
      idx: idx,
    };

    let url = `${server}/addtolater`;
    console.log(url);
    axios.post(url, obj).then((result) => {
      console.log(result.data);
    });
  };

  render() {
    return (
      <div>
        <Row xs={1} md={2} className="g-4">
          {this.state.allNews.map((article, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={article.urlToImage} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.content}</Card.Text>
                  <Button
                    onClick={() => this.addTolater(idx)}
                    variant="primary"
                  >
                    Add to Read Later
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Main;
