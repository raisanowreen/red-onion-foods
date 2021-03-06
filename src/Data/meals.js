const meals = [
    {
        mealId: 2,
        mealName: "Begel and Cream Cheese",
        mealNote: "How we dream about our future",
        mealPrice: 6.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/1T2SHqL/breakfast4.png"
    },
    {
        mealId: 2,
        mealName: "Breakfast Sandwich",
        mealNote: "How we dream about our future",
        mealPrice: 9.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/CBCdvyW/breakfast2.png"
    },
    {
        mealId: 3,
        mealName: "Baked Chicken",
        mealNote: "How we dream about our future",
        mealPrice: 10.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/RHcyvVg/breakfast3.png"
    },
    {
        mealId: 4,
        mealName: "Eggs Benedict",
        mealNote: "How we dream about our future",
        mealPrice: 8.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/Bcs2X4Y/breakfast1.png"
    },
    {
        mealId: 5,
        mealName: "Toast Croissant Fried Egg",
        mealNote: "How we dream about our future",
        mealPrice: 19.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/nn1GTmC/breakfast6.png"
    },
    {
        mealId: 6,
        mealName: "Full Breakfast Fried Egg Toast Brunch",
        mealNote: "How we dream about our future",
        mealPrice: 3.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/Hr16Fm4/breakfast5.png"
    },
    {
        mealId: 7,
        mealName: "Healthy Meal Plan",
        mealNote: "How we dream about our future",
        mealPrice: 3.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/Hr16Fm4/breakfast5.png"
    },
    {
        mealId: 8,
        mealName: "Fried Chicken Bento",
        mealNote: "How we dream about our future",
        mealPrice: 9.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/Lv2n9WN/lunch5.png"
    },
    {
        mealId: 9,
        mealName: "Taraggon-Rubbed-Salmon",
        mealNote: "How we dream about our future",
        mealPrice: 6.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/86TF6b5/lunch3.png"
    },
    {
        mealId: 10,
        mealName: "Indian Lunch",
        mealNote: "How we dream about our future",
        mealPrice: 8.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/fC3t3Zj/lunch4.png"
    },
    {
        mealId: 11,
        mealName: "Beek Steak",
        mealNote: "How we dream about our future",
        mealPrice: 15.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/fMRm9hr/lunch1.png"
    },
    {
        mealId: 12,
        mealName: "Honey-Glazed-Salmon with Peppers",
        mealNote: "How we dream about our future",
        mealPrice: 7.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/0sDMYrx/lunch2.png"
    },
    {
        mealId: 13,
        mealName: "Salmon with Grapefruit and Letil Salad",
        mealNote: "How we dream about our future",
        mealPrice: 9.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/D1yqwdX/dinner6.png"
    },
    {
        mealId: 14,
        mealName: "Lemoney Salmon Piccata",
        mealNote: "How we dream about our future",
        mealPrice: 10.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/LkCkJ4k/dinner2.png"
    },
    {
        mealId: 15,
        mealName: "Pork Tender Lion with Quino Pilaf",
        mealNote: "How we dream about our future",
        mealPrice: 12.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/2y2VqfK/dinner5.png"
    },
    {
        mealId: 16,
        mealName: "French Fries with Cheese",
        mealNote: "How we dream about our future",
        mealPrice: 8.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/CsKcLR8/dinner4.png"
    },
    {
        mealId: 17,
        mealName: "Garlic Butter Baked Salmon",
        mealNote: "How we dream about our future",
        mealPrice: 6.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/8jbWpM3/dinner3.png"
    },
    {
        mealId: 18,
        mealName: "Baked Chicken",
        mealNote: "How we dream about our future",
        mealPrice: 9.99,
        mealType: "Light Breakfast",
        mealDetails: "The type of meal served or eaten at any given time varies by custom and location. In most modern cultures, three main meals are eaten: in the morning, early afternoon, and evening. Further, the names of meals are often interchangeable by custom as well. Some serve dinner as the main meal at midday, with supper as the late afternoon/early evening meal.",
        mealUrl: "https://i.ibb.co/TRysgJc/dinner1.png"
    }
]