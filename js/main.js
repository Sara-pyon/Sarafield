import '../images/easy.jpg';
import '../images/easy@2x.jpg';
import '../images/easy.webp';
import '../images/easy@2x.webp';

// Detail
const detail = document.querySelector('.js-detail');
let detailHTML = '';


const detailFeatures =[{
    title: 'Super Easy to Use',
    dicription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!',
    iconName: 'easy',
    imageName: 'easy',
    transformText: 'fade-up-right',
    transformImage: 'fade-up-left'
},{
    title: 'Simply Fast Websites',
    dicription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!',
    iconName: 'computer',
    imageName: 'fast',
    transformText: 'fade-up',
    transformImage: ''
},{
    title: 'Wordpress Made Easy',
    dicription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!',
    iconName: 'settings',
    imageName: 'wordpress',
    transformText: 'fade-up',
    transformImage: ''
},{
    title: '24/7 Expert Support',
    dicription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!',
    iconName: 'clock',
    imageName: 'support',
    transformText: 'fade-left',
    transformImage: 'fade-right'
}];

detailFeatures.forEach(item =>{
    detailHTML += `
<div class="container grid grid--1x2 detail__i tem ">
    <div class="media detail__discription" data-aos=${item.transformText}>
        <div class="media__image">
            <span class="icon-container">
                <svg class="icon icon--primary">
                    <use xlink:href="images/sprite.svg#${item.iconName}"></use>
                </svg>
            </span>
        </div>
        <div class="media__body">
            <h2 class="media__title">${item.title}</h2>
            <p class="media__text">${item.dicription}</p>
            <a href="#" class="link-arrow">Learn More</a>
        </div>
    </div>
    <div class="detail__image" data-aos=${item.transformImage}>
        <picture>
            <source type="image/webp" srcset="images/${item.imageName}.webp 1x, images/${item.imageName}@2x.webp 2x">
            <source type="image/png" srcset="images/${item.imageName}.jpg 1x, images/${item.imageName}@2x.jpg 2x">
            <img class="detail__image" src="images/${item.imageName}.jpg" alt="">
        </picture>
    </div>
</div>`
});
detail.innerHTML = detailHTML;


// Footer
const footer = document.querySelector('.js-footer__block');
let footerHTML ='';

const footerFutures = [{
    title : 'Product',
    section : ['WordPress Hosting',
        'Free Automated WordPress',
        'Migrations',
        'Domain Names',
        'Monthly Web Hosting']
},{
    title : 'Company',
    section : ['About',
        'Affiliates',
        'Blog',
        'Careers',
        'Community',
        'News',
        'Green Hosting']
},{
    title : 'Support',
    section : ['WordPress Hosting',
        'Free Automated WordPress',
        'Migrations',
        'Domain Names',
        'Monthly Web Hosting',
        'DreamCompute']
},{
    title : 'Domains',
    section : ['WordPress Hosting',
        'Free Automated WordPress',
        'Migrations',
        'Domain Names',
        'Monthly Web Hosting']
}];

footerFutures.forEach(item => {
    let footerListHTML ='';

    item.section.forEach(list => {
        footerListHTML += `<list class="nav__item"><a href="#">${list}</a></list>`
    })
    
    footerHTML += `
    <div class="collapsible">
                <header class="collapsible__header">
                    <h2 class="collapsible__heading">${item.title}</h2>
                    <svg class="icon icon--white collapsible__chevron nav__toggler">
                        <use xlink:href="images/sprite.svg#chevron"></use>
                    </svg>
                </header>
                <div class="collapsible__content nav__list list">
                    ${footerListHTML}
                </div>
    </div>
    `
});

footerHTML += `
<div class="footer__logo">
<img class="footer__logo-image" src="images/logo.png" alt="">
<p class="footer__copyright">Copyright 2024 &copy Sara</p>
</div>`;

footer.innerHTML = footerHTML;

const collapsibles = document.querySelectorAll('.collapsible');

 collapsibles.forEach(item => {
         item.addEventListener('click', function(){
             this.classList.toggle('collapsible--expanded');
         })
     })

