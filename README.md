# README

Hall Pass App 

About 
This App is build with Ruby on Rails and uses rails to work with an SQL database using Active Record ORM

The application provides a database and web interface for instructors to perform CRUD operations on Courses, Learners, and Enrollments tables.

In its final version, it allows instructors to view the times and durations of student out-of classroom activity. 

#Usage After checking out the repo, run bundle install to install Ruby gem dependencies.

** #Requirements ** For this project, I -Used Active Record to interact with a database. -Have an Instructor model with a one-to-many relationship, a Course model with one many to many relationship with a Learner model, using Enrollments as a join table. There will be several other one to many relationships that belong to the Learner model. 

-API routes in Rails that are set up so that: -full CRUD for Learner, Courses, and Enrollments model

-Authentication - Instructors can login and view learnes, enrollments, courses

-A separate React front-end application that interacts with the API to perform CRUD actions.

** #Contributing ** Bud reports and pull requests are welcome on Github @https:..github.com/laynaoyervides/cowrie-app-copy

Contributors are expected to adhere to the Contributor Covenant code of conduct.

** #Copyright ** Copyright © 2022 by Layna Oyervides, SiteZinger

** #Resources ** create-react-app thinking in react material UI