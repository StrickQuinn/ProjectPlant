# ProjectPlant
Project 1 for GA

Project 1 : 
https://github.com/StrickQuinn/ProjectPlant

Technologies Used
-----------------
- BootStrap @ Bootstrap.com for Modal inquiries and tooltips guide

- Flexbox Froggy @ flexboxfroggy.com for CSS positioning


Goal of Game
-------------
You need money, and Aunt Begonia can help. She needs help taking care of her plants, but you must learn how to before she takes you on full-time. Answer a few of the riddles for hints at the plant's name. You will need to know these in the future, so you can learn what they will need.




Approach Taken
--------------
Originally, I had planned to have a game that helps the player learn about plant names. The goal was to have 5 riddles you had to answer to get a clue to the name of a plant. The next step would have been to match correct answer to the correct picture. If you answered the riddle correctly, you would get $3. If you matched the correct name to the correct picture, you would get $5. You would have been a winner if you had made at least $20.


I broke that plan down to:

- What are my levels?
- What variables do those levels need to contain?
- How would the button functions work?
- How would I know what level I was on?
- How would I keep track of score?

Things were going smoothly until I hit the Next button. I later learned that even though the Next buttons looked the same, they were on different divs, so I would need to find a way to gather the information I needed, while trying to not let my code pile up...

So, I tried to take it out of the div. That seemed to work when I went through the levels, even when I was incorrect.

This is where I made another mistake. When I was later trying to get my Restart button to work, that is when I realized, that my wallet count was off. In one sequence, an incorrect answer still gave points, while the correct one did not, even though the previous correct one did. I even had at one point, an amound subtracting from the wallet, even though there was no subtraction function. This ultimately lead me to reset my JavaScript 4 times. Everytime I got close to something being correct, something else would tumble over.

- 1st time : all levels in separate divs

- 2nd time : example level in a div, and then a sequence set up in the javaScript.

- 3rd time : set up a class that would take level parameters and run functions accordingly.

- Final time: revert to 2nd time's method, and play around with input/output methods.

I returned to this particular commit, because, it was the most functional. I learned a little too late that values were not going through correctly.




What do I wish I had done differently?
-------------------------
I wish I would have worried less about plagiarizing from the internet, and relied a little more on it. I did read several different approaches for possibly handling multiple choice quizzes and adapting it to a scoreboard, but I think I muddled some of the approaches together.