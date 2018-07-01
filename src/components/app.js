import React, { Component } from 'react';
import BookList from '../containers/book-list';
import ActiveBook from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div className="back">
          <h1>Books List</h1>
        <BookList/>
        <ActiveBook/>
      </div>
    );
  }
}
