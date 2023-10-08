const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement("h1");
newHeader.id="victory";
newHeader.textContent = "Anthony is the champion"
document.body.append(newHeader);



/*const terms = document.createElement(‘p’);
terms.setAttribute(‘id’,‘para-1’);
fieldNameElement.textContent = "New text";
newHeader.textContent = "Anthony is the champion"

const newHeader = document.createElement("h1");
newHeader.id = "newHeaderId";
document.body.appendChild(newHeader);
*/