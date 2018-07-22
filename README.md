# loc8 - Police Station/Hospital Locator
Team *Skyground Solutions* Solution for the **Spatial Data Hackathon** hosting in Kimberley the 20-21 July 2018


### Description
**LOC8** is an emergency service app that aims to reduce average emergency response times.

### Prerequisites 
<img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" width="52px"/>[Git](https://git-scm.com/) - version control software

<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="Node" height=52px />[Node](https://nodejs.org) - Application is powered by node

<img src="https://raw.githubusercontent.com/npm/cli/latest/html/npm-64-square.png" alt="npm" height=52px />[npm](https://www.npmjs.com/) - package manger for node

### Getting Starting
##### Step 1 - Install node
*Windows* - Download/Install node from https://nodejs.org/en/

*Linux* - `apt install nodejs npm` [deb-based], `dnf install nodejs npm` [rpm-based]

##### Step 2 - Install Git
*Windows* - Download/Install git from https://git-scm.com/download/win

*Linux* - `apt install git` [deb-based], `dnf install git` [rpm-based]

##### Step 3 - Clone Package using Git
*Run* `git clone https://github.com/KlenschLucas/loc8.git` to clone repository 

##### Step 4 - Start Server
**With nodemon**
*Run* `npm install nodemon -g` to install nodemon globally
*Run* `npm install` inside the project folder to install dependencies 
*Run* `nodemon` inside the project folder to start server which will monitor for changes

**Without nodemon**

Run `npm start` inside the project folder to start server, it will install dependancies automatically

**The Server will start on localhost:3000**

### Data used
The Data used in this project can be found at:

[Police Stations](https://data.code4sa.org/api/views/jxjg-hd2g/rows.json?accessType=DOWNLOAD)

[Hospital Data](https://data.code4sa.org/Health/South-African-Hospitals-Survey-2011-2012/ft5b-smjr/data)

or alternatively in the root folder under data you can find policeData.json and hospitalData.json both in json format 
