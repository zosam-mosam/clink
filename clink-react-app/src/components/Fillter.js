import '../styles/Fillter.scss';
const Fillter = () => {
  return (
    <div className="wrap">
      <form>
        <button type="submit" className="subBtn">
          검색
        </button>
        <select className="select1">
          <option>전체</option>
          <option>비활성화</option>
          <option>활성화</option>
        </select>
        <input className="search" placeholder="검색" />
        <select className="select2">
          <option>선택</option>
          <option>아이디</option>
          <option>닉네임</option>
          <option>이름</option>
        </select>
      </form>
    </div>
  );
};
export default Fillter;
