
<span style=display:none; >[You are now in a GitHub source code view - click this button to view this read me file as a web page]( https://jaanga.github.io/sp500/ "View file as a web page." ) </span>
<div><input type=button value='You are now in GitHub web page view - Click this button to view Read Me file as source code' onclick=window.location.href='https://github.com/jaanga/sp500/'; /></div>

_Current development is being carried out at [predIQtiv](https://prediqtiv.github.io )_

### [Jaanga]( https://jaanga.github.io/ ) &raquo;

[Jaanga SP500 Read Me]( index.html )
===

### Full Screen Demo: [Jaanga SP500 Replay]( https://jaanga.github.io/sp500/sp500-replay/ )

### Full Screen Demo: [Jaanga SP500 Replay Dev]( https://jaanga.github.io/sp500/sp500-replay/dev/ )


### Full Screen Demo: [Jaanga SP500 Realtime]( https://jaanga.github.io/sp500/sp500-realtime/ )

### Full Screen Demo: [Jaanga SP500 Realtime Dev]( https://jaanga.github.io/sp500/sp500-realtime/dev/ )


### Full Screen Demo: [Jaanga Trades Get]( https://jaanga.github.io/sp500/trades-get/ )


## Web Page

<iframe src="https://jaanga.github.io/sp500/sp500-replay/dev/index.html" width=100% height=600px ></iframe>


## Concept

_It's all very beta - including this documentation_

### Issues / Problems

Trying to gauge the movements of hundreds of stocks while they are trading is not easy.
It is quite difficult to note which are the outliers and which are in the middle of the pack.

### Mission
<!-- a statement of a rationale, applicable now as well as in the future -->

* View hundreds of market symbols in a non-reductionist manner
* Be able to get a picture of how the market is flowing

### Vision
<!--  a descriptive picture of a desired future state -->

* Help traders find interesting trading circumstances
* Spin-offs might tackle: financial markets, currencies, weather, Internet traffic

## Two types of Scripts here

* Data gathering
* Data visualization 3D

## Data Gathering

Currently there is is a single app

### [Trades Get]( https://jaanga.github.io/sp500/trades-get/ )

* Request and obtain intraday trades for hundreds of stock market symbols for a number of days
   * Save data to local drive

### Upcoming

* Get official Twitter name for each symbol - using Twitter API
* Save trades data directly to GitHub?
* Gather trades data via Google Scripts Chron job?


## Data Visualization 3D

There are two scripts of note here

* SP500 Realtime
	* SP500 near realtime ~ updates about once a minute
* SP500 Replay
	* SP500 replay ~ select and follow entire days of one minute intraday trading


### Usage Notes

The first time you run the Jaanga SP500 scripts, you may need to refresh the page in order for everything to load properly.
The script only runs on devices that support [WebGL]( https://get.webgl.org/ ).

Once the script is running, updates will occur every minute or so - and you will see the symbols move just a bit,

**Navigation**
* Roll = left or 1 finger
* Zoom = scroll or 2 finger
* Move = right or 3 finger

**Desktop/laptop**
* Move your cursor over symbols to see their charts pop up. Click on empty area to clear.

**Tablet/phone**
* Not quite as easy as desktop. You may need to smudge or wiggle your finger in order to show the pop-up.
Click on an empty space to clear selection before clicking on another symbol

**Indicators**
During the trading day the symbols move across the table
* Left/Red - Right/Green. Symbols in the green area are gainers. Symbols in the red are losers.
The further the symbols are from the centerline the more they are gaining or losing.
Symbol stuck at the edges of the table have gained or lost over 20%
* Front/Start - Back/Finish. Movement from start to finish is based on volume - the current volume divided by the average daily volume.
All symbols start at zero. Symbols at the back have reached or exceeded 600% of the symbols average daily volume in that session

### Features
<!-- and benefits -->

* Displays the positions of the entire SP500 in 3D
* Market data is updated every minute or so
* Automatic acquisition and storage of data
* Full 3D ~ rotate, and and zoom in real-time
	* Real-time animation or real-time data
* Heads-up display with links and charts for individual symbols
* Select a symbol from menu and see its position highlighted in the 3D display
* Select a symbol by typing
* Symbols colored by sector
* Data wrangling
	* Keeps all the data visible always
* Large amounts of data
	* No server. No server management. Little that is hackable
	* All data in the cloud
* Storage likely to last until the end of time
* Supports many data type possibilities
	* Augmented unreality / heads-up display
* A UI that is not a [skeumorph]( https://en.wikipedia.org/wiki/Skeuomorph ) of the meatworld/second life
* UI that allows access to huge amounts of choices
	* non-reductionist ways or presenting data
	* Run-time updates of data and/or code
* Single language - JavaScript - for the whole thing - no HTML or CSS
	* Code is highly customizable
	* Very CORS oriented
	* Theme-able
	* Many sorts of triage/representation/selection possibilities
	* No crashes. It just works
	* Works on desktops, laptops, tablets and phones


### Things To Do / Road Map

_One day this list will be as long as your arm_


### User Interface

* Alternative menu layouts
* Create alternative color schemes

### Portfolios / Sectors /Groups

* Highlight your own and others portfolios
* Display bounding boxes around the symbols in a particular industry sector


### Heads-Up Display

* ???

### Links to Social Networks

* ???

## Copyright and License

* [Copyright and License]( https://jaanga.github.io/#https://jaanga.github.io/jaanga-copyright-and-mit-license.md )

***

<center title="dingbat" >
# <a href=javascript:window.scrollTo(0,0); style=text-decoration:none; >❦</a>
</center>


