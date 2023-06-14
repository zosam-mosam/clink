
// import './App.css';
// import Index from './components/Index';
// import Login from './components/Login';
import Join from './components/Join';


function App() {
  const [content, setContent] = useState(["ID 찾기", "내용", "name"]);

  return (
    <>
    {/* <Index>
      <Login/>
    </Index> */}
    <Join/>
    </>
  );
}

export default App;
