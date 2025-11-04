import img1 from "@/assets/gal1.jpg";
import img2 from "@/assets/gal2.jpg";
import img3 from "@/assets/gal3.png";
import img4 from "@/assets/gal4.jpg";

interface Destination {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    image: img1,
    title: "Paris, France",
    description:
      "The City of Light draws millions of visitors every year with its unforgettable ambiance.",
  },
  {
    id: 2,
    image: img2,
    title: "Bali, Indonesia",
    description:
      "Bali is a living postcard, an Indonesian paradise that feels like a fantasy.",
  },
  {
    id: 3,
    image: img3,
    title: "New York, USA",
    description:
      "New York City is the largest city in the United States and home to many world-famous attractions.",
  },
  {
    id: 4,
    image: img4,
    title: "Tokyo, Japan",
    description:
      "Tokyo offers a seemingly unlimited choice of entertainment, shopping, cultral attractions, and dining.",
  },
];
