import React from "react";
import News from "../News/News";

const news = {
  news1: {
    url: "https://content.guardianapis.com/search",
    apiKey: "api-key=d137e155-e434-4f48-b0a2-33ff8987d532",
    type: "gurdian",
    query: "section=technology&page-size=60&show-fields=thumbnail",
  },
  news2: {
    url: "https://newsapi.org/v2/everything",
    apiKey: "apiKey=26c22bef986740d6a55885440edca8a1",
    type: "bbc",
    query: "sources=bbc-news",
  },
};

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <News key={news.apiKey} news={news.news1} />
        <News key={news.apiKey} news={news.news2} />
      </div>
    </div>
  );
};

export default Home;
