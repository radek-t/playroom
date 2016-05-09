var React = require('react');

class InvestmentSummaryBox extends React.Component {
    constructor(){
        super();
        
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <h2>Investments summary:</h2>
                <span>Count: {this.props.count}</span>
                <span>Total amount: {this.props.amount}</span>
                <span>Total net income: {this.props.income}</span>
            </div>
        );
    }
}

module.exports = InvestmentSummaryBox