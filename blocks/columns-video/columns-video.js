export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup video columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const strong = col.querySelector('strong');
      if (strong) {
        const videoUrl = strong.textContent.trim();
        if (videoUrl) {
          const video = document.createElement('video');
          video.src = videoUrl;
          video.controls = true;
          video.classList.add('custom-video'); 
          col.replaceChild(video, strong); 
        }
      }
    });
  });
}
