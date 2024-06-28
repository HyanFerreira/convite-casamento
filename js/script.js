document.addEventListener('DOMContentLoaded', function() {
  // Seleção de elementos iniciais
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
  const btnAudio = document.getElementById('btnAudio');
  const audio = document.getElementById('audio');
  const click = document.querySelector('.click');
  const pulse = document.querySelector('.pulse');
  const pulseSpans = document.querySelectorAll('.pulse span');
  const openGiftList = document.querySelector('.openGiftList');
  const modal = document.querySelector('.modal');
  const contentGift = document.querySelector('.content-gift');
  const btnBack = document.querySelector('.btnBack');
  const btnConfirmGift = document.querySelector('.btnConfirmGift');
  const alert = document.querySelector('.alert');

  // Eventos de abertura e fechamento da lista de presentes
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

  // Animações iniciais ao carregar a página
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

  // Evento ao clicar no convite
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

  // Funções relacionadas à lista de presentes
  function cloneGift() {
    const c = el => document.querySelector(el);

    giftList.forEach((item, index) => {
      let giftItem = c('.model-gift').cloneNode(true);
      let checkbox = giftItem.querySelector('.gift-checkbox');
      let span = giftItem.querySelector('.gift-span');
      let gift = giftItem.querySelector('.gift');

      span.innerHTML = `${index + 1}. ${item.name}`;

      if (item.selected) {
        giftItem.classList.add('selected'); // Adiciona a classe 'selected' se o item estiver selecionado
      }

      checkbox.addEventListener('click', function(event) {
        event.stopPropagation();
      });

      gift.addEventListener('click', function() {
        checkbox.checked = !checkbox.checked;
        giftList[index].selected = checkbox.checked; // Atualiza o estado de seleção do item
      });

      c('.content-gift .content-gift-list .content-cozinha').append(giftItem);
    });
  }

  function getSelectedItems() {
    const selectedItems = [];
    const gifts = document.querySelectorAll('.content-cozinha .model-gift');

    gifts.forEach((gift, index) => {
      const checkbox = gift.querySelector('.gift-checkbox');
      if (checkbox.checked) {
        selectedItems.push(giftList[index]);
      }
    });

    return selectedItems;
  }

  function showAlert() {
    alert.style.top = '0';

    setTimeout(() => {
      alert.style.top = '-50px';
    }, 3000);
  }

  // Evento ao clicar no botão para confirmar presentes
  btnConfirmGift.addEventListener('click', function() {
    const selectedItems = getSelectedItems();
    if (selectedItems.length === 0) {
      showAlert();
    } else {
      console.log(selectedItems);
      // Aqui você pode fazer o que quiser com a variável selectedItems
    }
  });

  // Inicialização da lista de presentes
  cloneGift();
});
