import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


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

export default class MySlider extends React.Component{
    state = {
        amount : 800 ,
        months : 10,        
        loan:{},
        isLoaded : false     
       
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


    
    fetchData = () => {
        console.log('make api call here')
        axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=${this.state.months}`)
            
            .then(response => {
                console.log(response.data)
                this.setState(() =>({ loan:response.data , isLoaded :true}))
            })
            .catch(err => {
                console.log(err)
            })
    }
    
   render() {
       return(       
           
           <div className = "body">               
                
                <div className = "value" > Loan Amount ${this.state.amount}</div>
                <Styles opacity = {this.state.amount >500 ? (this.state.amount /5000) : .1} color = {this.props.color}>
                <div className = "value" >$500</div>
                    <input type = "range" min = {500} max = {5000} value = {this.state.amount}
                        className = "slider" onChange = {this.handleAmountChange} onClick={this.fetchData}/>
                    <div className = "value" >$5000</div>
                
                </Styles>

                <div className = "value" >Loan Duration {this.state.months} Months</div>
                <Styles opacity = {this.state.months > 6 ? (this.state.months /24) : .1}color = {this.props.color}>
                <div className = "value" >6</div>
                    <input type = "range"  min = {6} max = {24} value = {this.state.months} 
                        className = "slider" onChange = {this.handleMonthChange} onClick={this.fetchData} />
                    <div className = "value" >24</div>
                    
                </Styles>
                {this.state.isLoaded && 
                    <div>
                        <center>
                            <table border = "4" className = "table">      
                                
                                <p className="family">InterestRate :: {this.state.loan.interestRate}</p>
                                <p className="family" >MonthlyPayment-Amount :: {this.state.loan.monthlyPayment.amount}</p>
                                <p className="family">MonthlyPayment-Currency :: {this.state.loan.monthlyPayment.currency}</p>
                                <p className="family">NumPayments :: {this.state.loan.numPayments}</p>
                                <p className="family">Principal-Amount :: {this.state.loan.principal.amount}</p>
                                <p className="family">Principal-Currency :: {this.state.loan.principal.currency}</p>            
                            </table> 
                        </center>
                    </div>        
                }
        
            </div>
           
       )
   }
}