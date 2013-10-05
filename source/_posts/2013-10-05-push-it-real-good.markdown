---
layout: post
title: "Push It Real Good"
date: 2013-10-05 18:23
comments: true
categories: 
---
Real quick post today on deployment.

The apps I made thus far have all been deployed following these guidelines:

[Spike Grobstein = Beast](http://stackoverflow.com/)

If you were able to successfully deploy your rails app to production via Capistrano you have done all the heavy lifting already.  If you make new changes that you would like to push to the server all you have to do is [thanks for my boy Chris Gonzales](https://twitter.com/Chris_GonzGonz):

1.  Go into your public folder on your local machine and write the command:

cap deploy:setup

2.  Follow it up by the command:

cap deploy