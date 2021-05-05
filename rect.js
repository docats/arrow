document.addEventListener("DOMContentLoaded",init);
var pointX_small = [230,230,390,390];
var pointY_small = [300,150,150,300];

function init(){
    SvgPolygon();
    

//儲存按鈕
var saveBtn = document.getElementById("save_btn");
saveBtn.addEventListener("click",function(){
  var typeBtn_v0 = document.getElementById("typeBtn_0").value;
 
  console.log(typeBtn_v0);
  if(typeBtn_v0 == 0){
    pointX_small = [(pointX_small[0]),pointX_small[1],pointX_small[2],pointX_small[3]];
    pointY_small= [(pointY_small[0]),pointY_small[1],pointY_small[2],pointY_small[3]];
  alert("框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。");
  return;
  }
 
},false);

var typeBtn_0 = document.getElementById("typeBtn_0");
typeBtn_0.addEventListener("click",function(){
  var theSVG = document.getElementById("theSVG");
  var rotate = theSVG.style.transform = "rotate(45deg)";
  pointX_small = [pointX_small[0],pointX_small[1],pointX_small[2],pointX_small[3]];
  pointY_small= [pointY_small[0],pointY_small[1],pointY_small[2],pointY_small[3]];
  
  alert("框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。");
  

});


}


function SvgPolygon() {
    var theSVG = document.getElementById("theSVG");
    var polygon = document.createElement("polygon");
    var polygon = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    polygon.setAttribute('points',"230,300 230,150 390,150 390,300");
    polygon.setAttribute("id","x");
    polygon.setAttribute("class","ui-draggable");
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
          containment:"#area",
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

  
  function rotateTopLeft(){
    $("#handle_A_0").css('top','0');
    $("#handle_A_0").css('left','0');
    $("#handle_A_1").css('top','0');
    $("#handle_A_1").css('left','0');
    $("#handle_A_2").css('top','0');
    $("#handle_A_2").css('left','0');
    $("#handle_A_3").css('top','0');
    $("#handle_A_3").css('left','0');
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
