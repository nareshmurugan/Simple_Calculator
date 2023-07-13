var res=0;
var d='';
var array=[];
function cl(){
    document.getElementById("dis").textContent='';
    d='';
    array=[];
    
}
function add(a) {
    d+=''+a;
    document.getElementById("dis").textContent=d;
}
function op(a) {
    d+=' '+a+' ';
    document.getElementById("dis").textContent=d;
}
function result() {
    array=d.split(' ');
    for (let i = 0; i < array.length; i++) {
        if(array[i].charAt(0)>='0'&&array[i].charAt(0)<='9')
           array[i]= parseInt(array[i]);
    }
    var op=[];
    var n=[];
    for (let i = 0; i < array.length; i++) {
        var c=array[i];
        if( Number.isInteger(c))n.push(c);
        else{
            while(op.length&& pre(c)<=pre(op[op.length-1])){
                n.push(op.pop());
            }
            op.push(c);
        }
    }
while (op.length) {
    n.push(op.pop());
}
console.log(op.length);
console.log(n);
n.reverse();
for (let i = n.length-1; i >=0 ; i--) {
    var c=n[i];
    if(Number.isInteger(c))op.push(c);
    else{
        var n1=op.pop(),n2=op.pop();
        switch(c){
            case '/':
                op.push(n2/n1);
                break;
            case '*':
                op.push(n1*n2);
                break;
            case '+':
                op.push(n1+n2);
                break;
            case '-':
                op.push(n2-n1);
                break;
            default:
                break;
        }
    }
}
document.getElementById("dis").textContent=op.pop();
    d='';
    array=[];
    op=[];
    n=[];
}
function pre(a) {
    if(a=='/'||a=='*')return 2;
    else return 1;
}