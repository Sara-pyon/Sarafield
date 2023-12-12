const e=document.querySelector(".js-detail");let i="";[{title:"Super Easy to Use",dicription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!",iconName:"easy",imageName:"easy",transformText:"fade-up-right",transformImage:"fade-up-left"},{title:"Simply Fast Websites",dicription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!",iconName:"computer",imageName:"fast",transformText:"fade-up",transformImage:""},{title:"Wordpress Made Easy",dicription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!",iconName:"settings",imageName:"wordpress",transformText:"fade-up",transformImage:""},{title:"24/7 Expert Support",dicription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!",iconName:"clock",imageName:"support",transformText:"fade-left",transformImage:"fade-right"}].forEach(e=>{i+=`
<div class="container grid grid--1x2 detail__i tem ">
    <div class="media detail__discription" data-aos=${e.transformText}>
        <div class="media__image">
            <span class="icon-container">
                <svg class="icon icon--primary">
                    <use xlink:href="images/sprite.svg#${e.iconName}"></use>
                </svg>
            </span>
        </div>
        <div class="media__body">
            <h2 class="media__title">${e.title}</h2>
            <p class="media__text">${e.dicription}</p>
            <a href="#" class="link-arrow">Learn More</a>
        </div>
    </div>
    <div class="detail__image" data-aos=${e.transformImage}>
        <picture>
            <source type="image/webp" srcset="images/${e.imageName}.webp 1x, images/${e.imageName}@2x.webp 2x">
            <source type="image/png" srcset="images/${e.imageName}.jpg 1x, images/${e.imageName}@2x.jpg 2x">
            <img class="detail__image" src="images/${e.imageName}.jpg" alt="">
        </picture>
    </div>
</div>`}),e.innerHTML=i;const a=document.querySelector(".js-footer__block");let t="";[{title:"Product",section:["WordPress Hosting","Free Automated WordPress","Migrations","Domain Names","Monthly Web Hosting"]},{title:"Company",section:["About","Affiliates","Blog","Careers","Community","News","Green Hosting"]},{title:"Support",section:["WordPress Hosting","Free Automated WordPress","Migrations","Domain Names","Monthly Web Hosting","DreamCompute"]},{title:"Domains",section:["WordPress Hosting","Free Automated WordPress","Migrations","Domain Names","Monthly Web Hosting"]}].forEach(e=>{let i="";e.section.forEach(e=>{i+=`<list class="nav__item"><a href="#">${e}</a></list>`}),t+=`
    <div class="collapsible">
                <header class="collapsible__header">
                    <h2 class="collapsible__heading">${e.title}</h2>
                    <svg class="icon icon--white collapsible__chevron nav__toggler">
                        <use xlink:href="images/sprite.svg#chevron"></use>
                    </svg>
                </header>
                <div class="collapsible__content nav__list list">
                    ${i}
                </div>
    </div>
    `}),t+=`
<div class="footer__logo">
<img class="footer__logo-image" src="images/logo.png" alt="">
<p class="footer__copyright">Copyright 2024 &copy Sara</p>
</div>`,a.innerHTML=t,document.querySelectorAll(".collapsible").forEach(e=>{e.addEventListener("click",function(){this.classList.toggle("collapsible--expanded")})});
//# sourceMappingURL=index.c75d81fe.js.map
