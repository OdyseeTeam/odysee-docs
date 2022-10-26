# Odysee Help Hub - help.odysee.tv

This repo contains the code that powers help.odysee.tv, which is built using Docusaurus 2 and describes how to use the [Odysee Frontend](https://github.com/OdyseeTeam/odysee-frontend).

 <a href="https://github.com/OdyseeTeam/odysee-frontend/blob/master/LICENSE" title="MIT licensed">
   <img alt="npm" src="https://img.shields.io/dub/l/vibe-d.svg?style=flat">
 </a>
 <a href="https://chat.odysee.com">
   <img src="https://img.shields.io/discord/362322208485277697.svg?logo=discord" alt="chat on Discord">
 </a>

## Table of Contents

1. [Usage](#usage)
2. [Running from Source](#running-from-source)
3. [Contributing](#contributing)
4. [License](#license)
5. [Security](#security)
6. [Contact](#contact)

## Usage

Go to the website to interact with the documentation.

## Running from Source

#### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (v16 required)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. Clone (or [fork](https://help.github.com/articles/fork-a-repo/)) this repository: `git clone https://github.com/OdyseeTeam/odysee-docs`
2. Change directory into the cloned repository: `cd odysee-docs`
3. Install the dependencies: `npm install`
4. Run the web app for development: `npm run start`

#### Deploy the web app (_experimental_)

1. Create a server with a domain name and a reverse proxy https to port 3000.
2. Install pm2, node v16, npm
3. Clone this repo
4. Run `npm install` to install
5. Run `npm run build` to build
6. Navigate to build folder: `cd build/`
7. Set up pm2 to serve build folder: `pm2 serve . 3000`

## Contributing

We :heart: contributions from everyone and contributions to this project are encouraged. Feedback is always appreciated.

## [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/OdyseeTeam/odysee-docs/issues) [![GitHub contributors](https://img.shields.io/github/contributors/OdyseeTeam/odysee-docs.svg)](https://GitHub.com/OdyseeTeam/odysee-docs/graphs/contributors/)

## License

This project is MIT licensed. For the full license, see [LICENSE](LICENSE).

## Security

For security issues, please reach out to security@odysee.com
