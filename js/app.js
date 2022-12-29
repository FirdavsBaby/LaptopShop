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
  {
    id: 4,
    title: "IdeaPad Gaming 3",
    price: 749,
    imgs: "../imgs/Idea_pad.jpg",
  },
  {
    id: 5,
    title: "HP Victus 16",
    price: 799,
    imgs: "../imgs/Victus_16.jpg",
  },
  {
    id: 6,
    title: "Asus Tuf A17",
    price: 1200,
    imgs: "../imgs/tuf_a17.jpg",
  },
  {
    id: 7,
    title: "Asus Tuf A15",
    price: 920,
    imgs: "../imgs/tuf_a15.jpg",
  },
  {
    id: 8,
    title: "HP Victus",
    price: 900,
    imgs: "../imgs/Victus.jpg",
  },
  {
    id: 9,
    title: "Asus Tuf F15",
    price: 1010,
    imgs: "../imgs/tuf_f15.jpg",
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
