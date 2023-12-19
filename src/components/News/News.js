import React, { Component } from "react";
import Bbc from "./Bbc";
import Gurdian from "./Gurdian";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    const url = `${this.props.news.url}?${this.props.news.query}&${this.props.news.apiKey}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (this.props.news.type === "bbc") {
          this.setState({
            news: data.articles,
          });
        } else {
            console.log(data)
          this.setState({
            news: data.response.results,
          });
        }
      })
      .catch((error) => console.log(error));
  }

  renderItem() {
    if (this.props.news.type === "bbc") {
      return this.state.news.map((item) => <Bbc key={item.url} item={item} />);
    } else {
      return this.state.news.map((item) => (
        <Gurdian key={item.id} item={item} />
      ));
    }
  }
  render() {
    return <div className="row">{this.renderItem()}</div>;
  }
}

export default News;
