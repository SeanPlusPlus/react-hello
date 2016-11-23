import 'babel-polyfill';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Nav from '../shared/nav';

const nav = new Nav('Sean Plus Plus').main();
const links = [];
for (let i = 0, j = nav.links.length; i < j; i += 1) {
  links.push(
    <li key={i}>
      <a className="page-scroll" href={`#${nav.links[i]}`}>{nav.links[i]}</a>
    </li>
  );
}

const App = props => (
  <div>
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars" />
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            {props.data.title}
          </a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {links}
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

App.propTypes = {
  data: PropTypes.object.isRequired,
};

ReactDOM.render(<App data={nav} />, document.querySelector('.app'));
