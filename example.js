const term = require('./term-2d.js');

var x = 0;
var y = 0;

term.window(11,11); //set new window (11 characters by 11 characters)
term.clrText(); //clear the window 

async function draw(){
    term.locate(x,y,"p"); //displays "p"
    term.getkey('up',()=>{ //detect up arrow key
        b=y;
        if(y>0){
            y-=1;
            term.locate(x,y,"p");
            term.locate(x,b," ")
        };
    });
    term.getkey('down',()=>{ //detect down arrow key
        b=y;
        if(y<11){
            y+=1;
            term.locate(x,y,"p");
            term.locate(x,b," ");
        }
    });
    term.getkey('left',()=>{ //detect left arrow key
        a=x;
        if(x>0){
            x-=1;
            term.locate(x,y,"p");
            term.locate(a,y," ")
        };
    });
    term.getkey('right',()=>{ //detect right arrow key
        a=x;
        if(x<11){
            x+=1;
            term.locate(x,y,"p");
            term.locate(a,y," ");
        }
    });
}

draw();