
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
function App() {
  
  const [cat,setCat] = useState('None');


  const [data, setData] = useState([]);  
  const [jokes, setJokes] = useState('');   
   
  function getJokes(category){
    if(cat!==category){
    ReactDOM.findDOMNode(document.getElementById(cat)).classList.remove("active")
    setCat(category);
    ReactDOM.findDOMNode(document.getElementById(category)).classList.add("active")
    }
    fetch("https://api.chucknorris.io/jokes/random?categories="+category)
      .then(res => res.json())
      .then(
        (result) => {
          setJokes(result.value);
        }
      )
  }

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then(res => res.json())
      .then(
        (result) => {
          getJokes(result[0])
          setData(result);
        }
      )
  }, [])
  
  return (
    <div className=""><h1 className="mt-5"><b>Chuck Norries</b></h1>
    <div className="App">
      
     <div className="pb-4 ">
        <br />
        {data ? data.map((item,id)=>
        <Button key={id} id={item} className="button my-2 mx-3" onClick={()=>{getJokes(item);}} variant="light" size ="sm" >{item}</Button>
        ):<p>Loading...</p>}
        
        </div> 
     </div>
     <div className="">
          <h3 className="cat_selected">Selected Category : {cat}</h3>
          {
            jokes?
              <div className="para_div"><p className="para py-10">{jokes}</p></div>:"Loading..."
          }
        </div>
        
        <Button id={cat} className="joke" onClick={()=>{getJokes(cat);}} variant="light" size ="sm" >New Joke</Button>
        
     </div>
  );

}

export default App;