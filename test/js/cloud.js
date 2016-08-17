var $cloudContainer = $("#section0");


for(var i = 0; i <8; i ++){
    var cloud;
    if(i%3==0){
		cloud= $('<img class="cloud" src="img/cloud.png"></img>').appendTo($cloudContainer);
    }
    else if(i%2==0){
		cloud= $('<img class="cloud" src="img/cloud2.png"></img>').appendTo($cloudContainer);
    }
    else {
		cloud= $('<img class="cloud" src="img/cloud2.png"></img>').appendTo($cloudContainer);
    }

     
    TweenMax.fromTo(cloud,(Math.random()*15)+20,
    {left:-100,top:i*40+100,opacity:1},
    {left:"100%",ease:Power0.easeNone,delay:Math.random()*15,repeat:-1});
};
