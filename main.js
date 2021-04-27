document.addEventListener("DOMContentLoaded",init);



function init(){
    draggable();
    selectStyle();
    rotate();
    
    
}

function draggable(){

    for(let i=0; i<6; i++){
        $("#draggable_"+i).draggable({
            cursor:"move",
            containment: "#area",
            scroll:false
        });
    }

}

function rotate(){
    $(".draggable").rotate(45);
}


function selectStyle(){
    var styleSize = document.querySelector("#styleSize");
    // var arrowStyle =document.querySelector("#arrowStyle");
    // arrowStyle.addEventListener('change',arrowValue);
    styleSize.addEventListener('change',showValue);
            $("#theSVG_1").hide();
            $("#theSVG_2").hide();
            $("#theSVG_3").hide();
            $("#theSVG_4").hide();
            $("#theSVG_5").hide();
            $("#theSVG_6").hide();
            $("#theSVG_7").hide();
    function showValue(e){
        if (e.target.value == 1){
            $("#theSVG_1").show();
            $("#theSVG_2").hide();
            $("#theSVG_3").hide();
            $("#theSVG_4").hide();
            $("#theSVG_5").hide();
            $("#theSVG_6").hide();
            $("#theSVG_7").hide();
            arrowStyle_left();
        }
        if(e.target.value == 2){
            $("#theSVG_1").hide();
            $("#theSVG_2").show();
            $("#theSVG_3").hide();
            $("#theSVG_4").hide();
            $("#theSVG_5").hide();
            $("#theSVG_6").hide();
            $("#theSVG_7").hide();
            arrowStyle_right()
        }


        
    }
    };

function arrowStyle_left(){
    var arrowStyle =document.querySelector("#arrowStyle");
    arrowStyle.addEventListener('change',arrowValue);
            $("#theSVG_1").hide();
            $("#theSVG_2").hide();
            $("#theSVG_3").hide();
            $("#theSVG_4").hide();
            $("#theSVG_5").hide();
            $("#theSVG_6").hide();
            $("#theSVG_7").hide();
    function arrowValue(e){
        console.log(e.target.value);
        if (e.target.value == 4){
            $("#theSVG_1").show();
            $("#theSVG_2").hide();
            $("#theSVG_3").hide();
            $("#theSVG_4").hide();
            $("#theSVG_5").hide();
            $("#theSVG_6").hide();
        }
        if (e.target.value == 5){
            $("#theSVG_1").hide();
            $("#theSVG_2").show();
            $("#theSVG_3").hide();
            $("#theSVG_4").hide();
            $("#theSVG_5").hide();
            $("#theSVG_6").hide();
        }
        if (e.target.value == 6){
            $("#theSVG_1").hide();
            $("#theSVG_2").hide();
            $("#theSVG_3").show();
            $("#theSVG_4").hide();
            $("#theSVG_5").hide();
            $("#theSVG_6").hide();
        }
    }
}

function arrowStyle_right(){
    var arrowStyle =document.querySelector("#arrowStyle");
    arrowStyle.addEventListener('change',arrowValue);
            $("#theSVG_1").hide();
            $("#theSVG_2").hide();
            $("#theSVG_3").hide();
            $("#theSVG_4").hide();
            $("#theSVG_5").hide();
            $("#theSVG_6").hide();
            $("#theSVG_7").hide();
    function arrowValue(e){
        console.log(e.target.value);
        
        if (e.target.value == 4){
            $("#theSVG_1").hide();
            $("#theSVG_2").hide();
            $("#theSVG_3").hide();
            $("#theSVG_4").show();
            $("#theSVG_5").hide();
            $("#theSVG_6").hide();
        }
        if (e.target.value == 5){
            $("#theSVG_1").hide();
            $("#theSVG_2").hide();
            $("#theSVG_3").hide();
            $("#theSVG_4").hide();
            $("#theSVG_5").show();
            $("#theSVG_6").hide();
        }
        if (e.target.value == 6){
            $("#theSVG_1").hide();
            $("#theSVG_2").hide();
            $("#theSVG_3").hide();
            $("#theSVG_4").hide();
            $("#theSVG_5").hide();
            $("#theSVG_6").show();
        }
    }
}
