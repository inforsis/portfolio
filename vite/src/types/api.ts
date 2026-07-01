export type ApiEntry = {
  id: number;
  date: string;
  slug: string;
};

export type PageContent = ApiEntry & {
  title: string;
  content: string;
};

export type MenuPage = ApiEntry & {
  title: string;
};

export type PostContent = ApiEntry & {
  dateGmt: string;
  title: string;
  content: string;
};

export type SocialLink = ApiEntry & {
  label: string;
  link: string;
  title: string;
};

export type TimelineEvent = ApiEntry & {
  title: string;
};

export type Statistic = ApiEntry & {
  title: string;
  timer: string;
  icon: string;
};

export type FunFact = ApiEntry & {
  title: string;
};

export type PortfolioWork = {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
  thumbnail: {
    web: string;
    mobile: string;
    tablet: string;
  };
};
