import React from 'react';
import styled from 'styled-components'
import './App.css';
import Slider from './components/Slider'

const Styles = styled.div `
  .App {
    display : flex;
    justify-content : center;
    background-color: #808080 ;
  }
  .wrapper {
    margin-top : 20vh;
    width : 50%
  }
`;
class App extends React.Component{
  render(){
    return(
      <div>
         <center>
            <h2 className="fontfamily"> FullThrottle Labs - LOAN DETAILS </h2>
          </center>
          <hr className = "line"/>
          <Styles>
            <div className = "App" >
              <div className = "wrapper" >
                <Slider color = "#3D9970"/>
              </div>
            </div>
          </Styles>
    
      </div>
    )
  }

}

export default App