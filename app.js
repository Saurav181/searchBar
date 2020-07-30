const charactersList = document.getElementById('charactersList');
let hpCharacters = [];

onsubmit = (event) => {
    event.preventDefault()
    fetch("https://the-cocktail-db.p.rapidapi.com/list.php?a=list", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "b0fd893eb7msh2a3a5445b6e278cp19e907jsne4ff857b4414"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
}
const displayCharacters = (characters) => {
    const htmlString = characters
    return Data.map(({ strDrink, strDrinkThumb, idDrink }) => (
        <DrinkDisplay key={idDrink} src={strDrinkThumb} title={strDrink} />
    ));
}

charactersList.innerHTML = htmlString;
};

loadCharacters();