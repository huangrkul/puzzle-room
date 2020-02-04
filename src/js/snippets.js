export function setAni(el, time, attr, action) {
  setTimeout(function(){
    switch(action) {
      case 'remove':
        document.querySelector(el).classList.remove(attr);
        break;
      case 'clear':
        document.querySelector(el).className='';
        break;
      case 'fill':
        document.querySelector(el).style.fill=attr;
        break;
      default:
        document.querySelector(el).classList.add(attr);
    }
  },time);
}

export function formatTime(time) {
  const minValue = Math.floor((time/60) % 60);
  const secValue = Math.floor(time % 60);
  const min = minValue < 10 ? `0${minValue}` : minValue;
  const sec = secValue < 10 ? `0${secValue}` : secValue;
  return `${min}:${sec}`;
}