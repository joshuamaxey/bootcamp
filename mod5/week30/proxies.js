//! Proxies help our frontend communicate witho ur backend in development.

// In Vite, we set up a development proxy in the Vite config file: //^ frontend/vite.config.js

// This file exports an object specifying the desired configuration keys and their values.

// Vite will wrap this object in a defineConfig helper that enables VSCode autocompletion (intellisense).

// defineConfig can also take a function returning an object if your configuration depends on the mode in which the app is running.

export default defineConfig(({ mode }) => ({
    // ...
    server: { // define a 'server' key in the object returned by the defineConfig function. The return value will be another object
        proxy: { // Inside the server object, define a 'proxy' key with another object as its value
            "/api": "http://localhost:5000" // Inside the proxy object, define the routes you want to provide.
        }
        //^ This code will forward any received requests whose path beigns with 'api' to a server running on localhost port 5000.
    }
}))

// Now when the frontend seeks to fetch '/api/cats' the proxy will intercept the request because the route beings with 'api.' THen it will forward the request to the specified domain/port instead (localhost:5000/api/cats). Your backend will receive the request, and your frontend will receive its data.
