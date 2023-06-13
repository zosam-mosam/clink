import React, { useState } from "react";
import "../styles/css/quoteManagement.scss";
import Button from "./testbutton";
export default function UserManagement() {
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
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
}
