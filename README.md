# installation
## follow the steps

You should need to install the next libraries using npm or yarn globally
>babel-cli, live-server
###### not need to be @next because when using this we have problems

Inside the project add the next modules using yarn
>babel-preset-react, babel-preset-env

Steps for executing the app
> 1. babel src/app.js --out-file=public/scripts/app.js --presets='env,react' --watch
###### this will convert our src/app.js file to react app.js format in scripts app.js
> 2. live-server public
###### this will execute our principal html in our public folder