document.addEventListener('DOMContentLoaded', function() {
  function cloneGift() {
    const c = el => document.querySelector(el);

    giftList.forEach((item, index) => {
      let giftItem = c('.model-gift').cloneNode(true);
      let checkbox = giftItem.querySelector('.gift-checkbox');
      let span = giftItem.querySelector('.gift-span');
      let gift = giftItem.querySelector('.gift');

      span.innerHTML = `${index + 1}. ${item.name}`;

      checkbox.addEventListener('click', function(event) {
        event.stopPropagation();
      });

      gift.addEventListener('click', function() {
        checkbox.checked = !checkbox.checked;
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
    const alert = document.querySelector('.alert');
    alert.style.top = '0';

    setTimeout(() => {
      alert.style.top = '-50px';
    }, 3000);
  }

  document
    .querySelector('.btnConfirmGift')
    .addEventListener('click', function() {
      const selectedItems = getSelectedItems();
      if (selectedItems.length === 0) {
        showAlert();
      } else {
        console.log(selectedItems);
      }
    });

  cloneGift();
});
