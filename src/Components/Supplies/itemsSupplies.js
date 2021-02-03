import SupplyCards from "./SuppliesCards";

const addItem = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/SVG_for_cards/addItem.svg";

function items() {
  const color1 = "#fff";
  const color2 = "#fafafa";

  const itemslist = {
    allCards: [],
    stationaryCards: [],
    designCards: [],
    booksCards: [],
    laptopsCards: [],
    techotherCards: [],
    roomCards: [],
    otherCards: [],
  };

  const stationaryCards = [
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "\nPost It Notes",
      description: "Bought by design students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/719gxnixAXL._SL1500_.jpg",
      pathLink: "https://amzn.to/3hv73hu",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Luxor 5 Subject Exercise Book (250 pages)",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71rMIAkfNsL._SL1280_.jpg",
      pathLink: "https://amzn.to/33GTGFf",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Luxor 5 Subject Notebook (300 pages)",
      description: "Bought by 10 students",
      image: "https://images-na.ssl-images-amazon.com/images/I/51HMBe9-5RL.jpg",
      pathLink: "https://amzn.to/2Vvsm8m",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Classmate 6 Subject Spiral Binding Notebook",
      description: "Bought by almost everyone",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71WZfAOB9gL._SL1100_.jpg",
      pathLink: "https://amzn.to/3g6FCKj",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Luxor 6 Subject Spiral Premium Notebook",
      description: "Bought by 15 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71tnM2LRTIL._SL1280_.jpg",
      pathLink: "https://amzn.to/3g79Qww",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Classic Plain notebook",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91DHOv07HDL._SL1500_.jpg",
      pathLink: "https://amzn.to/36CX1Y1",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Cello Finegrip Ball Pen set ",
      description: "Bought by almost everyone",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71BxH9BTM2L._SL1500_.jpg",
      pathLink: "https://amzn.to/2JC3ZmV",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Cello Butterflow ball pen set",
      description: "Bought by almost everyone",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61TxXDiHKbL._SL1500_.jpg",
      pathLink: "https://amzn.to/3lAXOwS",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Cello Maxriter Ball Pen Set",
      description: "Bought by good handwriting students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81esZ5d2ifL._SL1500_.jpg",
      pathLink: "https://amzn.to/39CURcF",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Reynolds Trimax Liquid Gel Pens",
      description: "Bought by fancy students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81TkraQtsXL._SL1500_.jpg",
      pathLink: "https://amzn.to/33IpzgS",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Printer rim (500 sheets)",
      description: "Bought by 25 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/816vukIX-KL._SL1500_.jpg",
      pathLink: "https://amzn.to/3mDUUZh",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Luxor Black marker",
      description: "Bought by 124 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/617Cq4Vz4UL._SL1280_.jpg",
      pathLink: "https://amzn.to/34WbUDi",
    },
  ];

  const designCards = [
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Dotted notebook (A5 size)",
      description: "Bought by design students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Z32bCyGxL._SL1390_.jpg",
      pathLink: "https://amzn.to/3hwaq7K",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "A4 sketchbook",
      description: "Bought by 35 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91wM8-%2BC2iL._SL1500_.jpg",
      pathLink: "https://amzn.to/3omXe7P",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "A3 sketchbook",
      description: "Bought by 35 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91gaXd5OW-L._SL1500_.jpg",
      pathLink: "https://amzn.to/3hRJXBZ",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "T-scale",
      description: "Bought by 35 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61wZyVXmxDL._SL1500_.jpg",
      pathLink: "https://amzn.to/3s9PZmn",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Drawing board",
      description: "Bought by 35 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71OADD0DhFL._SL1500_.jpg",
      pathLink: "https://amzn.to/38mvkUg",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Sakura micron pen",
      description: "Bought by 35 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71ywzwfNM4L._SL1272_.jpg",
      pathLink: "https://amzn.to/3hR6oHB",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Sakura micron pen (pack 8)",
      description: "Bought by 35 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91zhq28cjwL._SL1500_.jpg",
      pathLink: "https://amzn.to/2KZTmLV",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Copic multipliers",
      description: "Bought by 35 students",
      image: "https://images-na.ssl-images-amazon.com/images/I/4183T-j2kWL.jpg",
      pathLink: "https://amzn.to/2XhLGqJ",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Uniball Air Micro Pen Combo Set",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61kj0R5IbCL._SL1372_.jpg",
      pathLink:
        "https://www.amazon.in/Uniball-Micro-Combo-Black-Blue/dp/B07JFDPFZN/ref=sr_1_1?dchild=1&keywords=uniball&qid=1609954637&sr=8-1",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Uni-ball Eye Ball Point Pen",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71QOsM3dP-L._SL1500_.jpg",
      pathLink:
        "https://www.amazon.in/Uni-ball-Eye-Ball-Point-Pen/dp/B07H7CHPZ9/ref=sr_1_2?dchild=1&keywords=uniball&qid=1609954637&sr=8-2",
    },
  ];

  const booksCards = [
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "The Third Door",
      description: "Bought by 35 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41pT1F4h6dL._SX329_BO1,204,203,200_.jpg",
      pathLink: "https://amzn.to/39cPzTg",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Ikigai",
      description: "Bought by 35 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg",
      pathLink: "https://amzn.to/2MHx7e4",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Rich Dad, Poor Dad",
      description: "Bought by 300 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SY344_BO1,204,203,200_.jpg",
      pathLink: "https://amzn.to/2LaCwK3",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Feck Perfuction",
      description: "Bought by 20 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41qIe0kf-aL._SX373_BO1,204,203,200_.jpg",
      pathLink: "https://amzn.to/3970UUV",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "4 hour work week",
      description: "Bought by 100 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51u1MBMfhmL._SX314_BO1,204,203,200_.jpg",
      pathLink: "https://amzn.to/38DwB9g",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Atomic habits",
      description: "Bought by 50 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
      pathLink: "https://amzn.to/3qdW9zV",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Attitude Is Everything",
      description: "Bought by 300 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg",
      pathLink: "https://amzn.to/3btTuhs",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Think like a Monk",
      description: "Bought by 150 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg",
      pathLink: "https://amzn.to/2Ke6AEm",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "The Alchemist",
      description: "Bought by 150 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
      pathLink: "https://amzn.to/2LLYnYt",
    },
  ];

  const laptopsCards = [
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "\nAcer Nitro 5",
      description: "Bought by 35 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Pp8PLPNAL._SL1500_.jpg",
      pathLink: "https://amzn.to/3n0GUZ8",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Lenovo Legion gaming laptop",
      description: "Bought by 25 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61p3lA4N3uL._SL1000_.jpg",
      pathLink: "https://amzn.to/2WWf19Z",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Dell Inspiron 5370",
      description: "Bought by 25 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71zqXTOew2L._SL1500_.jpg",
      pathLink: "https://amzn.to/3hwvIm4",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Lenovo Ideapad S340",
      description: "Bought by 25 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81nEs%2Bl5UgL._SL1500_.jpg",
      pathLink: "https://amzn.to/2LbaLRa",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Asus Vivabook 14",
      description: "Bought by 25 students",
      image: "https://images-na.ssl-images-amazon.com/images/I/41uA9S02hvL.jpg",
      pathLink: "https://amzn.to/2KNnFoS",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Surface Laptop 3",
      description: "Bought by 25 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61cuElU6PaL._SX425_.jpg",
      pathLink: "https://amzn.to/34SG4Y8",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "More Coding Laptops",
      description: "Get the best laptops",
      image:
        "https://www.naijatechguide.com/wp-content/uploads/2019/02/12_09_2018-laptops_18418669.jpg",
      pathLink: "https://amzn.to/2JBYyF2",
    },
  ];

  const techotherCards = [
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Designer Mouse Pad for Laptop",
      description: "Bought by 15 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/6181jZehG7L._SL1500_.jpg",
      pathLink: "https://amzn.to/3mBGNnB",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Waterproof Gaming Mouse Pad",
      description: "Bought by 5 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71f9uIMJsNL._SL1500_.jpg",
      pathLink: "https://amzn.to/2IcuC1y",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "OnePlus Bullets wireless earphones",
      description: "Bought by 105 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg",
      pathLink: "https://amzn.to/37Alv3r",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "boAt Rockerz Bluetooh earphones",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ku39qVEzL._SL1500_.jpg",
      pathLink: "https://amzn.to/3lAZCpE",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Infinity JBL wireless earphones",
      description: "Bought by 5 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/619OijH9HnL._SL1500_.jpg",
      pathLink: "https://amzn.to/33D2QT6",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "boAt Rockerz Bluetooth headphones",
      description: "Bought by 15 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ihz46SLOL._SL1500_.jpg",
      pathLink: "https://amzn.to/2VwOmQp",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Logitech B170 Wireless Mouse",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51kdFjyPRAL._SL1500_.jpg",
      pathLink:
        "https://www.amazon.in/Logitech-B170-Wireless-Mouse-Black/dp/B01J0XWYKQ/ref=zg_bs_computers_3?_encoding=UTF8&psc=1&refRID=4VA3HBJTP2WGVP0EAQJR&smid=A14CZOWI0VEHLG",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Logitech Light Sync Gaming Mouse",
      description: "Bought by gamers",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61UxfXTUyvL._SL1500_.jpg",
      pathLink: "https://amzn.to/3htHs8y",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Gaming Keyboard",
      description: "Bought by 15 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81Km9%2BgySSL._SL1500_.jpg",
      pathLink: "https://amzn.to/3o1OILA",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "ADDMAX multi-plug extension board",
      description: "Bought by 15 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81okyQFxdiL._SL1500_.jpg",
      pathLink: "https://amzn.to/37AlRXP",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "boAt Stone 170 5W Bluetooth Speaker ",
      description: "Bought by 4 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61Mq3HQ5MqL._SL1500_.jpg",
      pathLink: "https://amzn.to/3mABHI0",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "JBL GO Portable Wireless Bluetooth Speaker",
      description: "Bought by 15 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71nwG2LuLsL._SL1200_.jpg",
      pathLink: "https://amzn.to/3ohJefm",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Kindle",
      description: "Bought by 15 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61DCWZlmnOL._SL1000_.jpg",
      pathLink: "https://amzn.to/3hOkedA",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Gadget Storage Bag",
      description: "Bought by 20 students",
      image: "https://images-na.ssl-images-amazon.com/images/I/51YaYwZwkJL.jpg",
      pathLink: "https://amzn.to/3qolPe6",
    },
  ];

  const roomCards = [
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Philips 61013 Air 5-Watt LED Desklight",
      description: "Bought by 5 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71mI4aUUQYL._SL1500_.jpg",
      pathLink: "https://amzn.to/3lwV0AB",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Rechargeable LED Touch Desk Lamp",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51VohtD1dnL._SL1080_.jpg",
      pathLink: "https://amzn.to/3g6eOtE",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Rechargeable LED Touch Desk Lamp",
      description: "Bought by 1 students",
      image: "https://images-na.ssl-images-amazon.com/images/I/31pzH7KFoDL.jpg",
      pathLink: "https://amzn.to/3qwQnun",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Photo Clip Lights Indoor Decoration",
      description: "Bought by 50 students",
      image: "https://images-na.ssl-images-amazon.com/images/I/51JaxAi8puL.jpg",
      pathLink: "https://amzn.to/3g36g6E",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Decorative Fairy Lights",
      description: "Bought by 45 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/615qNo%2BAe0L._SL1000_.jpg",
      pathLink: "https://amzn.to/37wQWvh",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Artificial Plants Bonsai Potted shrubs",
      description: "Bought by 50 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81vSA24EfCL._SL1500_.jpg",
      pathLink: "https://amzn.to/37A2fTo",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Artificial Plant pot",
      description: "Bought by 30 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71s%2B-MlydaL._SL1001_.jpg",
      pathLink: "https://amzn.to/2L0224l",
    },
  ];

  const otherCards = [
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Multicolour posters",
      description: "Bought by 20 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81BwL6msi8L._SL1500_.jpg",
      pathLink: "https://amzn.to/3okOX4c",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Wall poster",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/713RslXCZ8L._SL1500_.jpg",
      pathLink: "https://amzn.to/2L7CPFr",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Breaking bad poster",
      description: "Bought by 30 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71uVHg4zTLL._SL1500_.jpg",
      pathLink: "https://amzn.to/36FvEN3",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Sherlock Holmes poster",
      description: "Bought by 25 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71R1LAb0oeL._SL1500_.jpg",
      pathLink: "https://amzn.to/2VtSDUR",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Multi-Purpose Laptop Table",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71laWT3LqBL._SL1500_.jpg",
      pathLink: "https://amzn.to/2VzLUbM",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Laptop Table Foldable",
      description: "Bought by 4 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61afaQGKVYL._SL1444_.jpg",
      pathLink: "https://amzn.to/2VwMOWz",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Multi-Purpose Laptop Table with Study Table",
      description: "Bought by 3 students",
      image: "https://images-na.ssl-images-amazon.com/images/I/614x3s4PWXL.jpg",
      pathLink: "https://amzn.to/3owRSa7",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Laptop stand",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Zf9uUp%2BGL._SL1500_.jpg",
      pathLink: "https://amzn.to/37Xzhye",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Casio FX-82ES calculator",
      description: "Bought by 4 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61w1PMHiZoL._SL1000_.jpg",
      pathLink: "https://amzn.to/36BiX5S",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Casio FX-991EX calculator",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/616ryRoQ5EL._SL1100_.jpg",
      pathLink: "https://amzn.to/39F3mnp",
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Butterfly electric Kettle (1.5L)",
      description: "Bought by 10 students",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71cFxsy%2BBCL._SL1500_.jpg",
      pathLink: "https://amzn.to/3nclmZL",
    },
  ];

  const jokeCard = [
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Crocin Pain Relief Tablet",
      description: "Bought by everyone",
      image:
        "https://i-cf5.gskstatic.com/content/dam/cf-consumer-healthcare/panadol/en_in/adult/productshots/crocinpainrelief/Crocin%20Pain%20Relief-Web%20Banner_455x455.png",
      pathLink:
        "https://www.netmeds.com/prescriptions/crocin-pain-relief-tablet-15-s",
    },
  ];
  const allCards0 = jokeCard.concat(techotherCards);
  const allCards1 = allCards0.concat(laptopsCards);
  const allCards2 = allCards1.concat(roomCards);
  const allCards3 = allCards2.concat(stationaryCards);
  const allCards4 = allCards3.concat(designCards);
  const allCards5 = allCards4.concat(booksCards);
  const allCards = allCards5.concat(otherCards);

  const addCard = [
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "Something missing? Add a product",
      description: "Your contribution matters",
      image: addItem,
      pathLink: "https://forms.gle/VmLxhSCpmdo1Fjy59",
    },
  ];

  for (let index = 0; index < allCards.length; index++) {
    itemslist["allCards"].push(SupplyCards(allCards[index]));
  }
  itemslist["allCards"].push(SupplyCards(addCard[0]));

  for (let index = 0; index < stationaryCards.length; index++) {
    itemslist["stationaryCards"].push(SupplyCards(stationaryCards[index]));
  }
  itemslist["stationaryCards"].push(SupplyCards(addCard[0]));

  for (let index = 0; index < designCards.length; index++) {
    itemslist["designCards"].push(SupplyCards(designCards[index]));
  }
  itemslist["designCards"].push(SupplyCards(addCard[0]));

  for (let index = 0; index < booksCards.length; index++) {
    itemslist["booksCards"].push(SupplyCards(booksCards[index]));
  }
  itemslist["booksCards"].push(SupplyCards(addCard[0]));

  for (let index = 0; index < laptopsCards.length; index++) {
    itemslist["laptopsCards"].push(SupplyCards(laptopsCards[index]));
  }
  itemslist["laptopsCards"].push(SupplyCards(addCard[0]));

  for (let index = 0; index < techotherCards.length; index++) {
    itemslist["techotherCards"].push(SupplyCards(techotherCards[index]));
  }
  itemslist["techotherCards"].push(SupplyCards(addCard[0]));

  for (let index = 0; index < roomCards.length; index++) {
    itemslist["roomCards"].push(SupplyCards(roomCards[index]));
  }
  itemslist["roomCards"].push(SupplyCards(addCard[0]));

  for (let index = 0; index < otherCards.length; index++) {
    itemslist["otherCards"].push(SupplyCards(otherCards[index]));
  }
  itemslist["otherCards"].push(SupplyCards(addCard[0]));

  return itemslist;
}

export default items;
