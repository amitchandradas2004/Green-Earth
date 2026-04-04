const treesContainer = document.getElementById("treesContainer");
async function loadTrees() {
  const res = await fetch("../jsonFiles/allPlants.json");
  const data = await res.json();
  // console.log(data.plants);
  data.plants.forEach((plant) => {
    // console.log(plant);
    const tressdiv = document.createElement("div");
    tressdiv.innerHTML = `
  <div class="card bg-base-100 shadow-sm h-full">
              <figure>
                <img
                  src="${plant.image}"
                  alt="Image of the ${plant.name}"
                  class="h-40 w-full"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">${plant.name}</h2>
                <p class="line-clamp-2">
                  ${plant.description}
                </p>
                <div class="badge badge-success">Success</div>
                <div class="flex justify-between items-center gap-2">
                  <h2 class="font-bold text-xl text-[#4ade80]">$${plant.price}</h2>
                  <button class="btn rounded-xl bg-[#4ade80]">Buy Now</button>
                </div>
              </div>
            </div>
  `;
    treesContainer.append(tressdiv);
  });
}
loadTrees();
