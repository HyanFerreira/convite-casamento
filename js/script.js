document.addEventListener('DOMContentLoaded', function() {
  const clickConvite = document.querySelector('.click-convite');
  const envelope = document.querySelector('.envelope-wrapper');
  const envelopeSup = document.querySelector('.envelope-wrapper-sup');
  const envelopeBg = document.querySelector('.envelope-wrapper-bg');
  const selo = document.querySelector('.heart');
  const main = document.querySelector('.main-index');
  const container = document.querySelector('.container');
  const containerConvite = document.querySelector('.container-convite');
  const overflowIndex = document.querySelector('.overflow-index');
  const animateElements = document.querySelectorAll('.animate');
  const heartIndex = document.querySelector('.heart-index');
  let btnAudio = document.getElementById('btnAudio');
  let audio = document.getElementById('audio');

  const click = document.querySelector('.click');
  const pulse = document.querySelector('.pulse');
  const pulseSpans = document.querySelectorAll('.pulse span');

  const openGiftList = document.querySelector('.openGiftList');
  const modal = document.querySelector('.modal');
  const contentGift = document.querySelector('.content-gift');
  const btnBack = document.querySelector('.btnBack');

  openGiftList.addEventListener('click', () => {
    modal.classList.add('active');
    setTimeout(() => {
      btnBack.classList.add('active');
      contentGift.classList.add('active');
    }, 200);
  });

  btnBack.addEventListener('click', () => {
    btnBack.classList.remove('active');
    contentGift.classList.remove('active');
    setTimeout(() => {
      modal.classList.remove('active');
    }, 600);
  });

  setTimeout(() => {
    click.classList.add('active');
  }, 1200);
  setTimeout(() => {
    pulse.classList.add('active');
    pulseSpans.forEach(span => {
      span.classList.add('active');
    });
  }, 1800);
  setTimeout(() => {
    pulse.classList.remove('active');
    click.classList.remove('active');
    pulseSpans.forEach(span => {
      span.classList.remove('active');
    });
  }, 4000);

  clickConvite.addEventListener('click', () => {
    envelope.classList.add('flap');
    envelopeSup.classList.add('flap');
    envelope.classList.add('active');
    envelopeSup.classList.add('active');
    envelopeBg.classList.add('active');
    selo.classList.add('active');
    btnAudio.style.right = '0';
    setTimeout(() => {
      audio.play();
    }, 500);
    setTimeout(() => {
      envelopeSup.classList.add('z-index-zero');
    }, 1000);
    setTimeout(() => {
      container.classList.add('overflow');
    }, 1600);
    setTimeout(() => {
      heartIndex.classList.add('overflow');
    }, 1800);
    setTimeout(() => {
      heartIndex.style.display = 'none';
      main.classList.add('active');
      main.style.padding = '0';
    }, 2200);
    setTimeout(() => {
      containerConvite.style.opacity = '1';
      overflowIndex.classList.add('active');
    }, 3000);
    animateElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('active');
      }, 3600 + index * 300);
    });
  });
});
