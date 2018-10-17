import React from 'react';
// import React, {Component} from 'react';

    // if we rewrite the above import statement like so basically we are saying Component = React.Component which would allow us to just then extend our SearchBar Class from Component itself.

// class SearchBar extends Component {

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {term: ''};
        
    }
    // create a class called searchbar and extend it /give it access to everything that a React Component can do or have and functionality
    render () {
        // onChange is referencing the event that is goinng to take place which is when the client changes what they are submitting in the input box for our application
        return <input onChange={this.onInputChange} />;
        // this.onInputChange is referring to the method that we have on the SearchBar Class at this time which is a function
        // anytime we refer to a Variable inside JSX we have to have it inside curly braces.
    }
    // every class component will have a render method for components we have to have the curley braces with them

    onInputChange(event) {
        this.setState({
            term: event.target.value
        })
        // console.log(event.target.value);
        // event, e, eventObject all reference the actual event takig place
        // to get access to the value of that event we need to look at event.target.value - target on the event itself is referrencing the input vlaue aka the text field and the value is the text and words being typed.
    }
}
export default SearchBar;
// creating an event orwatching an event from the client is going to be handled by an event handler

// theres are 2 steps to creating an event handler

// 1. declare an event handler which is a function that should be ran whenever the event occurs
// 2. we pass the event handler to the element we want to monitor the events.  

//**** in ES6 we can actually get rid of the onInputChange function if we want and instead can call 
// <input onChange={event => console.log(event.target.value)} this is still valid and is ES6 and works in the input tag just like the current es5 function is being called in the input tag

// ***STATE IS A PLAIN JAVASCRIPT OBJECT THAT IS CREATED TO RECORD AND REACT TO USER EVENTS!
// this means based on things that are happening stat can be updated and changed 

// *** EACH CLASS BASED COMPONENT HAS ITS OWN  STATE OBJECT - WHENEVER A COMPONENTS STATE IS CHANGED IT IMMEDIATELY RE-RENDERS AND FORCES ALL OF ITS CHILDREN TO RE-RENDER AS WELL
// FUNCTIONAL COMPONENTS DO NOT HAVE STATE!