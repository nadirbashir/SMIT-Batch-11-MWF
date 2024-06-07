const products = {
  Apple: {
    Iphone6: {
      name: "Iphone 6",
      type: "Mobile",
      color: "Black",
      ram: "1gb",
      rom: "64gb",
      batteryTime: "1,810mAh",
      display: "4.7 inches",
      profilePicture: "./assests/Media/iphone6.jpeg",
      price: "43,999",
      pta: true,
      avalaible: true,
      cart: false,
    },
    Iphone8: {
      name: "Iphone 8",
      type: "Mobile",
      color: "Gold",
      ram: "2gb",
      rom: "256gb",
      batteryTime: "1821mAh",
      display: "4.7 inches",
      profilePicture: "./assests/Media/iphone8.jpeg",
      price: "108,610",
      pta: true,
      avalaible: true,
      cart: false,
    },
    iphoneX: {
      name: "Iphone X",
      type: "Mobile",
      color: "White",
      ram: "3gb",
      rom: "256gb",
      batteryTime: "2716mAh",
      display: "5.8 inches",
      profilePicture: "./assests/Media/iphneX.jpeg",
      price: "144,999",
      pta: true,
      avalaible: true,
      cart: false,
    },
    Iphone11: {
      name: "Iphone 11",
      type: "Mobile",
      color: "Gray",
      ram: "4gb",
      rom: "256gb",
      batteryTime: "3110mAh",
      display: "5.8 inches",
      profilePicture: "./assests/Media/iphone11.jpeg",
      price: "178,000",
      pta: true,
      avalaible: true,
      cart: false,
    },
    Iphone12: {
      name: "Iphone 12",
      type: "Mobile",
      color: "Gray",
      ram: "4gb",
      rom: "256gb",
      batteryTime: "2815mAh",
      display: "6.1 inches",
      profilePicture: "./assests/Media/iphone12.jpeg",
      price: "179,999",
      pta: true,
      avalaible: true,
      cart: false,
    },
    Iphone14: {
      name: "Iphone 14",
      type: "Mobile",
      color: "Gray",
      ram: "6gb",
      rom: "256gb",
      batteryTime: "3279mAh",
      display: "6.1 inches",
      profilePicture: "./assests/Media/Iphone14-img.jpeg",
      price: "179,999",
      pta: true,
      avalaible: true,
      cart: false,
    },
  },
  Samsung: {
    galaxy_S21: {
      name: "Galaxy S21",
      type: "Mobile",
      color: "Black",
      ram: "8gb",
      rom: "128gb",
      batteryTime: "4000mAh",
      display: "6.2 inches",
      profilePicture: "./assests/Media/galaxy-S21.jpeg",
      price: "176,499",
      pta: true,
      avalaible: true,
      cart: false,
    },
    galaxy_A35: {
      name: "Galaxy A35",
      type: "Mobile",
      color: "Aqua",
      ram: "8gb",
      rom: "256gb",
      batteryTime: "5000mAh",
      display: "6.6 inches",
      profilePicture: "./assests/Media/galaxy_A35.jpeg",
      price: "114,999",
      pta: true,
      avalaible: true,
      cart: false,
    },
    galaxy_A06: {
      name: "Galaxy A05",
      type: "Mobile",
      color: "Green",
      ram: "6gb",
      rom: "128gb",
      batteryTime: "5000mAh",
      display: "6.7 inches",
      profilePicture: "./assests/Media/galaxy-A05.jpeg",
      price: "36,499",
      pta: true,
      avalaible: true,
      cart: false,
    },
  },
  Infinix: {
    hot_40_pro: {
      name: "Hot 40 Pro",
      type: "Mobile",
      color: "Black",
      ram: "4gb",
      rom: "256gb",
      batteryTime: "5000mAh",
      display: "6.78 inches",
      profilePicture: "./assests/Media/hot_40.jpeg",
      price: "45,999",
      pta: true,
      avalaible: true,
      cart: false,
    },
    note_40: {
      name: "Note 40",
      type: "Mobile",
      color: "Green",
      ram: "8gb",
      rom: "256gb",
      batteryTime: "2815mAh",
      display: "6.78 inches",
      profilePicture: "./assests/Media/note_40.jpeg",
      price: "54,999",
      pta: true,
      avalaible: true,
      cart: false,
    },
    hot_30: {
      name: "Hot 30",
      type: "Mobile",
      color: "Black",
      ram: "8gb",
      rom: "128gb",
      batteryTime: "5000mAh",
      display: "6.78 inches",
      profilePicture: "./assests/Media/hot_30.jpg",
      price: "34,999",
      pta: true,
      avalaible: true,
      cart: false,
    },
  },
  Tecno: {
    pova_06_pro: {
      name: "Pova 06 Pro",
      type: "Mobile",
      color: "Silver",
      ram: "6gb",
      rom: "128gb",
      batteryTime: "6000mAh",
      display: "6.78 inches",
      profilePicture: "./assests/Media/pova_06_pro.jpeg",
      price: "24,799",
      pta: true,
      avalaible: true,
      cart: false,
    },
    spark_20: {
      name: "Spark 20",
      type: "Mobile",
      color: "Black",
      ram: "8gb",
      rom: "256gb",
      batteryTime: "5000mAh",
      display: "6.6 inches",
      profilePicture: "./assests/Media/spark_20.jpeg",
      price: "31,799",
      pta: true,
      avalaible: true,
      cart: false,
    },
    camon_20: {
      name: "Camon 20",
      type: "Mobile",
      color: "Serenity Blue",
      ram: "4gb",
      rom: "256gb",
      batteryTime: "5000mAh",
      display: "6.67 inches",
      profilePicture: "./assests/Media/camon_20.jpeg",
      price: "41,499",
      pta: true,
      avalaible: true,
      cart: false,
    },
  },
};

const companySelect = document.getElementById("company");
const modelSelect = document.getElementById("model");
const list = document.getElementById("list");

for (let company in products) {
  let option = `
        <option value="${company}">${company}</option>
    `;
  companySelect.innerHTML += option;
}

for (let company in products) {
  for (let model in products[company]) {
    const mobile = products[company][model];
    let card = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mobile.name}</h5>
      <p class="card-text">Price: ${mobile.price}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">storage: ${mobile.ram} / ${mobile.rom}</li>
      <li class="list-group-item">color: ${mobile.color}</li>
      <li class="list-group-item">display: ${mobile.display}</li>
    </ul>
  </div>`;
    list.innerHTML += card;
  }
}

function handleSelectCompany() {
  modelSelect.innerHTML = "";
  const company = companySelect.value;
  for (let model in products[company]) {
    let option = `
            <option value="${model}">${model}</option>
        `;
    modelSelect.innerHTML += option;
  }
}

function search() {
  const company = companySelect.value;
  const model = modelSelect.value;

  //TODO: add input validation

  const mobile = products[company][model];
  let card = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mobile.name}</h5>
      <p class="card-text">Price: ${mobile.price}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">storage: ${mobile.ram} / ${mobile.rom}</li>
      <li class="list-group-item">color: ${mobile.color}</li>
      <li class="list-group-item">display: ${mobile.display}</li>
    </ul>
  </div>`;
  list.innerHTML = card;
}
