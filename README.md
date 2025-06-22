# my-bookshelf

this is an app used to store books I have read and my comments


to activate virtual environment:
1. python -m venv venv 
2. source venv/bin/activate

to run front end - react:
1. go to 'my-bookshelf-frontend' folder
2. npm start

to run front end - react with tailwind:
1. go to 'my-bookshelf-frontend' folder
2. npx tailwindcss -i ./src/tailwind.css -o ./src/tailwindoutput.css --watch

to run back end - fastAPI:
1. go to 'my-bookshelf-backend'/'app' folder
2. uvicorn main:app --reload


What the running app looks like:
![Alt text](runningapp.png)


What did I do to combine tailwind with frontend framework:
# https://tailwindcss.com/docs/installation/tailwind-cli
cd to frontend folder
command: 
1. 
    npm install tailwindcss @tailwindcss/cli
2. 
    create a new file inside my-bookshelf-frontend/src/tailwind.css
3. 
    below should create a tailwindoutput.css file inside my-bookshelf-frontend/src
    This command tells Tailwind to:
        Take tailwind.css as the input
        Generate tailwindoutput.css as the compiled file
        Recompile on file changes (--watch)

    npx tailwindcss -i ./src/tailwind.css -o ./src/tailwindoutput.css --watch

4.
    add this to my-bookshelf-frontend/src/App.js
        import './tailwindoutput.css';
    add this to my-bookshelf-frontend/src/tailwind.css
        @import "tailwindcss";
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    add this to my-bookshelf-frontend/public/index.html
        <head>
            ...
            <link href="./tailwindoutput.css" ref="stylesheet"/>
            ...
        </head>

5. ready to change our style, note that these changes need to be made while step3's command
   is running.
   An example change can be done inside my-bookshelf-frontend/src/App.js:
   <h1 class="text-3xl font-bold text-center text-red-500">


Declaration:
I acknowledge the use of ChatGPT and DeepSeek to help me develop this application.
I entered the following prompts: 
    - how to make use of this backend function in my react frontend? with insert code
    - what does this do: npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch


Bugs encountered & Solutions:
    bug: sh: react-scripts: command not found
    solution: npm install --save react react-dom react-scripts
    solution reference: https://stackoverflow.com/questions/40546231/sh-react-scripts-command-not-found-after-running-npm-start

    bug: tailwind style not showing
    solution: checkout tailwindoutput.css file, if it didn't contain the style definition
          then it means you didn't import basic tailwind style correctly
          fix this by include this in my-bookshelf-frontend/src/tailwind.css: 
          @import "tailwindcss";