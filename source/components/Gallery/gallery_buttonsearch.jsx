import React, { Component } from 'react'
import { Button, Segment, Label, Menu, Input,activeItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './gallery_buttonsearch.scss'
import genre from './genre.json'

//1. class based component
//"extends": give it all functionality that React.Component has
class GallerySearchByGenre extends Component {
  //initial state in a class based component
  constructor(props){
    super(props);

    this.state = {term: ''}; //intialize the state, only use "this.state" in ctor, everywhere else, we use
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(name) {
    let id;
    let genre_data = genre["genres"]
    for (let i = 0; i < genre_data.length; i++){
      if(genre_data[i]["name"] == name){
        id = genre_data[i]["id"];
      }
    }
    console.log(id);
    this.onInputChange(id);
  }

  render() {  //render method(function) of the class: must have
    // return <input onChange = {event => console.log(event.target.value)} />;
    return (
      <Menu inverted size='large'>
        <Menu.Item name='Comedy' active={activeItem === 'Comedy'} onClick = {(event, data) => {this.handleItemClick(data.name)} } />
        <Menu.Item name='Action' active={activeItem === 'Action'} onClick = {(event, data) => {this.handleItemClick(data.name)} } />
        <Menu.Item name='Animation' active={activeItem === 'Animation'} onClick = {(event, data) => {this.handleItemClick(data.name)} } />
        <Menu.Item name='Crime' active={activeItem === 'Crime'} onClick = {(event, data) => {this.handleItemClick(data.name)} } />
        <Menu.Item name='Music' active={activeItem === 'Music'} onClick = {(event, data) => {this.handleItemClick(data.name)} } />
        <Menu.Item name='Science Fiction' active={activeItem === 'Science Fiction'} onClick = {(event, data) => {this.handleItemClick(data.name)} } />
        <Menu.Item name='Thriller' active={activeItem === 'Thriller'} onClick = {(event, data) => {this.handleItemClick(data.name)} } />
        <Menu.Item name='Adventure' active={activeItem === 'Adventure'} onClick = {(event, data) => {this.handleItemClick(data.name)} } />
        <Menu.Menu position='right'>
        <Link to = {'/Gallery'}>
          <Menu.Item name='Gallery' active={activeItem === 'logout'} />
        </Link>
        <Link to = {'/'}>
          <Menu.Item name='Search' active={activeItem === 'logout'} />
        </Link>
        </Menu.Menu>
      </Menu>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default GallerySearchByGenre
