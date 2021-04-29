document.addEventListener("DOMContentLoaded",init());
var pointX = [];
var pointY = [];


function init(){
    
    
}

function saveBtn(){
    console.log("Hello World");
}


function draggablePolygon() {
    var theSVG = document.getElementById("theSVG");
    var polygon = document.createElement("polygon");
    var polygon = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    polygon.setAttribute('points',"305.52,18 148.48,18 69.96,154 148.48,290 305.52,290 384.04,154 305.52,18");
    polygon.setAttribute("id","x");
    theSVG.appendChild(polygon);


    var points = polygon.points;
    var svgRoot = $(polygon).closest("svg");
    
    for (var i = 0; i < points.numberOfItems; i++) {
      (function (i) { // close over variables for drag call back
        var point = points.getItem(i);

        var handle = document.createElement("div");
        handle.className = "handle";
        document.body.appendChild(handle);

        var base = svgRoot.position();
        console.log("base:"+base);
        // center handles over polygon
        var cs = window.getComputedStyle(handle, null);
        
        base.left -= (parseInt(cs.width) + parseInt(cs.borderLeftWidth) + parseInt(cs.borderRightWidth))/2; 
        base.top -= (parseInt(cs.height) + parseInt(cs.borderTopWidth) + parseInt(cs.borderBottomWidth))/2; 
        console.log("cs.width:" + (parseInt(cs.width)+"cs.borderLeftWidth:" + parseInt(cs.borderLeftWidth)+"cs.borderRightWidth:" + parseInt(cs.borderRightWidth)));

        handle.style.left = base.left + point.x + "px";
        handle.style.top = base.top + point.y + "px";

        $(handle).draggable({
          drag: function (event) {
            setTimeout(function () { // jQuery apparently calls this *before* setting position, so defer
              point.x = parseInt(handle.style.left) - base.left;
              point.y = parseInt(handle.style.top) - base.top;
            },0);
          }
        });
      }(i));
    }    
  }


  function draggablePolygon_02() {
    var Shape = document.getElementById("shape");
    var polygon = document.createElement("polygon");
    var polygon = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    polygon.setAttribute('points',"300,150 225,280 75,280 0,150 75,20 225,20");
    polygon.setAttribute("id","y");
    Shape.appendChild(polygon);


    var points = polygon.points;
    var svgRoot = $(polygon).closest("svg");
    
    for (var i = 0; i < points.numberOfItems; i++) {
      (function (i) { // close over variables for drag call back
        var point = points.getItem(i);

        var handle = document.createElement("div");
        handle.className = "handle";
        document.body.appendChild(handle);

        var base = svgRoot.position();
        console.log("base:"+base);
        // center handles over polygon
        var cs = window.getComputedStyle(handle, null);
        
        base.left -= (parseInt(cs.width) + parseInt(cs.borderLeftWidth) + parseInt(cs.borderRightWidth))/2; 
        base.top -= (parseInt(cs.height) + parseInt(cs.borderTopWidth) + parseInt(cs.borderBottomWidth))/2; 
        console.log("cs.width:" + (parseInt(cs.width)+"cs.borderLeftWidth:" + parseInt(cs.borderLeftWidth)+"cs.borderRightWidth:" + parseInt(cs.borderRightWidth)));

        handle.style.left = base.left + point.x + "px";
        handle.style.top = base.top + point.y + "px";

        $(handle).draggable({
          drag: function (event) {
            setTimeout(function () { // jQuery apparently calls this *before* setting position, so defer
              point.x = parseInt(handle.style.left) - base.left;
              point.y = parseInt(handle.style.top) - base.top;
            },0);
          }
        });
      }(i));
    }    
  }


  function typeZero(){

    var points = polygon.points;
    var borderColor = document.getElementsByClassName("theSVG_0").stroke='yellow';
      alert("六邊形,"+"邊框顏色:"+borderColor);
      alert("座標:"+ Math.ceil(parseInt(polygon.points)));
      console.log("this is typeZero");
      
  }

  function typeOne(){
    console.log("this is typeOne");
}

function typeTwo(){
    console.log("this is typeTwo");
}

function typeThree(){
    console.log("this is typeThree");
}