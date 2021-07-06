const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// prompt to select media stream

async function selectMediaScreen() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;

        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();

    button.disabled = false;
});

selectMediaScreen();