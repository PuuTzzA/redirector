const idToLink = {
    1: { name: "Bernie Sanders", url: "https://youtu.be/rKBM2kS6B8o?si=kF7L-FaVpTuWv7M3" },
    2: { name: "Jan Bömermann", url: "https://youtu.be/DgPvWtvUZF8?si=0NAU_7tNs8l5hMeA" }
}

let params = new URLSearchParams(document.location.search);

for (const [key, value] of params) {
    console.log(`key = ${key}, value = ${value}`)
    if (key == "id" && value in idToLink) {
        const item = idToLink[value];
        console.log(`${item.name}\nredirecting to ${item.url}`);
        window.location.replace(item.url);
    }
}