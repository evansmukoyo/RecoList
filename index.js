const mediaList = document.getElementById("media-list");
const moviesBtn = document.getElementById("movies-btn");
const gamesBtn = document.getElementById("games-btn");
const getstartedBtn = document.getElementById("get-started-btn");

//sample data - movies
const movies = [
  {
    title: "Inception ",
    description: "A mind-bendingsci-fi thriller. ",
    http: "",
    rating: 8.8
  },

  {
    title: "Interstellar",
    description: "A journey through space and time .",
    http: "",
    rating: 8.5
  },

  {
    title: "Avengers:Endgame",
    description: "A superhero epic thriller thats a sequel with side stories to explain each character and their journy.",
    http: "",
    rating: 8.7
  },

  {
    title: "Enders Game",
    description: "A classic movie about a futuristic sitting it is about a boy who goes space and trains as a space cadet and spacee army but he can somehow hear aliens what will happen check it out. ",
    http: "",
    rating: 8.0
  }
];

//sample data - games 
const games = [
  {
    title: "Shodow fight ",
    http: "",
    rating: 9.0
  },

  {
    title: "Freefire ",
    http: "",
    rating: 9.0
  },

  {
    title: "The Witcher 3",
    http: "",
    rating: 9.0
  },

  {
    title: "God of War ",
    http: "",
    rating: 9.0
  }
];

// Display media list
function displayMedia(media) {
  mediaList.innerHTML = "";
  media.forEach((item) => {
    const mediaElement = document.createElement("div");
    mediaElement.classList.add("media");

    // Use placeholder image since you don't have actual poster URLs
    mediaElement.innerHTML = `
      <img src="https://via.placeholder.com/150x200/333/fff?text=Poster" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>Rating: ${item.rating}/10</p>
      ${item.description ? `<p>${item.description}</p>` : ''}
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
  document.getElementById("recommendations").scrollIntoView({ behavior: "smooth" });
});