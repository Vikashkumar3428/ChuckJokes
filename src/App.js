import React, { useState} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  const [cate,setCate] = useState('None');

  function cat(item) {
    setCate(item);
  }

  const [data, setData] = useState([]);   
    
  
  fetch('https://api.chucknorris.io/jokes/categories')
  .then(response => response.json())
  .then((json) =>{
    console.log(json);
    setData(json);
    });
   
  const items = data;
  return (
    <div className=""><h1 className="mt-5"><b>Chuck Norries</b></h1>
    <div className="App">
      
     <div className="pb-4 ">
        <br />
        {items.map(item=>
        <Button className="button my-2 mx-3" onClick={cat(item)} variant="light" size ="sm" >{item}</Button>
        )}
        
        </div> 
     </div>
     <div className="">
          <h3 className="cat_selected">Selected Category : {cate}</h3>
            <div className="para_div"><p className="para py-10">When In A Bar, You Can Order A Drink Called A "Chuck Norris".It is Also Known As A "Bloody Mary", If Your Name Happens To Be Mary.</p></div>
        </div>
        
        <a href="#"><p className="joke">New Joke</p></a>
        
     </div>
  );

}

export default App;
