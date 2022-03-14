// MileStone 1

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=100",
        "author": {
            "name": "Mario Rossi",
            "image": null
        },
        "likes": " ",
        "created": "2021-03-05"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=251",
        "author": {
            "name": "Mark Smith",
            "image": "https://unsplash.it/300/300?image=201",
        },
        "likes": 102,
        "created": "2021-03-05"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=479",
        "author": {
            "name": "Helena Boris",
            "image": "https://unsplash.it/300/300?image=55",
        },
        "likes": "",
        "created": "2021-01-05"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=210",
        "author": {
            "name": "Dwight Schultz",
            "image": "https://unsplash.it/300/300?image=30",
        },
        "likes": 1,
        "created": "2021-08-05"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=259",
        "author": {
            "name": "Micheal Scot",
            "image": "https://unsplash.it/300/300?image=14",
        },
        "likes": 0,
        "created": "2021-10-05"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=209",
        "author": {
            "name": "Micheal Bubal",
            "image": "https://unsplash.it/300/300?image=19",
        },
        "likes": 79,
        "created": "2021-12-05"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=29",
        "author": {
            "name": "Harry Potter Fan Page",
            "image": "https://unsplash.it/300/300?image=19",
        },
        "likes": 42,
        "created": "2021-10-05"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=179",
        "author": {
            "name": "BCC World New",
            "image": "https://unsplash.it/300/300?image=140",
        },
        "likes": 12,
        "created": "2021-10-05"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=249",
        "author": {
            "name": "Arianna Grande",
            "image": "https://unsplash.it/300/300?image=1",
        },
        "likes": 800000,
        "created": "2021-10-05"
    },
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=299",
        "author": {
            "name": "Michela Surname",
            "image": "https://unsplash.it/300/300?image=10",
        },
        "likes": 78,
        "created": "2021-10-05"
    }

];

// MileStone 2

posts.forEach((element) => {

    document.getElementById('container').innerHTML += 
    `
    <div id="${element.id}" class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${element.author.name}</div>
                            <div class="post-meta__time">${element.created}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${element.content}</div>
                <div class="post__image">
                    <img src="${element.media}" alt="Random Image">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button js-like-button" href="#${element.id}" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
    `
});

//MileStone 3
/**
    Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
 */
const likedButton = document.querySelectorAll(".js-like-button");
const likeCounter = document.querySelectorAll('.js-likes-counter');
const likedPosts =[];


for (let i = 0; i < posts.length ; i++){
    likedButton[i].addEventListener('click', function(){
        this.classList.toggle('like-button--liked');
        let newLikes = posts[i].likes +1;
        likedPosts.push(posts[i]['id']);
        likeCounter[i].innerHTML = newLikes;
        console.log(newLikes);
        console.log(likedPosts);
    });

};






