import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

export default class Home extends Component {
  handleSearchBarSubmit = function(query) {
    console.log("try to handle submit query", query);
    this.props.history.push('/results');
  }

  render() {
    return (
      <div className="logo">
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit} />
        <RecentPosts />
      </div>
    );
  }
}
