const accesskey = "BLsgP9pZtwMbdo_6_P7SVThlBFTHb_tuBDABcqIlz3w";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchReaslts = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button")

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputE1.value;
    const url = `http://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchReaslts.innerHTML = "";
    }


    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchReaslts.appendChild(imageWrapper);


    });

    page++;
    if (page > 1) {
        showMore.style.display = 'block';
    }
}
formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
// const link = document.querySelector('a');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        // link.style.color = 'white';
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});


