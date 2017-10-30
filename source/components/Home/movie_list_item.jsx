import React, { Component } from 'react'
import { Button, List, Image, Container, Grid, Rating, Divider, Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Movie.scss'

class VideoListItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
  }

  render(){
    return (
      <Grid centered>
        <Grid.Column width={3}>
          <Link to = {
            {
              pathname: `/GalleryDetails/${this.props.video.id}`,
              state: {
                selectedVideo: this.props.video,
                videos: this.props.videos
              }
            }
          }>
            <Card centered className = "list-item">
              <Image src={"http://image.tmdb.org/t/p/w184/" + this.props.video.poster_path} />
              <Card.Content>
                <Card.Header>
                  {this.props.video.title}
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    Release Date: {this.props.video.release_date}
                  </span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>

        <Grid.Column width={7}>
          <p className = "title">{this.props.video.title}</p>
          <p>{this.props.video.overview}</p>
        </Grid.Column>
        <Grid.Column width={3}>
          <Rating icon = "star" rating={this.props.video.vote_average/2 + 1} maxRating={5} disabled />
          <Divider section />
          <p className = "rate">Rate: {this.props.video.vote_average}</p>
          <Divider section />
          <p className = "rate">Popularity: {this.props.video.popularity.toFixed(1)}</p>
        </Grid.Column>
      </Grid>
    );
  }
}

VideoListItem.propTypes = {
  video: PropTypes.element.isRequired
};
export default VideoListItem
