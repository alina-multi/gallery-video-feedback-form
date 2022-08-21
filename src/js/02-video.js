import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const storage = localStorage.getItem('videoplayer-current-time');

    player.on(
        'timeupdate', throttle(function () {
          player.getCurrentTime()
            .then(function (seconds) {
              localStorage.setItem('videoplayer-current-time', seconds);
            })
            .catch(function (error) {});
        }, 1000),
        player
          .setCurrentTime(storage)
          .then(function (seconds) {})
          .catch(function (error) {})
      );





// const STORAGE_KEY = "videoplayer-current-time";
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// player.on('timeupdate', function(data) {
//     localStorage.setItem(STORAGE_KEY, data.seconds);
    
// });
    
// const currentTime = localStorage.getItem(STORAGE_KEY);
// player.setCurrentTime(currentTime)

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