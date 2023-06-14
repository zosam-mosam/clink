import Index from "./components/Index";
import Login from "./components/Login";
import FindIdPwd from "./components/FindIdPwd";
import { useState } from "react";

function App() {
  const [content, setContent] = useState(["ID 찾기", "내용", "name"]);

  return (
    <>
      <FindIdPwd content={content} />
    </>
  );
}

export default App;
