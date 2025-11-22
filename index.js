
const mediaList = document.getElementById("media-list");
const moviesBtn = document.getElementById("movies-btn");
const gamesBtn = document.getElementById("games-btn");
const getstartedBtn = document.getElementById("get-started-btn");
const aboutusBtn = document.getElementById("aboutus-btn");

// Sample data - movies (new JPG images)
const movies = [
  {
    title: "Inception",
    description: "A mind-bending sci-fi thriller.",
    http: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
    rating: 8.8
  },
  {
    title: "Interstellar",
    description: "A journey through space and time.",
    http: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    rating: 8.5
  },
  {
    title: "Avengers: Endgame",
    description: "A superhero epic thriller.",
    http: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    rating: 8.7
  },
  {
    title: "Ender's Game",
    description: "A futuristic space adventure.",
    http: "https://upload.wikimedia.org/wikipedia/en/8/8c/Ender%27s_Game_poster.jpg",
    rating: 8.0
  }
];

// Sample data - games (new JPG images)
const games = [
  {
    title: "Shadow Fight",
    http: "https://upload.wikimedia.org/wikipedia/en/1/19/Shadow_Fight_3_cover.jpg",
    rating: 9.0
  },
  {
    title: "Free Fire",
    http: "https://upload.wikimedia.org/wikipedia/en/1/12/Garena_Free_Fire.png",
    rating: 9.0
  },
  {
    title: "The Witcher 3",
    http: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    rating: 9.0
  },
  {
    title: "God of War",
    http: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    rating: 9.0
  }
];

// Initial display - show movies first
displayMedia(movies);

// Display media list
function displayMedia(media) {
  mediaList.innerHTML = "";
  media.forEach((item) => {
    const mediaElement = document.createElement("div");
    mediaElement.classList.add("media");

    mediaElement.innerHTML = `
      <img src="${item.http}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>Rating: ${item.rating}/10</p>
      ${item.description ? `<p>${item.description}</p>` : ""}
    `;

    mediaList.appendChild(mediaElement);
  });
}

// Button click events
moviesBtn.addEventListener("click", () => {
  displayMedia(movies);
  moviesBtn.classList.add("active");
  gamesBtn.classList.remove("active");
});

gamesBtn.addEventListener("click", () => {
  displayMedia(games);
  gamesBtn.classList.add("active");
  moviesBtn.classList.remove("active");
});

getstartedBtn.addEventListener("click", () => {
  document.getElementById("recommendations").scrollIntoView({
    behavior: "smooth"
  });
});

aboutusBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});