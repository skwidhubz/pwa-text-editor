# Text Editor

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

**Table of Contents**
-
- [Project Description](#project-description)
- [How to Run](#how-to-run)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [License](#license)


**Project Description**
-
A text editor web application which can be downloaded and used without internet connection

[Link to deployed application](https://tmp-text-edit-pwa.herokuapp.com/)

![](./Assets/screenshot_2.png)

**How to Run**
-
1. This application will use the following npm packages:
    - express 
    - webpack 
    - webpack-dev-server
    - webpack-pwa-manifest 
    - babel (Babel)
    - css-loader 
    - concurrently
    - idb

2. Run the application locally with the commands:
    - npm install
    - npm run start

**User Story**
-
- AS A developer
- I WANT to create notes or code snippets with or without an internet connection
- SO THAT I can reliably retrieve them for later use


**Acceptance Criteria**
-
- GIVEN a text editor web application
- WHEN I open my application in my editor
- THEN I should see a client server folder structure
- WHEN I run `npm run start` from the root directory
- THEN I find that my application should start up the backend and serve the client
- WHEN I run the text editor application from my terminal
- THEN I find that my JavaScript files have been bundled using webpack
- WHEN I run my webpack plugins
- THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application
- THEN I find that the text editor still functions in the browser without errors
- WHEN I open the text editor
- THEN I find that IndexedDB has immediately created a database storage
- WHEN I enter content and subsequently click off of the DOM window
- THEN I find that the content in the text editor has been saved with IndexedDB
- WHEN I reopen the text editor after closing it
- THEN I find that the content in the text editor has been retrieved from our IndexedDB
- WHEN I click on the Install button
- THEN I download my web application as an icon on my desktop
- WHEN I load my web application
- THEN I should have a registered service worker using workbox
- WHEN I register a service worker
- THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Heroku
- THEN I should have proper build scripts for a webpack application


**License**
- MIT
- T.Parker [skwidhubz](https://github.com/skwidhubz)
