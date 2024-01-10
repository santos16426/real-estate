export type TPropertyType =
  | "Condominium"
  | "Town House"
  | "House"
  | "Apartment";
export type TCoordinates = {
  lat: number;
  long: number;
};
export type TProperty = {
  name: string;
  type: TPropertyType;
  image: string;
  description: string;
  location: {
    city: string;
    coordinates: TCoordinates;
  };
  priceRange: string;
};
