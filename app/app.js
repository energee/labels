document.addEventListener("DOMContentLoaded", function(event) {

  let content = document.getElementsByClassName('content');
  let adjust = document.getElementsByClassName('font-adjust');
  let contentArray = Array.from(content);

  contentArray.forEach((item) => {
    localStore.loadContent(item);
    item.addEventListener(
      'blur', () => {
        localStore.saveContent(item);
      }, false
    );
    item.addEventListener(
      'onchange', () => {
        localStore.saveContent(item);
      }, false
    );
  });

});

let localStore = {
  saveContent: (item) => {
    localStorage.setItem(item.id, item.innerHTML);
  },
  loadContent: (item) => {
    let content = localStorage.getItem(item.id);
    if (content) {
      item.innerHTML = content;
    }
  },

};

let toggle = () => {
  let element = document.getElementById('app');
  element.classList.toggle('portrait');
}
