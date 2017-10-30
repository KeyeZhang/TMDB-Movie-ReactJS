import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import styles from './Home.scss'

import GalleryList from './gallery_list.jsx'
import GalleryListItem from './gallery_list_item.jsx'
import GalleryDetails  from './gallery_details.jsx'
import GallerySearchByGenre from './gallery_buttonsearch.jsx'


class Gallery extends Component {
  //whenever the user search, give that search value to the state, so we nned to initiate a state in ctor
    constructor(props){
      super(props);
      //add "select video" function, add a term to state, and that would be passed to children
      //update the video: pass a callback from app -> videolist ->videolistitem. If user click one video item, then run the call back with a video that belongs to it
      this.state = {
        videos: [],
        selectedVideo: null //pass it to videodetalis
      };
      //Real Search:
      //When the app runs, it better that user could see some data pop away, so move the TYSearch to ctor
      this.videoSearch = this.videoSearch.bind(this);
      this.videoSearch('28'); //keep our intial search
    }

    videoSearch(term){  //the search term: users input
      const API_URL_GENRE = 'https://api.themoviedb.org/3/genre/' + term + '/movies?api_key=8182dc9d3ddd42bb27898e4340f0d990&language=en-US&include_adult=false&sort_by=created_at.asc'; //Function: Search by GenreID at Ascending order
      axios.get(API_URL_GENRE)
      .then((response) => {
        this.setState({
          videos: response.data.results.slice(0,18)
        })
        console.log(response.data.results[0])
      })
      .catch(error => {
        console.log(error);
      })
    }

    render () {
      return (
        <div>
          <GallerySearchByGenre onSearchTermChange = {(term) => this.videoSearch(term)}/>
          <GalleryList
            video = {this.state.selectedVideo}
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos} />
        </div>
      );
    }
}

export default Gallery
