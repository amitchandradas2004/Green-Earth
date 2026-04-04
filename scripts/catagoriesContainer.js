const catagoriesContainer = document.getElementById("catagoriesContainer");
async function loadCatagories() {
  const res = await fetch("../jsonFiles/category.json");
  const data = await res.json();
  // console.log(data);
  data.categories.forEach((catagory) => {
    // console.log(catagory);
    const btn = document.createElement("button");
    btn.innerText = catagory.category_name;
    btn.className = "btn btn-outline w-full";
    catagoriesContainer.append(btn);
  });
}
loadCatagories();
