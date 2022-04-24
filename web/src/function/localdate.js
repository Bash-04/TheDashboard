const maanden = [" Januari"," Februari"," Maart"," April"," Mei"," Juni"," Juli"," Augustus"," September"," Oktober"," November"," December"];
const dagen = ["Zondag ", "Maandag ", "Dinsdag ", "Woensdag ", "Donderdag ", "Vrijdag ", "Zaterdag "]

const d = new Date();
let day = dagen[d.getDay()];
let month = maanden[d.getMonth()];
document.getElementById("date").innerHTML = day + d.getDate() + month;
