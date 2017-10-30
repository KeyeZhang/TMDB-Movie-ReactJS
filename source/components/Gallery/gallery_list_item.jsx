import React, { Component } from 'react'
import { Button, List, Image } from 'semantic-ui-react'
import { Link, Redirect,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Home.scss'
import GalleryDetails from './gallery_details.jsx'

class GalleryListItem extends Component {
  //= ({video}): we plug out "video" from the prop, same as:
  //const video = props.video;
  //get back from its parent
  //const imgUrl = video.snippet.thumbnails.default.url;

  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };

  }

  render(){
    return (
      <Link to = {
        {
          pathname: `/GalleryDetails/${this.props.video.id}`,
          state: {
            selectedVideo: this.props.video,
            videos: this.props.videos
          }
        }
      }>

        <List className = "list-group-item">
          <List.Item className = "list-item">
              <Image  src = {"http://image.tmdb.org/t/p/w185/" + this.props.video.poster_path}/>
          </List.Item>
        </List>

      </Link>
    )
  }
}

GalleryListItem.propTypes = {
  video: PropTypes.element.isRequired
};
export default GalleryListItem
