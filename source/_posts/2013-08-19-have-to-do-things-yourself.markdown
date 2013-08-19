---
layout: post
title: "Have to Do Things Yourself"
date: 2013-08-19 09:32
comments: true
categories: 
---
I learned a valuable lesson this morning that I should have learned a while ago actually.  Or at least I should have picked up on this earlier.

Last night I was watching a few [Railscasts](http://railscasts.com) and stumble upon a few interesting CMS videos.  The one that I thought was the coolest was [Active Admin](http://railscasts.com/episodes/284-active-admin).  Active Admin it an awesome, or so I though, CMS for a rails app.

Although what I said above is a little all over the place the point I eventually learned was that if you really need something in your app, you need to build it yourself.  Look at the home page for Active Admin:

![active admin](/images/activeadmin.png)

C'mon, this looks amazing.  It apparently let's you filter by anything, have scope, etc., etc.  But under the cover, this gem messes with the MVC model and makes it difficult to work with your previous controllers if you are adding Active Admin on top of your app.  

This morning I was telling a few classmates before the session started about Active Admin and how cool I thought it was.  Our head instructor, Avi Flombaum, shook his head and told me that it really wasn't that great.  It made think of my trading days before I became a student at [The Flatiron School](http://flatironschool.com/).  At first I had my charts with a million different indicators on them, and as it turned out, I really didn't even use any of them.  So over time I took off indicators and as I took them off my gains increased. 

The truth is, when I was trading, I needed a little as possible.  I needed exactly the minimum for me to get the job done, so to speak.  Same goes for coding.  Yes this Active Admin looks amazing, but the truth is I don't need fireworks and amazing colors and anything above exactly what I need.  I have total confidence that I can make my own CMS pretty easily, and maybe make it pretty with some simple [Bootstrap](http://getbootstrap.com/2.3.2/).