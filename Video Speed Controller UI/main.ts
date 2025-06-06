const speed = document.querySelector(".speed") as HTMLDivElement;
const video = document.querySelector("video") as HTMLVideoElement;
const bar = document.querySelector(".speed-bar") as HTMLDivElement;

speed.addEventListener("mousemove", (e: MouseEvent) => {
  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
});
