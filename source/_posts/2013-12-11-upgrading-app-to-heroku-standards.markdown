---
layout: post
title: "Updating App to be Good With Heroku"
date: 2013-12-11 09:23
categories:
---
My plan for right now is to take my [Workout App](https://github.com/stevenabrooks/workout-app) and upgrade it to be compatible with [Heroku](https://heroku.com).  The free Digital Ocean surfers I had access to this summer are no longer available.  Actually, if I can get this done well with my person app maybe I can do this with my other apps.  I will write this post as I go.  Right now, my app is with Rails 3.2.13 (okay by Heroku) and Ruby 1.9.3 (not okay with Heroku).

What we know for sure is that Heroku requires Ruby 2.0.  Let's do that.  In the Gemfile, add this line of code:

![My params](/images/2.0.png)

A small gotcha here is that not only does Ruby 2.0 have to be installed locally, but you might be on a different version of Ruby.  Make sure to run the:

$ rvm use 2.0 

command.

On the current app I am working on for a client, I was trying to figure out how to transfer the data from my local Sqlite3 database to the eventual Postgresql database.  This is when I stumbled across [Seed Dump](https://github.com/rroblak/seed_dump), an awesome gem that allows you to fill your seeds file with everything in the current database.  For someone like me who is using rails 3.2, you must use:

'gem "seed_dump", "~> 0.5.3"'

To run the gem, the command is:

$ rake db:seed:dump

Great, next we have to take our Sqlite3 database, and move it into the Development and Test Group.  

Cool, next we have to create a Production Group in our Gemfile and add the following:

![My params](/images/production.png)

This allows Postgresql to be used in production.  

So let's see. We have Ruby 2.0.  We have a way to seed the production database.  We have set up a Postgresql database in production.  We're probably pretty close.

So let's run:

$ bundle

and see how that goes.  Okay great! That actually worked without any issue.

Now let's dump that data:

$ rake db:seed:dump

Beautiful, all the data from my local development Sqlite3 database is in my seeds file.  Now let's go to Heroku and see what's going on there.

$ heroku login

Now add the following code into your application.rb file:

"config.assets.initialize_on_precompile = false"

$ heroku create

Now deploy your code:

$ git push heroku master

Awesome.  Now Heroku is doing it's magic, and although it seemingly appears like we are done, we are not my friends.

We have to run two commands for the [dyno](https://devcenter.heroku.com/articles/dynos).

$ heroku ps:scale web=1
$ heroku ps

Now we have to migrate the database.

$ heroku run rake db:migrate

