function Prealod(){

};
function setup(){
canvas = createCanvas(400,400);
canvas.position(350,100);
video = createCapture(VIDEO);
video.hide();
};
function draw(){
image(video,0,0,400,400)
};
function take_snapshot(){
save("photo.png");
};