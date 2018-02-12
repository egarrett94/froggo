# froggo
Frogger game for Project 1 at General Assembly, WDI-17

[LIVE SITE](egarrett94.github.io/froggo)

## Wireframes

![new mockup 1](https://user-images.githubusercontent.com/25888207/35771707-fb21e5e8-08e5-11e8-9b9f-e6ee28194b1c.png)
![new mockup 2](https://user-images.githubusercontent.com/25888207/35771708-fb39f958-08e5-11e8-8f4a-ca5b0632d888.png)
![new mockup 3](https://user-images.githubusercontent.com/25888207/35771709-fb5084de-08e5-11e8-8a7a-b059503eb77a.png)

## Designed my sprites/tiles
![frogjump](https://user-images.githubusercontent.com/25888207/35771673-b631e24e-08e5-11e8-9eca-c129e566715d.png)
![frogstatic](https://user-images.githubusercontent.com/25888207/35771674-b6449e7a-08e5-11e8-80db-888d064394d7.png)
![gator1](https://user-images.githubusercontent.com/25888207/35771675-b6560750-08e5-11e8-8dbd-5b1d15f2d779.png)
![gator2](https://user-images.githubusercontent.com/25888207/35771676-b66a1448-08e5-11e8-8c9c-70f3bd500b0c.png)
![gatorchomp](https://user-images.githubusercontent.com/25888207/35771677-b67cb4d6-08e5-11e8-9e57-f09e51e4fd64.png)
![goalground](https://user-images.githubusercontent.com/25888207/35771678-b6905928-08e5-11e8-84f3-8a66543c54b2.png)
![ground](https://user-images.githubusercontent.com/25888207/35771679-b6a3ee5c-08e5-11e8-9453-bf421a21d7b0.png)
![lilypad](https://user-images.githubusercontent.com/25888207/35771680-b6bd13a0-08e5-11e8-9461-57685acbb317.png)
![log](https://user-images.githubusercontent.com/25888207/35771681-b6cf6618-08e5-11e8-89f3-f64a0179152c.png)
![longlog](https://user-images.githubusercontent.com/25888207/35771682-b6e5b472-08e5-11e8-9171-1786d433ac94.png)
![water](https://user-images.githubusercontent.com/25888207/35771683-b6fca5ba-08e5-11e8-800b-0e9eae866558.png)
![life](https://user-images.githubusercontent.com/25888207/35774526-efe1d0e4-0926-11e8-8bac-72910a4aae81.png)

![froggobg](https://user-images.githubusercontent.com/25888207/35771672-b61f95da-08e5-11e8-987d-e30fc3ffc00e.jpg)

## Initial planning

After making my Tic-Tac-Toe game and planning the logic/design sort of on the fly, I wanted to sit down and really plan this one out. This is my first real HTML5 Canvas project, so the learning curve is steep! I wanted to make this as easy on myself as I can, outside of learning the concepts in general. 

I started by making rough plans of what sort of functions I would be calling to make various things happen in the game. Some examples would be: count() to find out the time remaining, or loseHeart() to decrease the number of lives, reset the gameboard, and reset the timer. 

After making that list, I dove straight into Canvas documentation, and tried to make a plan on how I could divvy up the board into a grid. The play area itself is 200x400px, so 25x25px squares would make up the grid in its entirety. 8 columns, 16 rows.

## Putting it all into effect

I began with the website design, laying out the HTML and styling it accordingly with CSS. I am usually pretty quick with this, as I have a fair amount of design experience, and I knew the logic of the game would be taking up the majority of my time on this project. The site is quite responsive for the most part, but before I get full responsiveness and eventListeners for swiping as controls for Froggo, I want to get at least the desktop version functional. 

I wanted to start this with mobile design as my first priority, but having spent the last couple months doing desktop > mobile, I didn't want to break out of the habit on something as important as this is to me! I'll have time to practice that later :) I felt great about the modal that shows up after clicking "How To Play", I'm pleased with the look and color palette of everything. (Though knowing me, I'll probably fiddle with that all throughout the build...) 

![screen shot 2018-02-03 at 2 46 48 pm](https://user-images.githubusercontent.com/25888207/35774565-441a935c-0928-11e8-99f3-0a7fa89e4584.png)

![screen shot 2018-02-03 at 2 59 03 pm](https://user-images.githubusercontent.com/25888207/35774577-84655ad2-0928-11e8-877c-4745044af937.png)


Once I got the overall layout and styling done for all the page components, I dove into the HTML5 Canvas. It was a real challenge at first to understand how to place things, and how to make the board animate. I tried to think of how I would do this with a physical version of this, like a flipbook, and understood the whole process a lot better. 

I made arrays of objects that would determine the placements of static components of the game, like the lilypads and the gators. I use those to iterate through the arrays and .drawImage() each one onto the board upon startup! 
![screen shot 2018-02-03 at 9 26 26 pm](https://user-images.githubusercontent.com/25888207/35774590-f0a3861a-0928-11e8-9cda-3cf1531aa1c0.png)

The next challenge comes with determining collision mechanics and making the logs float across the screens at different speeds...

## Moving Froggo on the Loggos!

After a lot of wrestling, I managed to make froggo move with the logs. Loggos. Whatever. At first I was trying to create a new image on the board and let it move across every time the first log in the respective row went offscreen, but I realized I could simply change the x-value of the log if the x-value went over 200 or under -25 (so the log is completely hidden offscreen on either side) back to a proper starting position. Success!

But then I realized I needed to make the frog move with the logs. This, for some reason, didn't seem to be as challenging of a prospect as I initially thought: I simply made the x-value of the frog increase/decrease the value of the log's delta-x (dx) key in their respective object declarations if the frog's coordinates were within a certain distance of the log's coordinates.

![screen shot 2018-02-05 at 5 14 39 pm](https://user-images.githubusercontent.com/25888207/35837001-313af508-0a98-11e8-9c7f-44edfb579b4e.png) 

I used that sort of idea with the gator images, too; I made the gator's mouths open up when the frog gets within a certain distance of them. 

![screen shot 2018-02-05 at 5 14 54 pm](https://user-images.githubusercontent.com/25888207/35837002-314e3f1e-0a98-11e8-8aa1-5735297c39af.png)

Success! I also created a timer that starts upon game start / game continuation after losing a heart. (After losing a heart, a modal pops up and lets you collect yourself before starting the game once more! Eventually I'll be adding a gameOver function that'll run if the lives are all out and you lose a heart again.) After playing the game a couple times, I also decided to add some sound effects to spice up the debugging process. (I'll probably regret that within the first 100th run of the game...)

Next step is to make the water "lava"--the danger zone. Big yikes. 

## The water is ...Lava? 

I figured this part would be easy, after spending an evening not coding and simply thinking it out. There are only two states of being in this game, essentially: safe, not safe. On a log/lilypad, not on a log/lilypad. So I confidently wrote the code out to put it into effect! ...And it failed. But why?! 

Turns out, I was returning a boolean within the for loop of the angryWater() function and that knocked me out of the function, not finishing the logic properly. I fiddled around with this for a solid hour before I got some fresh eyes to look over my code (shout out to Matt) and help me come to the right conclusion. 

After that, I just tweaked the distanceCheck() function to make it measure the distance between the middle of the images rather than the top left corner, which is the default. I also made very minor changes in the values of the minimum distance it required to confirm whether or not the frog is on a log or lilypad. 

## LocalStorage, new high score!! 

After wrestling with my code to make the water "lava", my next task was to initialize the localStorage to keep track of the highest score that the user gets and displays it. That was relatively simple--I am mostly unfamiliar with localStorage at this point, but after reading more about it I managed to get a decent grasp on what I needed to do. 

![screen shot 2018-02-07 at 9 42 36 pm](https://user-images.githubusercontent.com/25888207/35957337-f0985090-0c4f-11e8-94c7-a84283838124.png)

Here you can see I call to view what highscore's value within the localStorage is, and that it matches the value displayed upon page load.

## Adding bugs! ...wait, what? 

Yeah. I added bugs to my game. But like, the cute round ladybug kind. I scattered these throughout the board as opportunities for the player to get some extra points! 

![ladybug](https://user-images.githubusercontent.com/25888207/35957392-3109b736-0c50-11e8-8736-6c117b0d7f1c.gif)

I did this with very similar functions as staticObjects() and movingObjects(), but I ran into some problems: if I tried to remove the bug from the canvas by tiling transparency over it, it would overwrite the pixels and put an actual hole in my canvas. My fix for this was to simply move the bug image by 200px, off the canvas entirely, so it looks like it "disappeared". Now, I'm sure there are better fixes for this, but this worked seamlessly! That is, until you reach a gameOver() and the board repopulates without the bugs on there. They're still off to the side. 

I fixed this with a function that would iterate through the bugArrays, and if their x-values were over 200, then i'd simply subtract 200 from the x-value, and the bug would return to where it was first populated.

## Mobile Optimization

My next endeavor was to make the board much more responsive, and to enable the user to be on mobile and still play the game. Initially, I was going to try to create some onSwipe events, but I wanted to maintain a more arcade-like feel and created some direction buttons for a D-Pad that would replace the start button and radio buttons underneath the canvas. The individual D-Pad buttons do the same sort of functionality as the arrow keys when in desktop orientation. 

Here are the buttons themselves: 
![dpad-down](https://user-images.githubusercontent.com/25888207/35957640-866195f4-0c51-11e8-967d-b9fe91feaa76.png)
![dpad-left](https://user-images.githubusercontent.com/25888207/35957641-867825c6-0c51-11e8-9982-e41c6aa450d1.png)
![dpad-right](https://user-images.githubusercontent.com/25888207/35957642-86a3c276-0c51-11e8-9f3b-169f6cfe3fe5.png)
![dpad-up](https://user-images.githubusercontent.com/25888207/35957643-86c26c76-0c51-11e8-8ac1-6c76a4e25870.png)

And this is how the D-Pad looks when the game is started in mobile view: 
![screen shot 2018-02-07 at 9 56 22 pm](https://user-images.githubusercontent.com/25888207/35957700-c7343ad2-0c51-11e8-85d4-708d28ca5dd1.png)

Once I got this functional and responsive, I moved on to tweaking minor details here and there to make it look great in mobile. 

## Yay! Mobile looks great, thanks Chrome Dev Tools! 

Just kidding. It looks great in Chrome Dev Tools at this point, but when I actually load this game up on my phone, it looks like this: 

![image1](https://user-images.githubusercontent.com/25888207/35957746-0f4221cc-0c52-11e8-9974-27812e38736e.png)

The footer goes right over the D-Pad! Convenient, fashionable, groundbreaking. Also, when playing the game, the gators don't do their iconic honking when you approach them, which is sad. Next steps will be to fix these things, and then I think I've got a pretty solid product! 

## Footer Fix, Audio Compatibility Fixed (???)

After trying a handful of fixes, I found a way to style the footer in a reasonably satisfactory fashion, allowing for a much better playing experience on mobile. I also noticed there's a 300ms delay on tapping the screen on mobile, so I looked for a plugin of some sort that I could use to remove that. I ended up using FastClick after seeing it referenced and recommended by a lot of users on various sources, and it seems to be working rather nicely. 

![image1-1](https://user-images.githubusercontent.com/25888207/35993201-6d0526dc-0cc1-11e8-87df-42035f53c5e2.png)

I also needed to figure out the audio incompatibility issues, and I read that mp3 files seem to work more universally than wav, so I converted them. But it doesn't seem to have changed anything! I'll have to look more into this subject in the future.

Instead of a 2-player option, I opted to make the radio buttons at the bottom determine whether the user wants to play Easy or Hard mode. It works beautifully. 

Now that I am pretty much done with optimizing the overall functionality of the game, I'm going to focus on creating a nice background for the web page itself so I have a grand package that I designed entirely myself! 

## New background 

Here's the new background I made. Every part of this project has officially been created and designed by yours truly ;) 

![screen shot 2018-02-08 at 1 00 32 pm](https://user-images.githubusercontent.com/25888207/35998006-35c9b570-0cd0-11e8-85da-57aae0147ef1.png)

# Conclusion 

That was quite the project! I had a lot of fun learning how to make Canvas work, how to manipulate the page around it, and how to make actions interact with the game. Once I broke through the mental barrier I kept running into regarding how to animate, how to determine distance/collision, and other similar logical issues, I began to feel rather confident in my abilities. Learning new things while creating a cute, fun and functional game is definitely near the top of my list of proudest moments! 

## Technologies Used:
* HTML
* CSS
* JQuery
* JavaScript
* FastClick

## External sources:
* Google Fonts
* W3Schools
* StackOverflow
