document.addEventListener("DOMContentLoaded", function(event) {

  let content = document.getElementsByClassName('content'),
      adjust = document.getElementsByClassName('font-adjust'),
      contentArray = Array.from(content),
      adjustArray = Array.from(adjust);

  contentArray.forEach((item) => {
    localStore.loadContent(item);
    item.addEventListener(
      'blur', () => {
        localStore.saveContent(item);
      }, false
    );
  });

  adjustArray.forEach((item) => {
    item.addEventListener(
      'click', () => {
        let adjustThese = document.getElementsByClassName(item.id);
        for (var i = 0; i < adjustThese.length; i++) {
          adjustThese[i].style.fontSize = item.value + "px";
        }
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

function readURL(input) {
  console.log(input.files)
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    console.log(reader)
    reader.onload = function (e) {
      var x = document.getElementsByClassName("image-upload");
      for (var i=0; i < x.length; i++) {
        x[i].setAttribute(
          'src',
          e.target.result
        );
      }
    }
    reader.readAsDataURL(input.files[0]);
  };
}
