var React = require('react');
var ReactDOM = require('react-dom');
var InvestmentsGrid = require('./InvestmentsGrid');
var InvestmentsSummaryBox = require('./InvestmentsSummaryBox');

var Main = React.createClass({
    render() {
        return (
            <div>
                <h1>Savings monitor</h1>
                <hr />
                <InvestmentsSummaryBox count='3' amount='7500' income='60.75' />
                <hr />
                <InvestmentsGrid />
            </div>
            );
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));