---
layout: post
title: "Highlight Current Page Rails"
date: 2013-12-10 09:23
categories:
---
I'll admit, I am not an authority figure when it comes to front end.  I'm not talking about things like [Bootstrap](http://getbootstrap.com/), I'm talking about getting super down and dirty within a stylesheet. 

I had a fun little problem to solve yesterday when working on the site for my current client.  The client wanted the page the user was currently on to be highlighted in the navbar.

I immediately thought to add some sort of conditional, but went strait to [Stack Overflow](http://stackoverflow.com/) to see what programmers before me have done.

Turns out, there are two ways you can do something like this.  In both scenarios, we are going to create a helper method, but the helper method can check different things.  

For those who are not making a navbar dynamically, I would suggest using the following:

![My params](/images/controllermethod.png)

![My params](/images/controllercode.png)

This way, you can have the helper method return some thing (in this case, the name of the new class) depending on what controller the request is using.  

If you are going to dynamically create the navbar, I suggest you do something like this:

![My params](/images/pathmethod.png)

![My params](/images/pathcode.png)

This way, the helper is checking the request url, and simply passing in the path.  I actually found this second way of doing this buggy because the root path becomes highlighted for all the other paths.

