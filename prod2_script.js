function changeSrc() {
    if (document.getElementById("tiger_adult").checked) {
    
        if(document.getElementById("tiger_orange").checked){
            document.getElementById("tiger_pic").src = "tiger_adult_orange.jpg";
        }
        else if(document.getElementById("tiger_white").checked){
            document.getElementById("tiger_pic").src = "tiger_adult_white.jpg";
        }
        

    } else if (document.getElementById("tiger_baby").checked) { 

        if(document.getElementById("tiger_orange").checked){
            document.getElementById("tiger_pic").src = "tiger_baby_orange.jpg";
        }
        else if(document.getElementById("tiger_white").checked){
            document.getElementById("tiger_pic").src = "tiger_baby_white.jpg";
        }
    }
}