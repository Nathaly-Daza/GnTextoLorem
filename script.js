const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam pulvinar odio commodo aliquet id non metus. Etiam blandit interdum orci, a aliquet purus eleifend ac.',
    'Aliquam sodales, nibh vitae accumsan interdum, eros nunc iaculis mauris, non vestibulum nisi erat scelerisque ligula. Ut mollis urna leo, quis finibus nibh placerat ut.',
    'Suspendisse orci mi, condimentum at lacinia vel, accumsan id ante. Fusce placerat est massa, et scelerisque arcu consectetur vitae. Mauris malesuada ultrices sapien, placerat maximus mi gravida at.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam pulvinar odio commodo aliquet id non metus. Etiam blandit interdum orci, a aliquet purus eleifend ac.',
    'Aliquam sodales, nibh vitae accumsan interdum, eros nunc iaculis mauris, non vestibulum nisi erat scelerisque ligula. Ut mollis urna leo, quis finibus nibh placerat ut.',
    'Suspendisse orci mi, condimentum at lacinia vel, accumsan id ante. Fusce placerat est massa, et scelerisque arcu consectetur vitae. Mauris malesuada ultrices sapien, placerat maximus mi gravida at.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam pulvinar odio commodo aliquet id non metus. Etiam blandit interdum orci, a aliquet purus eleifend ac.',
    'Aliquam sodales, nibh vitae accumsan interdum, eros nunc iaculis mauris, non vestibulum nisi erat scelerisque ligula. Ut mollis urna leo, quis finibus nibh placerat ut.',
    'Suspendisse orci mi, condimentum at lacinia vel, accumsan id ante. Fusce placerat est massa, et scelerisque arcu consectetur vitae. Mauris malesuada ultrices sapien, placerat maximus mi gravida at.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam pulvinar odio commodo aliquet id non metus. Etiam blandit interdum orci, a aliquet purus eleifend ac.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam pulvinar odio commodo aliquet id non metus. Etiam blandit interdum orci, a aliquet purus eleifend ac.',
    'Aliquam sodales, nibh vitae accumsan interdum, eros nunc iaculis mauris, non vestibulum nisi erat scelerisque ligula. Ut mollis urna leo, quis finibus nibh placerat ut.',
    'Suspendisse orci mi, condimentum at lacinia vel, accumsan id ante. Fusce placerat est massa, et scelerisque arcu consectetur vitae. Mauris malesuada ultrices sapien, placerat maximus mi gravida at.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam pulvinar odio commodo aliquet id non metus. Etiam blandit interdum orci, a aliquet purus eleifend ac.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam pulvinar odio commodo aliquet id non metus. Etiam blandit interdum orci, a aliquet purus eleifend ac.',
    'Aliquam sodales, nibh vitae accumsan interdum, eros nunc iaculis mauris, non vestibulum nisi erat scelerisque ligula. Ut mollis urna leo, quis finibus nibh placerat ut.',
    'Suspendisse orci mi, condimentum at lacinia vel, accumsan id ante. Fusce placerat est massa, et scelerisque arcu consectetur vitae. Mauris malesuada ultrices sapien, placerat maximus mi gravida at.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam pulvinar odio commodo aliquet id non metus. Etiam blandit interdum orci, a aliquet purus eleifend ac.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam pulvinar odio commodo aliquet id non metus. Etiam blandit interdum orci, a aliquet purus eleifend ac.',
    'Aliquam sodales, nibh vitae accumsan interdum, eros nunc iaculis mauris, non vestibulum nisi erat scelerisque ligula. Ut mollis urna leo, quis finibus nibh placerat ut.',  
  ];


  


const item = document.getElementById("items");
const dataContainer = document.getElementById("data");


function shuffle(array){

  let currentIndex = array.length;
  let randomIndex;

  while(currentIndex!=0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex],array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  
  return array;

}

function generate() {

  if (item.value == 0) {
    alert("El valor no puede ser cero");
  }else if (item.value > paragraphs.length){
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
  }else{

    const shuffleParagraphs = paragraphs;
    shuffle(paragraphs);

    const selectedParagraphs = shuffleParagraphs.slice(0,item.value);
    const paragraphsHTML = selectedParagraphs.map(paragraphs => `<p>${paragraphs}</p>`).join("");
    dataContainer.innerHTML = paragraphsHTML;

  }
}