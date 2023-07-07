var  rate_num = null;

function rate(n){
    if(rate_num == null){
        document.getElementById("rate-1").style.borderColor = "#4f575e";
        document.getElementById("rate-2").style.borderColor = "#4f575e";
        document.getElementById("rate-3").style.borderColor = "#4f575e";
        document.getElementById("rate-4").style.borderColor = "#4f575e";
        document.getElementById("rate-5").style.borderColor = "#4f575e";
        document.getElementById("erorr").style.display="none";
    }
    set_rate_style(n);
    set_not_rate_style(n);
    rate_num = n;  
    console.log("rate : " + rate_num);
}

function set_not_rate_style(n){
    for(var i = 1 ; i < 6 ; i++){
        if(i!=n){
            document.getElementById("rate-"+i).style.backgroundColor = "#4f575e";
            document.getElementById("rate-"+i).style.color = "hsl(216, 12%, 54%)";  
        }
      
    }
}

function set_rate_style(n){
    document.getElementById("rate-"+n).style.backgroundColor = "orange";
    document.getElementById("rate-"+n).style.color = "white";
    return;
}

function submit(){
    
    if(rate_num==null){
        document.getElementById("rate-1").style.borderColor = "red";
        document.getElementById("rate-2").style.borderColor = "red";
        document.getElementById("rate-3").style.borderColor = "red";
        document.getElementById("rate-4").style.borderColor = "red";
        document.getElementById("rate-5").style.borderColor = "red";
        document.getElementById("erorr").style.display="block";
    }else{
        document.getElementById("result").innerHTML = rate_num;
        document.getElementById("thanks").style.display = "flex";
        document.getElementById("rating").style.display = "none";
    }
}
