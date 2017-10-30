import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './search_bar.scss'


//1. class based component
//"extends": give it all functionality that React.Component has
class SearchBar extends Component {
  //initial state in a class based component
  constructor(props){
    super(props);

    this.state = {term: ''}; //intialize the state, only use "this.state" in ctor, everywhere else, we use this.setState({term: ....})
  }

  render() {  //render method(function) of the class: must have
    // return <input onChange = {event => console.log(event.target.value)} />;
    return (
      <div>
        <Input className = "search-bar"
        icon='search' placeholder='Search your keywords'
        value = {this.state.term}
        onChange = {event => this.onInputChange(event.target.value)} />
      </div>
  );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

//2. functional component
// const SearchBar = () =>{
//   return <input />;  //remember: the translation React.createElement would require us to import React
// };

export default SearchBar
//every file importing searchBar will get the access to "SearchBar" component
