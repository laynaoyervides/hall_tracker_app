# README

# Hall Pass App 

## About 
This App is build with Ruby on Rails and uses Rails to work with an SQL database using Active Record ORM

The application provides a database and web interface for instructors to perform CRUD operations on Courses, Learners, and Enrollments tables.

In its final version, it allows instructors to view the times and durations of student out-of classroom activity. 

## Usage 
After checking out the repo, run bundle install to install Ruby gem dependencies.

## Requirements 

For this project, I 

-Used Active Record to interact with a database. 

-Have an Instructor model with a one-to-many relationship, a Course model with one many to many relationship with a Learner model, using Enrollments as a join table. There will be several other one to many relationships that belong to the Learner model. 

-API routes in Rails that are set up so that: 
-full CRUD for Learner, Courses, and Enrollments model

-Authentication - Instructors can login and view learners in their courses, view/create/edit/delete their courses

-Authorization - Admin (who are also instructors) can login, view/create/edit/delete learners, courses, and enrollments.

-A separate React front-end application that interacts with the API to perform CRUD actions.

## The following Routes are used:
```console
courses GET    /courses(.:format)                                                                                                            courses#index
                                        POST   /courses(.:format)                                                                              courses#create
                            course GET    /courses/:id(.:format)                                                                            courses#show
                                         PATCH  /courses/:id(.:format)                                                                            courses#update
                                         PUT    /courses/:id(.:format)                                                                            courses#update
                                         DELETE /courses/:id(.:format)                                                                            courses#destroy
                           learners GET    /learners(.:format)                                                                               learners#index
                                         POST   /learners(.:format)                                                                               learners#create
                            learner GET    /learners/:id(.:format)                                                                           learners#show
                                         PATCH  /learners/:id(.:format)                                                                           learners#update
                                         PUT    /learners/:id(.:format)                                                                           learners#update
                                         DELETE /learners/:id(.:format)                                                                           learners#destroy
                     enrollments GET    /enrollments(.:format)                                                                            enrollments#index
                                         POST   /enrollments(.:format)                                                                            enrollments#create
                       enrollment GET    /enrollments/:id(.:format)                                                                        enrollments#show
                                         PATCH  /enrollments/:id(.:format)                                                                        enrollments#update
                                         PUT    /enrollments/:id(.:format)                                                                        enrollments#update
                                         DELETE /enrollments/:id(.:format)                                                                        enrollments#destroy
                                  me GET    /me(.:format)                                                                                     instructors#show
                             signup POST   /signup(.:format)                                                                                 instructors#create
                                login POST   /login(.:format)                                                                                  sessions#create
                              logout DELETE /logout(.:format)                                                                                 sessions#destroy
                       instructors GET    /instructors(.:format)                                                                            instructors#index`

```
## Contributing 
Bud reports and pull requests are welcome on Github 
@https:..github.com/laynaoyervides/hall-pass-app

Contributors are expected to adhere to the Contributor Covenant code of conduct.

## Environment Setup

### Clone repository
Clone the project repository from github: https://github.com/laynaoyervides/hall-tracker-app

```console
$ git clone https://github.com/laynaoyervides/hall-tracker-app
```
### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
ruby -v
```
Make sure that the Ruby version you're running is listed in the supported runtimes by Heroku. At the time of writing, supported versions are 2.6.8, 2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site for the latest supported versions.

If it's not, you can use rvm to install a newer version of Ruby:

```console
rvm install 2.7.4 --default
```
You should also install the latest versions of bundler and rails:

```console
gem install bundler
gem install rails
```
### Install NodeJS
Verify you are running a recent version of Node with:

```console
node -v
```
If your Node version is not 16.x.x, install it and set it as the current and default version with:

```console
nvm install 16
nvm use 16
nvm alias default 16
```
You can also update your npm version with:

```console
npm i -g npm
```
### Install SQLITE3 
Installing SQLite in OSX

If you are on OSX version 10.4 or greater, you probably already have SQLite installed. Find out by opening up the terminal and running:

```console
 which sqlite3
/usr/bin/sqlite3
```

If you see the output above, you have a working version of sqlite3 already installed on your system. Thanks Apple! Skip ahead to the 'SQLite VSCode Extension' section below!

If not, then there are a couple of ways you can install SQLite.

OSX: Install With Homebrew

You can install SQLite using Homebrew, which you should have installed as part of your Flatiron environment setup. Install SQLite with:
```console
 brew install sqlite
 ```
OSX: Install From Binary

If Homebrew isn't working out for you, you can download one of the pre-compiled binary packages available at the downloads pageLinks to an external site.. Look for your operating system, download and install the appropriate binary.

Note: If you are receiving an error when trying to install SQLite, make sure the Xcode Command-Line Tools have properly installed. Try running xcode-select --install to resolve this issue.

Installing SQLite in WSL

Below are the steps for installing SQLite on the Windows Sub-system for Linux:

Open your WSL terminal

Update your Ubuntu packages: sudo apt update

Once the packages have updated, install SQLite3 with: sudo apt install sqlite3
Confirm installation and get the version number: sqlite3 --version
For additional information, check out this article on getting started with databases in WSL

### Application Install
When you're ready to start building your project, run:

```console
bundle install
rails db:create
npm install --prefix client
```
###Server Start
You can use the following commands to run the application:
```console
rails db:migrate 
db:seed 
```
migrate and seed the database 
(use db:seed:replant if this is not the first time running)

```console
rails s: run the backend on http://localhost:3000
npm start --prefix client: 
```
run the frontend on http://localhost:4000

### Backend Shutdown
It should be possible to shutdown the server using [CTRL-C]. If that fails, follow these steps:

lsof -i tcp:9292 response: COMMAND PID USER .... ruby 1234 root ....
kill -9 1234

### Resources  
create-react-app thinking in react material UI

A view of the MVP can be seen here:
https://www.loom.com/share/dbd98a00f1fe4dcea7a9b03c4c674626

More information about the process on Medium:
https://medium.com/@laynaoyervides/bespoke-hall-pass-app-with-rails-api-aa188c3ddd00 

### Copyright © 2022 by Layna Oyervides, SiteZinger
Made as part of the Flatiron School Software Engineering Program August'21-Nov'22