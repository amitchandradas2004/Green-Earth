const catagoriesContainer = document.getElementById("catagoriesContainer"); // the parent div is got here from the index.html file so that we can contain the buttons here from the api.
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
loadCatagories(); //the function is called here
