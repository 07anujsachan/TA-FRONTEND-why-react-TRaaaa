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

// function elm(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (const key in attr) {
//     if (key.startsWith("data-")) {
//       element.setAttribute(key, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child === "object") {
//       element.append(child);
//     }
//     if (typeof child === "string") {
//       let text = document.createTextNode(child);
//       element.append(text);
//     }
//   });
//   return element;
// }

function createMovieUI(data = allMovies) {
  //   root.innerHTML = "";
  let movieUi = data.map((movie, i) => {
    let li = React.createElement(
      "li",
      {},
      React.createElement("label", { for: i }, movie.name),
      React.createElement(
        "button",
        {
          id: i,
          onClick: handleChange,
        },
        movie.watched ? "watched" : " To watch"
      ),
      React.createElement("hr")
    );

    return li;

  });
  ReactDOM.render(movieUi, rootElm);
}
