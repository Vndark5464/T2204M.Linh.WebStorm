
var m = 3; // Phút
var s = 59; // Giây
var mid = ":" ;
var x = "0"
var timeout = setInterval(function (){

    if(m < 10 && s >= 10){
        console.log(x + m + mid + s)
        s --;}else if(m >= 10 && s >=10){console.log(+ m + mid + s);
        s--;
    }else if(s < 10 && m < 10){
        console.log( x + m + mid + x + s);
        s--;
    }else if(m >= 10 && s < 10){
        console.log(m + mid + x + s
        );
        s--;
    }
    if(s == -1){
        s = s + 60;
        m --;
    }


    if(m == 0 && s==0){
        clearInterval(timeout);
        alert("Het Gio");
    }
},1000);
