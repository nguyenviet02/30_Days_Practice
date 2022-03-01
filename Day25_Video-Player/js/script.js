const video = document.querySelector('#video');
const btn_Play_Toggle = document.querySelector('.btn_Play-Toggle');
const btn_pause = document.querySelector('.fa-pause');
const btn_play = document.querySelector('.fa-play');
const current_time = document.querySelector('.current-time');
const duration = document.querySelector('.duration');
const progress = document.querySelector('.progress');
const progress_bar = document.querySelector('.progress-bar');
const seek_forward = document.querySelector('.seek-forward');
const seek_backward = document.querySelector('.seek-backward');
const volume = document.querySelector('.volume');
const volume_bar = document.querySelector('.volume-bar');


const app = {

  formatTime: function(seconds) {
    let minutes = Math.floor(seconds / 60);
    let seconds_ = Math.floor(seconds % 60);
    seconds_ = seconds_ < 10 ? '0' + seconds_ : seconds_;
    return minutes + ':' + seconds_;
  },
  
  handleVideo: function () {
    if (video.paused) {
      video.play();
      btn_pause.classList.remove('hide');
      btn_play.classList.add('hide');
    }
    else {
      video.pause();
      btn_pause.classList.add('hide');
      btn_play.classList.remove('hide');
    }
    const videoDuration = video.duration;
    duration.innerText = this.formatTime(videoDuration);
    video.ontimeupdate = () => {
      current_time.innerText = this.formatTime(video.currentTime);
      progress_bar.style.width = (video.currentTime / videoDuration) * 100 + '%';
    }
  },

  handleEvent: function () {
    _this = this;

    //* Xử lí sự kiện khi click vào nút Play/Pause
    btn_Play_Toggle.onclick = function () {
      _this.handleVideo();
    }
    //* Xử lí sự kiện khi click vào video
    video.onclick = function () {
      _this.handleVideo();
    }

    //* Xử lí sự kiện ấn nút tua video {
    seek_forward.onclick = function () {
      video.currentTime += 10;
    }
    seek_backward.onclick = function () {
      video.currentTime -= 10;
    }

    //* Xử lí sự kiện khi tua video
    progress.onclick = function (e) {
      let percent = e.offsetX / this.offsetWidth;
      video.currentTime = percent * video.duration;
    }

    //* Xử lí sự kiện thay đổi âm lượng
    volume.onclick = function (e) {
      let percent = e.offsetX / this.offsetWidth;
      video.volume = percent;
      volume_bar.style.width = percent * 100 + '%';
    }
  },

  run: function () {
    this.handleEvent();
  }
};

app.run();