import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const options = {
  autoplay: true,
  background: true,
  byline: false,
  portrait: false,
  title: false
}
// find El
const videoFrameEl = document.querySelector('#vimeo-player');

// player init
const player = new Player(videoFrameEl, options);

//listen event and callbeck
player.on('timeupdate', throttle(playedTime, 1000));

//set player start-time
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

// callback
function playedTime(e) {
 localStorage.setItem('videoplayer-current-time', `${e.seconds}`);
}

