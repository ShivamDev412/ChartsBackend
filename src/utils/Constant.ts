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
  "title": "Programming Language Popularity (2024)",
  "data": [
      { "language": "JavaScript", "popularity": 19.5 },
      { "language": "Python", "popularity": 18.3 },
      { "language": "Java", "popularity": 11.1 },
      { "language": "C#", "popularity": 7.6 },
      { "language": "PHP", "popularity": 6.2 },
      { "language": "C++", "popularity": 5.5 },
      { "language": "TypeScript", "popularity": 4.6 },
      { "language": "Ruby", "popularity": 2.2 },
      { "language": "Swift", "popularity": 2.1 },
      { "language": "Go", "popularity": 2.0 }
  ]
}
const WordCloudData = {
  "words": [
      { "text": "AI", "size": 60 },
      { "text": "Blockchain", "size": 50 },
      { "text": "Quantum Computing", "size": 45 },
      { "text": "Cybersecurity", "size": 55 },
      { "text": "5G", "size": 48 },
      { "text": "IoT", "size": 42 },
      { "text": "Augmented Reality", "size": 37 },
      { "text": "Virtual Reality", "size": 35 },
      { "text": "Autonomous Vehicles", "size": 33 },
      { "text": "Wearable Technology", "size": 30 },
      { "text": "SaaS", "size": 45 },
      { "text": "Cloud Computing", "size": 50 },
      { "text": "Robotics", "size": 44 },
      { "text": "Machine Learning", "size": 58 },
      { "text": "Cryptocurrency", "size": 39 },
  ]
}
const StreamGraphData = {
  "data": [
      {
          "year": "2018",
          "JavaScript": 40,
          "Python": 30,
          "Java": 25,
          "C#": 20,
          "PHP": 15,
          "Ruby": 10
      },
      {
          "year": "2019",
          "JavaScript": 42,
          "Python": 35,
          "Java": 22,
          "C#": 18,
          "PHP": 12,
          "Ruby": 9
      },
      {
          "year": "2020",
          "JavaScript": 45,
          "Python": 40,
          "Java": 20,
          "C#": 17,
          "PHP": 10,
          "Ruby": 8
      },
      {
          "year": "2021",
          "JavaScript": 47,
          "Python": 42,
          "Java": 18,
          "C#": 15,
          "PHP": 8,
          "Ruby": 7
      },
      {
          "year": "2022",
          "JavaScript": 50,
          "Python": 45,
          "Java": 17,
          "C#": 14,
          "PHP": 7,
          "Ruby": 6
      },
      {
          "year": "2023",
          "JavaScript": 52,
          "Python": 48,
          "Java": 15,
          "C#": 12,
          "PHP": 6,
          "Ruby": 5
      }
  ]
}
export { SankeyChartData, DonutChartData, WordCloudData, StreamGraphData };

