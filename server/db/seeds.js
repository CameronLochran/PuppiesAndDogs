use puppies;
db.dropDatabase();

db.basket.insertMany([

    {
        image: {oscarImage},
        name: "Oscar",
        breed: "Cavaleir King Charles Spaniel",
        age: "8 weeks",
        breeder: "Irene Wilson",
        location: "Bishopbriggs"
    },

    {
        image: {miloImage},
        name: "Milo",
        breed: "Cavaleir King Charles Spaniel",
        age: "10 weeks",
        breeder: "Slag",
        location: "Ayrshire"
    },

    {
        image: {harveyImage},
        name: "Harvey",
        breed: "Cavaleir King Charles Spaniel",
        age: "10 weeks",
        breeder: "Slag",
        location: "Ayrshire"
    }
])