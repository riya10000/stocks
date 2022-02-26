import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Design from "./Components/Design";


import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import { Helmet } from 'react-helmet'
import ParticlesBg from "particles-bg";


// import Portfolio from "./Components/Portfolio";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Stockington</title>
        </Helmet>
        <div className="search">
          <div style={{margin:"2%"}}>
            <Design></Design> 
          </div>

          <Search/>
        </div>
        <Header/>

        

  
       

        {/* <Header data={this.state.resumeData.main} /> */}


        {/* <About data={this.state.resumeData.main} /> */}
        <Resume data={this.state.resumeData.resume} />
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        <Footer /> 
      </div>
    );
  }
}

export default App;
