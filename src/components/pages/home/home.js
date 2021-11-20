import React, { useEffect, useContext ,useState} from 'react'
import Navbar from '../../shared/navbar';

const Home = ({
    count , setCount
}) => {
    const [state, setState] = useState(false);

    const handleOnClick = ()=> {
        if(!state){
            setCount(pre=>{return ++pre})   
        }
    }

    return(
        <div className="home-style">
            <Navbar/>

        <div className={`d-flex justify-content-center ${state?'header-text-success':'header-text-red'}`}>
        <h2>{state?'RUNNING':'FAULTED'}</h2>
        </div>
        <div className="d-flex justify-content-center">
            <h1 className="operator-text">HOME</h1>
        </div>
      <div className="d-flex justify-content-center ">
        <div className="card card-style-01">
          <div className="d-flex justify-content-center ">
            <h1 className="togle-text">Toggle 01</h1>
          </div>
          <div className="d-flex justify-content-center btn-style">
            <label className="switch">
            <input type="checkbox" value={state}  onChange={()=> setState(pre => !pre)}  onClick={handleOnClick}/>
            <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center btn-style">
        <div className="card card-style-02">
          <div className="d-flex justify-content-center">
            <h2 className="togle-text">Togle <br/>count</h2>
          </div>
          <div className="d-flex justify-content-center">
            <h2 className="togle-text">{count}</h2>
          </div>
        </div>
      </div>
    </div>
 
    )
}
export { Home };
//()=> setState(pre => !pre)