// Elements
const all = document.getElementById('all');
const filler = document.getElementById('filler');
const canon = document.getElementById('canon');
const fetch = document.getElementById('fetch');
const table = document.getElementById('table');
const dropdown = document.getElementById('drop');
const mangacanon = document.querySelector('.manga');
const mixedcanon = document.querySelector('.mixed');
const fillerclass = document.querySelector('.filler');
const animecanon = document.querySelector('.anime');

const data = {
    'aka': 'akame-ga-kill',
    'another': 'another',
    'ac': 'ansatsu-kyoushitsu-assassination-classroom',
    'aot': 'attack-titan',
    'bb': 'beelzebub',
    'berserk': 'berserk-2016',
    'bc': 'black-clover',
    'bl': 'black-lagoon',
    'bleach': 'bleach',
    'be': 'blue-exorcist',
    'boruto': 'boruto-naruto-next-generations',
    'ce': 'classroom-elite',
    'cg': 'code-geass',
    'dw': 'deadman-wonderland',
    'dn': 'death-note',
    'ds': 'demon-slayer-kimetsu-no-yaiba',
    'dpt': 'devil-part-timer',
    'dc': 'devilman-crybaby',
    'drs': 'dr-stone',
    'dbgt': 'dragon-ball-gt',
    'dbh': 'dragon-ball-heroes',
    'dbs': 'dragon-ball-super',
    'dbz': 'dragon-ball-z',
    'db': 'dragon-ball',
    'el': 'elfen-lied',
    'erased': 'erased',
    'ft': 'fairy-tail',
    'fz': 'fate-zero',
    'fsnu': 'fatestay-night-unlimited-blade-works',
    'fsn': 'fatestay-night',
    'ff': 'fire-force',
    'fb': 'fruits-basket-2019',
    'fmab': 'fullmetal-alchemist-brotherhood',
    'gintama': 'gintama',
    'gs': 'goblin-slayer',
    'ghs': 'god-high-school',
    'gl': 'gurren-lagann',
    'haikyu': 'haikyuu',
    'hdxd': 'high-school-dxd',
    'hsd': 'highschoool-dead',
    'hxh': 'hunter-x-hunter',
    'jba': 'jojos-bizarre-adventure-tv',
    'jk': 'jujutsu-kaisen',
    'kif': 'kabaneri-iron-fortress',
    'klk': 'kill-la-kill',
    'kingdom': 'kingdom',
    'kb': 'kuroko’s-basketball',
    'mp': 'mob-psycho-100',
    'mha': 'my-hero-academia',
    'sds': 'nanatsu-no-taizai',
    'ns': 'naruto-shippuden',
    'n': 'naruto',
    'op': 'one-piece',
    'opm': 'one-punch-man',
    'pm': 'parasyte-maxim',
    'pokemon': 'pokemon',
    'ps': 'prison-school',
    'pn': 'promised-neverland',
    're': 're-zero-starting-life-another-world',
    'sc': 'samurai-champloo',
    'sel': 'serial-experiments-lain',
    'sns': 'shokugeki-no-soma',
    'sd': 'slam-dunk-0',
    'sg': 'steinsgate',
    'saoa': 'sword-art-online-alicization',
    'sao': 'sword-art-online',
    'tr': 'terror-resonance',
    'tgr': 'tokyo-ghoul-re-0',
    'tg': 'tokyo-ghoul',
    'vs': 'vinland-saga'
}

let count = 0;

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
    mangacanon.style.display = 'block';
    mixedcanon.style.display = 'block';
    fillerclass.style.display = 'block';
    animecanon.style.display = 'block';
});

filler.addEventListener('click', function(e) {
    // console.log(e.target);
    removeActive(all);
    removeActive(canon);
    addActive(filler);
    mangacanon.style.display = 'none';
    mixedcanon.style.display = 'block';
    fillerclass.style.display = 'block';
    animecanon.style.display = 'none';
});

canon.addEventListener('click', function(e) {
    // console.log(e.target.parentElement.nextElementSibling);
    removeActive(filler);
    removeActive(all);
    addActive(canon);
    mangacanon.style.display = 'block';
    mixedcanon.style.display = 'block';
    fillerclass.style.display = 'none';
    animecanon.style.display = 'block';
});

// Fetch episodes
fetch.addEventListener('click', loadEpisodes);

function loadEpisodes(e) {
    const xhr = new XMLHttpRequest();

    // xhr.open('GET', `../JSON/${data['aka']}.json`, true);
    if (e.target.parentElement.previousElementSibling.textContent == 'Akame ga Kill! Episode List') {
        xhr.open('GET', `../JSON/${data['aka']}.json`, true);
        count = 24;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Another Episode List') {
        xhr.open('GET', `../JSON/${data['another']}.json`, true);
        count = 13;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Assassination Classroom Episode List') {
        xhr.open('GET', `../JSON/${data['ac']}.json`, true);
        count = 48;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Attack on Titan Episode List') {
        xhr.open('GET', `../JSON/${data['aot']}.json`, true);
        count = 70;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Beelzebub Episode List') {
        xhr.open('GET', `../JSON/${data['bb']}.json`, true);
        count = 60;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Berserk (2016) Episode List') {
        xhr.open('GET', `../JSON/${data['berserk']}.json`, true);
        count = 24;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Black Clover Episode List') {
        xhr.open('GET', `../JSON/${data['bc']}.json`, true);
        count = 163;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Black Lagoon Episode List') {
        xhr.open('GET', `../JSON/${data['bl']}.json`, true);
        count = 29;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Bleach Episode List') {
        xhr.open('GET', `../JSON/${data['bleach']}.json`, true);
        count = 366;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Blue Exorcist Episode List') {
        xhr.open('GET', `../JSON/${data['be']}.json`, true);
        count = 37;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Boruto: Naruto Next Generations Episode List') {
        xhr.open('GET', `../JSON/${data['boruto']}.json`, true);
        count = 188;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Classroom of the Elite Episode List') {
        xhr.open('GET', `../JSON/${data['ce']}.json`, true);
        count = 12;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Code Geass Episode List') {
        xhr.open('GET', `../JSON/${data['cg']}.json`, true);
        count = 55;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Deadman Wonderland Episode List') {
        xhr.open('GET', `../JSON/${data['dw']}.json`, true);
        count = 13;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Death Note Episode List') {
        xhr.open('GET', `../JSON/${data['dn']}.json`, true);
        count = 37;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Demon Slayer: Kimetsu no Yaiba Episode List') {
        xhr.open('GET', `../JSON/${data['ds']}.json`, true);
        count = 26;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'The Devil Is a Part-Timer! Episode List') {
        xhr.open('GET', `../JSON/${data['dpt']}.json`, true);
        count = 13;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Devilman Crybaby Episode List') {
        xhr.open('GET', `../JSON/${data['dc']}.json`, true);
        count = 10;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Dr. Stone Episode List') {
        xhr.open('GET', `../JSON/${data['drs']}.json`, true);
        count = 28;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Dragon Ball GT Episode List') {
        xhr.open('GET', `../JSON/${data['dbgt']}.json`, true);
        count = 65;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Dragon Ball Heroes Episode List') {
        xhr.open('GET', `../JSON/${data['dbh']}.json`, true);
        count = 22;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Dragon Ball Super Episode List') {
        xhr.open('GET', `../JSON/${data['dbs']}.json`, true);
        count = 131;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Dragon Ball Z Episode List') {
        xhr.open('GET', `../JSON/${data['dbz']}.json`, true);
        count = 291;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Dragon Ball Episode List') {
        xhr.open('GET', `../JSON/${data['db']}.json`, true);
        count = 153;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Elfen Lied Episode List') {
        xhr.open('GET', `../JSON/${data['el']}.json`, true);
        count = 13;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Erased Episode List') {
        xhr.open('GET', `../JSON/${data['erased']}.json`, true);
        count = 12;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Fairy Tail Episode List') {
        xhr.open('GET', `../JSON/${data['ft']}.json`, true);
        count = 328;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Fate/Zero Episode List') {
        xhr.open('GET', `../JSON/${data['fz']}.json`, true);
        count = 25;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Fate/stay night [Unlimited Blade Works] Episode List') {
        xhr.open('GET', `../JSON/${data['fsnu']}.json`, true);
        count = 26;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Fate/stay night Episode List') {
        xhr.open('GET', `../JSON/${data['fsn']}.json`, true);
        count = 24;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Fruits Basket (2019) Episode List') {
        xhr.open('GET', `../JSON/${data['fb']}.json`, true);
        count = 45;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Fire Force Episode List') {
        xhr.open('GET', `../JSON/${data['ff']}.json`, true);
        count = 48;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Fullmetal Alchemist: Brotherhood Episode List') {
        xhr.open('GET', `../JSON/${data['fmab']}.json`, true);
        count = 64;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Gintama Episode List') {
        xhr.open('GET', `../JSON/${data['gintama']}.json`, true);
        count = 369;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Goblin Slayer Episode List') {
        xhr.open('GET', `../JSON/${data['gs']}.json`, true);
        count = 12;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'The God of High School Episode List') {
        xhr.open('GET', `../JSON/${data['ghs']}.json`, true);
        count = 13;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Gurren Lagann Episode List') {
        xhr.open('GET', `../JSON/${data['gl']}.json`, true);
        count = 27;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Haikyu!! Episode List') {
        xhr.open('GET', `../JSON/${data['haikyu']}.json`, true);
        count = 85;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Highschool DxD Episode List') {
        xhr.open('GET', `../JSON/${data['hdxd']}.json`, true);
        count = 48;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Highschool of the Dead Episode List') {
        xhr.open('GET', `../JSON/${data['hsd']}.json`, true);
        count = 13;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Hunter × Hunter (2011) Episode List') {
        xhr.open('GET', `../JSON/${data['hxh']}.json`, true);
        count = 148;
    } else if (e.target.parentElement.previousElementSibling.textContent == "JoJo's Bizarre Adventure Episode List") {
        xhr.open('GET', `../JSON/${data['jba']}.json`, true);
        count = 152;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Jujutsu Kaisen Episode List') {
        xhr.open('GET', `../JSON/${data['jk']}.json`, true);
        count = 17;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Kabaneri of the Iron Fortress Episode List') {
        xhr.open('GET', `../JSON/${data['kif']}.json`, true);
        count = 13;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Kill la Kill Episode List') {
        xhr.open('GET', `../JSON/${data['klk']}.json`, true);
        count = 24;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Kingdom Episode List') {
        xhr.open('GET', `../JSON/${data['kingdom']}.json`, true);
        count = 18;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Kuroko’s Basketball Episode List') {
        xhr.open('GET', `../JSON/${data['kb']}.json`, true);
        count = 75;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Mob Psycho 100 Episode List') {
        xhr.open('GET', `../JSON/${data['mp']}.json`, true);
        count = 25;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'My Hero Academia Episode List') {
        xhr.open('GET', `../JSON/${data['mha']}.json`, true);
        count = 88;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'The Seven Deadly Sins Episode List') {
        xhr.open('GET', `../JSON/${data['sds']}.json`, true);
        count = 78;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Naruto Shippuden Episode List') {
        xhr.open('GET', `../JSON/${data['ns']}.json`, true);
        count = 500;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Naruto Episode List') {
        xhr.open('GET', `../JSON/${data['n']}.json`, true);
        count = 220;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'One Piece Episode List') {
        xhr.open('GET', `../JSON/${data['op']}.json`, true);
        count = 964;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'One-Punch Man Episode List') {
        xhr.open('GET', `../JSON/${data['opm']}.json`, true);
        count = 24;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Parasyte -the Maxim Episode List') {
        xhr.open('GET', `../JSON/${data['pm']}.json`, true);
        count = 24;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Pokémon Episode List') {
        xhr.open('GET', `../JSON/${data['pokemon']}.json`, true);
        count = 1081;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Prison School Episode List') {
        xhr.open('GET', `../JSON/${data['ps']}.json`, true);
        count = 13;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'The Promised Neverland Episode List') {
        xhr.open('GET', `../JSON/${data['pn']}.json`, true);
        count = 16;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Re:ZERO -Starting Life in Another World Episode List') {
        xhr.open('GET', `../JSON/${data['re']}.json`, true);
        count = 38;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Samurai Champloo Episode List') {
        xhr.open('GET', `../JSON/${data['sc']}.json`, true);
        count = 26;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Serial Experiments Lain Episode List') {
        xhr.open('GET', `../JSON/${data['sel']}.json`, true);
        count = 13;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Food Wars! Episode List') {
        xhr.open('GET', `../JSON/${data['sns']}.json`, true);
        count = 24;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Slam Dunk Episode List') {
        xhr.open('GET', `../JSON/${data['sd']}.json`, true);
        count = 101;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Steins;Gate Episode List') {
        xhr.open('GET', `../JSON/${data['sg']}.json`, true);
        count = 26;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Sword Art Online: Alicization Episode List') {
        xhr.open('GET', `../JSON/${data['saoa']}.json`, true);
        count = 47;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Sword Art Online Episode List') {
        xhr.open('GET', `../JSON/${data['sao']}.json`, true);
        count = 50;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Terror in Resonance Episode List') {
        xhr.open('GET', `../JSON/${data['tr']}.json`, true);
        count = 11;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Tokyo Ghoul:re Episode List') {
        xhr.open('GET', `../JSON/${data['tgr']}.json`, true);
        count = 24;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Tokyo Ghoul Episode List') {
        xhr.open('GET', `../JSON/${data['tg']}.json`, true);
        count = 24;
    } else if (e.target.parentElement.previousElementSibling.textContent == 'Vinland Saga Episode List') {
        xhr.open('GET', `../JSON/${data['vs']}.json`, true);
        count = 24;
    }

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
                    <td class="epiname">${episodes[i].title}</td>
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

    for (let i = 1; i <= count; i++) {
        output += `
        <option class="opt" value="#number${i}">${i}</option>     
        `;
    }

    dropdown.innerHTML = output;

    dropdown.disabled = false;

    xhr.send();

    // console.log(e.target.parentElement.previousElementSibling.textContent);
};