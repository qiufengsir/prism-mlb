export type Locale = "zh" | "en";

export interface MemberLocale {
  role: string;
  bio: string;
  skills: string[];
}

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface Translation {
  brand: {
    subtitle: string;
    tagline: string;
  };
  nav: {
    home: string;
    team: string;
    works: string;
    projects: string;
    media: string;
    about: string;
  };
  common: {
    viewAll: string;
    backToTop: string;
    quickLinks: string;
    contactUs: string;
    location: string;
    madeWith: string;
    rights: string;
    noData: string;
    delete: string;
    optional: string;
    required: string;
    viewDetails: string;
    hideDetails: string;
  };
  seo: {
    home: { title: string; description: string; keywords: string };
    team: { title: string; description: string; keywords: string };
    works: { title: string; description: string; keywords: string };
    projects: { title: string; description: string; keywords: string };
    media: { title: string; description: string; keywords: string };
    about: { title: string; description: string; keywords: string };
  };
  home: {
    badge: string;
    intro: string;
    ctaTeam: string;
    ctaWorks: string;
    capabilitiesTitle: string;
    capabilitiesTitleHighlight: string;
    capabilitiesSubtitle: string;
    statsTitle: string;
    statsTitleHighlight: string;
    statsSubtitle: string;
    statsTeam: string;
    statsWorks: string;
    statsProjects: string;
    statsMedia: string;
    featuredTitle: string;
    featuredTitleHighlight: string;
    featuredSubtitle: string;
    featuredWorks: string;
    featuredProjects: string;
    exploreTitle: string;
    exploreSubtitle: string;
    quickNav: {
      team: { title: string; description: string };
      works: { title: string; description: string };
      projects: { title: string; description: string };
      media: { title: string; description: string };
    };
  };
  capabilities: CapabilityItem[];
  team: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    empty: string;
    addMember: string;
    fillInfo: string;
    name: string;
    namePlaceholder: string;
    role: string;
    rolePlaceholder: string;
    bio: string;
    bioPlaceholder: string;
    skills: string;
    skillsPlaceholder: string;
    github: string;
    email: string;
    submit: string;
    cancel: string;
    joinDate: string;
    website: string;
  };
  works: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    empty: string;
    emptyCategory: string;
    author: string;
    categories: Record<string, string>;
  };
  projects: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    empty: string;
    members: string;
    techStack: string;
    viewProject: string;
    participated: string;
    participatedCount: string;
  };
  media: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    photos: string;
    videos: string;
    empty: string;
    photoWall: string;
    photoCount: string;
    videoCount: string;
  };
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    story: string;
    visionTitle: string;
    visionBody: string;
    missionTitle: string;
    missionBody: string;
    missionItems: string[];
    valuesTitle: string;
    valuesTitleHighlight: string;
    valuesSubtitle: string;
    contactTitle: string;
    email: string;
    address: string;
    followUs: string;
    sendMessage: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccessTitle: string;
    formSuccessBody: string;
    formNamePlaceholder: string;
    formEmailPlaceholder: string;
    formMessagePlaceholder: string;
  };
  values: ValueItem[];
  members: Record<string, MemberLocale>;
}
