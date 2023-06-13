import '../styles/Index.scss';
import explain from '../images/ServiceExplain.png';
import Login from './Login';


const Index =()=>{
    return(
        <>
            <div className="wrap">
                <img className="ServiceExplain" src={explain} alt="explain"/>
                <Login/>
            </div>
        </>  
      );
};

export default Index;