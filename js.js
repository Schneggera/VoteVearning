let y= document.getElementById('yes');
let n= document.getElementById('no');
let ycount = 0;
let ncount = 0;

y.addEventListener('click', function(){
    ycount++;
    console.log(ycount);
})

n.addEventListener('click', function(){
    ncount++;
    console.log(ncount);
})
