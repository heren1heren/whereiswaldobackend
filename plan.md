**Todo**:
displaying clock on front end independently
then call backend routes to count actual time when game start
by calculating 'backend end time' - 'backend start time' = duration
then store that duration inside database

plan:
after calling start time route:
1: create start time
3: store it inside database

after user finish the game -> calling end time route:
1: create end time
2: invoke start time
3: extract duraction
4: storing duration inside database
if user didn't finish the game -> calling deleting start time route:
1: delete start time
**Notes**:
how to communicate between Start time and end time?

how to retrieve image and display it from database?
use express.static()
then all images will return a correspndoing routes
for example: localhost:3000/images/waldo.gif
**Plans**:
