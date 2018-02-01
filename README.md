# React on Rails with table and filtering demo using Docker Compose

## Introduction

This application is an updated version of the app that is produced in Piotr Jaworski's blog post [React On Rails tutorial](https://www.nopio.com/blog/react-rails-part-1-tutorial/)

## Running the app

How to get the app up and running on your development machine:

* Install Docker client
* Run the app using `docker-compose up -d && docker-compose logs -f`
* Navigate to [http://localhost/hello_world](http://localhost/hello_world)
* Run bash inside the container for runing `rake` `rails g` etc `docker exec -it ror-demo bash`