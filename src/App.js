import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      data:false
    }
  }
  componentDidMount()
  {
    let url = "https://api.chucknorris.io/jokes/categories";
    fetch(url, {
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      }
    }).then(result=>{
      result.json().then((res) =>{
        this.setState({data:res})
      })

    })
  }

  render(){
    const data = this.state.data;
    console.warn(data);
  return (
    <div className="App">
      <div className="container">
        {
          data?
          <div className="fluid-contanier bg-aqua">
            {
              data.map(function(item, i){
                return <Button variant= "light" key={i}>{data}</Button>
              })
            }
          {/* <button type="button" class="btn btn-light">{data}</button> */}
        </div>
        : <p>Please Wait......</p>
        }
      </div>
    </div>
  );
}
}

export default App;
