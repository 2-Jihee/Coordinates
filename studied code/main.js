const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

// window가 전부 다 load가 되면 실행되도록 함 
addEventListener('load', () => {
    document.addEventListener('mousemove', event => {
        const targetRect = target.getBoundingClientRect();
        const targetHalfwidth = targetRect.width / 2;
        const targetHalfheigh = targetRect.height / 2;

        const x = event.clientX;
        const y = event.clientY;
        console.log(`${x} ${y}`);
    
        // element 동적 위치 변환
            // vertical.style.left = `${x}px`;
            // horozontal.style.top = `${y}px`;
            // target.style.left = `${x}px`;
            // target.style.top = `${y}px`;
            // tag.style.left = `${x}px`;
            // tag.style.top = `${y}px`;
    
        // 성능개선
        vertical.style.transform = `translateX(${x}px)`;
        horozontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x-targetHalfwidth}px, ${y-targetHalfheigh}px)`;
        tag.style.transform = `translate(${x}px, ${y}px)`;
    
        tag.innerHTML = `${x}px, ${y}px`;
    });
})