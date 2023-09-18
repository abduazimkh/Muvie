const cards = document.querySelector(".cards");
const main = document.querySelector("main");
const mainSwiper = document.querySelector(".swiper-wrapper");
const search = document.querySelector(".search")
const nav = document.querySelector("nav")

const options = {
    method: 'GET',
    headers: {
        accept: 'aplication/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDdhMWU1MWU3MTE4ZTgyNGQ2NzMzOWZmZWFjZTI2MiIsInN1YiI6IjY1MDEzNDRjZDdkY2QyMDBlMmZkNTA0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3KHEvS_zj3QyxxIJkm5BvEymyvrLEgOYOph7gJha_o'
    }
};

const api = `https://api.themoviedb.org/3/movie/top_rated?&with_networks=213`;
const first = `https://api.themoviedb.org/3/discover/tv`;
const second = `https://api.themoviedb.org/3/discover/movie?&with_genres=28`;
const third = `https://api.themoviedb.org/3/discover/movie?&with_genres=12`;
const furth = `https://api.themoviedb.org/3/discover/movie?&with_genres=35`;
const five = `https://api.themoviedb.org/3/discover/movie?&with_genres=16`;

let arr = [first, second, third, furth, five]
let totalArr = arr[Math.trunc(Math.random() *arr.length)]

//  Birinchi tepadigi posterqib kishik rasm chiqarilgani

fetch(totalArr, options)
.then(response => response.json())
.then(data => renderCards1(data))

function renderCards1(data){
    data.results.forEach((card, i) => {
        let sors = `https://image.tmdb.org/t/p/original/`;
        const div = document.createElement("div");
        div.classList = "swiper-slide";
        div.innerHTML = `
            
            <a href="./movue.html?movieId=${card.id}">
                <img src="${ sors+card.poster_path}" alt="card img" />
            </a>
            <h3>${card.original_name || card.original_title}</h3>
        `
        cards.appendChild(div)
    })

}

// 4 ta ketma ket tushgan qatordagi rasmlar backdropdagi

for(el in arr){
    const cards2 = document.createElement("div")
    cards2.classList = 'cards2'
    // cards2.innerHTML = `
    //     <h2>All Muvies</h2>
    // `;
    main.appendChild(cards2);

fetch(arr[el], options)
.then(response => response.json())
.then(data => renderCards(data))

function renderCards(data){
    data.results.forEach((card, i) => {
        let sors = `https://image.tmdb.org/t/p/original/`;
        const div = document.createElement("div");
        div.classList = "swiper-slide";
        div.innerHTML = `
            
            <a href="./movue.html?movieId=${card.id}">
                <img src="${ sors+card.backdrop_path }" alt="card img" />
            </a>
            <h3>${card.original_name || card.original_title}</h3>
        `
        cards2.appendChild(div)
    })

}}

//  Hero qismidagi scrollbarniki

fetch(api, options)
    .then(response => response.json())
    .then(data => renderBanner(data))

function renderBanner(data){
    data.results.forEach(banner => {
        let sors = `https://image.tmdb.org/t/p/original/`;
        const div = document.createElement("div");
        div.classList = "swiper-slide";
        div.innerHTML = `
            <img src="${sors+banner.backdrop_path}" alt="hero image"/>
            <h1 class="b-name">${banner.original_title}</h1>
        `
        mainSwiper.appendChild(div);
    })
}

nav.addEventListener("submit", (e) => {
    console.log(search.value);
})