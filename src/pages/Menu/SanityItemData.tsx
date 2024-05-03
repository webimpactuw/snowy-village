export type SanityItemData = {
  _rev: string;
  name: string;
  _updatedAt: string;
  _createdAt: string;
  _type: string;
  containsNuts: boolean;
  isPopular: boolean;
  _id: string;
  type: string;
  img?: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
};
