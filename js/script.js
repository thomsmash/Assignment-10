let button1 = document.querySelector('#button');

let image1 = document.querySelector('#image1');
let image2 = document.querySelector('#image2');

button1.onclick = () => {
	if(image1.style.display === 'none'){
    image1.style.display = 'initial';
    }
    else{
   image1.style.display = 'none';
	}
}

image2.onmouseenter = () => {
	image2.style.transform = 'rotate(90deg)';
}

image2.onmouseleave = () => {
	image2.style.transform = 'none';
}