document.addEventListener("DOMContentLoaded",init);
var pointX_small = [230,230,390,390];
var pointY_small = [300,150,150,300];

function init(){
    SvgPolygon();
    

//儲存按鈕
var saveBtn = document.getElementById("save_btn");
saveBtn.addEventListener("click",function(){
  var typeBtn_v0 = document.getElementById("typeBtn_0").value;
  var typeBtn_v1 = document.getElementById("typeBtn_1").value;
  console.log(typeBtn_v0);
  if(typeBtn_v0 == 0){
    pointX_small = [(pointX_small[0]),pointX_small[1],pointX_small[2],pointX_small[3]];
    pointY_small= [(pointY_small[0]),pointY_small[1],pointY_small[2],pointY_small[3]];
  alert("框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。");
  return;
  }
  if(typeBtn_v1 == 1){
    pointX_small = [(pointX_small[0]),pointX_small[1],pointX_small[2],pointX_small[3],pointX_small[4]];
    pointY_small= [(pointY_small[0]),pointY_small[1],pointY_small[2],pointY_small[3],pointY_small[4]];
  alert("框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。");
    console.log(typeBtn_v1);
    return;
  }
  
},false);

var typeBtn_0 = document.getElementById("typeBtn_0");
typeBtn_0.addEventListener("click",function(){
  var theSVG = document.getElementById("theSVG");
  var rotate = theSVG.style.transform = "rotate(45deg)";
  rotate = true;
  $(".mutilScreen").hide();
  $(".smallScreen").show();
  for(var i = 0; i < 5; i++){
    $("#handle_B_"+i).hide();
  }
  for(var j = 0; j<4;j++){
    $("#handle_A_"+i).show();
  }
  alert("框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。");
  if(rotate == true){
    rotateTopLeft()
    console.log("hi");
  }

});

var typeBtn_1 = document.getElementById("typeBtn_1");

typeBtn_1.addEventListener("click",function(){
  var theSVG_02 = document.getElementById("theSVG_02");
  SvgPolygon_02();
  $(".smallScreen").hide();
  $(".mutilScreen").show();
  for(var i = 0; i < 4; i++){
    $("#handle_A_"+i).hide();
  }

  for(var i = 0; i < 5; i++){
    $("#handle_B_"+i).show();
  }

  
  var pointX_small = [230,230,390,390,310];
  var pointY_small = [300,150,150,300,390];
  pointX_small = [(pointX_small[0]),pointX_small[1],pointX_small[2],pointX_small[3],pointX_small[4]];
  pointY_small= [(pointY_small[0]),pointY_small[1],pointY_small[2],pointY_small[3],pointX_small[4]];
  console.log(pointX_small);
  console.log(pointY_small);
  alert("框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。");
},false);

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


  function SvgPolygon_02() {
    var theSVG_02 = document.getElementById("theSVG_02");
    var polygon = document.createElement("polygon");
    var polygon = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    polygon.setAttribute('points',"230,300 230,150 390,150 390,300 310,390");
    polygon.setAttribute("id","y");
    theSVG_02.appendChild(polygon);

    var points = polygon.points;
    var svgRoot = $(polygon).closest("svg");
    
    for (var i = 0; i < points.numberOfItems; i++) {
      (function (i) { // close over variables for drag call back
        var point = points.getItem(i);

        var handle = document.createElement("div");
        handle.id = "handle_B_"+i;
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
              pointX_small[i] = point.x;
              pointY_small[i] = point.y;
            },0);
          }
        });
      }(i));
    }    
  }
 
  

 


 




