
function generateListItems (liste) {
    let items = "";
    for (let i = 0; i < liste.length; i++) {
        items += `<li class = "contentCitation">"${liste[i].content}" <br> <i class="fa-regular fa-heart"></i> <div class = "authorCitation">${liste[i].author} </div> </li>`;
    }
    return items;
}

function replaceEmptyHeart() {
    replace(`<i class="fa-regular fa-heart"></i>`,`<i class="fa-solid fa-heart"></i>`);
}
function replaceFullHeart() {
    replace(`<i class="fa-solid fa-heart"></i>`,`<i class="fa-regular fa-heart"></i>`);
}

const liList = document.querySelectorAll("li");

liList.forEach(li => {
    li.classList.add("baliseI");

    li.addEventListener("click", () => {
        console.log("Click sur li détecté.");
        if (li.classList.contains("baliseI")) {
            li.classList.remove("baliseI");
            li.classList.add("baliseIClicked");
            console.log("maintenant classe baliseIClicked");
        } else if (li.classList.contains("baliseIClicked")) {
            li.classList.remove("baliseIClicked");
            li.classList.add("baliseI");
            console.log("maintenant classe baliseI");
        } else {
            console.log("Erreur");
        }
    });
});









document.querySelector(".main").innerHTML = `
<ul>
${generateListItems(quotes)}
</ul>
`;