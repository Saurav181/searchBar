const charactersList = document.getElementById('charactersList');
let hpCharacters = [];

onsubmit = (event) => {
    event.preventDefault()
    fetch("", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "",
            "x-rapidapi-key": ""
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
