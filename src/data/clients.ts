import img1 from "@/assets/me.png";
import img2 from "@/assets/me2.png";

interface Clients {
  id: number;
  name: string;
  image: string;
  text: string;
  location: string;
}

export const clients: Clients[] = [
  {
    id: 1,
    name: "John Doe",
    image: img1,
    text: "This travel agency provided excellent service and helped us plan the perfect vacation. Highly recommended!",
    location: "New York, USA",
  },
  {
    id: 2,
    name: "John Doe",
    image: img2,
    text: "Amazing experience! The tour guides were knowledge and the destinations were breathtaking. ",
    location: "London, UK",
  },
  {
    id: 3,
    name: "John Doe",
    image: img1,
    text: "Great customer service and fantastic travel packages. Will defintely book with them again.",
    location: "Syndey, Australia",
  },
];
