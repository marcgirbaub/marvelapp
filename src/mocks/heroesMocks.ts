import { type MarvelHero, type MarvelHeroData } from "../types/types";

export const mockHero3D: MarvelHero = {
  id: 1011334,
  name: "3-D Man",
  description: "",

  thumbnail: {
    path: "",
    extension: "jpg",
  },

  comics: {
    available: 12,
    collectionURI: "",
    items: [
      {
        resourceURI: "",
        name: "Avengers: The Initiative (2007) #14",
      },
    ],
    returned: 12,
  },
  modified: "",
  resourceURI: "",
  series: {
    available: 0,
    collectionURI: "",
    items: [],
    returned: 0,
  },
  stories: {
    available: 0,
    collectionURI: "",
    items: [],
    returned: 0,
  },
  events: {
    available: 0,
    collectionURI: "",
    items: [],
    returned: 0,
  },
  urls: [],
};

export const mockHeroBomb: MarvelHero = {
  id: 1017100,
  name: "A-Bomb (HAS)",
  description:
    "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
  thumbnail: {
    path: "",
    extension: "jpg",
  },

  comics: {
    available: 4,
    collectionURI: "",
    items: [
      {
        resourceURI: "",
        name: "FREE COMIC BOOK DAY 2013 1 (2013) #1",
      },
      {
        resourceURI: "",
        name: "Hulk (2008) #53",
      },
      {
        resourceURI: "",
        name: "Hulk (2008) #54",
      },
      {
        resourceURI: "",
        name: "Hulk (2008) #55",
      },
    ],
    returned: 4,
  },
  modified: "",
  resourceURI: "",
  series: {
    available: 0,
    collectionURI: "",
    items: [],
    returned: 0,
  },
  stories: {
    available: 0,
    collectionURI: "",
    items: [],
    returned: 0,
  },
  events: {
    available: 0,
    collectionURI: "",
    items: [],
    returned: 0,
  },
  urls: [],
};

export const mockListOfHeroes: MarvelHeroData = [mockHero3D, mockHeroBomb];
