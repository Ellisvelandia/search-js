const searchIcon = document.getElementById("search--icon")
const query = document.getElementById("query")
const searchBtn = document.getElementById("search--btn")
const doodleBtn = document.getElementById("doodle--btn")


function searchs() {
  let url = 'https://www.google.com/search?q=' + query.value;
  window.open(url, "_self");
}

function lucky() {
  let doodle = "https://www.google.com/doodles"
  window.open(doodle, "_self");
}

searchBtn.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    searchs()
  }
})

searchIcon.addEventListener("click", searchs)
searchBtn.addEventListener("click", searchs)
doodleBtn.addEventListener("click", lucky)