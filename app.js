// Elements
const all = document.getElementById('all');
const filler = document.getElementById('filler');
const canon = document.getElementById('canon');
const fetch = document.getElementById('fetch');
const table = document.getElementById('table');
const dropdown = document.getElementById('drop');

// Function to add active class to buttons
const addActive = function(input) {
    input.classList.add('active');
}

// Function to remove active class from buttons
const removeActive = function(input) {
    input.classList.remove('active');
}

// Event listener for the buttons

all.addEventListener('click', function(e) {
    // console.log(e.target.parentElement.nextElementSibling);
    removeActive(filler);
    removeActive(canon);
    addActive(all);
    e.target.parentElement.nextElementSibling.style.display = 'block';
    e.target.parentElement.nextElementSibling.nextElementSibling.style.display = 'block';
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
});

filler.addEventListener('click', function(e) {
    // console.log(e.target);
    removeActive(all);
    removeActive(canon);
    addActive(filler);
    e.target.parentElement.nextElementSibling.style.display = 'none';
    e.target.parentElement.nextElementSibling.nextElementSibling.style.display = 'block';
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
});

canon.addEventListener('click', function(e) {
    // console.log(e.target.parentElement.nextElementSibling);
    removeActive(filler);
    removeActive(all);
    addActive(canon);
    e.target.parentElement.nextElementSibling.style.display = 'block';
    e.target.parentElement.nextElementSibling.nextElementSibling.style.display = 'block';
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
});

// Fetch episodes
fetch.addEventListener('click', loadEpisodes);

function loadEpisodes(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'jsons/onepiece.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            // console.log(this.responseText);
            const episodes = JSON.parse(this.responseText);
            let output = `<tr id="head">
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th id="airdate">Airdate</th>
        </tr>`;

            for (let i = 0; i < episodes.length; i++) {
                output += `
              <tr>
                    <td id="number${episodes[i].id}">${episodes[i].id}</td>
                    <td>${episodes[i].title}</td>
                    <td>
                        <div class="${episodes[i].class}">${episodes[i].type}</div>
                    </td>
                    <td>${episodes[i].date}</td>
              </tr>      
              `;
            }

            table.innerHTML = output;
        }
    }

    let output = ``;

    for (let i = 1; i < 962; i++) {
        output += `
        <option class="opt" value="#number${i}">${i}</option>     
        `;
    }

    dropdown.innerHTML = output;

    dropdown.disabled = false;

    xhr.send();
};