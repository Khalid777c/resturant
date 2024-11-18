let span = document.querySelector("#top");


window.onscroll=function(){
    console.log(this.scrollY)
    if(this.scrollY >= 1392){
        span.classList.add('show')
    }else{
        span.classList.remove('show') 
    }
}

span.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}