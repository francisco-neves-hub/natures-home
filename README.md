# Nature's Home Front-end

This is a Front-end project, built as a Single Page Application using React, for a fictional construction company called Nature's Home. The project was created and works in Vite, with Hot Module Replacement and some ESLint rules.

# Project Structure

├── dist  
│   ├── assets  
│   ├── index.html  
│   └── vite.svg  
├── public  
│   └── vite.svg  
├── src  
│   ├── assets  
│   ├── components  
│   ├── helpers  
│   ├── layout  
│   ├── pages  
│   ├── store  
│   ├── App.jsx  
│   ├── index.css  
│   └── main.jsx  
├── .gitignore  
├── eslint.config.js  
├── index.html  
├── package-lock.json  
├── package.json  
├── README.md  
└── vite.config.js  

Here is a brief description of each content inside the src folder:
- assets: folder containing the necessary media for the website
- components: folder containing reusable custom React components
- helpers: folder containing helper functions used throughout the rest of the project
- layout: folder containing React components used in every page, composing the static layout
- pages: folder containing the React components that represent the website pages
- store: folder containing context functions
- App.jsx: file creating the routing and initializing additional services
- index.css: global CSS file
- main.jsx: initial React component

# Run

Run `npm install` to install the project dependencies.  
Run `npm run dev` to host the project locally.
