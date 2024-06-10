import './style.css'
import * as camera from "./src/camera.js"

const video = document.getElementById('preview-video');
const canvas = document.getElementById('canvas');
const shootButton = document.getElementById("shoot");
let videoStream;

camera.videoPermission()
    .then(stream => {
        videoStream = stream;
        return camera.streamPreviewVideo(video, videoStream);
    })
    .then(() => {
        shootButton.addEventListener("click", (e) => {
            e.preventDefault();
            camera.drawVideo(video, canvas);
        });
    })
    .catch((error) => {
        console.error(`${error.message}: ${error.name}`);
    });




