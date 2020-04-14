## Running Project

- install packages: `npm install` or `yarn install`
- start development server: `npm start` or `yarn start`

## File Structure:

```
|-- public
|-- src
    |-- index.js
    |-- Components
        |-- App
            |-- tests
                |-- index.test.js
            |-- index.js
            |-- index.scss
        |-- Room
            |-- tests
                |-- index.test.js
            |-- index.js
            |-- index.scss
        |-- LightSwitch
            |-- tests
                |-- index.test.js
            |-- index.js
            |-- index.scss
```

## Project Thoughts:

This is a small project that turns the lights on in a room when the switch is clicked. All of the components are functional and stateless, with the exception of `<Room />` using hooks' _useState_ function. I contemplated using `redux` in this project then quickly realized it would have been complete overkill. However, redux naturally allows for a more thoroughly tested/stable application. That being said, I'm confident that my application's components are quite stable.

## Takeaways

Overall, I enjoyed this project and am a little ashamed to say that I spent most of my time with css transitions and creating svg paths. I decided to stop at its current state because it satisfies all of the requirements, and anything extra would be along the lines of adding more styling and css. I didn't want spend time over-engineering something that was functionally complete. Having said that, there are some crazy cool things you can do with svg's and css (it's a dangerous rabbit hole), I wanted to complete this project and submit it as expediently as possible while still demonstrating my ability in React.

### Available Scripts

### `yarn start` or `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
