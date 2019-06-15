import React from 'react';
import styled from 'styled-components'
import './App.css';
import Slider from './components/Slider'

const Styles = styled.div `
  .App {
    display : flex;
    justify-content : center;
    background-color: #92C7C7 ;
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
            <h2 className="font">LOAN DETAILS </h2>
          </center>
          <hr className = "new5"/>
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