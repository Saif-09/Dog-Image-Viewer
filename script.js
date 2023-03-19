// Retrieve list of breeds from API
fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
    // Populate dropdown menu with list of breeds
    const breeds = Object.keys(data.message);
    const dropdown = document.getElementById("breed-dropdown");
    breeds.forEach(breed => {
      const option = document.createElement("option");
      option.value = breed;
      option.text = breed;
      dropdown.add(option);
    });
  });

// Handle "Get Image" button click
document.getElementById("get-image-button").addEventListener("click", () => {
  const selectedBreed = document.getElementById("breed-dropdown").value;
  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
    .then(response => response.json())
    .then(data => {
      // Display image on web page
      const image = document.getElementById("dog-image");
      image.src = data.message;
      image.alt = selectedBreed;
    });
});

// Handle "Next" button click
document.getElementById("next-button").addEventListener("click", () => {
  const selectedBreed = document.getElementById("breed-dropdown").value;
  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
    .then(response => response.json())
    .then(data => {
      // Display new image on web page
      const image = document.getElementById("dog-image");
      image.src = data.message;
      image.alt = selectedBreed;
    });
});
