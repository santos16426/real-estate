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
  featured?: boolean;
};
export type TNewsEventType = "news" | "event";
export type TNewsEvent = {
  name: string;
  description: string;
  date: string;
  type: TNewsEventType;
  bannerPhoto: string;
};
