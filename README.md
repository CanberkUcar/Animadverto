# Animadverto


# MEAN Stack WebApp for Personal Usage.

Currently main branch : master.

Currently working on a Stack applications based on node.js to expand outside DOTNET 
technologies that I'm used to it.

The Comments and the main concept is a educational and open for everyone with best of my efforts.

Extention that I used on VsCode for the commenting is: Anchor Comments.
/-----------------------------------------------------------------------------------------------------------------------

# INSTRUCTIONS

There are two main sections on this project. API and FRONTEND

# FrontEnd. -------------------------------------------------------------------------------------

```sh
$ cd ../frontend
$ ng serve
```

```sh
http://localhost:3000 will start-up for Angular Service.
```

# API and BackEnd / MongoDB. -------------------------------------------------------------------------------------

```sh
$ cd ../api
$ nodemon app.js
```
```sh
http://localhost:5000 for Mongoose Service.
```
# 5000 is for Postman testing basically

If getting error that jobs are undefined you can still run "npm run dev" "npm start --prefix client"

# MongoDB Usage. --------------------------------------------------------------------------------------

```sh
$ sudo service mongodb start
$ mongo
> SHOW DBS;
> DB;
> DB. "Your values" . INSERT({"...","..."});
> SHOW COLLECTIONS;
```
/-----------------------------------------------------------------------------------------------------------------------

## License

GPL-3.0

##### This repository contains the code for both the Angular frontend application as well as the NodeJS API. 

> Don't forget to run `npm install` in both the **api** and **frontend** folders to install dependencies
