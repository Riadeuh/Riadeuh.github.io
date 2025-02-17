const movies = [
    {
        title: "Inception",
        image: "images/inception.jpg",
        description: "A thief who enters the dreams of others to steal secrets."
    },
    {
        title: "Interstellar",
        image: "images/interstellar.jpg",
        description: "A team of explorers travel through a wormhole in space."
    },
    {
        title: "Avengers: Endgame",
        image: "images/endgame.jpg",
        description: "The Avengers assemble to defeat Thanos."
    }
];

const movieContainer = document.getElementById("movie-container");
const movieSearch = document.getElementById("movie-search")



movies.forEach((movie, index) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `<img src="${movie.image}">
                              <p class="movie-title">${movie.title}</p>`;

    movieContainer.appendChild(movieElement);
});

const searchButton = document.querySelector("button"); 

searchButton.addEventListener("click", () => {
    const searchQuery = movieSearch.value.toLowerCase();
    console.log("Recherche:", searchQuery);
    
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery)
    );

    movieContainer.innerHTML = "";

    filteredMovies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `<img src="${movie.image}">
                                  <p class="movie-title">${movie.title}</p>`;
        movieContainer.appendChild(movieElement);
    });
});
