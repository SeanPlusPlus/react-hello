import 'babel-polyfill';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Dog from '../shared/dog';
import Link from '../shared/Link.react';

const dogBark = new Dog('Browser Toby').bark();

const App = props => (
  <div>
    <Link>Foo</Link>
    The dog says: {props.message} YO!!!!!!!
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={dogBark} />, document.querySelector('.app'));
