import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
];
const products2 = [
  {
    id: uuid(),
    name: "Hydrating Moisturizer",
    description:
      "A lightweight and hydrating moisturizer that nourishes and softens the skin.",
    price: 290,
    rating: 4.5,
    category: "Moisturizers",
    brand: "CeraVe",
    image:
      "https://images.unsplash.com/photo-1605204768985-81bad5fd9d79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Brightening Serum",
    description:
      "A potent serum infused with vitamin C to brighten the complexion and reduce dark spots.",
    price: 390,
    rating: 4.8,
    category: "Serums",
    brand: "The Ordinary",
    image:
      "https://images.unsplash.com/photo-1656147961287-558ca90f898b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  },
  {
    id: uuid(),
    name: "Rose Water Toner",
    description:
      "A refreshing toner enriched with rose water to balance the skin's pH and provide a boost of hydration.",
    price: 120,
    rating: 4.6,
    category: "Toners",
    brand: "Heritage Store",
    image:
      "https://images.unsplash.com/photo-1573575155376-b5010099301b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    id: uuid(),
    name: "Jade Roller",
    description:
      "A cooling facial roller made from jade that helps to reduce puffiness and promote lymphatic drainage.",
    price: 240,
    rating: 4.4,
    category: "Skin Tools",
    brand: "Rose Quartz Beauty",
    image:
      "https://plus.unsplash.com/premium_photo-1677283511670-693a546c484a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHNraW5jYXJlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: uuid(),
    name: "Exfoliating Scrub",
    description:
      "A gentle exfoliating scrub that buffs away dead skin cells, leaving the skin smooth and radiant.",
    price: 190,
    rating: 4.7,
    category: "Exfoliators",
    brand: "Paula's Choice",
    image:
      "https://plus.unsplash.com/premium_photo-1677850271710-49fda851db22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Sheet Mask Set",
    description:
      "A set of hydrating and nourishing sheet masks for a pampering skincare experience.",
    price: 290,
    rating: 4.5,
    category: "Sheet Masks",
    brand: "Dr. Jart+",
    image:
      "https://images.unsplash.com/photo-1552046122-03184de85e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Nourishing Lip Balm",
    description:
      "A moisturizing lip balm that helps to nourish and protect dry lips. Infused with natural oils and butters.",
    price: 400,
    rating: 4.3,
    category: "Lip Balms",
    brand: "Burt's Bees",
    image:
      "https://images.unsplash.com/photo-1619798049549-a23f03c1e8d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: uuid(),
    name: "Gentle Face Wash",
    description:
      "A gentle facial cleanser that effectively removes impurities without stripping the skin's natural moisture.",
    price: 220,
    rating: 4.5,
    category: "Face Washes",
    brand: "Cetaphil",
    image:
      "https://images.unsplash.com/photo-1609175214983-594001465d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: uuid(),
    name: "Refreshing Facial Spray",
    description:
      "A refreshing facial mist that hydrates and revitalizes the skin throughout the day. Can be used as a makeup setting spray.",
    price: 390,
    rating: 4.7,
    category: "Facial Sprays",
    brand: "Mario Badescu",
    image:
      "https://images.unsplash.com/photo-1605612715345-21def7e08753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80",
  },
  {
    id: uuid(),
    name: "Hydrating Body Yogurt",
    description:
      "A lightweight and fast-absorbing body yogurt that deeply hydrates and nourishes the skin.",
    price: 500,
    rating: 4.6,
    category: "Body Care",
    brand: "The Body Shop",
    image:
      "https://images.unsplash.com/photo-1552256029-4e3aa83bbe2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: uuid(),
    name: "Moisturizing Body Milk",
    description:
      "A rich and creamy body milk that moisturizes and softens the skin. Enriched with nourishing ingredients.",
    price: 400,
    rating: 4.4,
    category: "Body Care",
    brand: "Nivea",
    image:
      "https://images.unsplash.com/photo-1632221522690-6a0c04bf6f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvZHklMjBtaWxrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    id: uuid(),
    name: "Revitalizing Facial Serum",
    description:
      "A revitalizing serum that boosts radiance and improves the overall appearance of the skin. Packed with antioxidants.",
    price: 270,
    rating: 4.8,
    category: "Serums",
    brand: "Ole Henriksen",
    image:
      "https://images.unsplash.com/photo-1665763630810-e6251bdd392d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: uuid(),
    name: "Broad Spectrum Sunscreen SPF 50",
    description:
      "A high-protection sunscreen that shields the skin from harmful UVA/UVB rays. Water-resistant and non-greasy formula.",
    price: 350,
    rating: 4.5,
    category: "Sunscreens",
    brand: "Neutrogena",
    image:
      "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Nourishing Body Oil",
    description:
      "A luxurious body oil that deeply nourishes and hydrates the skin. Infused with botanical extracts and essential oils.",
    price: 450,
    rating: 4.6,
    category: "Body Oils",
    brand: "Jo Malone",
    image:
      "https://plus.unsplash.com/premium_photo-1679750866972-9bfa3cb5ba38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Hydrating Body Wash",
    description:
      "A hydrating body wash that gently cleanses and moisturizes the skin. Leaves the skin feeling soft and refreshed.",
    price: 500,
    rating: 4.4,
    category: "Body Washes",
    brand: "Dove",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Exfoliating Loofah",
    description:
      "An exfoliating loofah sponge that helps to remove dead skin cells and promote smoother, healthier-looking skin.",
    price: 170,
    rating: 4.2,
    category: "Body Tools",
    brand: "The Body Shop",
    image:
      "https://images.pexels.com/photos/5420517/pexels-photo-5420517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Facial Tools",
    description:
      "A gentle facial cleansing brush that effectively removes dirt, oil, and makeup residue. Helps to achieve a deep cleanse.",
    price: 1000,
    rating: 4.7,
    category: "Facial Tools",
    brand: "Foreo",
    image:
      "https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: uuid(),
    name: "Gua Sha Facial Tool",
    description:
      "A traditional Chinese facial tool made from jade or rose quartz. Helps to improve circulation and sculpt the face.",
    price: 600,
    rating: 4.3,
    category: "Facial Tools",
    brand: "Skin Gym",
    image:
      "https://images.unsplash.com/photo-1643379855889-850035817d24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Skincare Combo Set",
    description:
      "A curated set of skincare essentials for a complete skincare routine. Includes cleanser, toner, serum, and moisturizer.",
    price: 2000,
    rating: 4.8,
    category: "Skincare Sets",
    brand: "Kiehl's",
    image:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: uuid(),
    name: "Revitalizing Facial Serum",
    description:
      "A lightweight and fast-absorbing serum that rejuvenates and revitalizes the skin. Helps to improve skin texture and tone.",
    price: 340,
    rating: 4.5,
    category: "Skincare Sets",
    brand: "Kiehl's",
    image:
      "https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: uuid(),
    name: "Fizzing Bath Bomb Set",
    description:
      "A set of colorful and fragrant bath bombs that fizz and dissolve in the bathwater, creating a relaxing and aromatic experience.",
    price: 550,
    rating: 4.4,
    category: "Bath Bombs",
    brand: "Lush",
    image:
      "https://images.pexels.com/photos/6620947/pexels-photo-6620947.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuid(),
    name: "Soothing Bath Salts",
    description:
      "A blend of mineral-rich bath salts infused with essential oils to provide relaxation and promote muscle relaxation.",
    price: 560,
    rating: 4.3,
    category: "Bath Salts",
    brand: "Dr. Teal's",
    image:
      "https://images.pexels.com/photos/11635430/pexels-photo-11635430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Body Cleansing Brush",
    description:
      "A soft bristle body brush that gently exfoliates the skin, removes impurities, and promotes smoother, healthier-looking skin.",
    price: 300,
    rating: 4.2,
    category: "Body Cleansing Tools",
    brand: "Cetaphil",
    image:
      "https://images.pexels.com/photos/13915919/pexels-photo-13915919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Aromatherapy Essential Oil Set",
    description:
      "A set of essential oils in various scents to create a soothing and relaxing atmosphere. Can be used in diffusers or diluted for massage.",
    price: 700,
    rating: 4.6,
    category: "Essential Oils",
    brand: "Radha Beauty",
    image:
      "https://images.pexels.com/photos/5682715/pexels-photo-5682715.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: uuid(),
    name: "Moisturizing Body Wash",
    description:
      "A hydrating body wash that cleanses the skin while leaving it feeling soft, smooth, and moisturized. Enriched with nourishing ingredients.",
    price: 800,
    rating: 4.5,
    category: "Body Washes",
    brand: "Aveeno",
    image:
      "https://images.unsplash.com/photo-1655368829116-e04c2942d9a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Silicone Body Scrubber",
    description:
      "A gentle and hygienic silicone body scrubber that exfoliates and cleanses the skin. Helps to remove dead skin cells and improve circulation.",
    price: 799,
    rating: 4.3,
    category: "Body Cleansing Tools",
    brand: "EcoTools",
    image:
      "https://images.pexels.com/photos/5241040/pexels-photo-5241040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Relaxing Lavender Bath Oil",
    description:
      "A luxurious bath oil infused with lavender essential oil to help relax the mind and body. Leaves the skin feeling nourished and hydrated.",
    price: 250,
    rating: 4.7,
    category: "Bath Oils",
    brand: "Bath & Body Works",
    image:
      "https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: uuid(),
    name: "Detoxifying Body Clay",
    description:
      "A purifying body clay that helps to detoxify the skin by drawing out impurities and excess oil. Leaves the skin feeling refreshed and revitalized.",
    price: 650,
    rating: 4.5,
    category: "Body Clays",
    brand: "Herbivore Botanicals",
    image:
      "https://images.pexels.com/photos/6978043/pexels-photo-6978043.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: uuid(),
    name: "Fruity Burst Bath Bomb",
    description:
      "A colorful and fragrant bath bomb infused with fruity scents. Creates a vibrant and aromatic bathing experience.",
    price: 899,
    rating: 4.6,
    category: "Bath Bombs",
    brand: "Bath Fizz Co.",
    image:
      "https://images.pexels.com/photos/7175332/pexels-photo-7175332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Soothing Lemon Bath Bomb",
    description:
      "A calming and relaxing bath bomb infused with the soothing scent of lemon. Helps to unwind and promote a peaceful sleep.",
    price: 999,
    rating: 4.7,
    category: "Bath Bombs",
    brand: "Relaxation Spa",
    image:
      "https://images.pexels.com/photos/6620946/pexels-photo-6620946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Eucalyptus Mint Bath Bomb",
    description:
      "An invigorating bath bomb infused with the refreshing scents of eucalyptus and mint. Provides a revitalizing and uplifting bathing experience.",
    price: 799,
    rating: 4.5,
    category: "Bath Bombs",
    brand: "Fresh Breeze",
    image:
      "https://images.pexels.com/photos/6683020/pexels-photo-6683020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Tropical Paradise Bath Bomb",
    description:
      "Transport yourself to a tropical getaway with this bath bomb featuring exotic scents of coconut, pineapple, and mango. Creates a blissful bathing experience.",
    price: 899,
    rating: 4.8,
    category: "Bath Bombs",
    brand: "Island Escape",
    image:
      "https://images.pexels.com/photos/11270386/pexels-photo-11270386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Soothing Lavender Bath Bomb",
    description:
      "A calming and relaxing bath bomb infused with the soothing scent of lavender. Helps to unwind and promote a peaceful sleep.",
    price: 999,
    rating: 4.7,
    category: "Bath Bombs",
    brand: "Relaxation Spa",
    image:
      "https://images.pexels.com/photos/6724360/pexels-photo-6724360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Relaxing Lavender Bath Salts",
    description:
      "Indulge in a relaxing bath experience with these lavender-infused bath salts. Helps to calm the mind and soothe tired muscles.",
    price: 1299,
    rating: 4.6,
    category: "Bath Salts",
    brand: "Serenity Spa",
    image:
      "https://images.pexels.com/photos/6621452/pexels-photo-6621452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Energizing Citrus Bath Salts",
    description:
      "Revitalize your senses with these citrus-scented bath salts. Provides an invigorating and refreshing bathing experience.",
    price: 1199,
    rating: 4.5,
    category: "Bath Salts",
    brand: "Zest & Zing",
    image:
      "https://images.pexels.com/photos/7263026/pexels-photo-7263026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Soothing Chamomile Bath Salts",
    description:
      "Experience tranquility with these chamomile-infused bath salts. Relieves stress and promotes relaxation.",
    price: 1399,
    rating: 4.7,
    category: "Bath Salts",
    brand: "Calm Waters",
    image:
      "https://images.pexels.com/photos/7418925/pexels-photo-7418925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Detoxifying Floral Bath Salts",
    description:
      "Detoxify your body with these flower-infused bath salts. Draws out impurities and leaves the skin feeling refreshed.",
    price: 1499,
    rating: 4.8,
    category: "Bath Salts",
    brand: "Pure Detox",
    image:
      "https://images.pexels.com/photos/5566050/pexels-photo-5566050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: " Venus Bath Salts",
    description:
      "Love your body with these flower-infused bath salts. Draws out impurities and leaves the skin feeling refreshed.",
    price: 1499,
    rating: 4.8,
    category: "Bath Salts",
    brand: "Pure Detox",
    image:
      "https://images.unsplash.com/photo-1550623685-2227f7bbef18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Moisturizing Shea Butter Soap",
    description:
      "Nourish your skin with this moisturizing shea butter soap. Leaves the skin feeling soft, smooth, and hydrated.",
    price: 699,
    rating: 4.5,
    category: "Bath Soaps",
    brand: "Nature's Essence",
    image:
      "https://images.pexels.com/photos/6621282/pexels-photo-6621282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Exfoliating Coffee Scrub Soap",
    description:
      "Awaken your senses with this invigorating coffee scrub soap. Gently exfoliates the skin, leaving it refreshed and revitalized.",
    price: 599,
    rating: 4.7,
    category: "Bath Soaps",
    brand: "Java Glow",
    image:
      "https://images.pexels.com/photos/6621323/pexels-photo-6621323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Soothing Soap Combo",
    description:
      "Soothe and hydrate your skin with these soaps. Helps to calm irritation and promote a healthy complexion.",
    price: 5000,
    rating: 4.6,
    category: "Bath Soaps",
    brand: "Fresh Mess",
    image:
      "https://images.pexels.com/photos/7500291/pexels-photo-7500291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Refreshing Citrus Soap",
    description:
      "Infused with the invigorating scent of citrus, this soap energizes and rejuvenates the skin.",
    price: 649,
    rating: 4.4,
    category: "Bath Soaps",
    brand: "Citrus Burst",
    image:
      "https://images.unsplash.com/photo-1614806687792-7fcec07dcbbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhbmRtYWRlJTIwc29hcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    id: uuid(),
    name: "Calming Lavender Soap",
    description:
      "Unwind and relax with this calming lavender soap. Delivers a soothing and aromatic bathing experience.",
    price: 699,
    rating: 4.8,
    category: "Bath Soaps",
    brand: "Lavender Dreams",
    image:
      "https://images.unsplash.com/photo-1607006344878-f7eef45446f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Hydrating Shampoo",
    description:
      "Gently cleanses and moisturizes dry and damaged hair. Leaves hair soft, smooth, and manageable.",
    price: 1299,
    rating: 4.5,
    category: "Shampoo",
    brand: "Silk & Shine",
    image:
      "https://images.pexels.com/photos/12998424/pexels-photo-12998424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Repairing Conditioner",
    description:
      "Nourishes and repairs damaged hair, leaving it silky and strong. Detangles and adds shine.",
    price: 1199,
    rating: 4.2,
    category: "Conditioner",
    brand: "Revive & Restore",
    image:
      "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Intensive Repair Hair Mask",
    description:
      "Deeply nourishes and repairs dry, damaged hair. Restores strength, elasticity, and shine.",
    price: 1499,
    rating: 4.8,
    category: "Hair Mask",
    brand: "Vital Repair",
    image:
      "https://images.pexels.com/photos/10110225/pexels-photo-10110225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Nourishing Hair Oil",
    description:
      "Infused with essential oils to moisturize and nourish the hair. Helps to reduce frizz and add shine.",
    price: 999,
    rating: 4.4,
    category: "Hair Oil",
    brand: "Silky Smooth",
    image:
      "https://images.pexels.com/photos/11984292/pexels-photo-11984292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Volumizing Shampoo",
    description:
      "Adds volume and body to fine and limp hair. Cleanses without weighing down the hair.",
    price: 1099,
    rating: 4.3,
    category: "Shampoo",
    brand: "Full & Fabulous",
    image:
      "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Curl Defining Conditioner Mask",
    description:
      "Enhances and defines natural curls. Moisturizes and reduces frizz for bouncy, healthy-looking curls.",
    price: 1299,
    rating: 4.6,
    category: "Conditioner",
    brand: "Curl Envy",
    image:
      "https://images.unsplash.com/photo-1629822341755-10be51ebf640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Color Protection Hair Mask",
    description:
      "Specially formulated to protect and nourish color-treated hair. Prolongs vibrancy and shine.",
    price: 1399,
    rating: 4.7,
    category: "Hair Mask",
    brand: "Color Care",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80",
  },
  {
    id: uuid(),
    name: "Smoothing Hair Oil",
    description:
      "Smooths and tames frizz, leaving the hair silky and manageable. Provides heat protection.",
    price: 199,
    rating: 4.5,
    category: "Hair Oil",
    brand: "Smooth Operator",
    image:
      "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Ultimate Hair Care Set",
    description:
      "A complete hair care set that includes shampoo, conditioner, hair mask, and hair oil. Provides nourishment, hydration, and shine.",
    price: 3999,
    rating: 4.8,
    category: "Hair Combo",
    brand: "Luxury Locks",
    image:
      "https://images.unsplash.com/photo-1630082900894-edbd503588f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Repair and Restore Kit",
    description:
      "A kit designed to repair and restore damaged hair. Includes shampoo, conditioner, and hair mask. Strengthens and revitalizes the hair.",
    price: 2999,
    rating: 4.6,
    category: "Hair Combo",
    brand: "Renew & Revive",
    image:
      "https://images.unsplash.com/photo-1587028691659-cb3e36624a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Curls and Waves Bundle",
    description:
      "A bundle specifically curated for curly and wavy hair. Includes a curl-defining shampoo, conditioner, and styling gel. Enhances and defines natural curls.",
    price: 2499,
    rating: 4.5,
    category: "Hair Combo",
    brand: "Curlicious",
    image:
      "https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Heat Care",
    description:
      "A trio of products formulated for color-treated hair. Includes a color-protecting shampoo, conditioner, and leave-in treatment. Helps maintain vibrant and healthy-looking color.",
    price: 2799,
    rating: 4.7,
    category: "Hair Combo",
    brand: "ColorGuard",
    image:
      "https://images.unsplash.com/photo-1654154165437-1749c4c8ad7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: uuid(),
    name: "Hydrating Shampoo",
    description:
      "Gently cleanses and moisturizes dry and damaged hair. Leaves hair soft, smooth, and manageable.",
    price: 1299,
    rating: 4.5,
    category: "Shampoo",
    brand: "Silk & Shine",
    image: "https://via.placeholder.com/150",
  },
  {
    id: uuid(),
    name: "Repairing Shampoo",
    description:
      "Nourishes and repairs damaged hair, leaving it silky and strong. Detangles and adds shine.",
    price: 1199,
    rating: 4.2,
    category: "Shampoo",
    brand: "Revive & Restore",
    image:
      "https://images.unsplash.com/photo-1593560368921-9b9fd9e5841f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Repairing Shampoo Combo",
    description:
      "Nourishes and repairs damaged hair, leaving it silky and strong. Detangles and adds shine.",
    price: 1199,
    rating: 4.2,
    category: "Shampoo",
    brand: "Revive & Restore",
    image:
      "https://images.unsplash.com/photo-1615041359204-45a4dff5ec92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: uuid(),
    name: "Volumizing Shampoo Combo",
    description:
      "Adds volume and body to fine and limp hair. Cleanses without weighing down the hair.",
    price: 1099,
    rating: 4.3,
    category: "Shampoo",
    brand: "Full & Fabulous",
    image:
      "https://images.unsplash.com/photo-1567433517180-d3e56cf7f81e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: uuid(),
    name: "Shampoo Combo",
    description:
      "Adds volume and body to fine and limp hair. Cleanses without weighing down the hair.",
    price: 1099,
    rating: 4.3,
    category: "Shampoo",
    brand: "Full & Fabulous",
    image:
      "https://images.pexels.com/photos/8467970/pexels-photo-8467970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    name: "Strong Hold Hair Gel",
    description:
      "Provides long-lasting hold and control for all hair types. Adds shine and texture.",
    price: 120,
    rating: 4.3,
    category: "Shampoo",
    brand: "Full & Fabulous",
    image:
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
  },
];
