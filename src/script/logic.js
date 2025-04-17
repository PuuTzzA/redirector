const idToLink = {
    1: { name: "Mittermair Friedrich", url: "https://youtu.be/D4qNCgF50OA?si=uN6-1e1J_b4MBgAd" },
    2: { name: "Ghergu Leitner Daniela Elena", url: "https://youtu.be/kQjLcgOgJFc?si=AJaXNEGPgWG46thC" },
    3: { name: "Gruber Markus", url: "https://youtu.be/3O7qWCSJgcY?si=_JMpaMQUsFTZQ845" },
    4: { name: "Gruber Stefan", url: "https://youtu.be/g0pCdJYDiNs?si=1OKSKSoHFP2VihB-" },
    5: { name: "Innerhofer Putzer Helene", url: "https://youtu.be/_2T_6jNf9b8?si=Wi9bsnI8jfxeb_tH" },
    6: { name: "Jesacher Christian", url: "https://youtu.be/fvCli8bvIyw?si=ffKZtsa6ifq24per" },
    7: { name: "Jesacher Hannes", url: "https://youtu.be/KnGBdF5d-YE?si=oRnIFLKHs0PQE25E" },
    8: { name: "Jesacher Kurt Albert", url: "https://youtu.be/zHdfdb8BWKk?si=Ni5E8Qx3f48erh05" },
    9: { name: "Lercher Claudia", url: "https://youtu.be/kW86yS9wBWg?si=KjfWp8eNy69lF-zM" },
    10: { name: "Lercher Thomas", url: "https://youtu.be/kSKrbtqhOEc?si=6PSiGxj2ouy4w83B" },
    11: { name: "Oberkofler Weidacher Monika", url: "https://youtu.be/FR98s0ca4bM?si=NzNyw86MXCBFHKJc" },
    12: { name: "Sinner Meinhard", url: "https://youtu.be/b_bIS4drmso?si=mCTyk1nKB8XYTHHG" },
    13: { name: "Steiner Erwin Jakob", url: "https://youtu.be/XGaKJqclD74?si=9HnMylgPOHct9oVB" },
    14: { name: "Steiner Florian", url: "https://youtu.be/QU5zzksranw?si=099b01vtVlYOF0Pg" },
    15: { name: "Taschler Jasmin", url: "https://youtu.be/uHZEc6zD7w8?si=B1cYybJcU7GCWao5" },
    16: { name: "Trenker Andreas", url: "https://www.youtube.com/watch?v=lPanYsTskOk" },
    17: { name: "Trenker Johannes", url: "https://youtu.be/391KGKjXALM?si=cbQmywZC_05eVzGA" },
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