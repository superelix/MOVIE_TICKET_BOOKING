# MOVIE TICKET BOOKING

###### BACKEND IMPLEMENTATION

###### TOOls used:
- HTML
- NODEJS
    - EXPRESS
- MYSQL
- POSTMAN

###### ABOUT THE BACKEND
- Database name: mydb
- Schema name: movies
- Attributes: ID,NAME,PHONENO,MOVIE,EMAILID,DATE & TIME
- PRIMARY KEY ID.
    -Only one attribute because a single person can book more than 1 movie ticket.

###### DIRECTORY FORMAT
- node_modules
- view
    - checkentries.html
    - input.html
    - update.html
- database.js
- index.js
- routes
    - input.js
- package.json
- package-lock.json
- README.md

###### Instructions to run the code.
* clone this repository.
* Use vs-code ,sublime text or any suitable code editor
* run npm install in powershell or terminal.
    - Make sure to be in the current directory.
* run node index.js
    - Driver file.

## DESCRIPTION FOR THE FILE SYSTEM.
* input.html: A basic html form to take info of customer and insert it in the table.
* update.html is an end point which enables the admin to get query for update,delete and display conditional case coded.
* checkentries.html: Enbles admin to see all movies at a given time
* input.js: Used to handel all dbms controllers and all server routes.
    - this file contains all the tasks along with appropriate commnets.
* database.js 
    - create connection with mysql database
    - checks and deletes all entries having time previous to last 8 hrs
* index.js enables to run the server on http://localhost:3000/home
    -Hosts all the server routes of html pages for front end.

#### PERKS
- Tested every endpoint both in terminal as well as postmann.
- Basic front end html forms prioritises  input from customer.
- Images shows testing of all asked end points.
- Special Mention
    * maximum limit of 20 people at a given time is handled during insert operation.If exceeds then insertion is prohibited.
