function setup() {
    canvas = createCanvas(400, 400);
    background('black');
    canvas.position(900, 135);

    video = createCapture(VIDEO);
    video.size(450, 450)
    video.position(100, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("POSENET IS INITIALIZED");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
    }
}

function draw() {
    stroke(255, 255, 0);
    fill(255, 255, 0);
    text("Siddhesh Salvi", 180, 180);
}