# Mathesis

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## How to run

There are a few simple steps for running this repo.

1) run the command `npm install` so that all dependencies are installed

2) run the command `ng build`, this will enable you to run the SSR version of the app.

3) run the command `npm run serve:ssr:mathesis`, this will run an ssr version of the app on http://localhost:4200/

## Considerations

in order to have the expected results for the various ssr methods, including MathML, Javascript should be disabled in the browsers, if not unexpected behaviors can happen.

However, this will be mitigated in the next commit, but if you are reading this, Javascript still needs to be disabled for SSR to shine.