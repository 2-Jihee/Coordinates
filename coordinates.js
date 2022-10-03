const circleCurser = document.querySelector('.circleCurser');
const mouseFollower = document.querySelector('.mouseFollower');

addEventListener('mousemove', (event) => {
    // 마우스커서 좌표값
    const x = event.clientX
    const y = event.clientY
    
    // 마우스커서 css 조작
    circleCurser.style.display = 'block';
    circleCurser.style.left = x + 'px';
    circleCurser.style.top = y + 'px';

    // 마우스커서 옆 좌표값 넣기
    mouseFollower.innerText = `${x}px, ${y}px`

    // 마우스 팔로워(좌표 텍스트) css 조작
    mouseFollower.style.display = 'block';
    mouseFollower.style.left = (x+30) + 'px';
    mouseFollower.style.top = (y+10) + 'px';

});