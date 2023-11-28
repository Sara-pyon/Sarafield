

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
    footerListHTML ='';

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
