// Nav menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.nav-overlay');

function toggleNav() {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
  navOverlay.classList.toggle('open');
}
hamburger.addEventListener('click', toggleNav);
navOverlay.addEventListener('click', toggleNav);

// Prevent right-click on all videos
document.querySelectorAll('video').forEach(v => {
  v.addEventListener('contextmenu', e => e.preventDefault());
});

// Video click-to-play
document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  const video = wrapper.querySelector('video');
  if (!video) return;

  wrapper.addEventListener('click', () => {
    if (wrapper.classList.contains('playing')) {
      video.pause();
      wrapper.classList.remove('playing');
    } else {
      // Pause all other videos first
      document.querySelectorAll('.video-wrapper.playing').forEach(other => {
        other.querySelector('video').pause();
        other.classList.remove('playing');
      });
      video.play();
      wrapper.classList.add('playing');
    }
  });

  video.addEventListener('ended', () => {
    wrapper.classList.remove('playing');
  });
});
