const catagoriesContainer = document.getElementById("catagoriesContainer"); // the parent div is got here from the index.html file so that we can contain the buttons here from the api.
const treesContainer = document.getElementById("treesContainer");
const loadingSpinner = document.getElementById("loading-spinner");

async function loadCatagories() {
  //the function starts from here
  // Async and await
  const res = await fetch(
    // api fetch from the url.
    "https://openapi.programming-hero.com/api/categories",
  );
  const data = await res.json(); // async - await is applied here
  // console.log(data);
  // console.log(catagoriesContainer);
  data.categories.forEach((category) => {
    //forEach loop is applied here to get element from the api
    // console.log(category);
    const btn = document.createElement("button"); //btn is created here to put out trees btn from api
    btn.className = "btn btn-outline w-full"; //btn classname is added here to style the buttons
    btn.innerText = category.category_name; //btn innerText has been set here from apu
    catagoriesContainer.appendChild(btn); //btn is sent to the  parent named catagoriesContainer
  });
}
async function loadTress() {
  showLoading();
  const res = await fetch("https://openapi.programming-hero.com/api/plants");
  const data = await res.json();
  hideLoading();
  // console.log(data);
  displayTrees(data.plants);
}
function displayTrees(trees) {
  console.log(trees);
  trees.forEach((tree) => {
    console.log(tree);
    const card = document.createElement("div");
    card.className = "card bg-white shadow-sm";
    card.innerHTML = `<figure>
                <img
                  src="${tree.image}"
                  alt="${tree.name}"
                  title="${tree.name}"
                  class = "h-48 w-full object-cover"
                />
                     </figure>
              <div class="card-body">
                <h2 class="card-title">${tree.name}</h2>
                <p class="line-clamp-2">
                  ${tree.description}
                </p>
                <div class="badge badge-success">${tree.category}</div>
                <div class="flex justify-between items-center gap-2">
                  <h2 class="font-bold text-2xl text-[#4ade80]">${tree.price}</h2>
                  <button class="btn rounded-xl bg-[#4ade80]">Buy Now</button>
                </div>
              </div>
            `;
    treesContainer.appendChild(card);
  });
}
loadCatagories(); //the function is called here
loadTress();
