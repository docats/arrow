document.addEventListener("DOMContentLoaded",init);

function init(){
    DragObject();
    // draggableShape();
}

function DragObject(){
    $('#theSVG').draggable({
        containment:"#screen",
    });
 
}



// function draggableShape() {
//     var theSVG = document.getElementById("theSVG");
    
//     var rect = $("#rect_small");
//     rect.attr('x',0).attr('y',0);
//     var points = line.rect;
    
//     var svgRoot = $(rect).closest("svg");
    
//     for (var i = 0; i < points.numberOfItems; i++) {
//       (function (i) { // close over variables for drag call back
//         var point = points.getItem(i);

//         var handle = document.createElement("div");
//         handle.className = "handle";
//         document.body.appendChild(handle);

//         var base = svgRoot.position();
//         console.log("base:"+base);
//         // center handles over polygon
//         var cs = window.getComputedStyle(handle, null);
        
//         base.left -= (parseInt(cs.width) + parseInt(cs.borderLeftWidth) + parseInt(cs.borderRightWidth))/2; 
//         base.top -= (parseInt(cs.height) + parseInt(cs.borderTopWidth) + parseInt(cs.borderBottomWidth))/2; 
//         console.log("cs.width:" + (parseInt(cs.width)+"cs.borderLeftWidth:" + parseInt(cs.borderLeftWidth)+"cs.borderRightWidth:" + parseInt(cs.borderRightWidth)));

//         handle.style.left = base.left + point.x + "px";
//         handle.style.top = base.top + point.y + "px";

//         $(handle).draggable({
//           drag: function (event) {
//             setTimeout(function () { // jQuery apparently calls this *before* setting position, so defer
//               point.x = parseInt(handle.style.left) - base.left;
//               point.y = parseInt(handle.style.top) - base.top;
//             },0);
//           }
//         });
//       }(i));
//     }
//   }