# LAB - Class 26

## Project: Component Based UI

### Author: Hayden Cooper

### Problem Domain  
In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the useState() hook in our functional components. In order to properly manage state with the useState hook, we will now convert <App /> to a functional component.

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to enter the REST Method and URL to an API.
- As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format.

Application Flow:
- User enters an API URL.
- Chooses a REST Method.
- Clicks the “Go” button.
- Application fetches data from the URL given, with the method specified.
- Displays the response headers and results separately.
- Both headers and results should be “pretty printed” JSON.


### Links and Resources

- [GitHub Actions ci/cd](https://github.com/Hcooper23/resty/actions)
- [front-end application](https://codesandbox.io/p/github/Hcooper23/resty/main?workspaceId=d6b0a7b3-fc47-4e4d-b1fa-ce55109e7d9e) (deployed on sandbox)

### Collaborators

### Setup

#### `.env` requirements (where applicable)

N/A

#### How to initialize/run your application (where applicable)

- `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Get
- Post
- Put
- Delete

#### Tests

- npm test non created yet to pass

#### UML

![UML](./Screenshot%202023-06-20%20at%208.51.46%20PM.png)
