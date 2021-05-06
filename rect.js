document.addEventListener("DOMContentLoaded",init);
var pointX_small = [230,230,390,390];
  var pointY_small = [300,150,150,300];

function init(){
  
  $('<style>.handle::before{left:-6px;}</style>').appendTo('.s');
    SvgPolygon();
    

//儲存按鈕
var saveBtn = document.getElementById("save_btn");
saveBtn.addEventListener("click",function(){
    pointX_small = [(pointX_small[0]),pointX_small[1],pointX_small[2],pointX_small[3]];
    pointY_small= [(pointY_small[0]),pointY_small[1],pointY_small[2],pointY_small[3]];
  alert("框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。");
 
},false);



}





function SvgPolygon() {
    var theSVG = document.getElementById("theSVG");
    var polygon = document.createElement("polygon");
    var polygon = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    // polygon.setAttribute('points',"230,300 230,150 390,150 390,300");
    polygon.setAttribute('points',"230,300 230,150 390,150 390,300");
    polygon.setAttribute("id","x");
    polygon.setAttribute("class","ui-draggable");
    theSVG.appendChild(polygon);

    var points = polygon.points;
    var svgRoot = $(polygon).closest("svg");
    var area = document.getElementById("area");
    var screen = document.getElementById("screen");
    var wrapPoint = document.createElement("div");
    wrapPoint.setAttribute("id","s");
    wrapPoint.setAttribute("class","s");
    screen.appendChild(wrapPoint);

    for (var i = 0; i < points.numberOfItems; i++) {
      (function (i) { // close over variables for drag call back
        var point = points.getItem(i);

        var handle = document.createElement("div");
        handle.id = "handle_A_"+i;
        handle.className = "handle";
        document.getElementById("s").appendChild(handle);

        var base = svgRoot.position();
        
        var cs = window.getComputedStyle(handle, null);
        
        // base.left -= (parseInt(cs.width) + parseInt(cs.borderLeftWidth) + parseInt(cs.borderRightWidth))/2; 
        // base.top -= (parseInt(cs.height) + parseInt(cs.borderTopWidth) + parseInt(cs.borderBottomWidth))/2; 
        // handle.style.left = base.left + point.x + "px";
        // handle.style.top = base.top + point.y + "px";
        handle.style.left =  point.x + "px";
        handle.style.top = point.y + "px";
        console.log("1:"+handle.style.left);
        $(handle).draggable({
          containment:"#area",
          drag:function (event) {
            setTimeout(function () { // jQuery apparently calls this *before* setting position, so defer
              // point.x = parseInt(handle.style.left) - base.left;
              // point.y = parseInt(handle.style.top) - base.top;
              point.x = parseInt(handle.style.left);
              point.y = parseInt(handle.style.top);
              pointX_small[i] = point.x;
              pointY_small[i] = point.y;
              console.log("text1:"+pointX_small[i]);
              console.log("text2:"+pointY_small[i]);
            }
            ,0);
           
          }
        });
      }(i));
     
    }    
  }

  
  

  function cleanBtn(){
    var theSVG = document.getElementById("theSVG");
   
    if(theSVG.style.display === "block"){
      document.getElementById("theSVG").style.display = "none";
      
    for(let i=0;i<4;i++){
      document.getElementById("handle_A_"+i).style.display = "none";
      }
    } 
  }


//按鈕0
function typeZero(){
  var color = document.getElementById("theSVG");
  var stroke_01 = color.style.stroke = "#A15408";
  var fill_01 = color.style.fill = "#fff";
  var move = color.style.left="50px";
  var handle = document.getElementsByClassName("handle");
  // handle[0].innerHTML ="0";
  // handle[1].innerHTML ="1";
  // handle[2].innerHTML ="2";
  // handle[3].innerHTML ="3";
$('<style>.handle::before{left:44px;}</style>').appendTo('.s');
  
  
  // document.handle.addRule('.handle::before{left:100px}',0);
  
  
  $(".handle").draggable({
    containment:"#area"
  })

  console.log("handle[0]:"+handle[0]);
  // var handle_A_0 =document.getElementById("handle_A_0");

  // handle_A_0.style.left="100px";

  document.styleSheets[0].addRule('.handle::before{left:150px}',0);
  
  var QQ = window.getComputedStyle(handle,'::before');
  pointX_small = [pointX_small[0],pointX_small[1],pointX_small[2],pointX_small[3]];
  pointY_small= [(pointY_small[0]),pointY_small[1],pointY_small[2],pointY_small[3]];

    
  
  alert("stroke_1:="+stroke_01+"。"+"fill_1:="+fill_01+"。"+"框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。"); 
 
   console.log("this is typeOne");
}

//按鈕1
 function typeOne(){
  
    var color = document.getElementById("theSVG");
    var stroke_01 = color.style.stroke = "#A15408";
    var fill_01 = color.style.fill = "#614D1E";
    var move = color.style.left="0px";
    $('<style>.handle::before{left:-6px;}</style>').appendTo('.s');
    alert("stroke_1:="+stroke_01+"。"+"fill_1:="+fill_01+"。"+"框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。"); 
   
     console.log("this is typeOne");
 }

 //按鈕2
 function typeTwo(){
  var color = document.getElementById("theSVG");
  var stroke_02 = color.style.stroke = "#92D0E0";
  var fill_02 = color.style.fill = "#A61D17";
  var move = color.style.left="0px";
  $('<style>.handle::before{left:-6px;}</style>').appendTo('.s');
  alert("stroke_2:="+stroke_02+"。"+"fill_2:="+fill_02+"。"+"框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。");
    console.log("this is typeTwo");
}


