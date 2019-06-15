import React from 'react'
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
        color: #000000;
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

const slide = function(props){
    return(
        <Styles opacity = {0.1}color = {props.color}>
            <div className = "value" >
                {props.min}
            </div>
            <input type = "range"  
                min = {props.min} 
                max = {props.max} 
                value = {props.months} 
                className = "slider" 
                onChange = {props.handle}
                onClick={props.fetchData} />
            <div className = "value" >
                {props.max}
            </div>
                    
        </Styles>
    )
}
export default slide;