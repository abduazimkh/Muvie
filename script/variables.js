const cards = document.querySelector(".cards");
const main = document.querySelector("main");
const mainSwiper = document.querySelector(".swiper-wrapper");
const search = document.querySelector(".search")
const nav = document.querySelector("nav")


const api = `https://api.themoviedb.org/3/movie/top_rated?&with_networks=213`;
const first = `https://api.themoviedb.org/3/discover/tv`;
const second = `https://api.themoviedb.org/3/discover/movie?&with_genres=28`;
const third = `https://api.themoviedb.org/3/discover/movie?&with_genres=12`;
const furth = `https://api.themoviedb.org/3/discover/movie?&with_genres=35`;
const five = `https://api.themoviedb.org/3/discover/movie?&with_genres=16`;
