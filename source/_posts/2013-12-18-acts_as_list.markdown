---
layout: post
title: "Acts_as_List With Active Admin"
date: 2013-12-18 09:23
categories:
---
Today has been a great day for me thus far.  For the current site I am working on, the client requested two features recently: 

1) Allow him to reposition images(order)

2) Allow him to upload files and have his clients view/download them

Cool.  Had no idea how to do either off the top of my head.  Let's try to tackle the first one.

On a high level, I was thinking this process should go something like this:

* See if an object had been updated
* Find out which object that was
* See the new position is has and if that position is already taken up
* Track whether that object went up or down in position
* Change the other positions accordingly 

Myself and xxxx were actually constructing the code to write this whole thing out.  We started by writing a rails test:

![My params](/images/unittest.png)

Here we are testing to see if we change the position of a studio, we need the other studios' positions to change accordingly. 

Now here's the real issue, all of the CRUD of an object in this app is being done by [Active Admin](http://www.activeadmin.info/).  Actually I guess it wasn't so hard to know where to look to solve this problem…callbacks.

Cool we here the best this to do is the have a before_save callback.  We need to check if the  current object has been changed.  But wait, duh, there's this thing called [acts_as_list](https://github.com/swanandp/acts_as_list) that does the reordering for you.  Luckily, this gem has a method (:insert_at(#)) that not only inserts the object where you want it but also reorders the list, doing the heavy lifting for us.

Great.  The idea that this process requires a before_save callback is right, and now we just need to connect the dots.  We must ask if a object has been changed, then insert it accordingly:

![My params](/images/beforefilter.png)

![My params](/images/actslist.png)

and bam, we can change any object to have a different position and the rest of the positions are reordered, and it works with Active Admin.  Check.

