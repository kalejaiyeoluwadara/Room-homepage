const titles = [
  'Discover innovative ways to decorate',
  'We are available all across the globe',
  'Manufactured with the best materials'
];

const contents = [
  'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
  'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
];

const images = [
  './images/desktop-image-hero-1.jpg',
  './images/desktop-image-hero-2.jpg',
  './images/desktop-image-hero-3.jpg'
];

const maxSlide = titles.length - 1;

let slide = 0;
const bg = document.querySelector('.mainImg');
const ccont = document.getElementById('ccont');
const ctitle = document.getElementById('ctitle');

function slidef(direction) {
  if (direction === 'right' && slide < maxSlide) {
    slide++;
  } else if (direction === 'left' && slide > 0) {
    slide--;
  }
  
  bg.style.backgroundImage = `url(${images[slide]})`;
  ctitle.innerText = titles[slide];
  ccont.innerText = contents[slide];
}
var mob = document.getElementById('mob');
function nav(t){
  if(t === 'open'){
    mob.style.display = 'flex';
  }
  else if(t === 'close'){
     mob.style.display = 'none';
  }
}

const lis = document.querySelectorAll('li');
const underline = document.getElementById('underline');

lis.forEach((li) => {
  li.addEventListener('mouseover', () => {
    const width = `${li.offsetWidth}px`;
    const left = `${li.getBoundingClientRect().left}px`;
    underline.style.width = width;
    underline.style.left = left;
  });
  
  li.addEventListener('mouseout', () => {
    underline.style.width = '0';
    underline.style.left = '0';
  });
});



