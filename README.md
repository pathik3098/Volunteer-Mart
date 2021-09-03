## Group 10 - Web Technology

Date Created: 30 JUL 2021
Last Modification Date: 30 JUL 2021

* *Main Branch URL*: <https://github.com/smanraj54/Dal_Web_Group10/tree/main> - Contains Front-End Code (React Code)
* *Backend Branch URL*: <https://github.com/smanraj54/Dal_Web_Group10/tree/projectBackend> - Contains Back-End Code(Node & Express)
Heroku Backend URL Link : https://group10projectbackend.herokuapp.com    
Heroku Frontend URL Link: https://group10proposalsweb.herokuapp.com


# Feature: Admin Management

The admin user in the application is the one authorised to add/delete stores and item details or even update them. This functionality has the following tasks

# Admin Credentials - To login

```
Username : admin
Password : admin
```

###Tasks

*Add Store
*Add Item into a stores
*Update details of the item
*Delete Store/Item

### Files Written

*AdminPanel.js - Front Page of the admin after they login which is also the page where they will create store
*AddItem.js - Page for admin to add an item into the store
*UpdateItem.js - Page for admin to update item details
*RemoveStore.js - Page for admin to remove the store from the database
*RemoveItem.js - Page for admin to remove the item from the store's database
*AdminBackend.js - Backend node.js file containing all the API to handle from the frontend
*AdminStyles.css - CSS file for all of the frontend of the admin management feature

## Feature Cart Management and Homepage Catalogue

## After Adding items open MyCart form the NAVBAR or click on the below link:
Heroku Frontend URL Link: https://group10proposalweb.herokuapp.com/cart

## Request: Please run the backend heroku link first ... somethimes the heroku link goes down after being inactive for too long.


## Author

Manraj Singh
Cart Management and HomePage Catalogue
The customer user in this feature is authorised to add items from the homepage into the cart.

## Tasks

*Add items from the homepage into the cart. Then from the cart page person can move to the payment page or can remove the items and cancel the order.

## Files Written

*homepagebackend.js : 
    Description: In this file I have exposed the apis to fetch the data from the database and render it on the browser   page. Apis I exposed for homepage can be accessed using the backend link given above. Extensionts are get('URL:/homepage') , get('URL:/homepage/items').


*cartBackend.js:
    Description: In this file i exposed the apis which are used to fetch, update, delete, insert the cart details to and from the cart table in the database. Apis I exposed for homepage can be accessed using the backend link given above. Extensionts are get('URL:/cart'), get('URL:/cart/Items'), delete('URL:/cart/delete/:id'), get('URL:/items/:id'), put('URL:/truncate'), post('URL:/add') 

*cart.js:
    Description: This is a frontend code file in which the frontend code of cart is written. Carts page is rendered based on this file. I this file the data from cart table is fetched and rendered on the browser page. This code mainly consists of Container, Row, Col, Button, Card components of bootstrap which is used to make the site more resposive.


 *cardComponent.js
    Description: This is a frontend code file which is used by theh homepage component and the cart component. This is sub component which is called multiple times for all the items fetched from the databse. In this file the data from cart table is fetched and rendered on the browser page. This code mainly consists of Container, Row, Col, Button, Card components of bootstrap which is used to make the site more resposive.

  
  *homepageCatalogue.js
    Description: This is a frontend code file in which the frontend code of homepage is written. homepage page is rendered based on this file. I this file the data from item_details table is fetched and rendered on the browser page. This code mainly consists of Container, Row, Col, Button, Card components of bootstrap which is used to make the site more resposive.

## Feature - User Management

* Tasks
- login
- signUp
- forgot password / reset password
- delete user
- logout
- mainaing user session after login

## File Created
* Frontend Files
- ForgotPassword.js
- Homepage.js
- Login.js
- Question.js
- SignUp.js
- UpdatePassword.js
- UserHomepage.js
- Header.js
- UserHeader.js
- Footer.js

* Backend Files
- forgotPassword.js
- login.js
- deleteUser.js
- signup.js

## Feature - Customer Support

* Tasks
- Raise Complaint
- Update Complaint
- Create multiple queries
- delete complaint


## File Created
* Frontend Files
- body.js
- customerSupport.js
- form.js
- left_body.js
- list.js
- right_body.js


* Backend Files
- customerSupport.js

## W3C Validation Test

All the front-end code has been passed through the Validation service [5] and found to be complying the W3C standards.

### Built With

* [React](https://reactjs.org/docs/getting-started.html) - The frontend framework
* [Node.js](https://nodejs.org/en/download/) - The backend framework
* [Express.js](https://expressjs.com/en/starter/installing.html) - The backend framework for API calls

### Packages Used

* [CORS](https://www.npmjs.com/package/cors) - The middleware to connect express
* [React-Bootstrap](https://www.npmjs.com/package/react-bootstrap) - For responsive design
* [MySQL](https://www.npmjs.com/package/mysql) - To connect with the database
* [Body-Parser](https://www.npmjs.com/package/body-parser) - The middleware to parse incoming requests
* [Nodemon](https://www.npmjs.com/package/nodemon) - The tool to automatically restart node application
* [Axios](https://www.npmjs.com/package/axios) - The library to request to API

### Integration 

* To integrate all the features developed by other team members we have a common index.js file and app.js file where the modules have been imported into our respective files of our backend code. 
* After integration the build files must be generated by running the build command which will be accessed by the deployment servers such as Heroku. 

### Deployment in a live stream

To deploy in live environment such as Heroku, the frontend and backend has to be deployed separately as different projects since the build files differ for both backend and frontend. 

# Prerequisites 

To have a local copy of this project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Git - For cloning the repository 
Node.js - Used to build and run the project in the local machine
Libraries/plugins as mentioned in the [Packages Used] section
```

# Installing 
- For the frontend and backend. 
- The following steps will be repeated 

```
Git clone <https://github.com/smanraj54/Dal_Web_Group10/tree/main>
npm install
npm start 
```


## References

[1] npm. 2021. cors. [online] Available at: https://www.npmjs.com/package/cors [Accessed 20 July 2021]. 

[2] Broder, J., 2021. Online Markdown Editor - Dillinger, the Last Markdown Editor ever.. [online] Dillinger.io. Available at: https://dillinger.io/ [Accessed 21 July 2021]. 

[3] Mosquera, G., 2021. Sample file for README.md. dal.brightspace.com [Accessed 19 July 2021]. 

[4] Zellwk.com. 2021. Building a Simple CRUD app with Node, Express, and MongoDB | Zell Liew. [online] Available at: https://zellwk.com/blog/crud-express-mongodb/ [Accessed 20 July 2021]. 

[5] Validator.w3.org. 2021. The W3C Markup Validation Service. [online] Available at: https://validator.w3.org/ [Accessed 21 July 2021].

[6] Getbootstrap.com. 2021. Redirecting…. [online] Available at: <https://getbootstrap.com/docs/4.0/components/> [Accessed 3 June 2021].

[7] GitHub. 2021. mars/create-react-app-buildpack. [online] Available at: <https://github.com/mars/create-react-app-buildpack> [Accessed 3 June 2021].

[8] Mark Otto, a., 2021. Alerts. [online] Getbootstrap.com. Available at: <https://getbootstrap.com/docs/4.0/components/alerts/> [Accessed 3 June 2021].

[9] Mark Otto, a., 2021. Buttons. [online] Getbootstrap.com. Available at: <https://getbootstrap.com/docs/4.0/components/buttons/> [Accessed 3 June 2021].

[10] Mark Otto, a., 2021. Cards. [online] Getbootstrap.com. Available at: <https://getbootstrap.com/docs/4.0/components/card/> [Accessed 3 June 2021].

[11] Mark Otto, a., 2021. Forms. [online] Getbootstrap.com. Available at: <https://getbootstrap.com/docs/4.0/components/forms/> [Accessed 3 June 2021].

[12] Picsum.photos. 2021. Dog Picture. [online] Available at: <https://picsum.photos/id/237/1000/500> [Accessed 3 June 2021].

[13] RegExr. 2021. RegExr: Learn, Build, & Test RegEx. [online] Available at: <https://regexr.com/3e48o> [Accessed 3 June 2021].