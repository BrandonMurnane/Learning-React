var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer=require('./MainContainer');

var Hello = React.createClass({
  render: function () {
    return (
          <MainContainer>
          	<h1>Github Battle</h1>
      	<p className='lead'> Lets Get Ready to Rumble !</p>
      	<Link to='/playerOne'>
      		<button type ='button' className='btn btn-lg btn-success'>
      			Get Started
      		</button>
      	</Link>
      </MainContainer>
    )
  }
});

module.exports = Hello;