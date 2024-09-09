export type Properties = {
  id: number;
  title: string;
  description: string;
  aminities: Amenities;
  price: number;
  rating: number;
  fav: boolean;
};

export type Amenities = {
  rooms: number;
  beds: number;
  bathroom: number;
};

export const properties: Properties[] = [
  {
    id: 1,
    title: "Cozy Mountain Cabin",
    description:
      "A secluded cabin in the mountains, perfect for a peaceful getaway.",
    aminities: {
      rooms: 3,
      beds: 5,
      bathroom: 2,
    },
    price: 120,
    rating: 4,
    fav: false,
  },
  {
    id: 2,
    title: "Modern City Apartment",
    description:
      "A stylish apartment in the heart of the city with all modern amenities.",
    aminities: {
      rooms: 2,
      beds: 3,
      bathroom: 1,
    },
    price: 200,
    rating: 4,
    fav: false,
  },
  {
    id: 3,
    title: "Beachfront Villa",
    description:
      "Luxurious villa with stunning ocean views, just steps from the beach.",
    aminities: {
      rooms: 4,
      beds: 6,
      bathroom: 3,
    },
    price: 450,
    rating: 4,
    fav: false,
  },
  {
    id: 4,
    title: "Suburban Family Home",
    description: "A spacious home in a quiet neighborhood, ideal for families.",
    aminities: {
      rooms: 5,
      beds: 7,
      bathroom: 3,
    },
    price: 250,
    rating: 4,
    fav: false,
  },
  {
    id: 5,
    title: "Rustic Countryside Cottage",
    description:
      "Charming cottage surrounded by nature, perfect for a relaxing retreat.",
    aminities: {
      rooms: 2,
      beds: 2,
      bathroom: 1,
    },
    price: 100,
    rating: 4,
    fav: false,
  },
  {
    id: 6,
    title: "Luxury Penthouse Suite",
    description:
      "An exclusive penthouse with panoramic city views and top-notch amenities.",
    aminities: {
      rooms: 3,
      beds: 4,
      bathroom: 2,
    },
    price: 500,
    rating: 4,
    fav: false,
  },
];
