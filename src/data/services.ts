import {
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaConciergeBell,
} from "react-icons/fa";

interface Services {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

export const services: Services[] = [
  {
    id: 1,
    icon: FaPlane,
    title: "Flight Booking",
    description:
      "We provide easy and quick flight booking services to make your travel hassle.",
  },
  {
    id: 2,
    icon: FaHotel,
    title: "Hotel Reservations",
    description:
      "Book hotels at the best prices with our exclusive daels and discounts.",
  },
  {
    id: 3,
    icon: FaUmbrellaBeach,
    title: "Beach Tours",
    description:
      "Enjoy relaxing beach tours with all-inclusive packages and guided tours.",
  },
  {
    id: 4,
    icon: FaConciergeBell,
    title: "Concierge Services",
    description: "Get 24/7 concierge service for your travel needs.",
  },
];
