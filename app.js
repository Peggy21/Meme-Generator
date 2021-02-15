const form = document.querySelector('#memeGenerator');
const memeInput =document.querySelector('input[name="meme"]');
const Input =document.querySelector('input[name="url"]');
const results = document.querySelector('#results')
form.addEventListener('submit', function(e){
	const nodes = document.querySelectorAll('#results h2');
	for (let i = 0; i < nodes.length; i++) {
	  nodes[i].remove();
	}

    e.preventDefault();
    const newMeme = makeMeme(memeInput.value);
    results.appendChild(newMeme);
    
});

function makeMeme(text){
    const meme = document.createElement('h2');
    meme.innerText = text;
    return meme;
}

document.getElementById("b").addEventListener("click", e => {
    let imageInput = document.getElementById("image-input");
    let image = document.getElementById("image");
    if (imageInput.value) image.src = imageInput.value;
  });