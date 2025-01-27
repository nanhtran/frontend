export const mainCategory = [
  {
    name: "Men",
    categoryId: "men",
    level: 1,
    levelTwoCategory: [
      {
        name: "Topwear",
        categoryId: "men_topwear",
        parentCategoryId: "men",
        level: 2,
        levelThreeCategory: [
          {
            name: "Shirts",
            categoryId: "men_topwear_shirts",
            parentCategoryId: "men_topwear",
            level: 3,
          },
          {
            name: "T-Shirts",
            categoryId: "men_topwear_tshirts",
            parentCategoryId: "men_topwear",
            level: 3,
          },
          {
            name: "Jackets",
            categoryId: "men_topwear_jackets",
            parentCategoryId: "men_topwear",
            level: 3,
          },
        ],
      },
      {
        name: "Bottomwear",
        categoryId: "men_bottomwear",
        parentCategoryId: "men",
        level: 2,
        levelThreeCategory: [
          {
            name: "Jeans",
            categoryId: "men_bottomwear_jeans",
            parentCategoryId: "men_bottomwear",
            level: 3,
          },
          {
            name: "Trousers",
            categoryId: "men_bottomwear_trousers",
            parentCategoryId: "men_bottomwear",
            level: 3,
          },
          {
            name: "Shorts",
            categoryId: "men_bottomwear_shorts",
            parentCategoryId: "men_bottomwear",
            level: 3,
          },
        ],
      },
      {
        name: "Footwear",
        categoryId: "men_footwear",
        parentCategoryId: "men",
        level: 2,
        levelThreeCategory: [
          {
            name: "Casual Shoes",
            categoryId: "men_footwear_casual",
            parentCategoryId: "men_footwear",
            level: 3,
          },
          {
            name: "Formal Shoes",
            categoryId: "men_footwear_formal",
            parentCategoryId: "men_footwear",
            level: 3,
          },
          {
            name: "Sneakers",
            categoryId: "men_footwear_sneakers",
            parentCategoryId: "men_footwear",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Women",
    categoryId: "women",
    level: 1,
    levelTwoCategory: [
      {
        name: "Ethnic Wear",
        categoryId: "women_ethnic_wear",
        parentCategoryId: "women",
        level: 2,
        levelThreeCategory: [
          {
            name: "Sarees",
            categoryId: "women_ethnic_sarees",
            parentCategoryId: "women_ethnic_wear",
            level: 3,
          },
          {
            name: "Lehenga",
            categoryId: "women_ethnic_lehenga",
            parentCategoryId: "women_ethnic_wear",
            level: 3,
          },
          {
            name: "Kurtas",
            categoryId: "women_ethnic_kurtas",
            parentCategoryId: "women_ethnic_wear",
            level: 3,
          },
        ],
      },
      {
        name: "Western Wear",
        categoryId: "women_western_wear",
        parentCategoryId: "women",
        level: 2,
        levelThreeCategory: [
          {
            name: "Dresses",
            categoryId: "women_western_dresses",
            parentCategoryId: "women_western_wear",
            level: 3,
          },
          {
            name: "Tops",
            categoryId: "women_western_tops",
            parentCategoryId: "women_western_wear",
            level: 3,
          },
          {
            name: "Skirts",
            categoryId: "women_western_skirts",
            parentCategoryId: "women_western_wear",
            level: 3,
          },
        ],
      },
      {
        name: "Footwear",
        categoryId: "women_footwear",
        parentCategoryId: "women",
        level: 2,
        levelThreeCategory: [
          {
            name: "Heels",
            categoryId: "women_footwear_heels",
            parentCategoryId: "women_footwear",
            level: 3,
          },
          {
            name: "Flats",
            categoryId: "women_footwear_flats",
            parentCategoryId: "women_footwear",
            level: 3,
          },
          {
            name: "Sneakers",
            categoryId: "women_footwear_sneakers",
            parentCategoryId: "women_footwear",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Home & Furniture",
    categoryId: "home_furniture",
    level: 1,
    levelTwoCategory: [
      {
        name: "Living Room",
        categoryId: "home_furniture_living_room",
        parentCategoryId: "home_furniture",
        level: 2,
        levelThreeCategory: [
          {
            name: "Sofas",
            categoryId: "home_furniture_living_sofas",
            parentCategoryId: "home_furniture_living_room",
            level: 3,
          },
          {
            name: "Coffee Tables",
            categoryId: "home_furniture_living_tables",
            parentCategoryId: "home_furniture_living_room",
            level: 3,
          },
        ],
      },
      {
        name: "Bedroom",
        categoryId: "home_furniture_bedroom",
        parentCategoryId: "home_furniture",
        level: 2,
        levelThreeCategory: [
          {
            name: "Beds",
            categoryId: "home_furniture_bedroom_beds",
            parentCategoryId: "home_furniture_bedroom",
            level: 3,
          },
          {
            name: "Wardrobes",
            categoryId: "home_furniture_bedroom_wardrobes",
            parentCategoryId: "home_furniture_bedroom",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Electronics",
    categoryId: "electronics",
    level: 1,
    levelTwoCategory: [
      {
        name: "Mobiles",
        categoryId: "electronics_mobiles",
        parentCategoryId: "electronics",
        level: 2,
        levelThreeCategory: [
          {
            name: "Smartphones",
            categoryId: "electronics_mobiles_smartphones",
            parentCategoryId: "electronics_mobiles",
            level: 3,
          },
          {
            name: "Feature Phones",
            categoryId: "electronics_mobiles_feature_phones",
            parentCategoryId: "electronics_mobiles",
            level: 3,
          },
        ],
      },
      {
        name: "Home Appliances",
        categoryId: "electronics_home_appliances",
        parentCategoryId: "electronics",
        level: 2,
        levelThreeCategory: [
          {
            name: "Refrigerators",
            categoryId: "electronics_appliances_refrigerators",
            parentCategoryId: "electronics_home_appliances",
            level: 3,
          },
          {
            name: "Washing Machines",
            categoryId: "electronics_appliances_washing_machines",
            parentCategoryId: "electronics_home_appliances",
            level: 3,
          },
        ],
      },
    ],
  },
];
