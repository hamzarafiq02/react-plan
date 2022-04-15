import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Plan from './Plan';


 class App extends Component {
    state = {
         items: [],
         text: ''
     }
    handleChange = e => {
        this.setState({ text: e.target.value})
    }
    handleAdd= e => {
        if (this.state.text !== ""){
            const items = [...this.state.items, this.state.text];
            this.setState({ items: items, text:""})
        } 
    }
    handledelete= id => {
      console.log('delete', id);
      const Olditems = [...this.state.items]
      const items = Olditems.filter((element, i) => {
        return i !== id 
      }) 
      this.setState({items: items});  
    }
  render() {
    return (
      <div className='container-fluid my-5'>
        
      <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
        <h1>
          Today Plan's of Sunny
        </h1>
      <div className="row">
        <div className="col-9">
        <input type="text" className="form-control" placeholder='Write Your Note Here'
         value={this.state.text} onChange={this.handleChange} />
          </div>
          <div className="col-2">
            <button className="btn btn-warning" onClick={this.handleAdd}>Add</button>
            </div>
            <div className='container-fluid '>
              <ul className='list-unstated row m-5'>
            {
               this.state.items.map((value, i) => {
                return <Plan key={i} id={i} value={value} sendData={this.handledelete} />
               })
            }  
              </ul>
              </div>
        </div>
      </div>
    </div>
 );
  }
}


export default App;



