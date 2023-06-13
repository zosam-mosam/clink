import React, { useState } from "react";
import "../../styles/QuoteManagement.scss";
import Button from "../Button";
export default function UserManagement(props) {
  const [quote, setQuote] = useState("user");

  return (
    <div className="modalContainer">
      <form className="quoteForm">
        <table>
          <tr className="quotePerson">
            <td className="subhead"><p>명언가&nbsp;</p></td>
            <td className="quoteInput"><input type="text"></input></td>
          </tr>
          <tr className="quote">
            <td className="subhead"><p>명언&nbsp;</p></td>
            <td className="quoteInput"><textarea></textarea></td>
          </tr>
        </table>
      </form>
      <div className="buttonDiv">
        <Button onClick={props.modalHandler} width="100px" height="50px" backgroundColor="white" color="#438AF4" border="1px solid #438AF4" margin="0px 10px">닫기</Button>
        <Button width="100px" height="50px" backgroundColor="#438AF4" color="white" border="1px solid #438AF4" margin="0px 10px">추가</Button>
      </div>
    </div>
  );
}
