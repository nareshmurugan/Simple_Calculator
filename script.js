var res=0;
var d='';
var array=[];
function acl(){
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
    
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if(array[i].charAt(0)>='0'&&array[i].charAt(0)<='9') {
            if( parseInt(array[i])==parseFloat(array[i]))array[i]=parseInt(array[i]);
            else array[i]=parseFloat(array[i]);
        }
    }
    var op=[];
    var n=[];
    for (let i = 0; i < array.length; i++) {
        var c=array[i];
        if( typeof(c)=='number')n.push(c);
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
    console.log(n);
    n.reverse();
    console.log(n);
    for (let i = n.length-1; i >=0 ; i--) {
        var c=n[i];
        if(typeof(c)=='number')op.push(c);
        else{
            var n1=op.pop(),n2=op.pop();
            switch(c){
                case '/':
                    op.push(n2/n1);
                    break;
                case '%':
                    op.push(n2%n1);
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
    if(a=='%')return 3;
    else if(a=='/'||a=='*')return 2;
    else return 1;
}

function cl() {
    if (d.charAt(d.length -1)==' ') {
        d=d.substring(0,d.length-3);
    }
    else d=d.substring(0,d.length-1);
    
    document.getElementById("dis").textContent=d;   
}
