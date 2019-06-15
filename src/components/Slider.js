import React from 'react'
import axios from 'axios'
import Slide from './slide'


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
        console.log('make api call here')
        axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=
        ${this.state.months}`)
            
            .then(response => {
              this.setState(() =>({ loan:response.data , isLoaded :true}))
            })
            .catch(err => {
               alert(err)
            })
    }
    
   render() {
       return(       
           
           <div className = "body">
                
               
             
                <div className = "value" > Loan Amount ${this.state.amount}</div>
                <Slide handle={this.handleAmountChange} min={500} max = {5000} fetchData={this.fetchData}/>
                <div className = "value" >Loan Duration {this.state.months} Months</div>
                <Slide handle={this.handleMonthChange} min = {6} max= {24} fetchData={this.fetchData} />
                
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