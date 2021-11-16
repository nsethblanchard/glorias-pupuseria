const menu = [
  {
    pupusas: [
      {
        id: "1",
        name: "Loca",
        description:
          "Filled with chicharron, chicken, beans, veggies and cheese.",
        single_price: 4.5,
        price_for_3: 12,
      },
      {
        id: "2",
        name: "Chicken",
        description: "Filled with Chicken, veggies and cheese.",
        single_price: 4.5,
        price_for_3: 12,
      },
      {
        id: "3",
        name: "Revuelta",
        description: "Filled with chicharron, beans and cheese.",
        single_price: 4,
        price_for_3: 11,
      },
      {
        id: "4",
        name: "Chorizo",
        description: "Filled with chorizo and cheese.",
        single_price: 4.5,
        price_for_3: 12,
      },
      {
        id: "5",
        name: "Shrimp",
        description:
          "Filled with shrimp cooked with tomatoes, onions and spices. (With or without cheese)",
        single_price: 4.5,
        price_for_3: 12,
      },
      {
        id: "6",
        name: "Veggie",
        description:
          "Filled with a mix of zucchini, yellow squash, carrots, onions, spinach and cheese.",
        single_price: 3.75,
        price_for_3: 11,
      },
      {
        id: "7",
        name: "Vegan",
        description:
          "Filled with zucchini, yellow squash, carrots, onions and spinach.",
        single_price: 4,
        price_for_3: 11.5,
      },
      {
        id: "8",
        name: "Beans",
        description: "Filled with beans and cheese.",
        single_price: 3.75,
        price_for_3: 10.5,
      },
      {
        id: "9",
        name: "Loroco",
        description: "Central American native vining flowers mix with cheese.",
        single_price: 3.5,
        price_for_3: 10,
      },
      {
        id: "10",
        name: "Jalapeno and Cheese",
        description: "Filled with spicy jalapeno peppers with cheese.",
        single_price: 3.5,
        price_for_3: 10,
      },
      {
        id: "11",
        name: "Queso",
        description: "Filled with lots and lots of cheese.",
        single_price: 3.25,
        price_for_3: 9,
      },
    ],

    other_salv_dishes: [
      {
        id: "12",
        name: "Yuca Con Chicharron",
        description:
          "Chunks of fried pork served over yuca frita, curtido and our signature yuca sauce.",
        price: 9.5,
      },
      {
        id: "13",
        name: "Carne Guisada",
        description:
          "Salvadoran style stewed beef and vegetables served with rice, salad and 2 tortillas.",
        price: 12,
      },
      {
        id: "14",
        name: "Pollo Guisada",
        description:
          "Salvadoran style stewed chicken and vegetables served with rice, salad and 2 tortillas.",
        price: 11,
      },
      {
        id: "15",
        name: "Tamale",
        description:
          "A steamed pocket of specially prepared corn masa filled with chicken and potatoes wrapped in a plantain leaf served with curtido and salsa.",
        price: 3.5,
      },
      {
        id: "16",
        name: "Pasteles",
        description:
          "Three corn flour turnovers filled with picado de carne (ground beef and vegetables), chicken or veggies served over lettuce salad and sauce.",
        price: 9.5,
      },
      {
        id: "17",
        name: "Salvadoran Enchiladas",
        description:
          "Three handmade crisped fried tortillas topped with picado de carne, chicken or veggies, fresh salad, avocado, hardboiled egg and shredded queso duro.",
        price: 10.5,
      },
    ],

    kids_meals: [
      { price: 5.99 },
      {
        kids_main: [
          {
            name: "Chicken and Cheese",
          },
          {
            name: "Beans and Cheese",
          },
          {
            name: "Cheese",
          },
        ],
        kids_sides: [
          {
            name: "Broccoli",
          },
          {
            name: "Fries",
          },
          {
            name: "Fresh fruit",
          },
          {
            name: "Curtido",
          },
        ],
        kids_drinks: [
          {
            name: "Chocolate Milk",
          },
          {
            name: "Juice Box",
          },
        ],
      },
    ],
    sides: [
      { id: "18", name: "Chips and Salsa", price: 5 },
      { id: "19", name: "Chips and Guacamole", price: 6.25 },
      { id: "20", name: "Platanos Fritos", price: 3.5 },
      { id: "21", name: "Yuca Frita", price: 4 },
      { id: "22", name: "Side De Frijoles(beans)", price: 2.5 },
      { id: "23", name: "Side De Arroz(rice)", price: 2.5 },
      {
        id: "24",
        name: "Casamiento(Salvadoran style Rice and Beans)",
        price: 4,
      },
    ],
    house_drinks: [
      {
        id: "25",
        name: "Horchata de Morro",
        description:
          "Traditional Salvadoran drink with ground morro seeds, rice and milk",
        price: 3,
      },
      {
        id: "26",
        name: "Ensalada",
        description: "Mango and pineapple fresco w/ diced fruit ",
        price: 3,
      },
      {
        id: "27",
        name: "Tamarindo",
        description: "Sweet and sour tamarindo fresco ",
        price: 3,
      },
    ],
    other_drinks: [
      {
        id: "28",
        name: "Jarritos",
        price: 2.25,
      },
      {
        id: "29",
        name: "Coca-Cola in a Bottle",
        price: 2.25,
      },
      {
        id: "30",
        name: "Canned Sodas",
        price: 1.25,
      },
      {
        id: "31",
        name: "San Pelligrino Sparkling Water",
        price: 1.75,
      },
      {
        id: "32",
        name: "Coffee",
        price: 2.25,
      },
      {
        id: "33",
        name: "Bottled Water",
        price: 1,
      },
    ],
    soups: [
      {
        id: "34",
        name: "Veggie Tortilla Soup",
        description:
          "Delicious creamy soup made with shredded vegetables topped with tortilla strips, cheese and cilantro.",
        price_per_cup: 4.5,
        price_per_bowl: 5.5,
      },
    ],
    desserts: [
      {
        id: "35",
        name: "Tres Leches",
        description:
          "Authentic Central America delicious moist three milk cake.",
        price: 4.5,
      },
      {
        id: "36",
        name: "Flan",
        description: "Caramel sauce glazed custard.",
        price: 3.5,
      },
    ],
  },
];

export default menu;
