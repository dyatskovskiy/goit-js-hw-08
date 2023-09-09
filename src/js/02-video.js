import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// const player = new Player('handstick', {
//   id: 19231868,
//   width: 640,
// });
const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onVideoTimeSave, 1000));

if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}

function onVideoTimeSave(evt) {
  let currentTime = evt.seconds;
  localStorage.setItem(STORAGE_KEY, currentTime);
}
