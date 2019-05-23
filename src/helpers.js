// resizes text area containing code to fit the contents

class Helpers {
	state = {}



// window.onload = () => {
// 	textAreaSizer();
// }
	render() {
	// 	return (  )

textAreaSizer = () => {
 const text = document.getElementsByClassName("code_snippet");
 for (let i = 0; i < text.length; i ++) {
  let scroll = text[i].scrollHeight;
  text[i].style.height = text[i].scrollHeight + 'px';
 }
}
	 }
}

export default Helpers;
