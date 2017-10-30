import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Home from './components/Home/Home.jsx';
import MovieList from './components/Home/movie_list.jsx';
import Gallery from './components/Gallery/gallery.jsx';
import GalleryDetails from './components/Gallery/gallery_details.jsx';

// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');

render(
    <Router>
      <div>
        <Route path = "/Gallery" component = {Gallery}/>
        <Route exact = {true} path = "/" component = {Home} />
        <Route path = "/GalleryDetails" component = {GalleryDetails} />
      </div>
    </Router>,
    // Define your router and replace <Home /> with it!
    document.getElementById('app')
);
