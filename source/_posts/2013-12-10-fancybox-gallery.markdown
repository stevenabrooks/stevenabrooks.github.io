---
layout: post
title: "FancyBox Gallery Trix"
date: 2013-12-10 10:23
categories:
---
Cool, so one of the features my latest client is asking me to do is adding is an image gallery of their studios.  After searching around for a little bit, I stumbled upon the [Fancybox Rails](https://github.com/hecticjeff/fancybox-rails) gem.  Cool, let's check it out.

This gem is great, it adds all the assets required for [Fancybox](http://fancybox.net/) to your assets, and all you have to do is add:

//= require fancybox

to your application.js file and:

*= require fancy box

to your application.css file.

Awesome.  Now that all of that is squared away, let's get to work.  In our controller we are working with this array:

![My params](/images/galleryall.png)

This is an array of all the pictures we are working with.  If we want to loop through all of these, we use the following code:

![My params](/images/fancyloop.png)

If we throw on a little jQuery, we get a workable Fancybox:

![My params](/images/fancycode.png)

What happens here is were are looking through all the paintings in the gallery and setting them to the same :rel.  This allows Fancybox to know all images with :rel "studio_images" is to be grouped together in a gallery.

The problem here is that we now have eight links, with all eight links opening up to the same gallery.  That's not good, we want one link to open to all of the images in the gallery.  Cool, let's solve this problem.

How about we make two instance variables in the controller, one for the first image, and one for the rest, this way if we ever delete the first image, another will replace it.  The benefit here is that there will be no image duplication because between the two arrays, we will have all the images, but no duplicates.

![My params](/images/fancycontroller.png)

So now we have these two variable, and we need to make a link in the view to open the gallery.  Let's do that:

![My params](/images/click_thing.png)

If you have noticed, both lines of code have different id's, can you guess why?  If we have both lines of code, we will have eight different links.  We only want one link, let's hide the second array.

![My params](/images/fancyhide.png)

And you are left with one link which points to all the images in your gallery, good work.