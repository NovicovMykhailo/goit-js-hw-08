import Player from '@vimeo/player';

const videoFrameEl = document.querySelector('#vimeo-player');

const player = new Player(videoFrameEl);

player.on('timeupdate', function (e) {
  console.log(e);
});


