const videoElement = document.getElementById('video');
const btn = document.getElementById('button');

//Prompt user to select media stream, pass to video element, then play
async function selectMediaStream()
{
    try
    {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>
        {
            videoElement.play();
        }

    }catch(error)
    {
        //Catch error here
    }
}

btn.addEventListener('click', async () => {

    //Disable button
    btn.disabled = true;

    //Start picture in picture 
   await videoElement.requestPictureInPicture();

    //Reset Button
   btn.disabled = false;
    

});

//on Load

selectMediaStream();