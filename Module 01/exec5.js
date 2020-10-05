// Exercicio 5
var users = [
    {
        name: "Diego",
        hability: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Gabriel",
        hability: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function writeSentence(arr) {

    let count = 0;
    for (data of arr) {

        console.log("The " + data.name + " has hability: " + data.hability.join(', '))
        if (users[count].hability.includes("Javascript", 0))
            console.log("Found in: " + data.name)
        else
            console.log("Hi, " + data.name + ", you do not have the required hability!")
        count++;
    }

}

writeSentence(users)
// FIM Exercicio 5