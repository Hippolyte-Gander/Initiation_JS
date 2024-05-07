let quotes = [
    {
        "id" : 1,
        "author": "Rocky Balboa",
        "title": "Rocky Balboa",
        "content": "Ce qui compte, ce n'est pas la force de tes coups, ce qui compte, c'est le nombre de coups que tu peux encaisser tout en continuant d'avancer."
    },
    {
        "id" : 2,
        "author": "Tyrion Lannister",
        "title": "Game of Thrones",
        "content": "N'oublie jamais qui tu es, car le monde ne l'oubliera pas."
    },
    {
        "id" : 3,
        "author": "Maître Yoda",
        "title": "Star Wars",
        "content": "La peur mène à  la colère, la colère mène à la haine, et la haine mène à  la souffrance."
    }
];

function generateListItems (liste) {
    let items = "";
    for (let i = 0; i < liste.length; i++) {
        items += `<li>${liste[i]}</li>`;
        const citations = quotes.map((citation => {
            return citation.content;
        }
        ))
    }
    return items;
}

document.querySelector(".main").innerHTML = `
<ul>
${generateListItems(quotes)}
</ul>
`;


// module.exports = quotes;