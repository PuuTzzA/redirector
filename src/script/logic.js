const idToLink = {
    1: { name: "Mittermair Friedrich", url: "none yet" },
    2: { name: "Ghergu Leitner Daniela Elena", url: "none yet" },
    3: { name: "Gruber Markus", url: "none yet" },
    4: { name: "Gruber Stefan", url: "none yet" },
    5: { name: "Innerhofer Putzer Helene", url: "none yet" },
    6: { name: "Jesacher Christian", url: "none yet" },
    7: { name: "Jesacher Hannes", url: "none yet" },
    8: { name: "Jesacher Kurt Albert", url: "none yet" },
    9: { name: "Lercher Claudia", url: "none yet" },
    10: { name: "Lercher Thomas", url: "none yet" },
    11: { name: "Oberkofler Weidacher Monika", url: "none yet" },
    12: { name: "Sinner Meinhard", url: "none yet" },
    13: { name: "Steiner Erwin Jakob", url: "none yet" },
    14: { name: "Steiner Florian", url: "none yet" },
    15: { name: "Taschler Jasmin", url: "none yet" },
    16: { name: "Trenker Andreas", url: "https://www.youtube.com/watch?v=lPanYsTskOk" },
    17: { name: "Trenker Johannes", url: "none yet" },
    18: { name: "Weidacher Dolores", url: "none yet" }
}

let params = new URLSearchParams(document.location.search);

for (const [key, value] of params) {
    console.log(`key = ${key}, value = ${value}`)

    if (key == "id" && value in idToLink) {
        const item = idToLink[value];
        console.log(`${item.name}\nredirecting to ${item.url}`);

        document.getElementById("debug").innerHTML = item.name;
        window.location.replace(item.url);
    }
}