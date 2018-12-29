## info regarding this app

I decided to use React with Typescript provided by a powerfull starter from Microsoft (https://github.com/Microsoft/TypeScript-React-Starter)

Most of the logic is inside src/App.tsx, I used an external library to generate a debounceInput.

I've just separated the results of bandsintown API into two stateless components (ArtistCard and EventsTable) which can be found in src/compoments.

I've also generated all the typescript interfaces from the bandsintown API result with this tool (http://json2ts.com/).

Feel free to try the handy Typescript integration (auto import, autocomplete ...)

Regarding tests I decided to use Jest + Enzyme. it's shallow rendering components(and more), and use snapshoots to quickly write test.

Since I only had ~4 hours I didnt go into detail with design, so im simply using styled-components and importing css from bootstrap then use native features.

the bonus feature I provided is Typescript integration which IMO bring a very solid base for creating Web app in adition to React. So nothing fancy in terms of user perspective but safer,faster and more comfy to code for the developer.

there is also a registerServiceWOrker provided with the starter, please check it out.

to install and run the app please run

### `npm install && npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
