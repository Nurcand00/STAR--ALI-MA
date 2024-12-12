let characters = [
    {
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
    },
    {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
    },
    {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
    },
    {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
    },
    {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
    },
    {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
    },
    {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
    },
    {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
    },
    {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
    },
    {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
    },
    {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
    },
    {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
    },
    {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "homeworld": "corellia"
    },
    {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
    },
    {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
    },
    {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
    }
]



let charactersVisible = false;     //burada karakterler gizli 

const characterRow = document.getElementById("characterRow");
const toggleButton = document.getElementById("toggleBtn");
const filterContainer = document.getElementById("filterContainer");

function toggleRender() {                                          //   charactersVisible === true ise
    if (charactersVisible) {
        characterRow.innerHTML = "";                              //   burası ile kartlar temizleniyor
        toggleButton.textContent = "Karakterleri Göster";         //   karakterler gösteriliyor butonu aktif hale geliyor
        toggleButton.classList.remove("btn-hide");
        toggleButton.classList.add("btn-show");
        charactersVisible = false;                                //   ile artık kartların gizli olduğu belirtiliyor. Güncelleme
    } else {
        characters.forEach((character) => {
            const card = `
            <div class= "col-lg-4 col-sm-6 mb-5">
            <div class="card bg-black fw-bold  border-light  rounded-5 " style="width:18rem; ">
              <img src="${character.pic}" class="card-img-top"  alt="..." style="height: 350px;">
              <div class="card-body">
                <p class="card-text ">${character.name}</p>
                <p class="card-text">${character.homeworld ?? "other"}</p>
              </div>
            </div>
            </div>
          `;
            characterRow.innerHTML += card;
        })

        toggleButton.textContent = " Karakterleri Gizle";
        toggleButton.classList.remove("btn-show");
        toggleButton.classList.add("btn-hide");
        charactersVisible = true;
    }
}


// Homeworlds dizisi oluşturma
const characterSet = (characters) => {
    const homeworldsRaw = characters.map((character) => character.homeworld ?? "other");
    const homeworldsUnique = [...new Set(homeworldsRaw)];
    return homeworldsLowercase = homeworldsUnique.map((homeworld) => homeworld.toLowerCase());

    const homeworlds = homeworldsLowercase;
};
// Yukarıdaki işlemin kısayolu
//const homeworlds = [...new Set(characters.map((character) => (character.homeworld ?? "other").toLowerCase()))];


// Burada yukarıda filtrelediğimiz homworldslere göre  radyo inputlarnı olusturma işlemi yaptık
const renderFilters = (homeworlds) => {                                //fc'nin innerhtmlsine git ve doldur, içine atacağımız homew. maple
    filterContainer.innerHTML = homeworlds.map((homeworld) => `              
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="homeworldFilter" id="${homeworld}" value="${homeworld}">
        <label class="form-check-label" for="${homeworld}"> ${homeworld} </label>
      </div>
    `
    ).join("");

};


const characterSetData = characterSet(characters)
renderFilters(characterSetData);


let filteredHomeworld = null;

//Hangi radio'nun seçildiğini filteredHomeworld değişkenine kaydediyoruz.Seçilen homeworld'e göre karakterleri filtrelemek için kullanılır.
document.getElementById("filterContainer").addEventListener("change", (event) => {
    if (event.target.name === "homeworldFilter") {      // O elementin 'name' özelliğini alır
        filteredHomeworld = event.target.value;       // O elementin 'value' özelliğini alır
       
    }

});

// Seçilen filteredHomeworld değerine göre karakterleri filtreleyeceğiz.
const renderFilteredCharacters = () => {
    const filteredCharacters = characters.filter((character) =>
      (character.homeworld ?? "other").toLowerCase() === filteredHomeworld
    );
  
    const cards = filteredCharacters.map((character) => `
        <div class="col-lg-4 col-sm-6 mb-5">
          <div class="card bg-black fw-bold  border-light  rounded-5" style="width:18rem;">
            <img src="${character.pic}" class="card-img-top"alt="..." style="height: 350px;">
            <div class="card-body">
              <p class="card-text">${character.name}</p>
              <p class="card-text">Homeworld: ${character.homeworld ?? "Other"}</p>
            </div>
          </div>
        </div>
      `).join("");
  
    characterRow.innerHTML = cards;
  };

    filterContainer.addEventListener("change", () => {
    renderFilteredCharacters();
  });