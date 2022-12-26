# Cat wiki app built with
- Vite
- React
- Typescript
- Tailwindcss
- Express
- Cat wiki rest api [the cat api](https://thecatapi.com/ 'link')

## How I worked on this project
- I built the app using figma designs from [devChallenges.io](https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt 'Figma link')
- I used the user stories from the challenges

## How to navigate this project
- This application fetches data from the cat api. Examples for [the request](https://github.com/itsabubakar/cat-wiki/blob/main/controllers/catController.js) and [data transformation](https://github.com/itsabubakar/cat-wiki/blob/main/client/src/components/Breeds.tsx)

## Why I built the project this way
- This is to reinforce and practise my data fetching skills using express js and serving the code to the backend
- I did not use a state management library.
- This is more focused on the frontend but my plan is to continue practising and developing both my frontend and backend skills.

## Libraries used
### Frontend
- React router: I used this to create the dynamic pages when users click on a cat to see more information
- 
### Backend
- Axios: I used axios to handle my get requests.
- Cors
- Dotenv

## If I had more time
- Build and deploy my own api
- Refactor some of the code. Especially this part

## Available scripts
In the project directory you can run:

`npm install && npm run server && cd client && npm install && npm run dev`

That will install all the necessary dependancies and start the server and client.
