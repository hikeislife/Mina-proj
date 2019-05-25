// resizes text area containing code to fit the contents

function textAreaSizer() {
 const text = document.querySelectorAll("code_snippet");
 for (let i = 0; i < text.length; i ++) {
  //let scroll = text[i].scrollHeight;
  text[i].style.height = text[i].scrollHeight + 'px';
 }
}

window.onload = () => {
	textAreaSizer();
}

export default Helpers;
