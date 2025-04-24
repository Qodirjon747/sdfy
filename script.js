let odamlar;
const box = document.getElementsByClassName("box")[0];
const input = document.getElementById("input");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    chizish(json);
    odamlar = json;
  });

function chizish(malumot) {
  box.innerHTML = "";
  malumot.map(odam => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSU0JVaRFhOxHLX2-L6huECqnwxeYf6Q58E791nUlb_7-hVHBDKWn1Eo8dktZsSLG4VS8&usqp=CAU" alt="">
      <h2>${odam.name}</h2>
      <p>Email: ${odam.email}</p>
      <p>Tel: ${odam.phone}</p>
      <p>${odam.address?.city || ""} ${odam.address?.street || ""}</p>
    `;
    box.appendChild(div);
  });
}

input.addEventListener("input", () => {
  const a = odamlar.filter(e =>
    e.name.toLowerCase().includes(input.value.toLowerCase())
  );
  chizish(a);
});