# README

# Hall Pass App 

## About 
This App is build with Ruby on Rails and uses Rails to work with an SQL database using Active Record ORM

The application provides a database and web interface for instructors to perform CRUD operations on Courses, Learners, and Enrollments tables.

In its final version, it allows instructors to view the times and durations of student out-of classroom activity. 

## Usage 
After checking out the repo, run bundle install to install Ruby gem dependencies.

## Requirements 

For this project, I -Used Active Record to interact with a database. -Have an Instructor model with a one-to-many relationship, a Course model with one many to many relationship with a Learner model, using Enrollments as a join table. There will be several other one to many relationships that belong to the Learner model. 

-API routes in Rails that are set up so that: -full CRUD for Learner, Courses, and Enrollments model

-Authentication - Instructors can login and view learners, create/edit/delete enrollments, view/create/edit/delete courses

-Authorization - Admin (who are also instructors) can login, view/create/edit/delete learners, courses, and enrollments.

-A separate React front-end application that interacts with the API to perform CRUD actions.

## The following Routes are used:
`courses GET    /courses(.:format)                                                                                                            courses#index
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


## Contributing 
Bud reports and pull requests are welcome on Github @https:..github.com/laynaoyervides/hall-pass-app
Contributors are expected to adhere to the Contributor Covenant code of conduct.

### Resources  
create-react-app thinking in react material UI

A view of the MVP can be seen here:
https://www.loom.com/share/dbd98a00f1fe4dcea7a9b03c4c674626

More information about the process on Medium:
https://medium.com/@laynaoyervides/bespoke-hall-pass-app-with-rails-api-aa188c3ddd00 

### Copyright © 2022 by Layna Oyervides, SiteZinger
Made as part of the Flatiron School Software Engineering Program August'21-Nov'22