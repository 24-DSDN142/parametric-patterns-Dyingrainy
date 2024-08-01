//your parameter variables go here!
let Backcolor = 140;//color of the background
let Angle = 315;//the angle to rotate the whole graph
let shapecolor = 40;//the blue part of the color of 2 trangles and 1 squad
let shapecolor2 = 120;//the red part of loops'color
let arcSize = 12;//the size of loops
let shapecolor3 = 0;//the blue part of stars' color
let n = 6;//the length of stars

function setup_wallpaper(pWallpaper) {
    pWallpaper.output_mode(DEVELOP_GLYPH);
    pWallpaper.output_mode(GRID_WALLPAPER);
    pWallpaper.resolution(A3);
    pWallpaper.show_guide(false); //set this to false when you're ready to print
  
  // Grid settings
    pWallpaper.grid_settings.cell_width  = 200;
    pWallpaper.grid_settings.cell_height = 200
    pWallpaper.grid_settings.row_offset  = 0;
  }

  function wallpaper_background() {
     background(Backcolor); 
     angleMode(DEGREES);

  }

let spacing = 40; 

function drawPattern(x,y) {
  push();
  scale(5);//40 * scale === width&height
  noStroke();
  rotate(Angle);

  if (Backcolor < 125 || 45 <= Angle && Angle <= 225 ){//Swords
  push();

  noStroke();
  fill(240,230,140);
  quad(x+8, y-11, x+14.5, y-11,x+14.5,y-9,x+8,y-9,);
  circle(x+8,y-10,4);
  quad(x+7,y-11,x+10,y-15,x+12,y-15,x+9,y-11);
  quad(x+7,y-9,x+10,y-5,x+12,y-5,x+9,y-9);
  beginShape();
  vertex(x+7,y-11.25);
  vertex(x-8, y-11.25);
  vertex(x-14, y-10);
  vertex(x-8, y-8.75);
  vertex(x+7, y-8.75);
  endShape(CLOSE);

  noStroke();
  fill(240,230,140);
  quad(x-8, y+11, x-14.5, y+11,x-14.5,y+9,x-8,y+9,);
  circle(x-8,y+10,4);
  quad(x-7,y+11,x-10,y+15,x-12,y+15,x-9,y+11);
  quad(x-7,y+9,x-10,y+5,x-12,y+5,x-9,y+9);
  beginShape();
  vertex(x-7,y+11.25);
  vertex(x+8, y+11.25);
  vertex(x+14, y+10);
  vertex(x+8, y+8.75);
  vertex(x-7, y+8.75);
  endShape(CLOSE);

  noStroke();
  fill(255,97,0);
  circle(x+8, y-10,2);
  circle(x-8,y+10,2);
   triangle(x+8,y+12,x-5, y+12,x-8, y+16);
   beginShape();
   vertex(x-6,y+12);
   vertex(x-10.5,y+18);
   vertex(x-13,y+18);
   vertex(x-9.4,y+15.2);
   vertex(x-7,y+12);
   endShape(CLOSE);
   triangle(x+8,y+8,x-5, y+8,x-8, y+4);
   beginShape();
   vertex(x-6,y+8);
   vertex(x-10.5,y+2);
   vertex(x-13,y+2);
   vertex(x-9.4,y+5.2);
   vertex(x-7,y+8);
   endShape(CLOSE);
   triangle(x-8,y-12,x+5, y-12,x+8, y-16);
   beginShape();
   vertex(x+6,y-12);
   vertex(x+10.5,y-18);
   vertex(x+13,y-18);
   vertex(x+9.4,y-15.2);
   vertex(x+7,y-12);
   endShape(CLOSE);
   triangle(x-8,y-8,x+5, y-8,x+8, y-4);
   beginShape();
   vertex(x+6,y-8);
   vertex(x+10.5,y-2);
   vertex(x+13,y-2);
   vertex(x+9.4,y-5.2);
   vertex(x+7,y-8);
   endShape(CLOSE);
  

  pop();
  }else{

    push();
    rotate(90);
  
    noStroke();
    fill(240,230,140);
    quad(x+8, y-11, x+14.5, y-11,x+14.5,y-9,x+8,y-9,);
    circle(x+8,y-10,4);
    quad(x+7,y-11,x+10,y-15,x+12,y-15,x+9,y-11);
    quad(x+7,y-9,x+10,y-5,x+12,y-5,x+9,y-9);
    beginShape();
    vertex(x+7,y-11.25);
    vertex(x-8, y-11.25);
    vertex(x-14, y-10);
    vertex(x-8, y-8.75);
    vertex(x+7, y-8.75);
    endShape(CLOSE);
   
    noStroke();
    fill(240,230,140);
    quad(x-8, y+11, x-14.5, y+11,x-14.5,y+9,x-8,y+9,);
    circle(x-8,y+10,4);
    quad(x-7,y+11,x-10,y+15,x-12,y+15,x-9,y+11);
    quad(x-7,y+9,x-10,y+5,x-12,y+5,x-9,y+9);
    beginShape();
    vertex(x-7,y+11.25);
    vertex(x+8, y+11.25);
    vertex(x+14, y+10);
    vertex(x+8, y+8.75);
    vertex(x-7, y+8.75);
    endShape(CLOSE);
   

    noStroke();
    fill(255,97,0);
    triangle(x-8,y-12,x+5, y-12,x+8, y-16);
    beginShape();
    vertex(x+6,y-12);
    vertex(x+10.5,y-18);
    vertex(x+13,y-18);
    vertex(x+9.4,y-15.2);
    vertex(x+7,y-12);
    endShape(CLOSE);
    triangle(x-8,y-8,x+5, y-8,x+8, y-4);
    beginShape();
    vertex(x+6,y-8);
    vertex(x+10.5,y-2);
    vertex(x+13,y-2);
    vertex(x+9.4,y-5.2);
    vertex(x+7,y-8);
    endShape(CLOSE);
    triangle(x+8,y+12,x-5, y+12,x-8, y+16);
    beginShape();
    vertex(x-6,y+12);
    vertex(x-10.5,y+18);
    vertex(x-13,y+18);
    vertex(x-9.4,y+15.2);
    vertex(x-7,y+12);
    endShape(CLOSE);
    triangle(x+8,y+8,x-5, y+8,x-8, y+4);
    beginShape();
    vertex(x-6,y+8);
    vertex(x-10.5,y+2);
    vertex(x-13,y+2);
    vertex(x-9.4,y+5.2);
    vertex(x-7,y+8);
    endShape(CLOSE);
    pop();
  }

  if ((0 <= Angle && Angle <= 30) || (60 <= Angle && Angle <= 120) || (150 <= Angle && Angle <= 210) || (240 <= Angle && Angle <= 300) || (330 <= Angle && Angle <= 360)){
    push(); 
    noStroke();
     translate(x, y); // Center of the grid cell
     fill(255, 0, shapecolor);
     triangle(x - 9, y - 8, x - 15, y, x - 4, y + 17);
     triangle(x + 9, y - 8, x + 15, y, x + 4, y + 17);
    quad(x, y - 20, x - 6, y - 12, x, y + 20, x + 6, y - 12);

    fill(255, 200, 0);// star in quad
    noStroke();
    quad(x, y, x-1, y-1, x, y-8, x+1, y-1);
    quad(x, y, x-1, y-1, x-4, y, x-1, y+1);
    quad(x, y, x-1, y+1, x,y+8,  x+1,y+1);
    quad(x, y, x+1, y+1, x+4, y, x+1,y-1);

    pop();
  } else{
     fill(255, shapecolor3, 0);
     noStroke();
     quad(x, y, x-1, y-1, x, y-5, x+1, y-1);
     quad(x, y, x-1, y-1, x-5, y, x-1, y+1);
     quad(x, y, x-1, y+1, x,y+5,  x+1,y+1);
     quad(x, y, x+1, y+1, x+5, y, x+1,y-1);
  }

  if ((0 <= Angle && Angle <= 30) || (60 <= Angle && Angle <= 120) || (150 <= Angle && Angle <= 210) || (240 <= Angle && Angle <= 300) || (330 <= Angle && Angle <= 360)){
  noFill();
  stroke(shapecolor2, 235, 247);
  strokeWeight(1);
  push();
  translate(-20, -20);
  for(let i =0; i<4;i++){

    rotate(90);
    noFill();
    stroke(shapecolor2, 235, 247); //loops
    strokeWeight(1);
    arc(0, 0, arcSize, arcSize, 0, 90);

    fill(255, shapecolor3, 0);//stars in corners
    noStroke();
    quad(0, 0, 3, 0, n, n, 0, 3); 
  }
 }
  pop();
  pop();
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
    drawPattern(0, 0); // Pass (0, 0) as the center for each grid cell
}