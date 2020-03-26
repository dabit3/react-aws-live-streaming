## Live Streaming with React & AWS

Follow me on Twitter [@dabit3](https://twitter.com/dabit3)

> This project goes along with my blog post on Dev.to - [Building a Custom Live-streaming Platform with React & AWS](https://dev.to/aws/building-a-serverless-live-streaming-platform-with-react-aws-1jmk)

This project is an example of how to deploy a live streaming back end using AWS Amplify and [AWS Elemental MediaLive](https://aws.amazon.com/medialive/), and connect it to a front end project (in this case, React).

### Amplify Video

This project uses Amplify Video, a CLI plugin for the AWS Amplify CLI. To learn more about Amplify Video, check out [the documentation](https://github.com/awslabs/amplify-video).

To learn how to build this project from scratch, check out the blog post [here]().

### App.js

The main code for the client application is located in __src/App.js__

```js
/* src/App.js */
import React from 'react'
import videojs from 'video.js'
import awsvideoconfig from './aws-video-exports'
import './App.css'
import 'video.js/dist/video-js.css'

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props)
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
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

export default App
```