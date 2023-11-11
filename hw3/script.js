const accessKey = 'kkWWujHxAw7iO9X7FUKt-noVblAg_wNHnqRnf7_JI1I';
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=' + accessKey;

const randomImage = document.querySelector('.randomImage');
const photoName = document.querySelector('.photoName');
const likeButton = document.querySelector('.likeButton');
const likeCount = document.querySelector('.likeCount');


let likes = 0;

async function fetchRandomImage() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const imageUrl = data.urls.regular;
        const photographer = data.user;
        randomImage.src = imageUrl;
        photoName.textContent = photographer.name;
    } catch (error) {
        console.log('Ошибка загрузки ', error);
    }
}


function putLike() {
    likes++;
    likeCount.textContent = likes;
}


fetchRandomImage();


likeButton && likeButton.addEventListener('click', putLike);


