var tl=gsap.timeline()
tl.from("#loader h1",{
    y:300,
    duration:1,
    stagger:0.3,
    delay:0.3
})

tl.from("#line1-part1",{
    y:300,
    
    onStart: function(){
    var timer=document.querySelector("#line1-part1 h5")
    grow=0
    var int=setInterval(function(){
     if(grow<=99){
        grow++
        timer.innerHTML=grow
     }
     else{
        clearInterval(int)
     }
    },30)
    }
})
tl.from(".line h2",{
    y:300,
    duration:0.5,

})

tl.to("#loader",{
    opacity:0,
    duration:1,
    delay:3
})
tl.from('#page1',{
    y:1600,
    duration:2
})
tl.to('#loader',{
    display:"none"
})
