const SankeyChartData = {
  nodes: [
    { id: "Users" },
    { id: "Browse Restaurants" },
    { id: "Select Restaurant" },
    { id: "Place Order" },
    { id: "Payment Gateway" },
    { id: "Order Confirmed" },
    { id: "Restaurant Prepares" },
    { id: "Out for Delivery" },
    { id: "Delivered" },
    { id: "User Feedback" },
    { id: "Positive Reviews" },
    { id: "Negative Reviews" },
  ],
  links: [
    { source: "Users", target: "Browse Restaurants", value: 1000 },
    { source: "Browse Restaurants", target: "Select Restaurant", value: 800 },
    { source: "Select Restaurant", target: "Place Order", value: 700 },
    { source: "Place Order", target: "Payment Gateway", value: 700 },
    { source: "Payment Gateway", target: "Order Confirmed", value: 650 },
    { source: "Order Confirmed", target: "Restaurant Prepares", value: 650 },
    { source: "Restaurant Prepares", target: "Out for Delivery", value: 640 },
    { source: "Out for Delivery", target: "Delivered", value: 630 },
    { source: "Delivered", target: "User Feedback", value: 500 },
    { source: "User Feedback", target: "Positive Reviews", value: 400 },
    { source: "User Feedback", target: "Negative Reviews", value: 100 },
  ],
};
const DonutChartData = {
  title: "Programming Language Popularity (2024)",
  data: [
    { language: "JavaScript", popularity: 19.5 },
    { language: "Python", popularity: 18.3 },
    { language: "Java", popularity: 11.1 },
    { language: "C#", popularity: 7.6 },
    { language: "PHP", popularity: 6.2 },
    { language: "C++", popularity: 5.5 },
    { language: "TypeScript", popularity: 4.6 },
    { language: "Ruby", popularity: 2.2 },
    { language: "Swift", popularity: 2.1 },
    { language: "Go", popularity: 2.0 },
  ],
};
const WordCloudData = {
  words: [
    { text: "AI", size: 60 },
    { text: "Blockchain", size: 50 },
    { text: "Quantum Computing", size: 45 },
    { text: "Cybersecurity", size: 55 },
    { text: "5G", size: 48 },
    { text: "IoT", size: 42 },
    { text: "Augmented Reality", size: 37 },
    { text: "Virtual Reality", size: 35 },
    { text: "Autonomous Vehicles", size: 33 },
    { text: "Wearable Technology", size: 30 },
    { text: "SaaS", size: 45 },
    { text: "Cloud Computing", size: 50 },
    { text: "Robotics", size: 44 },
    { text: "Machine Learning", size: 58 },
    { text: "Cryptocurrency", size: 39 },
  ],
};
const StreamGraphData = {
  data: [
    {
      year: "2018",
      JavaScript: 40,
      Python: 30,
      Java: 25,
      "C#": 20,
      PHP: 15,
      Ruby: 10,
    },
    {
      year: "2019",
      JavaScript: 42,
      Python: 35,
      Java: 22,
      "C#": 18,
      PHP: 12,
      Ruby: 9,
    },
    {
      year: "2020",
      JavaScript: 45,
      Python: 40,
      Java: 20,
      "C#": 17,
      PHP: 10,
      Ruby: 8,
    },
    {
      year: "2021",
      JavaScript: 47,
      Python: 42,
      Java: 18,
      "C#": 15,
      PHP: 8,
      Ruby: 7,
    },
    {
      year: "2022",
      JavaScript: 50,
      Python: 45,
      Java: 17,
      "C#": 14,
      PHP: 7,
      Ruby: 6,
    },
    {
      year: "2023",
      JavaScript: 52,
      Python: 48,
      Java: 15,
      "C#": 12,
      PHP: 6,
      Ruby: 5,
    },
  ],
};
const LineChartData = {
  title: "Monthly Sales of Laptops, Smartphones, and Tablets (2019-2023)",
  data: [
    { month: "2019-01", Laptops: 120000, Smartphones: 150000, Tablets: 80000 },
    { month: "2019-02", Laptops: 125000, Smartphones: 145000, Tablets: 85000 },
    { month: "2019-03", Laptops: 110000, Smartphones: 160000, Tablets: 75000 },
    { month: "2019-04", Laptops: 130000, Smartphones: 170000, Tablets: 90000 },
    { month: "2019-05", Laptops: 140000, Smartphones: 175000, Tablets: 95000 },
    { month: "2019-06", Laptops: 135000, Smartphones: 160000, Tablets: 100000 },
    { month: "2019-07", Laptops: 150000, Smartphones: 180000, Tablets: 110000 },
    { month: "2019-08", Laptops: 155000, Smartphones: 185000, Tablets: 115000 },
    { month: "2019-09", Laptops: 145000, Smartphones: 175000, Tablets: 105000 },
    { month: "2019-10", Laptops: 160000, Smartphones: 190000, Tablets: 120000 },
    { month: "2019-11", Laptops: 165000, Smartphones: 200000, Tablets: 125000 },
    { month: "2019-12", Laptops: 170000, Smartphones: 210000, Tablets: 130000 },

    { month: "2020-01", Laptops: 175000, Smartphones: 220000, Tablets: 135000 },
    { month: "2020-02", Laptops: 180000, Smartphones: 225000, Tablets: 140000 },
    { month: "2020-03", Laptops: 185000, Smartphones: 230000, Tablets: 145000 },
    { month: "2020-04", Laptops: 190000, Smartphones: 235000, Tablets: 150000 },
    { month: "2020-05", Laptops: 195000, Smartphones: 240000, Tablets: 155000 },
    { month: "2020-06", Laptops: 200000, Smartphones: 245000, Tablets: 160000 },
    { month: "2020-07", Laptops: 205000, Smartphones: 250000, Tablets: 165000 },
    { month: "2020-08", Laptops: 210000, Smartphones: 255000, Tablets: 170000 },
    { month: "2020-09", Laptops: 215000, Smartphones: 260000, Tablets: 175000 },
    { month: "2020-10", Laptops: 220000, Smartphones: 265000, Tablets: 180000 },
    { month: "2020-11", Laptops: 225000, Smartphones: 270000, Tablets: 185000 },
    { month: "2020-12", Laptops: 230000, Smartphones: 275000, Tablets: 190000 },

    { month: "2021-01", Laptops: 235000, Smartphones: 280000, Tablets: 195000 },
    { month: "2021-02", Laptops: 240000, Smartphones: 285000, Tablets: 200000 },
    { month: "2021-03", Laptops: 245000, Smartphones: 290000, Tablets: 205000 },
    { month: "2021-04", Laptops: 250000, Smartphones: 295000, Tablets: 210000 },
    { month: "2021-05", Laptops: 255000, Smartphones: 300000, Tablets: 215000 },
    { month: "2021-06", Laptops: 260000, Smartphones: 305000, Tablets: 220000 },
    { month: "2021-07", Laptops: 265000, Smartphones: 310000, Tablets: 225000 },
    { month: "2021-08", Laptops: 270000, Smartphones: 315000, Tablets: 230000 },
    { month: "2021-09", Laptops: 275000, Smartphones: 320000, Tablets: 235000 },
    { month: "2021-10", Laptops: 280000, Smartphones: 325000, Tablets: 240000 },
    { month: "2021-11", Laptops: 285000, Smartphones: 330000, Tablets: 245000 },
    { month: "2021-12", Laptops: 290000, Smartphones: 335000, Tablets: 250000 },

    { month: "2022-01", Laptops: 295000, Smartphones: 340000, Tablets: 255000 },
    { month: "2022-02", Laptops: 300000, Smartphones: 345000, Tablets: 260000 },
    { month: "2022-03", Laptops: 305000, Smartphones: 350000, Tablets: 265000 },
    { month: "2022-04", Laptops: 310000, Smartphones: 355000, Tablets: 270000 },
    { month: "2022-05", Laptops: 315000, Smartphones: 360000, Tablets: 275000 },
    { month: "2022-06", Laptops: 320000, Smartphones: 365000, Tablets: 280000 },
    { month: "2022-07", Laptops: 325000, Smartphones: 370000, Tablets: 285000 },
    { month: "2022-08", Laptops: 330000, Smartphones: 375000, Tablets: 290000 },
    { month: "2022-09", Laptops: 335000, Smartphones: 380000, Tablets: 295000 },
    { month: "2022-10", Laptops: 340000, Smartphones: 385000, Tablets: 300000 },
    { month: "2022-11", Laptops: 345000, Smartphones: 390000, Tablets: 305000 },
    { month: "2022-12", Laptops: 350000, Smartphones: 395000, Tablets: 310000 },

    { month: "2023-01", Laptops: 355000, Smartphones: 400000, Tablets: 315000 },
    { month: "2023-02", Laptops: 360000, Smartphones: 405000, Tablets: 320000 },
    { month: "2023-03", Laptops: 365000, Smartphones: 410000, Tablets: 325000 },
    { month: "2023-04", Laptops: 370000, Smartphones: 415000, Tablets: 330000 },
    { month: "2023-05", Laptops: 375000, Smartphones: 420000, Tablets: 335000 },
    { month: "2023-06", Laptops: 380000, Smartphones: 425000, Tablets: 340000 },
    { month: "2023-07", Laptops: 385000, Smartphones: 430000, Tablets: 345000 },
    { month: "2023-08", Laptops: 390000, Smartphones: 435000, Tablets: 350000 },
    { month: "2023-09", Laptops: 395000, Smartphones: 440000, Tablets: 355000 },
    { month: "2023-10", Laptops: 400000, Smartphones: 445000, Tablets: 360000 },
    { month: "2023-11", Laptops: 405000, Smartphones: 450000, Tablets: 365000 },
    { month: "2023-12", Laptops: 410000, Smartphones: 455000, Tablets: 370000 },
  ],
};
const ScatterPlotData = {
  title:
    "Experience vs. Salary Across Job Roles and Countries in a Tech Company",
  data: [
    { country: "USA", role: "Software Engineer", experience: 2, salary: 90000 },
    {
      country: "USA",
      role: "Software Engineer",
      experience: 5,
      salary: 115000,
    },
    {
      country: "USA",
      role: "Software Engineer",
      experience: 10,
      salary: 145000,
    },
    {
      country: "Germany",
      role: "Software Engineer",
      experience: 2,
      salary: 70000,
    },
    {
      country: "Germany",
      role: "Software Engineer",
      experience: 5,
      salary: 90000,
    },
    {
      country: "Germany",
      role: "Software Engineer",
      experience: 10,
      salary: 118000,
    },
    {
      country: "India",
      role: "Software Engineer",
      experience: 2,
      salary: 50000,
    },
    {
      country: "India",
      role: "Software Engineer",
      experience: 5,
      salary: 70000,
    },
    {
      country: "India",
      role: "Software Engineer",
      experience: 10,
      salary: 98000,
    },
    { country: "USA", role: "Data Scientist", experience: 2, salary: 105000 },
    { country: "USA", role: "Data Scientist", experience: 5, salary: 135000 },
    { country: "USA", role: "Data Scientist", experience: 10, salary: 160000 },
    {
      country: "Germany",
      role: "Data Scientist",
      experience: 2,
      salary: 85000,
    },
    {
      country: "Germany",
      role: "Data Scientist",
      experience: 5,
      salary: 108000,
    },
    {
      country: "Germany",
      role: "Data Scientist",
      experience: 10,
      salary: 130000,
    },
    { country: "India", role: "Data Scientist", experience: 2, salary: 65000 },
    { country: "India", role: "Data Scientist", experience: 5, salary: 93000 },
    {
      country: "India",
      role: "Data Scientist",
      experience: 10,
      salary: 110000,
    },
  ],
};

export {
  SankeyChartData,
  DonutChartData,
  WordCloudData,
  StreamGraphData,
  LineChartData,
  ScatterPlotData,
};
