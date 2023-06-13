import './App.css';
import TestContainer from './components/testContainer';
import AccountInfo from './components/AccountInfo';
import Main from './components/Main';
import NewChallenge from './components/NewChallenge';

function App() {
  return (
    <div className="App">
      <TestContainer></TestContainer>
      {/* <Main /> */}
      {/* <NewChallenge /> */}
      <AccountInfo />
    </div>
  );
}

export default App;
