const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");

// AJAX request
fetch(BREEDS_URL)
  .then((response) => response.json())
  .then((data) => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("OPTION");
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];

      select.appendChild(option);
    }
  });

select.addEventListener("change", function (e) {
  const byBreedUrl = `https://dog.ceo/api/breed/${e.target.value}/images/random`;

  getDoggo(byBreedUrl);
});

const dogImg = document.querySelector(".dog-img");
const spinner = document.querySelector(".spinner");

function getDoggo(url) {
  spinner.classList.add("show");
  dogImg.classList.remove("show");
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      dogImg.src = data.message;
    });
}

dogImg.addEventListener("load", function () {
  spinner.classList.remove("show");
  dogImg.classList.add("show");
});
