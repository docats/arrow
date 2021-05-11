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
   
    var polygon = document.createElement("polygon");
    var polygon = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    // polygon.setAttribute('points',"230,300 230,150 390,150 390,300");
    
    // var pointX_small = [230,230,390,390];
    // var pointY_small = [300,150,150,300];
    polygon.setAttribute('points',pointX_small[0]+','+pointY_small[0]+' '+pointX_small[1]+','+pointY_small[1]+' '+pointX_small[2]+','+pointY_small[2]+' '+pointX_small[3]+','+pointY_small[3]);
        
    polygon.setAttribute("id","x");
    polygon.setAttribute("class","ui-draggable");
    theSVG.appendChild(polygon);
    theSVG.style.fill="#fff";

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
              
            }
            ,0);
           
          }
        });
      }(i));
     
    }   
    return 
  }

  
  
  //清除所有物件
  function cleanBtn(){
    var theSVG = document.getElementById("theSVG");
    var handle_a_0 = document.getElementById("handle_a_0");
    var handle_a_1 = document.getElementById("handle_a_1");
    var handle_a_2 = document.getElementById("handle_a_2");
   
    if(theSVG.style.display === "block"){
      document.getElementById("theSVG").style.display = "none";
      
    for(let i=0;i<4;i++){
      document.getElementById("handle_A_"+i).style.display = "none";
     
      }
    } 
  }


//按鈕0
function typeZero(){
  var theSVG = document.getElementById("theSVG");
  var typeBtn_0 = document.getElementById("typeBtn_0").value;
  var stroke_01 = theSVG.style.stroke = "#fff";
  var fill_01 = theSVG.style.fill = "#fff";
  
  var handle = document.getElementsByClassName("handle")  
  if(typeBtn_0 == 0){
    //把手座標，必須在陣列裡設按鈕0的把手預設值，才不會被前一個的把手設好的座標值影響這次要設定的座標
   var x = [handle[1].style.left="350px",handle[2].style.left="400px",handle[3].style.left="200px",handle[3].style.top="100px"]
   var y = [handle[0].style.top="190px",handle[1].style.top="150px",handle[2].style.top="450px",handle[3].style.top="170px"];
    //把取出來的座標放到pointX_small和pointY_small
   pointX_small = x;
   pointY_small = y;
  
    console.log("value:"+ typeBtn_0);
    return;
  }else{
    console.log("1212");
  }
 
   console.log("this is typeZero");
   
}

//按鈕1
 function typeOne(){
  var typeBtn_1 = document.getElementById("typeBtn_1").value;
    var color = document.getElementById("theSVG");
    var stroke_01 = color.style.stroke = "#fff";
    var fill_01 = color.style.fill = "#fff";
    var handle = document.getElementsByClassName("handle")
   
   if(typeBtn_1 == 1){
    //把手座標，必須在陣列裡設按鈕1的把手預設值，才不會被前一個的把手設好的座標值影響這次要設定的座標
    var x = [handle[1].style.left="250px",handle[2].style.left="100px",handle[3].style.left="100px",handle[3].style.top="200px"]
    var y = [handle[0].style.top="90px",handle[1].style.top="150px",handle[2].style.top="50px",handle[3].style.top="170px"];

    //把取出來的座標放到pointX_small和pointY_small
    pointX_small = x;
    pointY_small = y;

   console.log("value:"+ typeBtn_1);
   }
    
     console.log("this is typeOne");
 }

 //按鈕2
function typeTwo(){
  var typeBtn_2 = document.getElementById("typeBtn_2").value;
  var theSVG = document.getElementById("theSVG");
  var stroke_02 = theSVG.style.stroke = "#fff";
  var fill_02 = theSVG.style.fill = "#fff";
  var handle = document.getElementsByClassName("handle");

  if(typeBtn_2 == 2){
    console.log('value:'+typeBtn_2);
     //把手座標，預設是loading的值(也就是全域變數預設的座標X和Y)，因故必須在陣列裡設按鈕2的把手預設值，才會不離開function被上面的把手設好的全域變數蓋過去
    var x = [handle[1].style.left="100px",handle[2].style.left="500px",handle[3].style.left="600px",handle[3].style.top="400px"]
    var y = [handle[0].style.top="60px",handle[1].style.top="150px",handle[2].style.top="300px",handle[3].style.top="400px"];
   
    //把取出來的座標放到pointX_small和pointY_small
    pointX_small = x;
    pointY_small = y;
   
    console.log("涵式內的X:"+ pointX_small);
    console.log("涵式內的Y:"+ pointY_small);
   
  }
 
    console.log("this is typeTwo");
}



//座標嘗試
// var hello = points_1();
//     function points_1(){
//         return [150,100,500,600];
//   }
//     points_1();
//     // console.log("hello:"+ hello);

// var start = points_2();
//     function points_2(){
//         return [60,150,300,400];
//   }
//     points_2();
    // console.log("start:"+ start);

// console.log(pointX_small[0],pointX_small[1],pointX_small[2],pointX_small[3]);

//重整畫面
function ReSet(){
  history.go(0)
}

// var arrTag = returnArr();
// function returnArr(){
//   return [1,2,3];
// }
// console.log(arrTag);


