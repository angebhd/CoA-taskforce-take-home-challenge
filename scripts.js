document.addEventListener('DOMContentLoaded', function () {
    const divContainers = document.querySelectorAll('.img');
    const viewer = document.querySelector('.view-full');
    const fullImage = document.querySelector('.full-image');
    const closeButton = document.querySelector('.close-btn');

    divContainers.forEach(function (divContainer) {
        const textContainer = divContainer.querySelector('.info');

        divContainer.addEventListener('mouseover', function () {
            let moreElement = document.querySelector('.more');
            if (!moreElement) {
                moreElement = document.createElement('p');
                moreElement.classList.add('more');
                moreElement.innerHTML = 'Know more &#8594;';
                textContainer.appendChild(moreElement);

                moreElement.classList.add('show');

            }
        });

        divContainer.addEventListener('mouseout', function () {
            const moreElement = document.querySelector('.more');
            if (moreElement) {
                textContainer.removeChild(moreElement);
            }
        });

        divContainer.addEventListener('click', function () {
            const fullSrc = this.getAttribute('data-full');
            fullImage.src = fullSrc;
            // console.log(fullSrc);
            viewer.classList.add('show-full');
        });
    });
    closeButton.addEventListener('click', function () {
        viewer.classList.remove('show-full');
        fullImage.src = '';
    });
});


