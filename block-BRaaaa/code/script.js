let input = document.querySelector(`input[type = "text"]`);
let rootElm = document.querySelector(".movies-list");

let allMovies = [
  {
    name: " Forest Gump",
    watched: false,
  },
  {
    name: " Catch Me If You Can ",
    watched: false,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovieUI(allMovies, rootElm);
  }
});
function handleChange(event) {
  let id = event.target.id;

  allMovies[id].watched = !allMovies[id.watched];
  createMovieUI(allMovies, rootElm);
}

function createMovieUI(data, root) {
  root.innerHTML = "";
  data.forEach((movie, i) => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.id = i;
    button.innerText = movie.watched ? "watched" : " To watch";
    button.addEventListener("click", handleChange);
    let hr = document.createElement("hr");
    let label = document.createElement("label");
    label.for = i;
    label.innerText = movie.name;
    li.append(label, button);
    root.append(li, hr);
  });
}

createMovieUI(allMovies, rootElm);
