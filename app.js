const container = document.querySelector('.container');

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

for(let i=1;i<=665;i++){
    const div=document.createElement('div');
    const img=document.createElement('img');
    const span=document.createElement('span');

    div.classList.add('align');

    img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    span.innerText=`#${i}`;

    div.appendChild(img);
    div.appendChild(span);
    container.appendChild(div);
}