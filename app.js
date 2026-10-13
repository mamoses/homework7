const wrapper = document.querySelector('#wrapper');

const list = [

    {

        name: "Charmander",

        category: "fire",

        maxHp: 100,

        moves: ["Scratch", "Ember", "Flamethrower"]

    },

    {

        name: "Squirtle",

        category: "water",

        maxHp: 110,

        moves: ["Tackle", "Water Gun", "Bite"]

    },

    {

        name: "Pikachu",

        category: "electric",

        maxHp: 95,

        moves: ["Quick Attack", "Thunder Shock", "Thunderbolt"]

    },
    {

        name: "Blaziken",

        category: "fire",

        maxHp: 270,

        moves: ["SwordDance", "Fireblitz", "Stoneedge"]

    },


];


function renderItems(){
    wrapper.innerHTML = '';
    list.forEach((item, idx) => {
        const ele = document.createElement("div");
        const header = document.createElement("h1");
        const category = document.createElement("h3");
        const deleteEle = document.createElement("button");
        deleteEle.addEventListener("click", () => {
            list.splice(idx,1);
            renderItems();
        })
        deleteEle.innerHTML = "X";
        ele.style.color = "blue"
        category.style.color = "red"
        header.innerHTML = item.name;
        category.innerHTML = item.category;
        ele.appendChild(header);
        ele.appendChild(category);
        ele.appendChild(deleteEle);
        wrapper.appendChild(ele);
    })
}

renderItems();


document.getElementById("submit").addEventListener("click", () => {
    const obj ={
        name:document.getElementById("name").value
    }
    list.push(obj)
    renderItems();
})






