document.addEventListener("DOMContentLoaded", function(event) {

  let content = document.getElementsByClassName('content');
  let contentArray = Array.from(content);

  contentArray.forEach((item) => {
    localStore.loadLocalStorage(item);
    item.addEventListener(
      'blur', () => {
        localStore.saveLocalStorage(item);
      }, false
    );
  });

});

let localStore = {
  saveLocalStorage: (item) => {
    localStorage.setItem(item.id, item.innerHTML);
  },
  loadLocalStorage: (item) => {
    let content = localStorage.getItem(item.id);
    if (content) {
      item.innerHTML = content;
    }
  }
};

let toggle = () => {
  let element = document.getElementById('main');
  element.classList.toggle('portrait');
}
