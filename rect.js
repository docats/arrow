document.addEventListener("DOMContentLoaded",init);
var pointX_small = [230,230,390,390];
var pointY_small = [300,150,150,300];
// var pointX_two = [250,230,390,390];
// var pointY_two = [350,150,150,300];

function init(){
  
  $('<style>.handle::before{left:-6px;}</style>').appendTo('.s');
    SvgPolygon();
    // MovePolygon();
    

//儲存按鈕
var saveBtn = document.getElementById("save_btn");
saveBtn.addEventListener("click",function(){
  
    pointX_small = [pointX_small[0],pointX_small[1],pointX_small[2],pointX_small[3]];
    pointY_small= [pointY_small[0],pointY_small[1],pointY_small[2],pointY_small[3]];
    alert("pointX_small框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。");
  
},false);

}



function SvgPolygon() {
  
    var theSVG = document.getElementById("theSVG");
    var typeBtn_0 = document.getElementById("typeBtn_0").value;
    var typeBtn_1 = document.getElementById("typeBtn_1").value;
    var typeBtn_2 = document.getElementById("typeBtn_2").value;
    var polygon = document.createElement("polygon");
    var polygon = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    // polygon.setAttribute('points',"230,300 230,150 390,150 390,300");
    polygon.setAttribute('points',pointX_small[0]+','+pointY_small[0]+' '+pointX_small[1]+','+pointY_small[1]+' '+pointX_small[2]+','+pointY_small[2]+' '+pointX_small[3]+','+pointY_small[3]);
        
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
        // console.log("1:"+handle.style.left);

        
        

        
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
              // console.log("text1:"+pointX_small[0]);
              // console.log("text1:"+pointY_small[0]);
              // console.log("text2:"+pointX_small[1]);
              // console.log("text2:"+pointY_small[1]);
              // console.log("text3:"+pointX_small[2]);
              // console.log("text3:"+pointY_small[2]);
              // console.log("text4:"+pointX_small[3]);
              // console.log("text4:"+pointY_small[3]);
              
            }
            ,0);
           
          }
        });
      }(i));
     
    }   
    return; 
  }

  
  
  //清除所有物件
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
  // var pointX_small = [350,400,200,100];
  // var pointY_small = [190,150,450,170];
  
  var theSVG = document.getElementById("theSVG");
  var typeBtn_0 = document.getElementById("typeBtn_0").value;
  var stroke_01 = theSVG.style.stroke = "#A15408";
  var fill_01 = theSVG.style.fill = "#fff";
  
  var handle = document.getElementsByClassName("handle")
 

  // polygon.setAttribute('points',pointX_small[0]+','+pointY_small[0]+' '+pointX_small[1]+','+pointY_small[1]+' '+pointX_small[2]+','+pointY_small[2]+' '+pointX_small[3]+','+pointY_small[3]);
  // pointX_small = [pointX_small[0],pointX_small[1],pointX_small[2],pointX_small[3]];
  // pointY_small= [pointY_small[0],pointY_small[1],pointY_small[2],pointY_small[3]];
  
  
    
  // handle[0].innerHTML ="0";
  // handle[1].innerHTML ="1";
  // handle[2].innerHTML ="2";
  // handle[3].innerHTML ="3";
 
$('<style>.handle::before{left:-6px;}</style>').appendTo('.s');


  
  if(typeBtn_0 == 0){
    var polygon = document.createElement("polygon");
    var polygon = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    var points = polygon.points;
    // polygon.setAttribute('points',"350,190 400,150 200,450 100,170");
    // polygon.setAttribute("id","x");
    // SvgPolygon(document.getElementById("x"));
    
    
    
    
    // var pointX_small = [350,400,200,100];
    // var pointY_small = [190,150,450,170];  
   pointX_small[0] = handle[0].style.left="350px"
   pointY_small[0] = handle[0].style.left="190px"
   pointX_small[1] = handle[1].style.left="400px"
   pointY_small[1] = handle[1].style.left="150px"
   pointX_small[2] = handle[2].style.left="200px"
   pointY_small[2] = handle[2].style.left="450px"
   pointX_small[3] = handle[3].style.left="100px"
   pointY_small[3] = handle[3].style.left="170px"

  

  pointX_small = [pointX_small[0],pointX_small[1],pointX_small[2],pointX_small[3]]

  pointY_small = [pointY_small[0],pointY_small[1],pointY_small[2],pointY_small[3]]
  
    alert("框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。"); 

    // $('#s').html("<p>123</p>");

   


             

    // $('#theSVG').html(`<polygon points="350,100 250,150 300,150 390,400" id="x" class="ui-draggable"></polygon>`)

    // $('#s').html(`<div id="handle_A_0" class="handle ui-draggable" style="left:${pointX_small[0]+100+'px'}; top: ${pointY_small[0]+100+'px'};"></div><div id="handle_A_1" class="handle ui-draggable" style="left: 250px; top: 150px;"></div><div id="handle_A_2" class="handle ui-draggable" style="left: 300px; top: 150px;"></div><div id="handle_A_3" class="handle ui-draggable" style="left: 390px; top: 400px;"></div><style>.handle::before{left:-6px;}</style>`);
    // console.log(pointX_small[0]+200);
    console.log("8989");
  }else{
    console.log("1212");
  }
  
  
  // console.log("handle[0]:"+handle[0]);
  // var handle_A_0 =document.getElementById("handle_A_0");

  // handle_A_0.style.left="100px";

  
  
  
  // pointX_small = [(pointX_small[0]),pointX_small[1],pointX_small[2],pointX_small[3]];
  // pointY_small= [(pointY_small[0]),pointY_small[1],pointY_small[2],pointY_small[3]];

    
  
  // alert("stroke_1:="+stroke_01+"。"+"fill_1:="+fill_01+"。"+"框的X座標為:"+pointX_small+" 。"+"框的Y座標為:"+pointY_small+"。"); 
 
   console.log("this is typeZero");
   
}

//按鈕1
 function typeOne(){
  
    var color = document.getElementById("theSVG");
    var stroke_01 = color.style.stroke = "#A15408";
    var fill_01 = color.style.fill = "#614D1E";
   
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

//重整畫面
function ReSet(){
  history.go(0)

   
  
}

//test



//for buttonZero
// function MovePolygon() {
  
  
//   var points = polygon.points;
//   var svgRoot = $(polygon).closest("svg");
//   var area = document.getElementById("area");
//   var screen = document.getElementById("screen");
  

//   for (var i = 0; i < points.numberOfItems; i++) {
//     (function (i) { // close over variables for drag call back
//       var point = points.getItem(i);
  
//       var base = svgRoot.position();
          
//       var cs = window.getComputedStyle(handle, null);
    
//       handle.style.left =  point.x + "px";
//       handle.style.top = point.y + "px";
//       console.log("1:"+handle.style.left);
//       $(handle).draggable({
//         containment:"#area",
//         drag:function (event) {
//           setTimeout(function () { // jQuery apparently calls this *before* setting position, so defer
            
//             point.x = parseInt(handle.style.left);
//             point.y = parseInt(handle.style.top);
//             pointX_two[i] = point.x;
//             pointX_two[i] = point.y;
//             console.log("text3:"+pointX_two[i]);
//             console.log("text4:"+pointX_two[i]);
//           }
//           ,0);
         
//         }
//       });
//     }(i));
   
//   }    
// }


