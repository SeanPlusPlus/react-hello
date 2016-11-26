import React from 'react';

class Features extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'SeanPlusPlus',
      menu: ['download', 'features', 'contact'],
    };
  }

  render() {
    return (
      <section id="features" className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h2>Unlimited Features, Unlimited Fun</h2>
                <p className="text-muted">Check out what you can do with this app theme!</p>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait white">
                  <div className="device">
                    <div className="screen">
                      <img src="img/demo-screen-1.jpg" className="img-responsive" alt="" /> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <div className="feature-item">
                      <i className="icon-screen-smartphone text-primary" />
                      <h3>Device Mockups</h3>
                      <p className="text-muted">
                        Ready to use HTML/CSS device mockups, no Photoshop required!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-item">
                      <i className="icon-camera text-primary" />
                      <h3>Flexible Use</h3>
                      <p className="text-muted">
                        Put an image, video, animation, or anything else in the screen!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="feature-item">
                      <i className="icon-present text-primary" />
                      <h3>Free to Use</h3>
                      <p className="text-muted">
                        As always, this theme is free to download and use for any purpose!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-item">
                      <i className="icon-lock-open text-primary" />
                      <h3>Open Source</h3>
                      <p className="text-muted">
                        Since this theme is MIT licensed, you can use it commercially!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
