const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(item => {
        item.addEventListener('click', function(){
            this.classList.toggle('collapsible--expanded');
        })
    })

const heroHeading = document.querySelector('.js-hero__heading');
heroHeading.innerText = `Cloud Hosting \n for Pros`;