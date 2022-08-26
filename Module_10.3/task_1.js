const btn = document.querySelector('.btn');
const btn_defolt = document.querySelector('.btn_defolt');
const btn_magic = document.querySelector('.btn_magic');

btn.addEventListener('click', function (){

    if (btn_defolt.style.display =="none"){
        btn_defolt.style.display = "block";
        btn_magic.style.display = 'none';
    } else {
        btn_magic.style.display = 'block';
        btn_defolt.style.display = "none";
    }
});