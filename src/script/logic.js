const nameToLink = {
    "Mittermair": { name: "Mittermair Friedrich", url: "none yet" },
    "Ghergu": { name: "Ghergu Leitner Daniela Elena", url: "none yet" },
    "GruberM": { name: "Gruber Markus", url: "none yet" },
    "GruberS": { name: "Gruber Stefan", url: "none yet" },
    "Innerhofer": { name: "Innerhofer Putzer Helene", url: "none yet" },
    "JesacherC": { name: "Jesacher Christian", url: "none yet" },
    "JesacherH": { name: "Jesacher Hannes", url: "none yet" },
    "JesacherK": { name: "Jesacher Kurt Albert", url: "none yet" },
    "LercherC": { name: "Lercher Claudia", url: "none yet" },
    "LercherT": { name: "Lercher Thomas", url: "none yet" },
    "Oberkofler": { name: "Oberkofler Weidacher Monika", url: "none yet" },
    "Sinner": { name: "Sinner Meinhard", url: "none yet" },
    "SteinerE": { name: "Steiner Erwin Jakob", url: "none yet" },
    "SteinerF": { name: "Steiner Florian", url: "none yet" },
    "Taschler": { name: "Taschler Jasmin", url: "none yet" },
    "TrenkerA": { name: "Trenker Andreas", url: "none yet" },
    "TrenkerJ": { name: "Trenker Johannes", url: "none yet" },
    "Weidacher": { name: "Weidacher Dolores", url: "none yet" }
}

let params = new URLSearchParams(document.location.search);

for (const [key, value] of params) {
    console.log(`key = ${key}, value = ${value}`)

    if (key == "name" && value in nameToLink) {
        const item = nameToLink[value];
        console.log(`${item.name}\nredirecting to ${item.url}`);

        document.getElementById("debug").innerHTML = item.name;
        // window.location.replace(item.url);
    }
}