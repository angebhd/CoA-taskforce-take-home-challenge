document.addEventListener('DOMContentLoaded', function () {
    const divContainers = document.querySelectorAll('.img');
    
    divContainers.forEach(function (divContainer){
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
    });
});
