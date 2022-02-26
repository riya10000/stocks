import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import ReactSearchBox from "react-search-box";
import Design from "./Design";

class Header extends Component {
  render() {

    // if (!this.props.data) return null;

    // const project = this.props.data.project;
    // const github = this.props.data.github;
    // const name = this.props.data.name;
    // const description = this.props.data.description;

    return (
      
      <Design/>,
            <header id="home">
        <ParticlesBg type="circle" bg={true} />
        <div>
        



        </div>

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li>
              <a className="h1" href="#portfolio" >
                <div class="h1">Stockington</div>


              </a>
            </li>

          
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
            </Fade>
            <Fade bottom duration={1200}>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
               
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
