const darktheme= document.getElementById('dark');
const lighttheme= document.getElementById('light')
const body = document.body;

console.log(body)
darktheme.onclick=()=>{
body.classList.replace('light', 'dark');
console.log('white')
};
lighttheme.onclick=()=>{
    body.classList.replace('dark', 'light');
    console.log('black')
    }