const countTo = "1 Jan 2023";

const timer = setInterval(() => {
  const end = new Date(countTo);
  const now = new Date();
  const total = (end - now) / 1000;

  const days = Math.floor(total / 3600 / 24);
  const hours = Math.floor(total / 3600) % 24;
  const min = Math.floor(total / 60) % 60;
  const sec = Math.floor(total % 60);

  const countdown = document.querySelector("#countdown");
  countdown.innerHTML = `${format(days)}Days ${format(hours)}Hrs ${format(min)}Min ${format(sec)}Sec`;

  if (total < 0) {
    clearInterval(timer);
    countdown.innerHTML = "Happy new Year";
  }
}, 1000);

function format(t) {
  return t < 10 ? `0${t}` : t;
}
