let sec_core = document.querySelector("#section_core");

const core_data = [
  {
    id: 1,
    title: "Intel Pentium Gold",
    price: 97,
    imgs: "../imgs/prc/gold.jpg",
  },
  {
    id: 2,
    title: " Intel Core i3",
    price: 150,
    imgs: "../imgs/prc/core3.jpg",
  },
  {
    id: 3,
    title: "Intel Core i5",
    price: 299,
    imgs: "../imgs/prc/core5.jpg",
  },
  {
    id: 4,
    title: "Intel Core i7",
    price: 545,
    imgs: "../imgs/prc/core7.jpg",
  },
  {
    id: 5,
    title: "Intel Core i9",
    price: 700,
    imgs: "../imgs/prc/core9.jpg",
  },
  {
    id: 6,
    title: "AMD Ryzen 3",
    price: 200,
    imgs: "../imgs/prc/r3.png",
  },
  {
    id: 7,
    title: "AMD Ryzen 5",
    price: 349,
    imgs: "../imgs/prc/r5.png",
  },
  {
    id: 8,
    title: "AMD Ryzen 7",
    price: 600,
    imgs: "../imgs/prc/r7.png",
  },
  {
    id: 9,
    title: "AMD Ryzen 9",
    price: 855,
    imgs: "../imgs/prc/r9.png",
  },
];
function createCard(title, price, imgs) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let h4 = document.createElement("h4");

  sec_core.append(card);
  card.className = "card";
  card.append(img);
  card.append(h3);
  card.append(p);
  card.append(h4);

  img.srcset = imgs;

  h3.textContent = title;
  p.textContent = "Lorem ipsum dolor sit amet consectetur.";
  h4.textContent = `Price: ${price}$`;
  return card;
}
function cardC(arr) {
  for (let i = 0; i < arr.length; i++) {
    sec_core.append(createCard(arr[i].title, arr[i].price, arr[i].imgs));
  }
}
cardC(core_data);

let type_core = document.querySelector("#type_core");

type_core.addEventListener("input", (element) => {
  let typed_core = element.target.value;
  let search_core = core_data.filter((i) =>
    i.title.toLowerCase().includes(typed_core.toLowerCase())
  );
  sec_core.innerHTML = "";
  cardC(search_core);
});
