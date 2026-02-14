const mongoose = require("mongoose");
const Content = require("./models/Content");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  // 1. Clear everything to start fresh
  await Content.deleteMany({}); 

  // 2. Create the complete document
  await Content.create({
    // Hero & Branding
    heroTitle: "THINKING OF A FANTASTIC VICINITY?",
    heroBadge: "20+ Podium Luxurious Amenities | Spacious Balcony Homes",
    brandSubName: "VIGHNAHARTA",
    brandMainName: "INFINITY",
    locationText: "BLDG NO. 221/224, CIRCLE - KANNAMWAR NAGAR 1, VIKHROLI (EAST), MUMBAI - 400083",

    // Pricing Section
    label1bhk: "SMART 1 BHK",
    oldPrice1bhk: "74.99",
    price1bhk: "69.99",
    label2bhk: "PREMIUM 2 BHK",
    oldPrice2bhk: "1.05",
    price2bhk: "96.99",

    // Project Overview
    overview: "At Vighnaharta Infinity, every detail reflects the grandest gesture of life. Located in the heart of Vikhroli, our residency offers a blend of modern lifestyle and traditional values, ensuring your home is more than just a place—it's an experience.",
    quote: "The moment I entered the house, it felt welcomed and filled with positive energy.",

    // Amenities
    amenitiesSubtitle: "Thoughtfully crafted surroundings that reflect tradition and modern luxury.",
    amenities: [
      { title: "Fully Equipped Gymnasium" },
      { title: "Kids Play Area" },
      { title: "Jogging & Walking Track" },
      { title: "Senior Citizen Sit-out" },
      { title: "Reflexology Path" },
      { title: "Yoga & Meditation Deck" }
    ],

    // Developer Statistics
    developerStats: [
      { value: "6+", label: "Successful Projects" },
      { value: "1.32 LAC", label: "Sq. Ft. Developed" },
      { value: "449+", label: "Happy Families" },
      { value: "3.77 LAC", label: "Sq. Ft. Ongoing" }
    ],

    // Construction Progress
    constructionUpdates: [
      { tower: "Tower A", status: "Structure Ready - Finishing in Progress" },
      { tower: "Tower B", status: "8th Floor Slab Completed" },
      { tower: "Podium", status: "Waterproofing Completed" }
    ],

    // FAQ Section
    faqs: [
      { 
        question: "Is Vighnaharta Infinity RERA registered?", 
        answer: "Yes, the project is fully RERA compliant and all documents are available for verification." 
      },
      { 
        question: "What is the possession date?", 
        answer: "The project is on track for possession as per the RERA deadline of December 2026." 
      },
      { 
        question: "Are there any bank tie-ups for home loans?", 
        answer: "We have tie-ups with major banks including SBI, HDFC, and ICICI for easy loan processing." 
      }
    ]
  });

  console.log("✅ Database FULLY seeded with all webpage content!");
  process.exit();
});