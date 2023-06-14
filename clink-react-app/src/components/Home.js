import React from "react";
import "../styles/Home.scss";
import WiseSaying from "./WiseSaying";

const Home = () => {
  const quote = {
    id: 0,
    content:
      "두툼한 지갑이 무조건 좋다고 말할 수는 없다\n그러나 텅 빈 지갑은 확실히 나쁘다",
    author: "탈무드 격언",
  };

  return (
    <div className="home">
      <WiseSaying content={quote.content} author={quote.author} />
    </div>
  );
};

export default Home;
