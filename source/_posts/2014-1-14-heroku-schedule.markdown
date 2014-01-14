---
layout: post
title: "15 Second Heroku Wait?"
date: 2014-01-14 10:23
categories:
---
Here is the scenario you are in. You built a Rails app.  Congrats.  You have also pushed you app to [Heroku](http://heroku.com/).  Even better.  But after every hour, your Heroku server is seemingly shut down; that's why it can be free because it's not always "in use".

There's an easy way to combat that for free.

1) Make a rake task that will "ping" your site.

{% include_code update.rb %}

2) Install [Heroku Scheduler](https://scheduler.heroku.com) and set have it run the rake task every hour.

That's it.  Now every time you go to your site you won't have to wait 15 second for it to load.