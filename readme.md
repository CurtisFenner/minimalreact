# Starting a Minimal React App

This is an example of a minimal React application with as few dependencies as
possible.

Open the folder with Visual Studio Code.

Next, start the TypeScript watch command from

> Terminal → Run Build Task (Ctrl+Shift+B) → tsc: watch

The `tsc: watch` task will automatically recompile if anything in your
TypeScript project is changed.

You can use the Problems view to see type errors.

The resulting JavaScript files will appear in the `built/` directory.

In order to run the React app, you'll need to host the HTML and JavaScript on
a server (modern browsers like Chrome don't let you run scripts from the
file:// scheme). If you have Python3 installed, you can use that to start a
webserver that hosts all of the files in a folder:

```bash
python3 -m http.server
# Then, visit http://localhost:8000/page.html to see your React app
```


## Getting TypeScript Types

If your TypeScript/VSCode complains that it can't find `React` or `ReactDOM` it
means you haven't installed the "types" module for React.

You can use `npm` to install these. They don't actually become a part of your
app, and you don't need to deploy the `node_modules` folder in order to use
React. TypeScript just reads the type files to know the types of functions that
React provides.

You can get them by running

```
npm install @types/react
npm install @types/react-dom
```

## What's in page.html?

This is the HTML page that will contain your React app. It includes hosted
versions of React 16, a `<div id="main-element"></div>` that your React app will
render into, and includes the generated `built/main.js` file.

## What's in main.tsx?

This is a `tsx` file -- a TypeScript file with JSX expressions. JSX expressions
make React a lot more powerful!

The `main` function is called from a `<script>` tag in page.html.

It creates a new react app inside the `"main-element"` tag in page.html.

## What's in tsconfig.json?

A tsconfig.json file sets settings for the TypeScript compiler (and for VSCode).

The `"target"` option determines what version of JavaScript the output should be
in. A more recent version will have access to more features (like `Set`).

The `"module"` option controls the behavior of `import`s, which is needed to
compile the `@types/react` dependency.

The `"sourceMap"` option creates `.js.map` files. This makes runtime errors
point to lines in your `.tsx` file, instead of the line in the generated `.js`
file.

The `"outDir"` option controls which directory the generated `.js` and `.js.map`
files are created in.

The `"noImplicityAny"` and `"strict"` options increase the strictness of the
TypeScript compiler.

The `"jsx"` option enables using JSX expressions in your `.tsx` files.

## What's in .gitignore?

This lists the files that git will ignore (so they won't accidentally be
included in a `git add .` or `git add -a`, for example).

The `node_modules` folder doesn't need to be included as part of your
repository. After installing dependencies (like the `@types/react` package),
npm will createa `package-lock.json` file which will let you install the exact
same version later.

## Building without VSCode

You can run the TypeScript compiler to create the `.js` and `.js.map`
files:

```bash
tsc
```
