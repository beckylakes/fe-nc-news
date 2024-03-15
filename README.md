# 📰 Northcoders News Frontend 📰
Welcome to my first frontend project at Northcoders Bootcamp!

A huge thank you again to some great tutors and great cohort members too!

## Project Summary 📚
This project was built using ReactJS components with a responsive mobile-first design with a focus on good UX/UI design connecting to a RESTful backend service that contains featues for voting, commenting and viewing articles using optimistic rendering and error handling.

As opposed to third-party CSS libraries, I decided to use vanilla CSS  I determined that I would use pure CSS for the design to allow me to more intimately understand parts of CSS like flex and grid.


### Hosted Version
Find my live webpage [here](https://65f4790db1626700929c9ac6--becky-front-end-project.netlify.app/).

My hosted backend API can be found [here](https://nc-news-zzyy.onrender.com/api)

*Please note: The application may take a few minutes to load due to slow backend servers!*

### Requirements ❗
- Node.js (minimum version: v21.4.0)

## Getting Started 👩‍💻

### Clone the repository in your terminal
```bash
git clone https://github.com/beckylakes/fe-nc-news.git
```
### Navigate into the repo using 'cd'
```bash
cd fe-nc-news
```
### Create & open a new repo with the cloned code
```bash
git remote set-url origin YOUR_NEW_REPO_URL_HERE
git branch -M main
git push -u origin main
code .
```
### Install Dependencies
```bash
npm install
```

### Launch project in development mode with Vite:

1. Run the following code in the terminal to begin development with the dev preview server:
```
npm run dev
```
2. Open the localhost address returned in the terminal in the browser of choice either by Ctrl+Click or copy and paste.

Note: save any code edits to refresh the development server and preview changes.

### Build a production version 🔧 :

1. Run the following code in the terminal to run the build compiler: 
```
npm run build
```
2. Run the following code in the terminal to start the preview server and check the production build for errors or faults (repeat this process from steps 1 and 2 following any changes made to the code):
```
npm run preview
```

3. Deploy to your host of choice follow the instructions given in their documentation (if going with Netlify please see below!)

### Hosting with Netlify 🔨 :

1. Create a file named *_redirects* without a file extension within your public directory and add the following rule inside the file:  
```
/* /index.html 200
```

2. Install the Netlify CLI tool by running the following code in the terminal:
```
npm install netlify-cli -g
```

3. Deploy the project to a draft URL using the following code and following the prompts given by Netlify:
```
netlify deploy
```
Ensure the deploy path given to Netlify is the build directoy ./build and if done correctly you should be able to preview a draft deployment of the project in order to test before moving to a production deployment.

4. Deploy to a production URL by using the following code and specifiying the build path again:
```
netlify deploy --prod
```
You should now have a production URL e.g. **https://your-site-name.netlify.com**

5. Redeployment can be done by running the following 3 lines of code in the terminal:

```
npm run build
netlify deploy
netlify deploy --prod
```

## Packages 📦
- axios
- react
- vite
- react-dom
- react-router-dom

## Additional Information 📝
For any questions or issues, please let me know [here](https://github.com/beckylakes/fe-nc-news/issues).



