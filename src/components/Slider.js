import React  from 'react'
import styled from 'styled-components'



const sliderThumbStyles = (props) => ( `
    width : 25px;
    height : 25px;
    background : ${props.color} ;
    cursor : pointer ;
    outline: 5px solid #333;
    opacity : ${props.opacity}
    -webkit-transition : .2s;
    transition : opacity .2s;
`);
const Styles = styled.div `
    display: flex;
    align-items : center;
    color : #888;
    margin-bottom : 2rem;

    .value {
        flex : 1;
        font-size :2rem;
    }
    .slider {
        flex :6;
        -webkit-appearence : none;
        width :100%;
        height : 15px;
        border-radius: 5px;
        background : #efefef;
        outline : none;

        &::-webkit-slider-thumb {
            -webkit-appearence : none;
            appearence : none;
            ${props => sliderThumbStyles(props)}
        }
         &::-moz-range-thumb {
            ${props => sliderThumbStyles(props)}
         }
    }
`;

export default class MySlider extends React.Component{
    state = {
        amount : 500,
        months : 10,
        
       
    }
   
    handleAmountChange = (e) => {
        console.log(e.target.value)
        e.persist()
        this.setState(() => ({ amount: e.target.value }))
    }
    handleMonthChange = (e) => {
        console.log(e.target.value)
        e.persist()
        this.setState(() =>({
            months : e.target.value
        }))
    }



   render() {
       return(
          

          
           <div>
               
               <Styles opacity = {0.1} color = {this.props.color}>
              <input type = "range" min = {500} max = {5000} value = {this.state.amount} className = "slider" onChange = {this.handleAmountChange} />
              <div className = "value" >{this.state.amount}</div>
             
           </Styles>
            <Styles opacity = {0.1} color = {this.props.color}>
              <input type = "range"  min = {6} max = {24} value = {this.state.months} className = "slider" 
              onChange = {this.handleMonthChange}  />
              <div className = "value" >{this.state.months}</div>
             
           </Styles>
        
           </div>
           
       )
   }
}