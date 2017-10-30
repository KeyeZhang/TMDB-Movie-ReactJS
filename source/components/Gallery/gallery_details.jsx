import React, { Component } from 'react'
import { Button, List, Image, Container, Header, Segment, Label, Card, Icon, Menu, activeItem, Input, Grid} from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import genre from './genre.json'
import styles from './Home.scss'

class GalleryDetails extends Component {

  constructor(props){
    super(props);
    console.log(this.props.location.state);

    this.state = {
      selectedVideo: this.props.location.state.selectedVideo,
      videos: this.props.location.state.videos
    }; //intialize the state, only use "this.state" in ctor, everywhere else, we use this.setState({term: ....})

    this.handleItemClick = this.handleItemClick.bind(this);
    console.log("aaaaa");
}

handleItemClick(name){
  return <Redirect to = {{pathname: "/Gallery"}} />;
}

render(){
   //getindex
    const getindex = this.props.location.state.videos.map((elem) => {return (elem.id);}).indexOf(this.props.location.state.selectedVideo.id);
    //get the current index of "video", remember the trick
    const videos_size = this.props.location.state.videos.length;
    let nextindex = getindex + 1;
    let previndex = getindex - 1;
    //fix the problem of index out of range
    if(getindex == 0){
      previndex = videos_size - 1;
    }
    else if(getindex == videos_size - 1){
      nextindex = 0;
    }
    //assign the next or prev video
    const nextvideo = this.props.location.state.videos[nextindex];
    const prevvideo = this.props.location.state.videos[previndex];

    return (
      <div>
        <Menu inverted size='large'>
        <Menu.Item name="Keye's Movie DB" active={activeItem === "Keye's Movie DB"} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
          <Link to = {'/Gallery'}>
            <Menu.Item name='Gallery' active={activeItem === 'logout'} />
          </Link>
          <Link to = {'/'}>
            <Menu.Item name='Search' active={activeItem === 'logout'} />
          </Link>
          </Menu.Menu>
        </Menu>

        <Grid centered>
          <Grid.Column width={2}>
            <Link to = {
                {
                  pathname: `/GalleryDetails/${prevvideo.id}`,
                  state: {
                    selectedVideo: prevvideo,
                    videos: this.state.videos
                  }
                }
              }>
            <Button>Prev</Button>
          </Link>
          </Grid.Column>

          <Grid.Column width={7}>
            <Card centered>
            <Image src={"http://image.tmdb.org/t/p/w300/" + this.props.location.state.selectedVideo.poster_path} />
              <Card.Content>
                <Card.Header>
                  {this.props.location.state.selectedVideo.title}
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    Release Date: {this.props.location.state.selectedVideo.release_date}
                  </span>
                </Card.Meta>
                <Card.Description>
                  {this.props.location.state.selectedVideo.overview}
                </Card.Description>
              </Card.Content>

              <Card.Content extra>
                  <Icon name='user' />
                  Rate:{this.props.location.state.selectedVideo.vote_average}
              </Card.Content>
              <Card.Content extra>
                  <Icon name='user' />
                Popularity:{this.props.location.state.selectedVideo.popularity}
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width = {2}>
            <Link to = {
                {
                  pathname: `/GalleryDetails/${nextvideo.id}`,
                  state: {
                    selectedVideo: nextvideo,
                    videos: this.state.videos
                  }
                }
              }>
              <Button>Next</Button>
            </Link>
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

GalleryDetails.propTypes = {
  video: PropTypes.element.isRequired
};

export default GalleryDetails
