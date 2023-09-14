const movieCardId = +new URLSearchParams(window.location.search).get("movieId");
const wrapper = document.querySelector(".wrapper")
const cards = document.querySelector(".cards");
const main = document.querySelector("main");
const mainSwiper = document.querySelector(".swiper-wrapper");
const first = `https://api.themoviedb.org/3/discover/tv`;
const second = `https://api.themoviedb.org/3/discover/movie?&with_genres=28`;
const third = `https://api.themoviedb.org/3/discover/movie?&with_genres=12`;
const furth = `https://api.themoviedb.org/3/discover/movie?&with_genres=35`;
const five = `https://api.themoviedb.org/3/discover/movie?&with_genres=16`;

let arr = [first, second, third, furth, five]
let totalArr = arr[Math.trunc(Math.random() *arr.length)]



console.log(movieCardId);

const options = {
    method: 'GET',
    headers: {
        accept: 'aplication/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDdhMWU1MWU3MTE4ZTgyNGQ2NzMzOWZmZWFjZTI2MiIsInN1YiI6IjY1MDEzNDRjZDdkY2QyMDBlMmZkNTA0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3KHEvS_zj3QyxxIJkm5BvEymyvrLEgOYOph7gJha_o'
    }
};

const muvieID = `https://api.themoviedb.org/3/movie/${movieCardId}`;


// Id si orqali olib chaqirib ichidigi malumotlar chiqarilebdi 

fetch(muvieID, options)
.then(response => response.json())
.then(data => renderCards(data))

function renderCards(data){
    console.log(data);
    let sors = `https://image.tmdb.org/t/p/original/`;
    const div = document.createElement("div");
    div.classList = "div1"
    div.innerHTML= `
        <img src="${sors+data.poster_path}" alt="img" />

        <div class="div2">
            <h1>${data.original_title}</h1>
            <span>Movie ID: ${data.id}</span>
            <p>${data.overview}</p>
            <h2>${data.vote_average}</h2>
            <span> <mark>${data.vote_count } </mark> &nbsp; Vote count  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;</span>
            <span>Released Data: ${data.release_date}</span>
            <p>Original Language: ${data.original_language}</p>
        </div>
        
    `;

    wrapper.appendChild(div);
}




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



for(el in arr){
    const cards2 = document.createElement("div")
    cards2.classList = 'cards2'
    cards2.innerHTML = `
        <h2>All Muvies</h2>
    `;
    main.appendChild(cards2);

fetch(arr[el], options)
.then(response => response.json())
.then(data => renderCards2(data))

function renderCards2(data){
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