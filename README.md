## Live Streaming with React & AWS

Follow me on Twitter [@dabit3](https://twitter.com/dabit3)

> This project goes along with my blog post on Dev.to - [Building a Custom Live-streaming Platform with React & AWS]()

This project is an example of how to deploy a live streaming back end using AWS Amplify and [AWS Elemental MediaLive](https://aws.amazon.com/medialive/), and connect it to a front end project (in this case, React).

### Amplify Video

This project uses Amplify Video, a CLI plugin for the AWS Amplify CLI. To learn more about Amplify Video, check out the documentation.

To learn how to build this project from scratch, check out the blog post [here]().

### Deploying this app

To deploy this app into your account, follow these steps.

1. Clone the repo, install the dependencies

```sh
$ git clone git@github.com:dabit3/react-aws-live-streaming.git
```

2. Initialize the Amplify app

```sh
$ amplify init
```

3. Deploy the back end services

```sh
$ amplify push
```

4. Run the project

```sh
$ npm start
```