import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'SeanPlusPlus',
      menu: ['download', 'features', 'contact'],
    };
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="header-content">
                <div className="header-content-inner">
                  <h1>Yo Dude Description Here!</h1>
                  <a href="#download" className="btn btn-outline btn-xl page-scroll">
                    Start Now for Free!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait white">
                  <div className="device">
                    <div className="screen">
                      <img src="img/demo-screen-1.jpg" className="img-responsive" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;