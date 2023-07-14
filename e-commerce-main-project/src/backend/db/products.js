import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "best-seller-1",
    name: "Brightening Serum",
    description:
      "A potent serum infused with vitamin C to brighten the complexion and reduce dark spots.",
    price: 390,
    rating: 5.0,
    category: "Skin Care",
    brand: "The Ordinary",
    image:
      "https://images.unsplash.com/photo-1656147961287-558ca90f898b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  },
  {
    _id: uuid(),
    name: "Eucalyptus Mint Bath Bomb",
    description:
      "An invigorating bath bomb infused with the refreshing scents of eucalyptus and mint. Provides a revitalizing and uplifting bathing experience.",
    price: 799,
    rating: 4.5,
    category: "Bath & Body",
    brand: "Fresh Breeze",
    image:
      "https://images.pexels.com/photos/6683020/pexels-photo-6683020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Rose Water Toner",
    description:
      "A refreshing toner enriched with rose water tos balance the skin's pH and provide a boost of hydration.",
    price: 120,
    rating: 4.6,
    category: "Skin Care",
    brand: "Heritage Store",
    image:
      "https://images.unsplash.com/photo-1573575155376-b5010099301b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: "best-seller-2",
    name: "Soothing Lemon Bath Bomb",
    description:
      "A calming and relaxing bath bomb infused with the soothing scent of lemon. Helps to unwind and promote a peaceful sleep.",
    price: 999,
    rating: 5.0,
    category: "Bath & Body",
    brand: "Relaxation Spa",
    image:
      "https://images.pexels.com/photos/6620946/pexels-photo-6620946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    _id: uuid(),
    name: "Exfoliating Scrub",
    description:
      "A gentle exfoliating scrub that buffs away dead skin cells, leaving the skin smooth and radiant.",
    price: 190,
    rating: 4.7,
    category: "Skin Care",
    brand: "Paula's Choice",
    image:
      "https://plus.unsplash.com/premium_photo-1677850271710-49fda851db22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Sheet Mask Set",
    description:
      "A set of hydrating and nourishing sheet masks for a pampering skincare experience.",
    price: 290,
    rating: 4.5,
    category: "Skin Care",
    brand: "Dr. Jart+",
    image:
      "https://images.unsplash.com/photo-1552046122-03184de85e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Nourishing Lip Balm",
    description:
      "A moisturizing lip balm that helps to nourish and protect dry lips. Infused with natural oils and butters.",
    price: 400,
    rating: 4.3,
    category: "Skin Care",
    brand: "Burt's Bees",
    image:
      "https://images.unsplash.com/photo-1619798049549-a23f03c1e8d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    _id: uuid(),
    name: "Gentle Face Wash",
    description:
      "A gentle facial cleanser that effectively removes impurities without stripping the skin's natural moisture.",
    price: 220,
    rating: 4.5,
    category: "Skin Care",
    brand: "Cetaphil",
    image:
      "https://images.unsplash.com/photo-1609175214983-594001465d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    _id: uuid(),
    name: "Soothing Shampoo",
    description:
      "Gently cleanses and moisturizes dry and damaged hair. Leaves hair soft, smooth, and manageable.",
    price: 1299,
    rating: 4.5,
    category: "Hair Care",
    brand: "Silk & Shine",
    image:
      "https://images.unsplash.com/photo-1535927853242-fa2bde74fb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },

  {
    _id: uuid(),
    name: "Handmade Mud Pot Set",
    description:
      "Set of handcrafted mud pots in various sizes for a rustic touch.",
    price: 420,
    rating: 4.5,
    category: "Home Decor",
    brand: "Earthly Delights",
    image:
      "https://images.unsplash.com/photo-1613989999710-4d305027df02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },

  {
    _id: uuid(),
    name: "Moisturizing Body Milk",
    description:
      "A rich and creamy body milk that moisturizes and softens the skin. Enriched with nourishing ingredients.",
    price: 400,
    rating: 4.4,
    category: "Skin Care",
    brand: "Nivea",
    image:
      "https://images.unsplash.com/photo-1632221522690-6a0c04bf6f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvZHklMjBtaWxrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    _id: uuid(),
    name: "Revitalizing Facial Serum",
    description:
      "A revitalizing serum that boosts radiance and improves the overall appearance of the skin. Packed with antioxidants.",
    price: 270,
    rating: 4.8,
    category: "Skin Care",
    brand: "Ole Henriksen",
    image:
      "https://images.unsplash.com/photo-1665763630810-e6251bdd392d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    _id: uuid(),
    name: "Broad Spectrum Sunscreen SPF 50",
    description:
      "A high-protection sunscreen that shields the skin from harmful UVA/UVB rays. Water-resistant and non-greasy formula.",
    price: 350,
    rating: 4.5,
    category: "Skin Care",
    brand: "Neutrogena",
    image:
      "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Nourishing Body Oil",
    description:
      "A luxurious body oil that deeply nourishes and hydrates the skin. Infused with botanical extracts and essential oils.",
    price: 450,
    rating: 4.6,
    category: "Bath & Body",
    brand: "Jo Malone",
    image:
      "https://plus.unsplash.com/premium_photo-1679750866972-9bfa3cb5ba38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Hydrating Body Wash",
    description:
      "A hydrating body wash that gently cleanses and moisturizes the skin. Leaves the skin feeling soft and refreshed.",
    price: 500,
    rating: 4.4,
    category: "Bath & Body",
    brand: "Dove",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Exfoliating Loofah",
    description:
      "An exfoliating loofah sponge that helps to remove dead skin cells and promote smoother, healthier-looking skin.",
    price: 170,
    rating: 4.2,
    category: "Bath & Body",
    brand: "The Body Shop",
    image:
      "https://images.pexels.com/photos/5420517/pexels-photo-5420517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Facial Tools",
    description:
      "A gentle facial cleansing brush that effectively removes dirt, oil, and makeup residue. Helps to achieve a deep cleanse.",
    price: 1000,
    rating: 4.7,
    category: "Skin Care",
    brand: "Foreo",
    image:
      "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Gua Sha Facial Tool",
    description:
      "A traditional Chinese facial tool made from jade or rose quartz. Helps to improve circulation and sculpt the face.",
    price: 600,
    rating: 4.3,
    category: "Skin Care",
    brand: "Skin Gym",
    image:
      "https://images.unsplash.com/photo-1643379855889-850035817d24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Skincare Combo Set",
    description:
      "A curated set of skincare essentials for a complete skincare routine. Includes cleanser, toner, serum, and moisturizer.",
    price: 2000,
    rating: 4.8,
    category: "Skin Care",
    brand: "Kiehl's",
    image:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    _id: uuid(),
    name: "Revitalizing Facial Serum",
    description:
      "A lightweight and fast-absorbing serum that rejuvenates and revitalizes the skin. Helps to improve skin texture and tone.",
    price: 340,
    rating: 4.5,
    category: "Skin Care",
    brand: "Kiehl's",
    image:
      "https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    _id: uuid(),
    name: "Fizzing Bath Bomb Set",
    description:
      "A set of colorful and fragrant bath bombs that fizz and dissolve in the bathwater, creating a relaxing and aromatic experience.",
    price: 550,
    rating: 4.4,
    category: "Bath & Body",
    brand: "Lush",
    image:
      "https://images.pexels.com/photos/6620947/pexels-photo-6620947.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: uuid(),
    name: "Soothing Bath Salts",
    description:
      "A blend of mineral-rich bath salts infused with essential oils to provide relaxation and promote muscle relaxation.",
    price: 560,
    rating: 4.3,
    category: "Bath & Body",
    brand: "Dr. Teal's",
    image:
      "https://images.pexels.com/photos/11635430/pexels-photo-11635430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Body Cleansing Brush",
    description:
      "A soft bristle body brush that gently exfoliates the skin, removes impurities, and promotes smoother, healthier-looking skin.",
    price: 300,
    rating: 4.2,
    category: "Bath & Body",
    brand: "Cetaphil",
    image:
      "https://images.pexels.com/photos/13915919/pexels-photo-13915919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Aromatherapy Essential Oil Set",
    description:
      "A set of essential oils in various scents to create a soothing and relaxing atmosphere. Can be used in diffusers or diluted for massage.",
    price: 700,
    rating: 4.6,
    category: "Bath & Body",
    brand: "Radha Beauty",
    image:
      "https://images.pexels.com/photos/5682715/pexels-photo-5682715.jpeg?auto=compress&cs=tinysrgb&w=400",
  },

  {
    _id: uuid(),
    name: "Silicone Body Scrubber",
    description:
      "A gentle and hygienic silicone body scrubber that exfoliates and cleanses the skin. Helps to remove dead skin cells and improve circulation.",
    price: 799,
    rating: 4.3,
    category: "Bath & Body",
    brand: "EcoTools",
    image:
      "https://images.pexels.com/photos/5241040/pexels-photo-5241040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Relaxing Lavender Bath Oil",
    description:
      "A luxurious bath oil infused with lavender essential oil to help relax the mind and body. Leaves the skin feeling nourished and hydrated.",
    price: 250,
    rating: 4.7,
    category: "Bath & Body",
    brand: "Bath & Body Works",
    image:
      "https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    _id: uuid(),
    name: "LED Fairy Lights",
    description:
      "String of warm white LED lights for creating a magical ambiance.",
    price: 290,
    rating: 4.2,
    category: "Home Decor",
    brand: "Twinkle Glow",
    image:
      "https://images.unsplash.com/photo-1544515137-646173abc5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Detoxifying Body Clay",
    description:
      "A purifying body clay that helps to detoxify the skin by drawing out impurities and excess oil. Leaves the skin feeling refreshed and revitalized.",
    price: 650,
    rating: 4.5,
    category: "Bath & Body",
    brand: "Herbivore Botanicals",
    image:
      "https://images.pexels.com/photos/6978043/pexels-photo-6978043.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    _id: uuid(),
    name: "Fruity Burst Bath Bomb",
    description:
      "A colorful and fragrant bath bomb infused with fruity scents. Creates a vibrant and aromatic bathing experience.",
    price: 899,
    rating: 4.6,
    category: "Bath & Body",
    brand: "Bath Fizz Co.",
    image:
      "https://images.pexels.com/photos/7175332/pexels-photo-7175332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    _id: uuid(),
    name: "Tropical Paradise Bath Bomb",
    description:
      "Transport yourself to a tropical getaway with this bath bomb featuring exotic scents of coconut, pineapple, and mango. Creates a blissful bathing experience.",
    price: 899,
    rating: 4.8,
    category: "Bath & Body",
    brand: "Island Escape",
    image:
      "https://images.pexels.com/photos/11270386/pexels-photo-11270386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Soothing Lavender Bath Bomb",
    description:
      "A calming and relaxing bath bomb infused with the soothing scent of lavender. Helps to unwind and promote a peaceful sleep.",
    price: 999,
    rating: 4.7,
    category: "Bath & Body",
    brand: "Relaxation Spa",
    image:
      "https://images.pexels.com/photos/6724360/pexels-photo-6724360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Relaxing Lavender Bath Salts",
    description:
      "Indulge in a relaxing bath experience with these lavender-infused bath salts. Helps to calm the mind and soothe tired muscles.",
    price: 1299,
    rating: 4.6,
    category: "Bath & Body",
    brand: "Serenity Spa",
    image:
      "https://images.pexels.com/photos/6621452/pexels-photo-6621452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Energizing Citrus Bath Salts",
    description:
      "Revitalize your senses with these citrus-scented bath salts. Provides an invigorating and refreshing bathing experience.",
    price: 1199,
    rating: 4.5,
    category: "Bath & Body",
    brand: "Zest & Zing",
    image:
      "https://images.pexels.com/photos/7263026/pexels-photo-7263026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Soothing Chamomile Bath Salts",
    description:
      "Experience tranquility with these chamomile-infused bath salts. Relieves stress and promotes relaxation.",
    price: 1399,
    rating: 4.7,
    category: "Bath & Body",
    brand: "Calm Waters",
    image:
      "https://images.pexels.com/photos/7418925/pexels-photo-7418925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Detoxifying Floral Bath Salts",
    description:
      "Detoxify your body with these flower-infused bath salts. Draws out impurities and leaves the skin feeling refreshed.",
    price: 1499,
    rating: 4.8,
    category: "Bath & Body",
    brand: "Pure Detox",
    image:
      "https://images.pexels.com/photos/5566050/pexels-photo-5566050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: " Venus Bath Salts",
    description:
      "Love your body with these flower-infused bath salts. Draws out impurities and leaves the skin feeling refreshed.",
    price: 1499,
    rating: 4.8,
    category: "Bath & Body",
    brand: "Pure Detox",
    image:
      "https://images.unsplash.com/photo-1550623685-2227f7bbef18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Moisturizing Shea Butter Soap",
    description:
      "Nourish your skin with this moisturizing shea butter soap. Leaves the skin feeling soft, smooth, and hydrated.",
    price: 699,
    rating: 4.5,
    category: "Bath & Body",
    brand: "Nature's Essence",
    image:
      "https://images.pexels.com/photos/6621282/pexels-photo-6621282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Exfoliating Coffee Scrub Soap",
    description:
      "Awaken your senses with this invigorating coffee scrub soap. Gently exfoliates the skin, leaving it refreshed and revitalized.",
    price: 599,
    rating: 4.7,
    category: "Bath & Body",
    brand: "Java Glow",
    image:
      "https://images.pexels.com/photos/6621323/pexels-photo-6621323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Soothing Soap Combo",
    description:
      "Soothe and hydrate your skin with these soaps. Helps to calm irritation and promote a healthy complexion.",
    price: 3000,
    rating: 4.6,
    category: "Bath & Body",
    brand: "Fresh Mess",
    image:
      "https://images.pexels.com/photos/7500291/pexels-photo-7500291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Refreshing Citrus Soap",
    description:
      "Infused with the invigorating scent of citrus, this soap energizes and rejuvenates the skin.",
    price: 649,
    rating: 4.4,
    category: "Bath & Body",
    brand: "Citrus Burst",
    image:
      "https://images.unsplash.com/photo-1614806687792-7fcec07dcbbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhbmRtYWRlJTIwc29hcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    _id: uuid(),
    name: "Calming Lavender Soap",
    description:
      "Unwind and relax with this calming lavender soap. Delivers a soothing and aromatic bathing experience.",
    price: 699,
    rating: 4.8,
    category: "Bath & Body",
    brand: "Lavender Dreams",
    image:
      "https://images.unsplash.com/photo-1607006344878-f7eef45446f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Hydrating Shampoo",
    description:
      "Gently cleanses and moisturizes dry and damaged hair. Leaves hair soft, smooth, and manageable.",
    price: 1299,
    rating: 4.5,
    category: "Hair Care",
    brand: "Silk & Shine",
    image:
      "https://images.unsplash.com/photo-1564742191034-961da6c0e088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },

  {
    _id: uuid(),
    name: "Intensive Repair Hair Mask",
    description:
      "Deeply nourishes and repairs dry, damaged hair. Restores strength, elasticity, and shine.",
    price: 1499,
    rating: 4.8,
    category: "Hair Care",
    brand: "Vital Repair",
    image:
      "https://images.pexels.com/photos/10110225/pexels-photo-10110225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Nourishing Hair Oil",
    description:
      "Infused with essential oils to moisturize and nourish the hair. Helps to reduce frizz and add shine.",
    price: 999,
    rating: 4.4,
    category: "Hair Care",
    brand: "Silky Smooth",
    image:
      "https://images.pexels.com/photos/11984292/pexels-photo-11984292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Volumizing Shampoo",
    description:
      "Adds volume and body to fine and limp hair. Cleanses without weighing down the hair.",
    price: 1099,
    rating: 4.3,
    category: "Hair Care",
    brand: "Full & Fabulous",
    image:
      "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Curl Defining Conditioner Mask",
    description:
      "Enhances and defines natural curls. Moisturizes and reduces frizz for bouncy, healthy-looking curls.",
    price: 1299,
    rating: 4.6,
    category: "Hair Care",
    brand: "Curl Envy",
    image:
      "https://images.unsplash.com/photo-1629822341755-10be51ebf640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Color Protection Hair Mask",
    description:
      "Specially formulated to protect and nourish color-treated hair. Prolongs vibrancy and shine.",
    price: 1399,
    rating: 4.7,
    category: "Hair Care",
    brand: "Color Care",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80",
  },
  {
    _id: uuid(),
    name: "Smoothing Hair Oil",
    description:
      "Smooths and tames frizz, leaving the hair silky and manageable. Provides heat protection.",
    price: 199,
    rating: 4.5,
    category: "Hair Care",
    brand: "Smooth Operator",
    image:
      "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Ultimate Hair Care Set",
    description:
      "A complete hair care set that includes shampoo, conditioner, hair mask, and hair oil. Provides nourishment, hydration, and shine.",
    price: 3000,
    rating: 4.8,
    category: "Hair Care",
    brand: "Luxury Locks",
    image:
      "https://images.unsplash.com/photo-1630082900894-edbd503588f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Repair and Restore Kit",
    description:
      "A kit designed to repair and restore damaged hair. Includes shampoo, conditioner, and hair mask. Strengthens and revitalizes the hair.",
    price: 2999,
    rating: 4.6,
    category: "Hair Care",
    brand: "Renew & Revive",
    image:
      "https://images.unsplash.com/photo-1587028691659-cb3e36624a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Curls and Waves Bundle",
    description:
      "A bundle specifically curated for curly and wavy hair. Includes a curl-defining shampoo, conditioner, and styling gel. Enhances and defines natural curls.",
    price: 2499,
    rating: 4.5,
    category: "Hair Care",
    brand: "Curlicious",
    image:
      "https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Heat Care",
    description:
      "A trio of products formulated for color-treated hair. Includes a color-protecting shampoo, conditioner, and leave-in treatment. Helps maintain vibrant and healthy-looking color.",
    price: 2799,
    rating: 4.7,
    category: "Hair Care",
    brand: "ColorGuard",
    image:
      "https://images.unsplash.com/photo-1654154165437-1749c4c8ad7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    _id: uuid(),
    name: "Hydrating Body Yogurt",
    description:
      "A lightweight and fast-absorbing body yogurt that deeply hydrates and nourishes the skin.",
    price: 500,
    rating: 4.6,
    category: "Skin Care",
    brand: "The Body Shop",
    image:
      "https://images.unsplash.com/photo-1552256029-4e3aa83bbe2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },

  {
    _id: uuid(),
    name: "Repairing Shampoo",
    description:
      "Nourishes and repairs damaged hair, leaving it silky and strong. Detangles and adds shine.",
    price: 1199,
    rating: 4.2,
    category: "Hair Care",
    brand: "Revive & Restore",
    image:
      "https://images.unsplash.com/photo-1593560368921-9b9fd9e5841f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Repairing Shampoo Combo",
    description:
      "Nourishes and repairs damaged hair, leaving it silky and strong. Detangles and adds shine.",
    price: 1199,
    rating: 4.2,
    category: "Hair Care",
    brand: "Revive & Restore",
    image:
      "https://images.unsplash.com/photo-1615041359204-45a4dff5ec92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    _id: "best-seller-3",
    name: "Love Shampoo Combo",
    description:
      "Adds volume and body to fine and limp hair. Cleanses without weighing down the hair.",
    price: 1099,
    rating: 5.0,
    category: "Hair Care",
    brand: "Full & Fabulous",
    image:
      "https://images.pexels.com/photos/8467970/pexels-photo-8467970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Strong Hold Hair Gel",
    description:
      "Provides long-lasting hold and control for all hair types. Adds shine and texture.",
    price: 120,
    rating: 4.3,
    category: "Hair Care",
    brand: "Full & Fabulous",
    image:
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
  },
  {
    _id: uuid(),
    name: "Handcrafted Ceramic Vase",
    description:
      "Beautifully hand-painted ceramic vase for floral arrangements.",
    price: 450,
    rating: 4.8,
    category: "Home Decor",
    brand: "Artisan Home",
    image:
      "https://images.unsplash.com/photo-1578913685467-e5bd9fe17fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Scented Soy Wax Candle",
    description: "Eco-friendly soy wax candle with a soothing lavender scent.",
    price: 180,
    rating: 4.5,
    category: "Home Decor",
    brand: "Natura Aromas",
    image:
      "https://images.pexels.com/photos/15172848/pexels-photo-15172848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    _id: uuid(),
    name: "Rustic Wooden Wall Shelf",
    description:
      "Handcrafted wooden shelf for displaying photos and decor items.",
    price: 750,
    rating: 4.7,
    category: "Home Decor",
    brand: "Rustic Charm",
    image:
      "https://images.unsplash.com/photo-1471476730017-8169d050fa19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80",
  },
  {
    _id: uuid(),
    name: "Repairing Conditioner",
    description:
      "Nourishes and repairs damaged hair, leaving it silky and strong. Detangles and adds shine.",
    price: 1199,
    rating: 4.2,
    category: "Hair Care",
    brand: "Revive & Restore",
    image:
      "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Ceramic Plant Pot",
    description: "Minimalist ceramic pot for indoor plants.",
    price: 320,
    rating: 4.6,
    category: "Home Decor",
    brand: "Green Thumb",
    image:
      "https://images.unsplash.com/photo-1677761640321-b80251be00ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Hydrating Moisturizer",
    description:
      "A lightweight and hydrating moisturizer that nourishes and softens the skin.",
    price: 290,
    rating: 4.5,
    category: "Skin Care",
    brand: "CeraVe",
    image:
      "https://images.unsplash.com/photo-1605204768985-81bad5fd9d79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Scented Reed Diffuser",
    description:
      "Elegant reed diffuser with a refreshing ocean breeze fragrance.",
    price: 220,
    rating: 4.3,
    category: "Home Decor",
    brand: "Aroma Haven",
    image:
      "https://images.pexels.com/photos/8484055/pexels-photo-8484055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: "best-seller-4",
    name: "Glass Terrarium",
    description: "Glass terrarium for creating your own mini plant ecosystem.",
    price: 280,
    rating: 5.0,
    category: "Home Decor",
    brand: "Nature's Haven",
    image:
      "https://images.pexels.com/photos/4650144/pexels-photo-4650144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Marble Candle Set",
    description:
      "Set of marble candle holders in varying heights for a stylish look.",
    price: 540,
    rating: 4.4,
    category: "Home Decor",
    brand: "Luxury Decor",
    image:
      "https://images.pexels.com/photos/10789371/pexels-photo-10789371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Artificial Succulent Set",
    description:
      "Realistic artificial succulents in a set of 3, perfect for low-maintenance decor.",
    price: 190,
    rating: 4.1,
    category: "Home Decor",
    brand: "Greenery Delight",
    image:
      "https://images.pexels.com/photos/3952027/pexels-photo-3952027.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    _id: uuid(),
    name: "Minimalist Aesthetic Pot",
    description:
      "Sleek and modern aesthetic pot for small plants or succulents.",
    price: 250,
    rating: 4.7,
    category: "Home Decor",
    brand: "Urban Oasis",
    image:
      "https://plus.unsplash.com/premium_photo-1668704252687-173716305688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    _id: uuid(),
    name: "Refreshing Facial Spray",
    description:
      "A refreshing facial mist that hydrates and revitalizes the skin throughout the day. Can be used as a makeup setting spray.",
    price: 390,
    rating: 4.7,
    category: "Skin Care",
    brand: "Mario Badescu",
    image:
      "https://images.unsplash.com/photo-1605612715345-21def7e08753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80",
  },

  {
    _id: uuid(),
    name: "Mud Jewelry Plate",
    description:
      "Decorative plate with compartments for organizing and displaying jewelry.",
    price: 320,
    rating: 4.6,
    category: "Home Decor",
    brand: "Glamourous Gems",
    image:
      "https://images.unsplash.com/photo-1613989999658-0075d1359836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    _id: uuid(),
    name: "Japanese Candle Set",
    description:
      "Set of traditional Japanese candles with a calming and aromatic experience.",
    price: 1280,
    rating: 4.3,
    category: "Home Decor",
    brand: "Zen Harmony",
    image:
      "https://images.unsplash.com/photo-1603905179139-db12ab535ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80",
  },
  {
    _id: uuid(),
    name: "Jade Roller",
    description:
      "A cooling facial roller made from jade that helps to reduce puffiness and promote lymphatic drainage.",
    price: 240,
    rating: 4.4,
    category: "Skin Care",
    brand: "Rose Quartz Beauty",
    image:
      "https://plus.unsplash.com/premium_photo-1677283511670-693a546c484a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHNraW5jYXJlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    name: "Glass Terrarium With Deer",
    description: "Beautiful glass terrarium for creating a mini indoor garden.",
    price: 480,
    rating: 4.8,
    category: "Home Decor",
    brand: "Enchanted Gardens",
    image:
      "https://images.pexels.com/photos/4650141/pexels-photo-4650141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Wooden Candle Holders",
    description:
      "Set of handcrafted wooden candle holders for a natural and cozy ambiance.",
    price: 100,
    rating: 4.4,
    category: "Home Decor",
    brand: "Rustic Retreat",
    image:
      "https://images.pexels.com/photos/2950326/pexels-photo-2950326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Glowing Mirror",
    description:
      "Wall-mounted mirror with LED backlighting for an enchanting glow.",
    price: 850,
    rating: 5.0,
    category: "Home Decor",
    brand: "Luminous Reflections",
    image:
      "https://images.pexels.com/photos/2207894/pexels-photo-2207894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Musk Candle",
    description:
      "Rich and musky scented candle for a warm and inviting atmosphere.",
    price: 220,
    rating: 4.2,
    category: "Home Decor",
    brand: "Sensual Scents",
    image: "https://images.pexels.com/photos/9869351/pexels-photo-9869351.jpeg",
  },
  {
    _id: uuid(),
    name: "Aesthetic Scented Candle",
    description:
      "Beautifully designed scented candle with a delicate and captivating fragrance.",
    price: 360,
    rating: 4.7,
    category: "Home Decor",
    brand: "Artisan Aromas",
    image:
      "https://images.pexels.com/photos/14558361/pexels-photo-14558361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Cozy Hammock",
    description:
      "Comfortable and stylish hammock for ultimate relaxation in your outdoor space.",
    price: 750,
    rating: 4.5,
    category: "Home Decor",
    brand: "Lazy Days",
    image: "https://images.pexels.com/photos/4577681/pexels-photo-4577681.jpeg",
  },
  {
    _id: uuid(),
    name: "Minimal Feather Holder Pot",
    description:
      "Simple and elegant pot designed to hold feathers or dried flowers.",
    price: 1180,
    rating: 4.5,
    category: "Home Decor",
    brand: "Feather Delights",
    image:
      "https://plus.unsplash.com/premium_photo-1681412205320-c4d8d51dc7eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    _id: uuid(),
    name: "Cotton Candles",
    description:
      "Handcrafted candles made from 100% cotton, creating a soft and cozy glow.",
    price: 280,
    rating: 4.7,
    category: "Home Decor",
    brand: "Cotton Bliss",
    image:
      "https://images.pexels.com/photos/6311798/pexels-photo-6311798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Wall Hanging Decor Set",
    description:
      "Set of decorative wall hangings to add a touch of artistry to your space.",
    price: 420,
    rating: 4.6,
    category: "Home Decor",
    brand: "Artful Accents",
    image:
      "https://images.pexels.com/photos/11379706/pexels-photo-11379706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Black Vase with minimalistic frame",
    description:
      "Sleek and modern black vase to showcase your favorite flowers or plants.",
    price: 320,
    rating: 4.4,
    category: "Home Decor",
    brand: "Modern Elegance",
    image:
      "https://images.pexels.com/photos/4218618/pexels-photo-4218618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Moon Candle",
    description:
      "Candle shaped like a crescent moon, providing a soothing and mystical ambiance.",
    price: 440,
    rating: 4.8,
    category: "Home Decor",
    brand: "Celestial Glow",
    image:
      "https://images.pexels.com/photos/12488181/pexels-photo-12488181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    name: "Long and Strong Shampoo",
    description:
      "A shampoo formulated to strengthen and nourish hair, promoting length and vitality.",
    price: 150,
    rating: 4.2,
    category: "Hair Care",
    brand: "Hair Revive",
    image:
      "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Fairy-like Hair Shampoo",
    description:
      "Magical shampoo that adds volume and shine to your hair, making it feel light and enchanting.",
    price: 200,
    rating: 4.5,
    category: "Hair Care",
    brand: "Enchanted Locks",
    image:
      "https://images.unsplash.com/photo-1596143357129-7d373d3658e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=695&q=80",
  },
  {
    _id: uuid(),
    name: "Milk Tea Hair Therapy",
    description:
      "A nourishing hair therapy infused with milk tea extracts to hydrate and revitalize your hair.",
    price: 280,
    rating: 4.7,
    category: "Hair Care",
    brand: "Tea Infusions",
    image:
      "https://images.unsplash.com/photo-1615041316088-37ad52e8c938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: uuid(),
    name: "Skin Serum",
    description:
      "A luxurious serum that moisturizes and rejuvenates the skin, reducing the appearance of fine lines and wrinkles.",
    price: 450,
    rating: 4.8,
    category: "Skin Care",
    brand: "Glowing Complexion",
    image:
      "https://images.unsplash.com/photo-1555820585-c5ae44394b79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
  },
  {
    _id: uuid(),
    name: "Rose Crystal Toner",
    description:
      "A refreshing toner infused with rose extracts and crystal essences, promoting a balanced and radiant complexion.",
    price: 320,
    rating: 4.6,
    category: "Skin Care",
    brand: "Crystal Beauty",
    image:
      "https://images.unsplash.com/photo-1571965251146-d5c7e73f1f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
  },
  {
    _id: uuid(),
    name: "Natural Face Wash",
    description:
      "A gentle and effective face wash made with natural ingredients, leaving your skin clean and refreshed.",
    price: 180,
    rating: 4.3,
    category: "Skin Care",
    brand: "Pure Harmony",
    image:
      "https://images.unsplash.com/photo-1509384473936-2d36ab6e198d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
  },
  {
    _id: uuid(),
    name: "Home Decor Vase And Frames",
    description:
      "A stylish vase to showcase your favorite flowers and add a touch of elegance to your home decor.",
    price: 220,
    rating: 4.4,
    category: "Home Decor",
    brand: "Modern Accents",
    image:
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
];
// {
//     _id: uuid(),
//     title: "The Cunning Fox",
//     author: "Saksham",
//     price: 299,
//     discount: 269,
//     categoryName: "Product Cart",
//     imgSrc: "../../images/fox1.jpg",
//     type: "ORIGAMI",
//     inStock: true,
//     fastDelivery: false,
//     onSale: false,
//     starRatings: 4,
//     mountType: "Table Top",
//     color: "biege",
//     qty: 1,
//     wishlist: false
//   },
