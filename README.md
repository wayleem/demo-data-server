# Deploying

You can run a command to populate a `dist` folder that is ready for deployment if you are running a web server. The index.html file will not run if you execute it locally, it needs to be deployed on a web server.

If you need a web server please read [Building & Testing](#Building&Testing).

# Building & Testing

nodejs and npm are required.

1. run `npm i` in the terminal of the working directory.
2. run `npm run dev` to deploy onto a local host server.
3. run `npm run build` in order to populate the `dist` folder which you can then use for deploying or production as explained in [Deploying](#Deploying).
