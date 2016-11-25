import React from 'react';
import Scroll from 'react-scroll';
import $ from 'jquery';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'SeanPlusPlus',
      menu: ['download', 'features', 'contact'],
      scroll: Scroll.animateScroll,
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.state.scroll.scrollTo($(e.target.hash).offset().top);
  }

  render() {
    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">{this.state.title}</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {this.state.menu.map(m =>
                <li key={m}>
                  <a className="page-scroll" onClick={e => this.handleClick(e)} href={`#${m}`}>{m}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
