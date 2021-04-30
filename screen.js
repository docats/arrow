document.addEventListener("DOMContentLoaded",init);
var pointX_small = [];
var pointY_small = [];
var pointX_big = [];
var pointY_big = [];

function init(){
  
    SvgPolygon();
    ScreenPolygon();
}

// function DragObject(){
//     $('#x').draggable({
//         containment:"#screen",
//     });
// }

document.addEventListener("click",SaveBtn);

//儲存按鈕
function SaveBtn(){
    document.getElementById("save_btn");
    
    pointX_small = [(pointX_small[0]),pointX_small[1],pointX_small[2],pointX_small[3],pointX_small[4]];
    pointY_small= [(pointY_small[0]),pointY_small[1],pointY_small[2],pointY_small[3],pointY_small[4]];
    pointX_big = [(pointX_big[0]),pointX_big[1],pointX_big[2],pointX_big[3],pointX_big[4]];
    pointY_big= [(pointY_big[0]),pointY_big[1],pointY_big[2],pointY_big[3],pointY_big[4]];
    alert("小框的X座標為:"+pointX_small+" 。"+"小框的Y座標為:"+pointY_small+"。"+"大框的X座標為:"+pointX_big+" 。"+"大框的Y座標為:"+pointY_big);
    // alert(pointX_small[0]);
}


function SvgPolygon() {
    var theSVG = document.getElementById("theSVG");
    var polygon = document.createElement("polygon");
    var polygon = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    polygon.setAttribute('points',"230,300 230,150 390,150 390,300");
    polygon.setAttribute("id","x");
    theSVG.appendChild(polygon);

    var points = polygon.points;
    var svgRoot = $(polygon).closest("svg");
    
    for (var i = 0; i < points.numberOfItems; i++) {
      (function (i) { // close over variables for drag call back
        var point = points.getItem(i);

        var handle = document.createElement("div");
        handle.id = "handle_A_"+i;
        handle.className = "handle";
        document.body.appendChild(handle);

        var base = svgRoot.position();
        
        var cs = window.getComputedStyle(handle, null);
        
        base.left -= (parseInt(cs.width) + parseInt(cs.borderLeftWidth) + parseInt(cs.borderRightWidth))/2; 
        base.top -= (parseInt(cs.height) + parseInt(cs.borderTopWidth) + parseInt(cs.borderBottomWidth))/2; 
        handle.style.left = base.left + point.x + "px";
        handle.style.top = base.top + point.y + "px";

        console.log("測試1:"+ base.left);
        console.log("測試2:"+ base.left);


        $(handle).draggable({
          drag:function (event) {
            setTimeout(function () { // jQuery apparently calls this *before* setting position, so defer
              point.x = parseInt(handle.style.left) - base.left;
              point.y = parseInt(handle.style.top) - base.top;
              pointX_small[i] = point.x;
              pointY_small[i] = point.y;
            },0);
          }
        });
      }(i));
    }    
  }


  function ScreenPolygon() {
    var theSVG = document.getElementById("screenSVG");
    var polygon = document.createElement("polygon");
    var polygon = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    polygon.setAttribute('points',"0,70 0,400 640,400 640,70");
    polygon.setAttribute("id","y");
    theSVG.appendChild(polygon);

    var points = polygon.points;
    var svgRoot = $(polygon).closest("svg");
    
    for (var i = 0; i < points.numberOfItems; i++) {
      (function (i) { // close over variables for drag call back
        var point = points.getItem(i);

        var handle = document.createElement("div");
        handle.id = "handle_A_"+i;
        handle.className = "handle";
        document.body.appendChild(handle);

        var base = svgRoot.position();
      
        var cs = window.getComputedStyle(handle, null);
        
        base.left -= (parseInt(cs.width) + parseInt(cs.borderLeftWidth) + parseInt(cs.borderRightWidth))/2; 
        base.top -= (parseInt(cs.height) + parseInt(cs.borderTopWidth) + parseInt(cs.borderBottomWidth))/2; 
        handle.style.left = base.left + point.x + "px";
        handle.style.top = base.top + point.y + "px";
        $(handle).draggable({
          drag:function (event) {
            setTimeout(function () { // jQuery apparently calls this *before* setting position, so defer
              point.x = parseInt(handle.style.left) - base.left;
              point.y = parseInt(handle.style.top) - base.top;
              pointX_big[i] = point.x;
              pointY_big[i] = point.y;
            },0);
          }
        });
      }(i));
    }    
  }




