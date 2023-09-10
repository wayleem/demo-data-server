# ClinChoice

I interned at ClinChoice over summer 2023 to develop a best practice guideline for future ClinChoice web applications. This demo data server is a product of those best practices by ClinChoice standards. This data server is not functional and is only for viewing of UI applications.

## Preview
Here are some gifs demonstrating the data server's use.

### Dashboard
The data server has themes such as dark and light mode, and language options.

<img src="https://github.com/wayleem/demo-data-server/blob/main/assets/clinchoice1.gif" width="600" height="400"/>

### CLI
This is a mock replica of running PreConfigured Jobs.

<img src="https://github.com/wayleem/demo-data-server/blob/main/assets/clinchoice2.gif" width="600" height="400"/>

### Data Utilities
This is a mock replica of data utilities, demonstrating forms.

<img src="https://github.com/wayleem/demo-data-server/blob/main/assets/clinchoice3.gif" width="600" height="400"/>

## Deploying

You can run a command to populate a `dist` folder that is ready for deployment if you are running a web server. The index.html file will not run if you execute it locally, it needs to be deployed on a web server.

If you need a web server please read [Building & Testing](#Building&Testing).

### Building & Testing

nodejs and npm are required.

1. run `npm i` in the terminal of the working directory.
2. run `npm run dev` to deploy onto a local host server.
3. run `npm run build` in order to populate the `dist` folder which you can then use for deploying or production as explained in [Deploying](#Deploying).
