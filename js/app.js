let sec = document.querySelector("#section");

let data = [
  {
    id: 1,
    title: "Acer Nitro 5",
    price: 1350,
    imgs: "../imgs/S.jpg",
  },
  {
    id: 2,
    title: "Asus Tuf Gaming",
    price: 630,
    imgs: "../imgs/N.jpg",
  },
  {
    id: 3,
    title: "Vivo Pro 14X",
    price: 1150,
    imgs: "../imgs/B.jpg",
  },
];

function create(title, price, imgs) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let h4 = document.createElement("h4");

  sec.append(card);
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

function card(arr) {
  for (let i = 0; i < arr.length; i++) {
    sec.append(create(arr[i].title, arr[i].price, arr[i].imgs));
  }
}
card(data);

let input = document.querySelector("#type");

input.addEventListener("input", (e) => {
  let typed = e.target.value;
  let search = data.filter((item) =>
    item.title.toLowerCase().includes(typed.toLowerCase())
  );
  sec.innerHTML = "";
  card(search);
});
