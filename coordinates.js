const mouseFollower = document.querySelector('.mouseFollower')

addEventListener('mousemove', (event) => {
    // 마우스커서 좌표값
    const x = event.clientX
    const y = event.clientY

    // css 조작
    mouseFollower.style.display = 'block';
    mouseFollower.style.left = (x+20) + 'px';
    mouseFollower.style.top = (y+5) + 'px';
    
    mouseFollower.innerText = `${x}px, ${y}px`
});