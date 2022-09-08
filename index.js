let strbtn = document.querySelector('#startpage .button');
let startpage = document.getElementById('startpage');
let intro = document.getElementsByClassName('intro')[0];
let page1 = document.querySelector('.p01');
let bgm = document.getElementById('bgm');
let DPO = document.querySelector('.intro h2');
let nama = document.querySelector('.intro h1');
let btn1 = document.querySelector('.p01 .next');
let page2 = document.querySelector('.p02');
let btn2 = document.querySelector('.p02 .next');
let page3 = document.querySelector('.p03');
let btn3 = document.querySelector('.p03 .next');
let page4 = document.querySelector('.p04');
let btn4 = document.querySelector('.p04 .next');
let page5 = document.querySelector('.p05');
let btn5 = document.querySelector('.p05 .next');
let page6 = document.querySelector('.p06');
let btn6 = document.querySelector('.p06 .next');
let page7 = document.querySelector('.p07');
let btn7 = document.querySelector('.p07 .next');
let page8 = document.querySelector('.p08');
let btn8 = document.querySelector('.p08 .next');
let page9 = document.querySelector('.p09');
bgm.loop = true;
bgm.volume = .1;
strbtn.addEventListener('click', function(){
    strbtn.classList.add('red');
    startpage.classList.add('closed');
    setTimeout(function(){
        intro.style.display = 'block';
        DPO.classList.add('opened');
        setTimeout(function(){
            nama.classList.add('opened');
        }, 1700);
    }, 1700);
    setTimeout(function(){
        intro.classList.add('closed');
    }, 9000);
    setTimeout(function(){
        bgm.play();
        startpage.style.display = 'none';
        page1.style.display = 'block';
        page1.classList.add('opened');
    }, 10700);
    setTimeout(function(){
        page1.style.opacity = '1';
        page1.classList.remove('opened');
    }, 13900);
});
btn1.addEventListener('click', function(){
    page1.classList.add('closed');
    setTimeout(function(){
        page1.style.display = 'none';
        page2.classList.add('opened');
        page2.style.display = 'block';
    }, 1700);
    setTimeout(function(){
        page2.style.opacity = '1';
        page2.classList.remove('opened');
    }, 4900);
});
btn2.addEventListener('click', function(){
    page2.classList.add('closed');
    setTimeout(function(){
        page2.style.display = 'none';
        page3.classList.add('opened');
        page3.style.display = 'block';
    }, 1700);
    setTimeout(function(){
        page3.style.opacity = '1';
        page3.classList.remove('opened');
    }, 4900);
});
btn3.addEventListener('click', function(){
    page3.classList.add('closed');
    setTimeout(function(){
        page3.style.display = 'none';
        page4.classList.add('opened');
        page4.style.display = 'block';
    }, 1700);
    setTimeout(function(){
        page4.style.opacity = '1';
        page4.classList.remove('opened');
    }, 4900);
});
btn4.addEventListener('click', function(){
    page4.classList.add('closed');
    setTimeout(function(){
        page4.style.display = 'none';
        page5.classList.add('opened');
        page5.style.display = 'block';
    }, 1700);
    setTimeout(function(){
        page5.style.opacity = '1';
        page5.classList.remove('opened');
    }, 4900);
});
btn5.addEventListener('click', function(){
    page5.classList.add('closed');
    setTimeout(function(){
        page5.style.display = 'none';
        page6.classList.add('opened');
        page6.style.display = 'block';
    }, 1700);
    setTimeout(function(){
        page6.style.opacity = '1';
        page6.classList.remove('opened');
    }, 4900);
});
btn6.addEventListener('click', function(){
    page6.classList.add('closed');
    setTimeout(function(){
        page6.style.display = 'none';
        page7.classList.add('opened');
        page7.style.display = 'block';
    }, 1700);
    setTimeout(function(){
        page7.style.opacity = '1';
        page7.classList.remove('opened');
    }, 4900);
});
btn7.addEventListener('click', function(){
    page7.classList.add('closed');
    setTimeout(function(){
        page7.style.display = 'none';
        page8.classList.add('opened');
        page8.style.display = 'block';
    }, 1700);
    setTimeout(function(){
        page8.style.opacity = '1';
        page8.classList.remove('opened');
    }, 4900);
});
btn8.addEventListener('click', function(){
    page8.classList.add('closed');
    setTimeout(function(){
        page8.style.display = 'none';
        page9.classList.add('opened');
        page9.style.display = 'block';
    }, 1700);
    setTimeout(function(){
        page9.style.opacity = '1';
        page9.classList.remove('opened');
    }, 4900);
});
