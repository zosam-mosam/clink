const TableList = ({ titles, contents }) => {
  function cont(co) {
    const len = Object.keys(co).length;
    console.log(len);
    const arr = [];
    for (let i = 1; i < len; i++) {
      arr.push(<td key={i}>{Object.values(co)[i]}</td>);
    }
    return arr;
  }
  return (
    <table>
      <thead>
        <tr>
          {titles.map((ti) => (
            <th key={ti.id}>{ti.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {contents.map((co) => (
          <tr key={co.id}>{cont(co)}</tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableList;
