import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = "videoplayer-current-time";



const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
    
});
    
const currentTime = localStorage.getItem(STORAGE_KEY);
player.setCurrentTime(currentTime)

///когда видео заканчиваеться удаляеться ключ с localStorage и видео начинаеться с начала ?????????

// player.getDuration().then(function (duration) {
//     if (duration === Number(currentTime)) {
//         localStorage.removeItem("videoplayer-current-time")
//         console.log("привет");
//     }
// })
    
// player.getEnded().then(function(ended) {
//     console.log(ended)
//     console.log("privet")
// })