import React from 'react'
import axios from 'axios'
import Slide from './slide'
import 'antd/dist/antd.css';
import { Card } from 'antd';



export default class MySlider extends React.Component{
    state = {
        amount : 500 ,
        months : 6,        
        loan:{},
        isLoaded : false     
       
    }


    handleAmountChange = (e) => {        
        e.persist()
        this.setState(() => ({ amount: e.target.value }))
    }
    handleMonthChange = (e) => {       
        e.persist()
        this.setState(() =>({
            months : e.target.value
        }))
    }


    
    fetchData = () => {
      
        axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=
        ${this.state.months}`)
            
            .then(response => {
              this.setState(() =>({ loan:response.data , isLoaded :true}))
            })
            .catch(err => {
               console.log(err)
            })
    }
    
   render() {
       return(       
           
           <div >
                            
                
                <p className = "textfont">
                Loan Amount ${this.state.amount}
                
                </p>
                
                <Slide handle={this.handleAmountChange} min={500} max = {5000} fetchData={this.fetchData} value = {this.state.amount}/>
               
                <p className = "textfont">
                Loan Duration {this.state.months} Months
              
                </p>
                
                <Slide handle={this.handleMonthChange} min = {6} max= {24} fetchData={this.fetchData} value = {this.state.months} />
                
                {this.state.isLoaded && 
                    <div>
                        <Card style={{ width: 400,marginLeft:"10rem" }}>
                                <p className="family">InterestRate :: {this.state.loan.interestRate}</p>
                                <p className="family" >MonthlyPayment-Amount :: {this.state.loan.monthlyPayment.amount}</p>
                                <p className="family">MonthlyPayment-Currency :: {this.state.loan.monthlyPayment.currency}</p>
                                <p className="family">NumPayments :: {this.state.loan.numPayments}</p>
                                <p className="family">Principal-Amount :: {this.state.loan.principal.amount}</p>
                                <p className="family">Principal-Currency :: {this.state.loan.principal.currency}</p>     
   
                            </Card>
                               
                                
                                
                                   
                                    
                        
                    </div>        
                }
        
            </div>
           
       )
   }
}