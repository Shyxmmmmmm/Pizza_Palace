const pizza = require("./models/pizzamodels")

const insertData = async () => {

    await pizza.insertMany([

        {
            id:"P101",
            name: "Peppy Paneer",
            price: 379,
            category: "Veg",
            image: "/assets/p5.png"
        },

        {
            id:"P102",
            name: "Veggie Supreme",
            price: 329,
            category: "Veg",
            image: "/assets/p6.webp"
        },

        {
            id:"P103",
            name: "Chicken Feast",
            price: 399,
            category: "Non-Veg",
            image: "/assets/p7.png"
        },

        {
            id:"P104",
            name: "Cheese Burst",
            price: 449,
            category: "Veg",
            image: "/assets/p8.png"
        },

        {
            id:"P105",
            name: "Farmhouse",
            price: 349,
            category: "Non-Veg",
            image: "/assets/p9.png"
        },

        {
            id:"P106",
            name: "Mexican Green Wave",
            price: 429,
            category: "Non-Veg",
            image: "/assets/p10.webp"
        },

        {
            id:"P107",
            name: "Paneer Makhani",
            price: 459,
            category: "Veg",
            image: "/assets/p11.webp"
        },

        {
            id:"P108",
            name: "Margherita",
            price: 299,
            category: "Non-Veg",
            image: "/assets/p12.png"
        },

        {
            id:"P109",
            name: "Pepper Barbecue",
            price: 499,
            category: "Non-Veg",
            image: "/assets/p13.png"
        },

        {
            id:"P110",
            name: "Pepper Veg Barbecue",
            price: 399,
            category: "Veg",
            image: "/assets/p16.png"
        },

        {
            id:"P111",
            name: "French Fries",
            price: 199,
            category: "Sides",
            image: "/assets/p15.webp"
        },

        {
            id:"P112",
            name: "Garlic Bread",
            price: 100,
            category: "Sides",
            image: "/assets/p14.png"
        },

        {
            id:"P113",
            name: "Cheese Garlic Bread",
            price: 199,
            category: "Sides",
            image: "/assets/p17.png"
        },

        {
            id:"P114",
            name: "Potato Wedges",
            price: 299,
            category: "Sides",
            image: "/assets/p18.webp"
        },

        {
            id:"P115",
            name: "Cheese Toritos",
            price: 100,
            category: "Sides",
            image: "/assets/p19.webp"
        },

        {
            id:"P116",
            name: "Coke",
            price: 99,
            category: "Drinks",
            image: "/assets/p20.webp"
        },

        {
            id:"P117",
            name: "Soft Drinks",
            price: 40,
            category: "Drinks",
            image: "/assets/p21.png"
        },

        {
            id:"P118",
            name: "Cold Coffee",
            price: 250,
            category: "Drinks",
            image: "/assets/p22.webp"
        },

        {
            id:"P119",
            name: "Bubble Tea",
            price: 199,
            category: "Drinks",
            image: "/assets/p23.png"
        }

    ])

    console.log("Data Inserted Successfully")

}

module.exports = insertData