document.addEventListener('DOMContentLoaded', function() {
  const clickConvite = document.querySelector('.click-convite');
  const envelope = document.querySelector('.envelope-wrapper');
  const envelopeSup = document.querySelector('.envelope-wrapper-sup');
  const envelopeBg = document.querySelector('.envelope-wrapper-bg');
  const selo = document.querySelector('.heart');
  const main = document.querySelector('.main-index');
  const container = document.querySelector('.container');

  clickConvite.addEventListener('click', () => {
    envelope.classList.add('flap');
    envelopeSup.classList.add('flap');
    envelope.classList.add('active');
    envelopeSup.classList.add('active');
    envelopeBg.classList.add('active');
    selo.classList.add('active');
    setTimeout(() => {
      envelopeSup.classList.add('z-index-zero');
    }, 1300);
    setTimeout(() => {
      container.classList.add('overflow');
    }, 1900);
    setTimeout(() => {
      main.classList.add('active');
    }, 2700);
  });
});
