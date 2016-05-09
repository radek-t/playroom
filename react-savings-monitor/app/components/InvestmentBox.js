var React = require('react');

class InvestmentBox extends React.Component {
    constructor(){
        super();
        
        this.state = {
            
        }
    }
    
    render() {
        return (<span>Investment Box {this.props.id}<hr /></span>);
    }
}

module.exports = InvestmentBox