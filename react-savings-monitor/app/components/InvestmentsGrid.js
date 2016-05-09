var React = require('react');
var InvestmentBox = require('./InvestmentBox');

class InvestmentsGrid extends React.Component {
    constructor(){
        super();
        
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <h3>Current investments:</h3>
                <InvestmentBox id='123' />
                <InvestmentBox id='234' />
                <InvestmentBox id='345' />
            </div>
        );
    }
}

module.exports = InvestmentsGrid