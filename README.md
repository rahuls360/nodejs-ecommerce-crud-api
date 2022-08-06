## Create a CRUD Api for an E-Commerce Dog Store

Created a nodejs API that is used to store dogs sold on an E-Commerce store

## CRUD

GET /products -> Get all dogs
GET /products/product_id -> Get particular dog details
POST /products -> Create a new dog
PATCH /products/product_id -> Update a particular dog
DELETE /products/product_id -> Delete a particular dog

## Features

- Use REST Client in VS code to easily test out the API inside VS code. Click on send request for each API call.
- While creating, we randomly generate price b/w 100 and 10,000, if not present.
- While creating, we randomly generate dog image via an API call, if not present.

### Reference

https://www.youtube.com/watch?v=fgTGADljAeg

### Setup

- Install MongoDB, Mongo Compass and Mongo Shell. Refer the official documentation.

### Bugs fixes

- To deploy to vercel -> Faced issues with file name. (server.js vs index.js) -> Fix: Use index.js instead of server.js. Change main file in package json and other scripts
- While deploying, faced issues with package json script not completing deployment -> Fix: Renamed my development script to another name. Created a 'start' script, so that vercel's deployment doesn't wait for the program to end. (start scripts keep running vs build scripts end once completed). Used node file.js for safety reasons. Debugged this using Settings -> Advanced -> Directory Listing. (which shows the files deployed on that URL)
- Faced issues while running nodejs server in vercel -> Fix: Add vercel config [https://www.youtube.com/watch?v=OoI87qhiFlQ]
- Faced issues with MongoDB connection string -> Fix: Remove retryWrites=true in the string [https://stackoverflow.com/a/64205794]
- Add environment variables -> In Project -> Settings -> Environment variables
- Do deployments from local. Install vercel-cli globally using npm. Pull environment variables from Vercel's Project settings using `vercel env pull`. It overrides your .env file
