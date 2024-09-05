/*----------------------------------- MENU BURGER -----------------------------------*/

const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const menuBody = document.querySelector('.mobile-nav');
    const fadeBackground = document.querySelector('.mobile-nav-fade');
    const menuLinks = document.querySelectorAll('.mobile-nav-list a');
    const firstMenuItem = document.querySelector('.mobile-nav-link-select');

    // Обработчик клика на иконке меню
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        fadeBackground.classList.toggle('active'); // Показать/скрыть подложку
    });

    // Обработчик клика на подложке
    fadeBackground.addEventListener("click", function () {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
        fadeBackground.classList.remove('active');
    });

    // Обработчики клика на пунктах меню
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
            fadeBackground.classList.remove('active');
        });
    });
    
    // Обработчик клика на первом неактивном пункте меню
    firstMenuItem.addEventListener("click", function () {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
        fadeBackground.classList.remove('active');
    });
}


/*----------------------------------- POPUP -----------------------------------*/

const petsData = [
    {
        image: 'assets/img/jennifer.png',
        name: 'Jennifer',
        type: 'Dog - Labrador',
        description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
        age: '2 months',
        Inoculations: 'none',
        Diseases: 'none',
        Parasites: 'none',
    },
    {
        image: 'assets/img/sophia.png',
        name: 'Sophia',
        type: 'Dog - Shih tzu',
        description: 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
        age: '1 month',
        Inoculations: 'none',
        Diseases: 'none',
        Parasites: 'none',
    },
    {
        image: 'assets/img/woody.png',
        name: 'Woody',
        type: 'Dog - Golden Retriever',
        description: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
        age: '3 years 6 months',
        Inoculations: 'none',
        Diseases: 'none',
        Parasites: 'none',
    },
    {
        image: 'assets/img/scarlett.png',
        name: 'Scarlett',
        type: 'Dog - Jack Russell Terrier',
        description: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
        age: '3 months',
        Inoculations: 'none',
        Diseases: 'none',
        Parasites: 'none',
    },
    {
        image: 'assets/img/katrine.png',
        name: 'Katrine',
        type: 'Cat - British Shorthair',
        description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
        age: '6 months',
        Inoculations: 'none',
        Diseases: 'none',
        Parasites: 'none',
    },
    {
        image: 'assets/img/timmy.png',
        name: 'Timmy',
        type: 'Cat - British Shorthair',
        description: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
        age: '2 years 3 months',
        Inoculations: 'none',
        Diseases: 'none',
        Parasites: 'none',
    },
    {
        image: 'assets/img/freddie.png',
        name: 'Freddie',
        type: 'Cat - British Shorthair',
        description: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
        age: '2 months',
        Inoculations: 'none',
        Diseases: 'none',
        Parasites: 'none',
    },
    {
        image: 'assets/img/charly.png',
        name: 'Charly',
        type: 'Dog - Jack Russell Terrier',
        description: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
        age: '8 years',
        Inoculations: 'none',
        Diseases: 'none',
        Parasites: 'none',
    },
];

const petsCart = document.querySelector('.pets-cart');
const popup = document.getElementById('pet-popup');
const popupImage = document.getElementById('popup-pet-image');
const popupName = document.getElementById('popup-pet-name');
const popupType = document.getElementById('popup-pet-type');
const popupDescription = document.getElementById('popup-pet-description');
const popupAge = document.getElementById('popup-pet-age');
const popupInoculations = document.getElementById('popup-pet-inoculations');
const popupDiseases = document.getElementById('popup-pet-diseases');
const popupParasites = document.getElementById('popup-pet-parasites');
const popupClose = document.querySelector('.popup-close');
const fadeBackground = document.querySelector('.mobile-nav-fade');

// Открытие попапа
function openPopup(pet) {
    popupImage.src = pet.image;
    popupName.textContent = pet.name;
    popupType.textContent = pet.type;
    popupDescription.textContent = pet.description;
    popupAge.textContent = pet.age;
    popupInoculations.textContent = pet.Inoculations;
    popupDiseases.textContent = pet.Diseases;
    popupParasites.textContent = pet.Parasites;
    popup.classList.remove('hidden');
    document.body.classList.add('lock');
    fadeBackground.classList.toggle('active'); // Показать/скрыть подложку
}

// Закрытие попапа
function closePopup() {
    popup.classList.add('hidden');
    document.body.classList.remove('lock');
    fadeBackground.classList.remove('active');
}
// Добавление обработчика события на каждую карточку питомца
petsCart.addEventListener('click', (event) => {
    const petCard = event.target.closest('.pet');
    if (petCard) {
        const petName = petCard.querySelector('.name').textContent;
        const pet = petsData.find(p => p.name === petName);
        if (pet) {
            openPopup(pet);
        }
    }
});

// Обработчики закрытия попапа
popupClose.addEventListener('click', closePopup);
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopup();
    }
});


/*----------------------------------- PAGINATION -----------------------------------*/

// массив питомцев (всего 8)
const petsForArray = [
    { name: 'Katrine', img: 'assets/img/katrine.png' },
    { name: 'Jennifer', img: 'assets/img/jennifer.png' },
    { name: 'Woody', img: 'assets/img/woody.png' },
    { name: 'Sophia', img: 'assets/img/sophia.png' },
    { name: 'Timmy', img: 'assets/img/timmy.png' },
    { name: 'Charly', img: 'assets/img/charly.png' },
    { name: 'Scarlett', img: 'assets/img/scarlett.png' },
    { name: 'Freddie', img: 'assets/img/freddie.png' },
];

// перемешивание массива:
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// массив из 48 элементов (массив 8 карточек * 6):
const fullPetsArray = [];
for (let i = 0; i < 6; i++) {
    const shuffledArray = shuffle([...petsForArray]);
    fullPetsArray.push(...shuffledArray);
}

// Функция пагинации
function paginatePets(array, itemsPerPage) {
    const paginated = [];
    for (let i = 0; i < array.length; i += itemsPerPage) {
        paginated.push(array.slice(i, i + itemsPerPage));
    }
    return paginated;
}

document.addEventListener('DOMContentLoaded', () => {
    // Определяем количество карточек на странице в зависимости от ширины экрана
    // 1280px - 6 стр. по 8 карт., 768px — 8 стр. по 6 карт., 320px — 16 стр. по 3 карт.
    let itemsPerPage = window.innerWidth >= 1280 ? 8 : window.innerWidth >= 768 ? 6 : 3;

    let paginatedPets = paginatePets(fullPetsArray, itemsPerPage);

    // Отслеживание текущей страницы:
    let currentPage = 0;
    function renderPets(pageNumber) {
        const petsContainer = document.querySelector('.pets-cart');
        petsContainer.innerHTML = '';

        paginatedPets[pageNumber].forEach(pet => {
            const petElement = document.createElement('a');
            petElement.href = `#${pet.name.toLowerCase()}`;
            petElement.classList.add('pet');
            petElement.innerHTML = `<img src="${pet.img}" alt="Foto ${pet.name}">
                                    <p class="name">${pet.name}</p>
                                    <span class="button-pets">Learn more</span>`;
            petsContainer.appendChild(petElement);
        });
    }

    renderPets(currentPage);

    // Обработка переключения страниц
    document.querySelector('.navigation').addEventListener('click', (e) => {
        if (e.target.closest('.arrow')) {
            const buttonClass = e.target.closest('.arrow').classList[1];
            if (buttonClass.includes('left') && currentPage > 0) {
                currentPage--;
            } else if (buttonClass.includes('right') && currentPage < paginatedPets.length - 1) {
                currentPage++;
            }
            renderPets(currentPage);
            updatePage();
        }
    });

    /*----------------------------------- NAVIGATION -----------------------------------*/

    const currentPageEl = document.querySelector('.current-page p');
    const firstPageButton = document.querySelector('.first-page');
    const prevPageButton = document.querySelector('.prev-page');
    const nextPageButton = document.querySelector('.next-page');
    const lastPageButton = document.querySelector('.last-page');

    let totalPages = Math.ceil(48 / itemsPerPage);   

    function updatePage() {
        currentPageEl.textContent = currentPage + 1;

        // Отключение кнопок в зависимости от текущей страницы
        if (currentPage === 0) {
            firstPageButton.classList.add('inactive');
            prevPageButton.classList.add('inactive');
        } else {
            firstPageButton.classList.remove('inactive');
            prevPageButton.classList.remove('inactive');
        }

        if (currentPage === totalPages - 1) {
            nextPageButton.classList.add('inactive');
            lastPageButton.classList.add('inactive');
        } else {
            nextPageButton.classList.remove('inactive');
            lastPageButton.classList.remove('inactive');
        }
    }

    // Слушатели событий для кнопок
    firstPageButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage = 0;
            renderPets(currentPage);
            updatePage();
        }
    });

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            renderPets(currentPage);
            updatePage();
        }
    });

    nextPageButton.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            renderPets(currentPage);
            updatePage();
        }
    });

    lastPageButton.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage = totalPages - 1;
            renderPets(currentPage);
            updatePage();
        }
    });

    // Обновление количества страниц при изменении размера окна
    window.addEventListener('resize', () => {
        const prevItemsPerPage = itemsPerPage;
        itemsPerPage = window.innerWidth >= 1280 ? 8 : window.innerWidth >= 768 ? 6 : 3;
    
        if (prevItemsPerPage !== itemsPerPage) {
            paginatedPets = paginatePets(fullPetsArray, itemsPerPage);
            totalPages = Math.ceil(48 / itemsPerPage);
    
            if (currentPage >= totalPages) {
                currentPage = totalPages - 1;
            }
    
            renderPets(currentPage);
            updatePage();
        }
    });
    
    updatePage();
});