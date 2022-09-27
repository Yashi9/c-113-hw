function preload()
{

}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(200,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,640,480);
    circle(25,25,50);
    circle(610,25,50);
    circle(25,440,50);
    circle(610,440,50);
    rect(53,7,530,30);
    rect(53,430,530,30);
    rect(15,50,30,363);
    rect(595,52,30,363);
}

function take_snapshot()
{
    save('student_name.png');
} 























































































