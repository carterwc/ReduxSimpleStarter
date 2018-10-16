import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';


const API_Key = 'AIzaSyCj_k2ryZlyujtWqakj2LM2JBEydzz6JdA';

// create a new component : this component should produce some html

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}
//take this compoentns generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render()


// jsx is javascript that looks like html but functions just like javascript but it has to be compiled with webpack or babel

// react creates components that the client is going to be able to see o interact with

// we use Const variables for values that will NEVER CHANGE such as App

// es6 assumes everything is silod and doesnt flow through other files unless something is imported and exported to other files. hence import from the node modules folder by calling import React from 'raeact';

