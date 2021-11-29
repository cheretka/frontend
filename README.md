## **Project setup**

- Install `npm` from [this](https://www.npmjs.com/) link
- Clone git repository into your desirable location
- `cd` into cloned repo location
- Run these commands:
```
    cp .env-template .env
    npm install
```
**Note:** Installing packages may take a while

- Run `npm start` to start the development server (it will be on [http://localhost:3000](http://localhost:3000) by default, unless you fiddle with the settings and change it)

If you're using VS Code: 
- Install `Prettier` and `ESLint` extensions
- Make sure that ESLint is set up in the settings as your default formatter for JavaScript, TypeScript etc.
- Check both `settings.json` and settings inside the VS Code itself (because they can actually differ from one another)


Aaaaaand done!


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
