# React on Rails with table and filtering demo using Docker Compose

## Introduction

This application is an updated version of the app that is produced in Piotr Jaworski's blog post [React On Rails tutorial](https://www.nopio.com/blog/react-rails-part-1-tutorial/)

## Running the app

How to get the app up and running on your development machine:

* Install Docker client
* Run the app using `docker-compose up`
* In a separate terminal window run bash inside the container using `docker exec -it ror-demo bash`
* Now run `yarn install`, `rake db:migrate` and `rake db:seed` inside the running container. This ensures the latest is installed, the database is migrated and seeded ready for the demo app to run.
* Now you can navigate to [http://localhost/events](http://localhost/events). The app shows a list of events. If you have already seeded the database (see above) then there will be 10 events already listed. If not you can add an event using the form and you can filter using the search phase box above the form.