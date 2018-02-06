# froggo
Frogger game for Project 1 at General Assembly, WDI-17

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

