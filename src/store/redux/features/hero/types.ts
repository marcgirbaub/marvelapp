export interface HeroStructure {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface HeroState {
  currentHero: HeroStructure;
  url: string;
}
