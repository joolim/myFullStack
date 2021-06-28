# Making my first FullStack

Make a Mock Post App
#Day1: in server folder.
npm init
npm install express cors mysql2
npm nodemon install (for use to auto run when detected changes when saved.
to node index.js each time.)
npm install sequelize sequelize-cli (ORMs to help create tables in mySQL. Using mySQL app on my comp.)
npx sequelize init to run and create the database. "Posts" table will be formed in "tutorialdb" database in mySQL (NOTE: remember in config.json, add mySQL pwd and correct database name. Host,username,dialect as is).

#Day2: takeaway: note the mySQL account details to be correct!
create endpoints for API query for Get Posts and Post Posts for input. Posts using Postman for test and mock. If need for multi mock input, can use mySQL queries together with Mockaroo multi data generation ( json or raw )
Create the endpoints in routes, where the APIs for Get and Posts. Use async and await for asynchoronous data queries and waiting for the inputs/outputs.
Remember to export this module, router.
