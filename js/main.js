
// Detail
const detail = document.querySelector('.js-detail');
let detailHTML = '';


const detailFeatures =[{
    title: 'Super Easy to Use',
    dicription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!',
    iconName: 'easy',
    imageName: 'easy'
},{
    title: 'Simply Fast Websites',
    dicription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!',
    iconName: 'computer',
    imageName: 'fast'
},{
    title: 'Wordpress Made Easy',
    dicription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!',
    iconName: 'settings',
    imageName: 'wordpress'
},{
    title: '24/7 Expert Support',
    dicription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae repudiandae unde porro fugiat optio fugit quae quos culpa cumque!',
    iconName: 'clock',
    imageName: 'support'
}];

detailFeatures.forEach(item =>{
    detailHTML += `
    <div class="container grid grid--1x2 detail__item ">
    <div class="media detail__discription">
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
    <div class="detail__image">
        <picture>
            <source type="image/webp" srcset="images/${item.imageName}.webp 1x, images/${item.imageName}@2x.webp 2x">
            <source type="image/png" srcset="images/${item.imageName}.jpg 1x, images/${item.imageName}@2x.jpg 2x">
            <img class="detail__image" src="images/${item.imageName}.jpg" alt="">
        </picture>
    </div>
</div>`
console.log(detailHTML);
});
detail.innerHTML = detailHTML;