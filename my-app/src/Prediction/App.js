
//import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import "./App.css";
import bg from "../images/x.jpg";
import wallpaper2 from "../images/wallpaper2.png";
import ImgDisplay from "./imageDsplay.js"
import ImgUpload from "./imageUpload.js"
class App extends Component {

  state = {
    Dname: '',
    imgurl: null,
    image: null,
    Rname:'',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    //var url = reader.readAsDataURL(file);

    reader.onloadend = function () {
        this.setState({
            imgurl: [reader.result]
        })
      }.bind(this);
      
    //console.log(url) 
    this.setState({
        image: file,
        
      })
      if(file){
        reader.readAsDataURL(e.target.files[0]);
      }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.image)
    {
      return;
    }
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    let url = 'http://localhost:8000/app/post1/';
    let config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
      
    }
    axios.post(url, form_data,config )
        .then(res => {
          console.log(res.data);
          console.log(res.data["val1"]);
          console.log(res.data["val2"]);
          this.setState({
            Dname:res.data["val1"],
            Rname:res.data["val2"],
          })
        })
        .catch(err => console.log(err))
  };

  

  render() {
    return (
      <div className="App" style={{background: `url(${wallpaper2})`,height:"auto",width:"auto"}}>
        <div className=" container mt-5 shadow p-3 mb-5 bg-white rounded">
          {<div className="mt-5">
            <ImgUpload imgSubmit={this.handleSubmit} imgChange={this.handleImageChange}/>
            <ImgDisplay imgurl={this.state.imgurl} Dname={this.state.Dname} Rname={this.state.Rname}/>
            
            
          </div>}
        </div>
        
      </div>
    );
  }
}

export default App;
