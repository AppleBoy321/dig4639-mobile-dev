
# Week 12A Synchronous Demo

Procedure
1. Create a new directory in your repository: demo/w12b
1. Create a folder named "server"
1. Open a terminal in that directory and type "npm init" and return
1. Install express. "npm install express"
1. Add the following code to the file 

    ```javascript
    // Simple Express Hello World found here: https://expressjs.com/en/starter/hello-world.html
    const express = require('express')
    const app = express()
    const port = 3001

    app.get('/', (req, res) => res.send('Hello World!'))

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    ```

1. Install [Postman](https://www.postman.com/product/api-client)
1. Start the server:
    ```bash
    node index.js
    ```
1. Use Postman to send a GET request to localhost:3001
    <details><summary>Screenshot of Postman</summary>
    ![alt text](./images/Postman-localhost.PNG)
    </details>
1. Use a Chrome Developer Tools to examine navigating to localhost:3001:
    <details><summary>Screenshot of Chrome</summary>
    ![alt text](./images/Chrome-localhost.PNG)
    </details>
# Create a simple React app to act as client
1. Create a new react app in the client directory:
```bash
npx create-react-app client
```
