import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const LOCALSTORAGE_KEY = localStorage.getItem("videoplayer-current-time");
console.log(LOCALSTORAGE_KEY);


player.setCurrentTime(LOCALSTORAGE_KEY).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate', throttle(function (time) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(time.seconds));
 
}, 1000));

