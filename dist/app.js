!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";function n(){this.events={},window.navigator.msPointerEnabled?(this.eventTouchstart="MSPointerDown",this.eventTouchmove="MSPointerMove",this.eventTouchend="MSPointerUp"):(this.eventTouchstart="touchstart",this.eventTouchmove="touchmove",this.eventTouchend="touchend"),this.listen()}i.r(e),n.prototype.on=function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)},n.prototype.emit=function(t,e){var i=this.events[t];i&&i.forEach(function(t){t(e)})},n.prototype.listen=function(){var t,e,i=this,n={38:0,39:1,40:2,37:3,75:0,76:1,74:2,72:3,87:0,68:1,83:2,65:3};document.addEventListener("keydown",function(t){var e=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey,o=n[t.which];e||void 0!==o&&(t.preventDefault(),i.emit("move",o)),e||82!==t.which||i.restart.call(i,t)}),this.bindButtonPress(".retry-button",this.retry),this.bindButtonPress(".restart-button",this.restart),this.bindButtonPress(".keep-playing-button",this.keepPlaying);var o=document.getElementsByClassName("game-container")[0];o.addEventListener(this.eventTouchstart,function(i){!window.navigator.msPointerEnabled&&i.touches.length>1||i.targetTouches.length>1||(window.navigator.msPointerEnabled?(t=i.pageX,e=i.pageY):(t=i.touches[0].clientX,e=i.touches[0].clientY),i.preventDefault())}),o.addEventListener(this.eventTouchmove,function(t){t.preventDefault()}),o.addEventListener(this.eventTouchend,function(n){if(!(!window.navigator.msPointerEnabled&&n.touches.length>0||n.targetTouches.length>0)){var o,r;window.navigator.msPointerEnabled?(o=n.pageX,r=n.pageY):(o=n.changedTouches[0].clientX,r=n.changedTouches[0].clientY);var s=o-t,a=Math.abs(s),l=r-e,u=Math.abs(l);Math.max(a,u)>10&&i.emit("move",a>u?s>0?1:3:l>0?2:0)}})},n.prototype.restart=function(t){t.preventDefault(),this.emit("restart")},n.prototype.retry=function(t){t.preventDefault(),this.emit("retry")},n.prototype.keepPlaying=function(t){t.preventDefault(),this.emit("keepPlaying")},n.prototype.bindButtonPress=function(t,e){var i=document.querySelector(t);i.addEventListener("click",e.bind(this)),i.addEventListener(this.eventTouchend,e.bind(this))};var o=n;function r(){this.tileContainer=document.querySelector(".tile-container"),this.scoreContainer=document.querySelector(".score-container"),this.bestContainer=document.querySelector(".best-container"),this.messageContainer=document.querySelector(".game-message"),this.score=0}r.prototype.actuate=function(t,e){var i=this;window.requestAnimationFrame(function(){i.clearContainer(i.tileContainer),t.cells.forEach(function(t){t.forEach(function(t){t&&i.addTile(t)})}),i.updateScore(e.score),i.updateBestScore(e.bestScore),e.terminated&&(e.over?i.message(!1):e.won&&i.message(!0))})},r.prototype.continueGame=function(){this.clearMessage()},r.prototype.clearContainer=function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},r.prototype.addTile=function(t){var e=this,i=document.createElement("div"),n=document.createElement("div"),o=t.previousPosition||{x:t.x,y:t.y},r=this.positionClass(o),s=["tile","tile-"+t.value,r];t.value>2048&&s.push("tile-super"),this.applyClasses(i,s),n.classList.add("tile-inner"),n.textContent=t.value,t.previousPosition?window.requestAnimationFrame(function(){s[2]=e.positionClass({x:t.x,y:t.y}),e.applyClasses(i,s)}):t.mergedFrom?(s.push("tile-merged"),this.applyClasses(i,s),t.mergedFrom.forEach(function(t){e.addTile(t)})):(s.push("tile-new"),this.applyClasses(i,s)),i.appendChild(n),this.tileContainer.appendChild(i)},r.prototype.applyClasses=function(t,e){t.setAttribute("class",e.join(" "))},r.prototype.normalizePosition=function(t){return{x:t.x+1,y:t.y+1}},r.prototype.positionClass=function(t){return"tile-position-"+(t=this.normalizePosition(t)).x+"-"+t.y},r.prototype.updateScore=function(t){this.clearContainer(this.scoreContainer);var e=t-this.score;if(this.score=t,this.scoreContainer.textContent=this.score,e>0){var i=document.createElement("div");i.classList.add("score-addition"),i.textContent="+"+e,this.scoreContainer.appendChild(i)}},r.prototype.updateBestScore=function(t){this.bestContainer.textContent=t},r.prototype.message=function(t){var e=t?"game-won":"game-over",i=t?"You win!":"Game over!";this.messageContainer.classList.add(e),this.messageContainer.getElementsByTagName("p")[0].textContent=i},r.prototype.clearMessage=function(){this.messageContainer.classList.remove("game-won"),this.messageContainer.classList.remove("game-over")};var s=r;function a(){this.bestScoreKey="bestScore",this.gameStateKey="gameState";var t=this.localStorageSupported();this.storage=t?window.localStorage:window.fakeStorage}window.fakeStorage={_data:{},setItem:function(t,e){return this._data[t]=String(e)},getItem:function(t){return this._data.hasOwnProperty(t)?this._data[t]:void 0},removeItem:function(t){return delete this._data[t]},clear:function(){return this._data={}}},a.prototype.localStorageSupported=function(){try{var t=window.localStorage;return t.setItem("test","1"),t.removeItem("test"),!0}catch(t){return!1}},a.prototype.getBestScore=function(){return this.storage.getItem(this.bestScoreKey)||0},a.prototype.setBestScore=function(t){this.storage.setItem(this.bestScoreKey,t)},a.prototype.getGameState=function(){var t=this.storage.getItem(this.gameStateKey);return t?JSON.parse(t):null},a.prototype.setGameState=function(t){this.storage.setItem(this.gameStateKey,JSON.stringify(t))},a.prototype.clearGameState=function(){this.storage.removeItem(this.gameStateKey)};var l=a;function u(t,e){this.x=t.x,this.y=t.y,this.value=e||2,this.previousPosition=null,this.mergedFrom=null}u.prototype.savePosition=function(){this.previousPosition={x:this.x,y:this.y}},u.prototype.updatePosition=function(t){this.x=t.x,this.y=t.y},u.prototype.serialize=function(){return{position:{x:this.x,y:this.y},value:this.value}};var h=u;function c(t,e){this.size=t,this.cells=e?this.fromState(e):this.empty()}c.prototype.empty=function(){for(var t=[],e=0;e<this.size;e++)for(var i=t[e]=[],n=0;n<this.size;n++)i.push(null);return t},c.prototype.fromState=function(t){for(var e=[],i=0;i<this.size;i++)for(var n=e[i]=[],o=0;o<this.size;o++){var r=t[i][o];n.push(r?new h(r.position,r.value):null)}return e},c.prototype.randomAvailableCell=function(){var t=this.availableCells();if(t.length)return t[Math.floor(Math.random()*t.length)]},c.prototype.availableCells=function(){var t=[];return this.eachCell(function(e,i,n){n||t.push({x:e,y:i})}),t},c.prototype.eachCell=function(t){for(var e=0;e<this.size;e++)for(var i=0;i<this.size;i++)t(e,i,this.cells[e][i])},c.prototype.cellsAvailable=function(){return!!this.availableCells().length},c.prototype.cellAvailable=function(t){return!this.cellOccupied(t)},c.prototype.cellOccupied=function(t){return!!this.cellContent(t)},c.prototype.cellContent=function(t){return this.withinBounds(t)?this.cells[t.x][t.y]:null},c.prototype.insertTile=function(t){this.cells[t.x][t.y]=t},c.prototype.removeTile=function(t){this.cells[t.x][t.y]=null},c.prototype.withinBounds=function(t){return t.x>=0&&t.x<this.size&&t.y>=0&&t.y<this.size},c.prototype.serialize=function(){for(var t=[],e=0;e<this.size;e++)for(var i=t[e]=[],n=0;n<this.size;n++)i.push(this.cells[e][n]?this.cells[e][n].serialize():null);return{size:this.size,cells:t}};var p=c;function d(t,e,i,n){this.size=t,this.inputManager=new e,this.storageManager=new n,this.actuator=new i,this.startTiles=2,this.inputManager.on("move",this.move.bind(this)),this.inputManager.on("restart",this.restart.bind(this)),this.inputManager.on("retry",this.retry.bind(this)),this.inputManager.on("keepPlaying",this.keepPlaying.bind(this)),this.setup()}d.prototype.restart=function(){confirm("Are you sure you want to start a new game?")&&this.retry()},d.prototype.retry=function(){this.storageManager.clearGameState(),this.actuator.continueGame(),this.setup()},d.prototype.keepPlaying=function(){this.keepPlaying=!0,this.actuator.continueGame()},d.prototype.isGameTerminated=function(){return this.over||this.won&&!this.keepPlaying},d.prototype.setup=function(){var t=this.storageManager.getGameState();t?(this.grid=new p(t.grid.size,t.grid.cells),this.score=t.score,this.over=t.over,this.won=t.won,this.keepPlaying=t.keepPlaying):(this.grid=new p(this.size),this.score=0,this.over=!1,this.won=!1,this.keepPlaying=!1,this.addStartTiles()),this.actuate()},d.prototype.addStartTiles=function(){for(var t=0;t<this.startTiles;t++)this.addRandomTile()},d.prototype.addRandomTile=function(){if(this.grid.cellsAvailable()){var t=new h(this.grid.randomAvailableCell(),2);this.grid.insertTile(t)}},d.prototype.actuate=function(){this.storageManager.getBestScore()<this.score&&this.storageManager.setBestScore(this.score),this.over?this.storageManager.clearGameState():this.storageManager.setGameState(this.serialize()),this.actuator.actuate(this.grid,{score:this.score,over:this.over,won:this.won,bestScore:this.storageManager.getBestScore(),terminated:this.isGameTerminated()})},d.prototype.serialize=function(){return{grid:this.grid.serialize(),score:this.score,over:this.over,won:this.won,keepPlaying:this.keepPlaying}},d.prototype.prepareTiles=function(){this.grid.eachCell(function(t,e,i){i&&(i.mergedFrom=null,i.savePosition())})},d.prototype.moveTile=function(t,e){this.grid.cells[t.x][t.y]=null,this.grid.cells[e.x][e.y]=t,t.updatePosition(e)},d.prototype.move=function(t){var e=this;if(!this.isGameTerminated()){var i,n,o=this.getVector(t),r=this.buildTraversals(o),s=!1;this.prepareTiles(),r.x.forEach(function(t){r.y.forEach(function(r){if(i={x:t,y:r},n=e.grid.cellContent(i)){var a=e.findFarthestPosition(i,o),l=e.grid.cellContent(a.next);if(l&&l.value===n.value&&!l.mergedFrom){var u=new h(a.next,2*n.value);u.mergedFrom=[n,l],e.grid.insertTile(u),e.grid.removeTile(n),n.updatePosition(a.next),e.score+=u.value,2048===u.value&&(e.won=!0)}else e.moveTile(n,a.farthest);e.positionsEqual(i,n)||(s=!0)}})}),s&&(this.addRandomTile(),this.movesAvailable()||(this.over=!0),this.actuate())}},d.prototype.getVector=function(t){return{0:{x:0,y:-1},1:{x:1,y:0},2:{x:0,y:1},3:{x:-1,y:0}}[t]},d.prototype.buildTraversals=function(t){for(var e={x:[],y:[]},i=0;i<this.size;i++)e.x.push(i),e.y.push(i);return 1===t.x&&(e.x=e.x.reverse()),1===t.y&&(e.y=e.y.reverse()),e},d.prototype.findFarthestPosition=function(t,e){var i;do{t={x:(i=t).x+e.x,y:i.y+e.y}}while(this.grid.withinBounds(t)&&this.grid.cellAvailable(t));return{farthest:i,next:t}},d.prototype.movesAvailable=function(){return this.grid.cellsAvailable()||this.tileMatchesAvailable()},d.prototype.tileMatchesAvailable=function(){for(var t,e=0;e<this.size;e++)for(var i=0;i<this.size;i++)if(t=this.grid.cellContent({x:e,y:i}))for(var n=0;n<4;n++){var o=this.getVector(n),r={x:e+o.x,y:i+o.y},s=this.grid.cellContent(r);if(s&&s.value===t.value)return!0}return!1},d.prototype.positionsEqual=function(t,e){return t.x===e.x&&t.y===e.y};var y=d;window.requestAnimationFrame(function(){new y(4,o,s,l)})}]);