function changeSrcTiger(){
    if (document.getElementById("tiger_adult").checked){
    
        if(document.getElementById("tiger_orange").checked){
            document.getElementById("tiger_pic").src = "tiger_adult_orange.jpg";
        }
        else if(document.getElementById("tiger_white").checked){
            document.getElementById("tiger_pic").src = "tiger_adult_white.jpg";
        }
    }
    else if (document.getElementById("tiger_baby").checked){ 

        if(document.getElementById("tiger_orange").checked){
            document.getElementById("tiger_pic").src = "tiger_baby_orange.jpg";
        }
        else if(document.getElementById("tiger_white").checked){
            document.getElementById("tiger_pic").src = "tiger_baby_white.jpg";
        }
    }
}

function changeSrcGiraffe(){
    if(document.getElementById("giraffe_adult").checked){
        if(document.getElementById("giraffe_orange").checked){
            document.getElementById("giraffe_pic").src = "giraffe_adult_orange.jpg";
        }
        else if(document.getElementById("giraffe_white").checked){
            document.getElementById("giraffe_pic").src = "giraffe_adult_white.jpg";
        }
    }
    else if(document.getElementById("giraffe_baby").checked){ 

        if(document.getElementById("giraffe_orange").checked){
            document.getElementById("giraffe_pic").src = "giraffe_baby_orange.jpg";
        }
        else if(document.getElementById("giraffe_white").checked){
            document.getElementById("giraffe_pic").src = "giraffe_baby_white.jpg";
        }
    }
}

function changeSrcBaboon(){
    if(document.getElementById("baboon_adult").checked){ 
        document.getElementById("baboon_pic").src = "baboon_adult.jpg"; 
    }
    else if(document.getElementById("baboon_baby").checked){  
        document.getElementById("baboon_pic").src = "baboon_baby.jpg";  
    }
}
function changeSrcZebra(){
    if(document.getElementById("zebra_adult").checked){
        /* disable spotted option */
        document.getElementById("zebra_spot").disabled = true;
        /* enable all other options */
        document.getElementById("zebra_normal").disabled = false;
        document.getElementById("zebra_white").disabled = false;
        document.getElementById("zebra_black").disabled = false;


        if(document.getElementById("zebra_normal").checked){
            document.getElementById("zebra_pic").src = "zebra_adult_normal.jpg";
        }
        else if(document.getElementById("zebra_white").checked){
            document.getElementById("zebra_pic").src = "zebra_adult_white.jpg";
        }
        else if(document.getElementById("zebra_black").checked){
            document.getElementById("zebra_pic").src = "zebra_adult_black.jpg";
        }
        
    }
    else if(document.getElementById("zebra_baby").checked){ 
        /* disable black & white options */
        document.getElementById("zebra_black").disabled = true;
        document.getElementById("zebra_white").disabled = true;
        /* enable all other options */
        document.getElementById("zebra_normal").disabled = false;
        document.getElementById("zebra_spot").disabled = false;

        if(document.getElementById("zebra_normal").checked){
            document.getElementById("zebra_pic").src = "zebra_baby_normal.jpg";
        }
        else if(document.getElementById("zebra_spotted").checked){
            document.getElementById("zebra_pic").src = "zebra_baby_spotted.jpg";
        }
        
    }
}
function changeSrcLion(){
    if(document.getElementById("lion_adult").checked){
        /* enable sex selection */
        document.getElementById("lion_male").disabled = false;
        document.getElementById("lion_female").disabled = false;

        if(document.getElementById("lion_male").checked){
            document.getElementById("lion_pic").src = "lion_adult_male.jpg";
        }
        else if(document.getElementById("lion_female").checked){
            document.getElementById("lion_pic").src = "lion_adult_female.jpg";
        }
    }
    else if(document.getElementById("lion_baby").checked){ 
        /* disable sex selection */
        document.getElementById("lion_male").disabled = true;
        document.getElementById("lion_female").disabled = true;
        /* ensure only one sex is selected */
        document.getElementById("lion_male").checked = true;

        document.getElementById("lion_pic").src = "lion_baby.jpg";
        
    }
}
function changeSrcHippo(){
    if(document.getElementById("hippo_adult").checked){
        document.getElementById("hippo_pic").src = "hippo_adult.jpg";
    }
    else if(document.getElementById("hippo_baby").checked){ 
        document.getElementById("hippo_pic").src = "hippo_baby.jpg";
    }
}