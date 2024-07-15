import './App.css';
import React,{useState} from 'react';
function App() {
  const [val,setval]=useState("");
  const [bb,setbb]=useState(0);
  const [nn,setnn]=useState(0);
  const [str,setstr]=useState("");
  const [arr,setarr]=useState([]);
  const [balance,setbalance]=useState(0);
  const [income,setincome]=useState(0);
  const [expence,setexpence]=useState(0);
  const [ink,setink]=useState([]);
  
  const Amount=(e)=>{
    const l=e.target.value;
    const k=parseInt(l);
    if(k>0){
      setbb(k);
      setval(k);
    }
    if(k<0){
      setnn(Math.abs(k));
      setval(k);
    }
  }
  const loop=(e)=>{
    const l=e.target.value;
    setstr(l);
  }

  const boom=()=>{
    if(bb!==0){
    const ff=str+" ------------------------> "+bb;
    setarr((prev)=>{
      return [...prev,ff];
    })
    setink((e)=>{
      return [...e,true];
    });
    }
    else if(nn!==0){
      const ff=str+" ----------------------> "+nn;
      setarr((prev)=>{
        return [...prev,ff];
      })
      setink((e)=>{
        return [...e,false];
      });
    }
    setincome(income+bb);
    setbb(0);
    setexpence(expence+nn);
    setnn(0);
    setbalance(income-expence+bb-nn);
    setstr("");
    setval("");
  }


  return (
    <div className='king'>
      <h2 className='header'>Expence Tracker</h2>
        <p><b>YOUR BALANCE</b></p>
        <h3>${balance}</h3>
        <div className='inex'>
          <div className='kkk'>
            <p className='kk'>INCOME</p>
            <p className='kk' style={{color:"green"}}>${income}</p>  
          </div>
          <div className='kkk'>
          <p className='kk'>EXPENCE</p>
          <p className='kk' style={{color:"red"}}>${expence}</p>
          </div>
        </div>
        <p>History</p>
        <hr/>
        <ul className='list-group'>
          {arr.map((e,i)=>{
            if(ink[i]){
            return <li key={i} id="op" className="list-group-item list-group-item-success">{e}</li>
            }else if(!ink[i]){
              return<li id="po" key={i} className="list-group-item list-group-item-danger">{e}</li>
            }
            else{
              return [];
            }
          })}
        </ul>

        <p className='newera'>Add new Transaction</p>
        <hr/>
        <p>Text</p>
        <input onChange={loop} type='text' placeholder='Enter text...' value={str}></input>
        <p>Amount</p>
        <p>(negative - expence,positive - income)</p>
        <input type='number' step={"any"} onChange={Amount}  value={val} placeholder='Enter Amount...'></input>
        <br></br>
        <button onClick={boom} >Add Transaction</button>
    </div>
  );
}

export default App;
