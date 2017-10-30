import React, { Component } from 'react'
import { Button, Dropdown, List, Segment, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Movie.scss'
import VideoListItem from './movie_list_item.jsx'

const options_sort = [
  { key: 1, text: 'Sort By Rate', value: "by_rate"},
  { key: 2, text: 'Sort By Popularity', value: "by_pop"}
]
const options_order = [
  { key: 1, text: 'Sort In Descending Order', value: "dsc"},
  { key: 2, text: 'Sort In Ascending Order', value: "asc"}
]

const VideoList = (props) =>{ // props from parents would arrive here as params
  const videos_org = props.videos;
  const sort_by_rate = props.sort_by_rate;
  const sort_by_pop = props.sort_by_pop;
  const sort_asc = props.sort_asc;
  const sort_dsc = props.sort_dsc;
  //sort
  let videos_sort = videos_org;
  //1.sort
  if(sort_by_rate == true){
    videos_sort.sort(function(a,b){
      return (parseFloat(a.vote_average) - parseFloat(b.vote_average));
      // > 0, then ascending!
    });
  }
  else if(sort_by_pop == true){
    videos_sort.sort(function(a,b){
      return (parseFloat(a.popularity) - parseFloat(b.popularity));
    });
  }
  //2.order
  videos_sort = sort_dsc ? videos_sort.reverse() : videos_sort;
  //3.loop by map
  const videoItems = videos_sort.map((video) => {
    return (
      <VideoListItem
        videos = {props.videos}
        onVideoSelect = {props.onVideoSelect}
        key = {video.id}
        video = {video} />
    );
  });

  return (
    //making a list: build a loop(stay from for loop!)
    //better: to use map iterator
    <div>
      <Grid>
        <Grid.Column width={8}>
          <Dropdown
              fluid
              selection
              placeholder='Sort By Different Properties'
              options = {options_sort}
              onChange = {(event, data) => props.onSortChange(data.value)}
            />
        </Grid.Column>
        <Grid.Column width={8}>
          <Dropdown
              fluid
              selection
              placeholder='Sort By Different Orders'
              options = {options_order}
              onChange = {(event, data) => props.onOrderChange(data.value)}
            />
        </Grid.Column>
      </Grid>

      <List>
        {videoItems}
      </List>
    </div>
  );
};

VideoList.propTypes = {
  video: PropTypes.element.isRequired
};

export default VideoList
