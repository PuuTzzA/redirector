const idToLink = {
    1: { name: "Mittermair Friedrich", url: "https://youtu.be/D4qNCgF50OA?si=uN6-1e1J_b4MBgAd" },
    2: { name: "Ghergu Leitner Daniela Elena", url: "https://youtu.be/kQjLcgOgJFc?si=AJaXNEGPgWG46thC" },
    3: { name: "Gruber Markus", url: "none yet" },
    4: { name: "Gruber Stefan", url: "none yet" },
    5: { name: "Innerhofer Putzer Helene", url: "none yet" },
    6: { name: "Jesacher Christian", url: "https://youtu.be/fvCli8bvIyw?si=ffKZtsa6ifq24per" },
    7: { name: "Jesacher Hannes", url: "none yet" },
    8: { name: "Jesacher Kurt Albert", url: "none yet" },
    9: { name: "Lercher Claudia", url: "https://youtu.be/kW86yS9wBWg?si=KjfWp8eNy69lF-zM" },
    10: { name: "Lercher Thomas", url: "none yet" },
    11: { name: "Oberkofler Weidacher Monika", url: "none yet" },
    12: { name: "Sinner Meinhard", url: "none yet" },
    13: { name: "Steiner Erwin Jakob", url: "https://youtu.be/XGaKJqclD74?si=9HnMylgPOHct9oVB" },
    14: { name: "Steiner Florian", url: "https://youtu.be/QU5zzksranw?si=099b01vtVlYOF0Pg" },
    15: { name: "Taschler Jasmin", url: "none yet" },
    16: { name: "Trenker Andreas", url: "https://www.youtube.com/watch?v=lPanYsTskOk" },
    17: { name: "Trenker Johannes", url: "none yet" },
    18: { name: "Weidacher Dolores", url: "https://youtu.be/_M4oJwed21M?si=eDWO6ObRWwfRXSVh" }
}

let params = new URLSearchParams(document.location.search);

for (const [key, value] of params) {
    console.log(`key = ${key}, value = ${value}`)

    if (key == "id" && value in idToLink) {
        const item = idToLink[value];
        if (item.url == "none yet") {
            break;
        }
        console.log(`${item.name}\nredirecting to ${item.url}`);
        document.getElementById("debug").innerHTML = item.name;
        window.location.replace(item.url);
    }
}