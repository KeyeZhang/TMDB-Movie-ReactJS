import React, { Component } from 'react'
import { Button, List, Segment, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Home.scss'
import GalleryListItem from './gallery_list_item.jsx'

const GalleryList = (props) =>{ // props from parents would arrive here as params
  const videoItems = props.videos.map((video) => {
    return (
      <GalleryListItem
        videos = {props.videos}
        onVideoSelect = {props.onVideoSelect}
        key = {video.id}
        video = {video} />
    );
  });
  //const data = props.videos, "data" would be an array of vidoes!
  return (
    //making a list: build a loop(stay from for loop!)
    //better: to use map iterator</div></div>
    <div>
      <List className = "list-group">
        {videoItems}
      </List>
    </div>
  );
};

GalleryList.propTypes = {
  video: PropTypes.element.isRequired
};
export default GalleryList
