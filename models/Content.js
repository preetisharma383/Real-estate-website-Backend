const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  heroTitle: String,
  heroBadge: String,
  brandSubName: String,
  brandMainName: String,
  locationText: String,
  label1bhk: String,
  price1bhk: String,
  label2bhk: String,
  price2bhk: String,
  overview: String,
  quote: String,
  amenitiesSubtitle: String,
  amenities: [{ title: String }],
  developerStats: [{ value: String, label: String }],
  constructionUpdates: [{ tower: String, status: String }],
  faqs: [{ question: String, answer: String }]
}, { timestamps: true });

module.exports = mongoose.model("Content", ContentSchema);