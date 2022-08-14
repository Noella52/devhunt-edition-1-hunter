//requirements 
const searchWrapper = document.querySelector("#parent");
const inputbox = searchWrapper.querySelector('input'); 
const suggBox = document.querySelector('#child');

//ra mikitika clvier le olona
inputbox.onkeyup = (e) => {
    console.log(e);
}