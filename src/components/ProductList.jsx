import tomatoImg from "../Images/tomato.jpg";
import eggsImg from "../Images/eggs.jpg";
import honeyImg from "../Images/honey.jpg";

const product_list = [
  {
    id: 1,
    name: "Organic Tomatoes",
    description: "Freshly picked organic tomatoes from local farms.",
    price: 3.99,
    image: tomatoImg, // Use the imported image
  },
  {
    id: 2,
    name: "Free-range Eggs",
    description: "A dozen farm-fresh free-range eggs.",
    price: 5.49,
    image: eggsImg, // Use the imported image
  },
  {
    id: 3,
    name: "Local Honey",
    description: "Pure and raw honey from local beekeepers.",
    price: 12.99,
    image: honeyImg, // Use the imported image
  },
];
export default product_list;
