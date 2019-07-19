This is the technical challenge project from Shift - Perspective Tool

## How to run

First of all replace the dummy Firebase configuration in shiftChallenge/src/Firestore.js with the configuration variables I shared via slack.

Next, in the project directory, run:

### 1)  cd into shiftChallenge
### 2) `npm install` (only once)
### 3) `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits (if you ever need to for some reason).<br>

### Notes

1) I tried to respect the 3-hour approximate duration the challenge suggested. If I had more time I may had followed a different approach. Additionally, if I had more time I would add tests ( unit tests most probably with Jest or a similar tool)
2) As per the instructions I used a stack I chose. The reason I chose Firestore vs other DBs is ease of setup and speed of development. 
3) With that said, I do have much experience with most of your stack. I've extensive experience with Typescript, I've worked with MobX, MYSQL etc. I just want to make clear that I kept in mind the size of the project as well as the suggested completed time and chose a simple stack that would allow me to achieve the desired result with time efficiency.
4) Final note on your stack vs the one I used, if there's something I don't know, I can learn and work with it.

### How to check the DB data

1) I've shared access to Firebase with the reviwers
2) Go to the Firebase dashboard, select the project and choose "Database": http://prntscr.com/ofs39h
3) You should see the `questions` collection with 1 example record already present: http://prntscr.com/ofs3qt
4) To search for the data of a user based on email, simply click the `Filters` button: http://prntscr.com/ofs546 in the questions collection. Once the window opens, type the email you want to search for and select `emails` from the suggested fields: http://prntscr.com/ofs66b Hit apply and you should get your desired results
5) You can add more data in the app you've built locally and check it in the Firestore dashboard (See `How to run` above)

Please contact me at chrafailidis@gmail.com if you have trouble getting the data you wish to see.

