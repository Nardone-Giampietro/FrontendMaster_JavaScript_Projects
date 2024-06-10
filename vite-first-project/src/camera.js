export async function videoPermission() {
    const avStream = await navigator.mediaDevices.getUserMedia({video: true});
    return avStream;
}

export async function streamPreviewVideo(video, stream) {
    video.srcObject = stream;
    await video.play()
}

export function drawVideo(video, canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
}
