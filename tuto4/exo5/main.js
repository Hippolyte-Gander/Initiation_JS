
function generateListItems (liste) { // accéder à la liste des quotes
    let items = "";
    for (let i = 0; i < liste.length; i++) {
        items += `<li class = "contentCitation">"${liste[i].content}" <br> <i class="fa-regular fa-heart"></i> <div class = "authorCitation">${liste[i].author} </div> </li>`;
    }
    return items;
}
// mettre à jour le statut du coeur dans le stockage local
function updateHeartStatus(li) {
    const key = li.textContent.trim();
    localStorage.setItem(key, li.classList.contains("baliseIClicked") ? "clicked" : "unclicked");
}
// charger le statut du coeur depuis le stockage local
function loadHeartStatus(li) {
    const key = li.textContent.trim();
    const status = localStorage.getItem(key);
    if (status === "clicked") {
        li.classList.remove("baliseI");
        li.classList.add("baliseIClicked");
        li.innerHTML = li.innerHTML.replace(`<i class="fa-regular fa-heart"></i>`,`<i class="fa-solid fa-heart"></i>`);
    } else if (status === "unclicked") {
        li.classList.remove("baliseIClicked");
        li.classList.add("baliseI");
    }
}
// générer la liste de "quotes" dans une ul du main
document.querySelector(".main").innerHTML = `
<ul>
${generateListItems(quotes)}
</ul>
`;

const liList = document.querySelectorAll(".contentCitation");

liList.forEach(li => {
    loadHeartStatus(li);
    li.classList.add("baliseI");
    li.addEventListener("click", () => {
        if (li.classList.contains("baliseI")) {
            // remplacer coeur vide par coeur plein + changer sa classe CSS
            li.classList.remove("baliseI");
            li.classList.add("baliseIClicked");
            li.innerHTML = li.innerHTML.replace(`<i class="fa-regular fa-heart"></i>`,`<i class="fa-solid fa-heart"></i>`);
        } else if (li.classList.contains("baliseIClicked")) {
            // remplacer coeur plein par coeur vide + changer sa classe CSS
            li.classList.remove("baliseIClicked");
            li.classList.add("baliseI");
            li.innerHTML = li.innerHTML.replace(`<i class="fa-solid fa-heart"></i>`,`<i class="fa-regular fa-heart"></i>`);
        } else {
            console.log("Erreur");
        }
        updateHeartStatus(li);
    });
});








