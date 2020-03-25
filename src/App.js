import React from 'react';
import logo from './logo.svg';
import './App.css';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import awsvideoconfig from './aws-video-exports';

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <>
        <div data-vjs-player style={{
            width: 960, height: 540
          }}>
          <video  ref={(node) => { this.videoNode = node; }} className="video-js" />
        </div>
      </>
    );
  }
}

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: awsvideoconfig.awsOutputLiveLL,
  }]
}

function App() {
  return (
    <div>
      <nav style={nav}>
        <p style={navHeading}>Live Streaming with React & AWS</p>
      </nav>
      <div style={container}>
        <VideoPlayer { ...videoJsOptions } />
      </div>
    </div>
  );
}

const nav = { padding: '0px 40px', height: 60, borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center' }
const container = { paddingTop: 40, width: 960, margin: '0 auto' }
const navHeading = { margin: 0, fontSize: 18 }

export default App;