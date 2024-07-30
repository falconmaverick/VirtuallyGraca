// Custom Cursor
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mouseenter', e => {
    cursor.style.display = 'block';
});

document.addEventListener('mouseleave', e => {
    cursor.style.display = 'none';
});
