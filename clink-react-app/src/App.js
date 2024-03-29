import "./App.css";
import React, { useState } from "react";
import Main from "./components/Main";

//동우: main Component로 더미데이터 옮기기
const createTitle = () => {
  const titleList = [];
  for (let i = 0; i < 4; i++) {
    titleList.push({
      id: i,
      title: `title${i}`,
    });
  }
  return titleList;
};
const createContents = () => {
  const contentList = [];
  for (let i = 0; i < 8; i++) {
    contentList.push({
      id: i,
      date: `date${i}`,
      category: `category${i}`,
      content: `content${i}`,
      price: `price${i}`,
    });
    // console.log(contentList[i]);
    // console.log(Object.values(contentList[i])[1]);
  }
  return contentList;
};
function App() {
  const [titles, setTitles] = useState(createTitle);
  const [contents, setContents] = useState(createContents);
  return (
    <>
      <Main />
    </>
  );
}
export default App;
