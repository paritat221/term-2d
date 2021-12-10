# term-2d
2D game engine for terminal in NodeJS

# Installation

`npm install term-2d`

# Use

You need to first set a window using the window function
`term.window(width, height);`

You can then display text using the locate function
`term.locate(x, y, text);`

The clrText function clears all the text in the window, and resets the matrice storing all the displayed characters and their position
`term.clrText();`

the getkey function executes a given function when it detects a key press
`term.getkey('up',()=>{locate(1,1,"up arrow pressed")});`


