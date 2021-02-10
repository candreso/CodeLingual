# BoobahLang: The Programming Language Translator

The purpose of this web application is to help individuals quickly learn the basics of new languages by translating standard and common functions from one language to another (so like Google Translate, but for code)!

<b>The basic idea:</b> A user would type in the name of a standard function in a language that they know, and the application would return the equivalent function in another language (the desired language).

For example, if a user typed in toUpperCase() and selected Java as their source lang, the app would return upper() if Python was selected as their target lang.

<b>How it would work:</b> The application would run on both manual translations done by real people, and by automatic translations done with webscraping. (Completing the webscraping part before the project due date wouldn't at all be a priority, though.) Users of the application will be able to add new translations if their results come up blank and they want to contribute, and there will be an option to report translations as well.

In terms of <b>MERN</b> architecture: 1. The database would be used to store translations/metadata; 2. Express+Node would be used for back-end work, which will include inserting and retrieving info from the database and webscraping if we get to that part; and 3. React would be for the front-end interface. (IF any of you guys are interested in AI, there's a way we could incorporate that to produce more accurate translations as well.)

<h1>HOW TO RUN THE PROJECT</h1>
Open up 2 terminals either from VS Code or your preffered terminal

Running the server: We will be using nodemon, a library that automatically restarts nodejs code upon saving, on the server.
Run "npm run server" without the quotes in the top directory where server.js is. Server will run on your http://localhost:5000/

Running the client (React): React directory is in the "client" folder. Our client side will have its own package.json and node/modules just like our server side code will. You need to cd into the client folder and run "npm run start" which will start your react app at http://localhost:3000/

I also made a .gitignore file so we can put folders inside it that we dont want pushed. For example .env, 2 different node modules (our client and server side because these folders are too big to push and pull). This means that our dependencies like react, express, mongoose will not be downloaded when you clone the repository, so you have to run "npm install" in the server directory and client directory to get our dependencies so your code works.
When you run "npm install" npm will locate the package.json file and read the dependencies inside to see what it needs to download. This is why MERN teams never push or pull node/modules because the package.json will always have a blueprint of what needs to be downloaded on the go.
