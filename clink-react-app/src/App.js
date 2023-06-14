import { useState } from 'react';
import TableList from './components/TableChart';
import './styles/css/TableChart.scss';
import './App.css';
import Main from './components/Main';
import NewChallenge from './components/NewChallenge';
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
    // <TableList titles={titles} contents={contents} />
    <div className="App">
      {/* <Main /> */}

      {/* <NewChallenge /> */}
      {/* <AccountInfo /> */}
      <Main titles={titles} contents={contents}/>
      <NewChallenge />
      

    </div>
  );
}

export default App;

