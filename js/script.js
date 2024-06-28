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
  const alert = document.querySelector('.alert');
  const btnConfirmGift = document.querySelector('.btnConfirmGift');
  const openConfirmPresence = document.querySelector('.openConfirmPresence');
  const contentPresence = document.querySelector('.content-presence');
  const btnAddGift = document.querySelector('.btnAddGift');
  const clearGiftItem = document.querySelector('.clearGiftItem');

  // Eventos de abertura e fechamento da lista de presentes
  function openModal(content) {
    modal.classList.add('active');
    content.style.display = 'flex';
    setTimeout(() => {
      btnBack.classList.add('active');
      content.classList.add('active');
    }, 200);
  }

  function closeModal() {
    btnBack.classList.remove('active');
    contentGift.classList.remove('active');
    contentPresence.classList.remove('active');
    setTimeout(() => {
      contentGift.style.display = 'none';
      contentPresence.style.display = 'none';
      modal.classList.remove('active');
    }, 600);
  }

  openGiftList.addEventListener('click', () => openModal(contentGift));
  openConfirmPresence.addEventListener('click', () =>
    openModal(contentPresence),
  );
  btnBack.addEventListener('click', closeModal);

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

  function updateSelectedItemsDisplay() {
    const selectedItems = getSelectedItems();
    const giftListSelectedSpan = document.querySelector(
      '.gift-list-selected span',
    );

    if (selectedItems.length === 0) {
      giftListSelectedSpan.innerHTML = '0 presentes selecionados';
      selectedGiftsInput.value = '0 presentes selecionados';
    } else {
      const selectedItemsNames = selectedItems
        .map(item => item.name)
        .join(', ');
      giftListSelectedSpan.innerHTML = selectedItemsNames;
      selectedGiftsInput.value = selectedItemsNames;
    }
  }

  // Evento ao clicar no botão para confirmar presentes
  btnConfirmGift.addEventListener('click', function() {
    const selectedItems = getSelectedItems();
    if (selectedItems.length === 0) {
      showAlert();
    } else {
      console.log(selectedItems);
      updateSelectedItemsDisplay();
      contentGift.classList.remove('active');
      setTimeout(() => {
        contentGift.style.display = 'none';
        contentPresence.style.display = 'flex';
      }, 200);
      setTimeout(() => {
        contentPresence.classList.add('active');
      }, 400);
    }
  });

  btnAddGift.addEventListener('click', () => {
    contentPresence.classList.remove('active');
    setTimeout(() => {
      contentPresence.style.display = 'none';
      contentGift.style.display = 'flex';
    }, 200);
    setTimeout(() => {
      contentGift.classList.add('active');
    }, 400);
  });

  // Função para limpar a seleção de presentes
  function clearGiftSelection() {
    giftList.forEach(item => (item.selected = false));
    const checkboxes = document.querySelectorAll('.gift-checkbox');
    checkboxes.forEach(checkbox => (checkbox.checked = false));
    updateSelectedItemsDisplay();
  }

  // Evento ao clicar no botão para limpar seleção de presentes
  clearGiftItem.addEventListener('click', () => {
    clearGiftSelection();
    updateSelectedItemsDisplay();
    contentGift.classList.remove('active');
    setTimeout(() => {
      contentGift.style.display = 'none';
      contentPresence.style.display = 'flex';
    }, 200);
    setTimeout(() => {
      contentPresence.classList.add('active');
    }, 400);
  });

  // Inicialização da lista de presentes
  cloneGift();

  // Validação de confifrmação
  const nameInput = document.getElementById('name');
  const nameLabel = document.querySelector('.nameLabel');
  const errorName = document.getElementById('errorName');

  const submitButton = document.getElementById('submitButton');
  const errorSubmit = document.getElementById('errorSubmit');

  const selectedGiftsInput = document.getElementById('selectedGifts');

  const checkboxesPresence = document.querySelectorAll('.checkbox');
  const presenceConfirmation = document.getElementById('presenceConfirmation');

  // Função para obter o texto do label associado ao checkbox selecionado
  function getSelectedLabel() {
    const selectedCheckbox = document.querySelector('.checkbox.selected');
    if (selectedCheckbox) {
      const label = selectedCheckbox.querySelector('label');
      return label ? label.textContent : '';
    }
    return '';
  }

  presenceConfirmation.value = getSelectedLabel();

  checkboxesPresence.forEach(item => {
    item.addEventListener('click', function() {
      checkboxesPresence.forEach(checkbox => {
        checkbox.classList.remove('selected');
      });
      item.classList.add('selected');
      presenceConfirmation.value = getSelectedLabel();
    });
  });

  // Função para exibir mensagem de erro em um elemento
  function showError(element, message) {
    element.textContent = message;
  }

  // Função para limpar mensagem de erro de um elemento
  function clearError(element) {
    element.textContent = '';
  }

  // Função para validar o nome
  function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
      showError(errorName, 'Preencha este campo.');
      nameLabel.classList.add('error');
      nameInput.classList.add('error');
    } else if (name.length < 3) {
      showError(errorName, 'Nome deve conter no mínimo 3 caracteres.');
      nameLabel.classList.add('error');
      nameInput.classList.add('error');
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      showError(errorName, 'Não ultilize números e/ou caracteres especiais.');
      nameLabel.classList.add('error');
      nameInput.classList.add('error');
    } else {
      clearError(errorName);
      nameLabel.classList.remove('error');
      nameInput.classList.remove('error');
    }
  }

  const contentLoading = document.querySelector('.content-loading');

  function loading() {
    contentPresence.classList.remove('active');
    btnBack.classList.remove('active');
    setTimeout(() => {
      contentPresence.style.display = 'none';
      contentLoading.style.display = 'flex';
    }, 200);
    setTimeout(() => {
      contentLoading.classList.add('active');
    }, 400);
  }

  // Função para validar o formulário ao ser submetido
  function validateForm(event) {
    const name = nameInput.value.trim();

    // Verifica se há erro em cada campo
    validateName();

    // Verifica se todos os campos estão preenchidos e sem erros
    if (name === '' || errorName.textContent !== '') {
      event.preventDefault(); // Impede o envio do formulário se houver erro
      showError(errorSubmit, 'Por favor, informe seu nome.');
    } else {
      clearError(errorSubmit);
      updateSelectedItemsDisplay(); // Atualiza o campo oculto antes de enviar o formulário
      loading();
    }
  }

  // Adiciona os event listeners para os inputs
  nameInput.addEventListener('input', validateName);

  // Adiciona o event listener para o botão de submit
  submitButton.addEventListener('click', validateForm);
});
