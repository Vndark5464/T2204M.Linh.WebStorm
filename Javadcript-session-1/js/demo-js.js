/* var x;
x = 10;//number
x = "helloworld";
x = true;

var y = 20;
y = y + 5;//NUMBER
y = y + "Helloworld";//string->25helloworld
y = y + "t2204m"; //string -> 25helloworldt22-4m

if(x == true){
    y = y + "helloworld"
}else{
    y = y + "xinchao"
}
for(var i =0;i<10;i++){
    console.log("i="+i);
}
//(var arr=[];
//arr[0] = 2;
//arr[1] = "hello";
//arr[2] = "true";
//arr[3] = [1,2,3,4];
//arr[3][4] = ["hello","abc"];

var ary = [];
for(var i =0;i<10;i++){
    ary[i] = 2*i + 1;
}
//muon them so 21 vao cuoi danh sach
//ary[10]=21
ary.push(21);
ary.push(23);
ary.push(25);
for(var i = 0;i<13;i++){
    console.log(ary[i]);
}
function tinhtong(a,b){
    console.log(a+b);
    return a+b;
}
function checkprime(n){
    if(n<2) return false;
    if(n==2 || n==3) return true;
    for(var i=2;i<=n/2;i++){
        if(n%i==0) return false;
    }
    return false;
}
console.log(checkprime(2));
 */
// mot so ham co san
//alert("nguoi tren 18 tuoi moi co the tham gia");
//var kq  = confirm("Ban chac chan muon nop bai ?? "); // tra ve true hoac false
//console.log(kq);
/*
var str = prompt("Vui long nhap ten cua ban");// tra ve chuoi ma nguoi dung nhap vao
console.log(str); */


/*
for(var x=0;x<5;x++){
    var i = prompt("Nhap ten :");
    console.log(i);
} */
/*
var str = prompt("Nhap vao :");
str = parseInt(str);// chuyn tu String sang number
//console.log(str+20); */

/*do
{var i = prompt("Nhap vao mot so :");
   i = parseInt(i);
}
while (i<=0)
    if(i > 0){
     console.log(i);}*/

/* setTimeout(function (){
    alert("ket thuc 1 ");
    alert("Ket thuc 2 ");
},5000);*/


/*var t = 0;
var xyz = setInterval(function (){
 console.log("t="+t);
    t++;
    if(t>=5){
        clearInterval(xyz);
    }
},1000); */


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


