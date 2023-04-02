let data = [
    {nom : "BADE", age: 20},
    {nom : "shaloba", age: 30},
    {nom : "toto", age: 12},
    {nom : "tarta", age: 1},
    {nom : "pélouse", age: 56},
    {nom : "marmo", age: 13},
    {nom : "kinoa", age: 100},
    {nom : "BAchienDE", age: 99},
    {nom : "CR7", age: 33},
    {nom : "gky", age: 25},
    {nom : "solomouani", age: 207},
]

let bool = true

/**
* permet de remplir un tableau avec des données 
*/
function remplissage(params) {
    params.forEach(element => {
        let tr = document.createElement("tr")
        let nom = document.createElement("td")
        nom.textContent = element.nom
        let age = document.createElement("td")
        age.textContent = element.age
        tr.appendChild(nom)
        tr.appendChild(age)
        document.getElementById('corps').appendChild(tr)
    })
}


/**
* permet de trier le tableau par nom 
*/
function sortByName() {
    document.getElementById('corps').innerHTML = ""
    /**
     * fonction de trie par nom
    */
    if(bool === true){
        data.sort((a, b) => {
            if (a.nom.toUpperCase() < b.nom.toUpperCase()) {
                return -1
            }
            if (a.nom.toUpperCase() > b.nom.toUpperCase()) {
                return 1
            }
            return 0
        })
        bool = false
    }else{
        data.sort((a, b) => {
            if (a.nom.toUpperCase() < b.nom.toUpperCase()) {
                return 1
            }
            if (a.nom.toUpperCase() > b.nom.toUpperCase()) {
                return -1
            }
            return 0
        })
        bool = true;
    }
    remplissage(data)
}


/**
* permet de trier le tableau par Age 
*/
function sortByAge() {
    /**
     * fonction de trie par age 
    */
    document.getElementById('corps').innerHTML = ""
    document.getElementById('byage').classList.toggle("active")
    if(document.getElementById('byage').classList.contains("active")){
        data.sort((a, b) => {
            return b.age - a.age
        })
    }else{
        data.sort((a, b) => {
            return a.age - b.age
        })
    }
    
    remplissage(data)
}


remplissage(data)

/**
* document.getElementById("byname") --> est une icone qui permet de faire le trie par nom
* document.getElementById("byage") --> est une autre icone pour faire le trie par age 
*/

document.getElementById("byname").addEventListener("click", sortByName)
document.getElementById("byage").addEventListener("click", sortByAge)
