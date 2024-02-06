let video = document.querySelector("video");

let constraints = {
  video: true,
  audio: true,
};

/* navigator ek global object
hai and yeh hmare browser ke
baare me information contain
karta hai 
*/
window.navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  video.srcObject = stream;
});
