import React, { Component } from 'react'
import { Button, Segment, Label, Menu, activeItem, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

//add
import ReactDOM from 'react-dom';
import SearchBar from '../Search/search_bar.jsx';
import VideoList from './movie_list.jsx';
// import VideoFilter from '../MovieList/movie_filter.jsx'
import axios from 'axios';

//download a package to make a search request: youtube api search, return some data based on user's search
const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8182dc9d3ddd42bb27898e4340f0d990&query=';
//const API_KEY_TMDB = '8182dc9d3ddd42bb27898e4340f0d990';


class Home extends Component {
  //whenever the user search, give that search value to the state, so we nned to initiate a state in ctor
    constructor(props){
      super(props);
      //add "select video" function, add a term to state, and that would be passed to children
      //update the video: pass a callback from app -> videolist ->videolistitem. If user click one video item, then run the call back with a video that belongs to it
      this.state = {
        videos: [],
        selectedVideo: null, //pass it to videodetalis
        sort_dsc: true,
        sort_asc: false,
        sort_by_rate: false,
        sort_by_pop: true
      };
      //Real Search:
      //When the app runs, it better that user could see some data pop away, so move the TYSearch to ctor
      this.videoSearch('spider'); //keep our intial search
    }

    videoSearch(term){  //the search term: users input
      const API_URL_TMDB = API_URL + term; //Function: Search
      axios.get(API_URL_TMDB)
      .then((response) => {
        this.setState({
          videos: response.data.results.slice(0,18)
        })
        console.log(response.data.results)
      })
      .catch(error => {
        console.log(error);
      })
    }

    sortChange(term){
      if(term == "by_rate"){
        this.setState({
          sort_by_rate: true,
          sort_by_pop: false
          });
      }
      else if(term == "by_pop"){
        this.setState({
          sort_by_rate: false,
          sort_by_pop: true
        });
      }
    }

    orderChange(term){
      if(term == "dsc"){
        this.setState({
          sort_dsc: true,
          sort_asc: false
        });
      }
      else if(term == "asc"){
        this.setState({
          sort_dsc: false,
          sort_asc: true
        });
      }
    }

    render () {
      //take the videoSearch function we defined above, wrap it to a debounce version , and only call it every 300 ms
      //effect: only when input stop, search happens
      // const videoSearch = {(term) => {this.videoSearch(term)}};

      //passing data from parent to child: passing the props!
      return (
        <div>
          <Menu inverted size='large'>
          <Menu.Item name="Keye's Movie DB" active={activeItem === "Keye's Movie DB"} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <SearchBar onSearchTermChange = {(term) => this.videoSearch(term)}/>
            </Menu.Item>
            <Link to = {'/Gallery'}>
              <Menu.Item name = 'Gallery' active={activeItem === 'Gallery'} />
            </Link>
            <Link to = {'/'}>
              <Menu.Item name = 'Search' active={activeItem === 'Search'} />
            </Link>
          </Menu.Menu>
        </Menu>

          <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo:selectedVideo})}
            onSortChange = {(term) => this.sortChange(term)}
            onOrderChange = {(term) => this.orderChange(term)}
            video = {this.state.selectedVideo}
            videos = {this.state.videos}
            sort_by_rate = {this.state.sort_by_rate}
            sort_by_pop = {this.state.sort_by_pop}
            sort_dsc = {this.state.sort_dsc}
            sort_asc = {this.state.sort_asc}
             />
        </div>
      );
    }
}

export default Home
