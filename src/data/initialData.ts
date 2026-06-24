export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    weibo?: string;
    email?: string;
    website?: string;
  };
  joinDate: string;
}

export interface Work {
  id: string;
  title: string;
  category: string;
  cover: string;
  images: string[];
  description: string;
  author: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  cover: string;
  description: string;
  techStack: string[];
  members: string[];
  link: string;
  date: string;
}

export interface MediaItem {
  id: string;
  type: "photo" | "video";
  url: string;
  thumbnail: string;
  title: string;
  date: string;
}

export const initialTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "邓茂(Jason)",
    role: "队长-originator",
    avatar: "",
    bio: "热爱设计与创新的跨界创作者，致力于用视觉语言讲述品牌故事。",
    skills: ["战略规划", "金融分析", "代码架构设计"],
    social: {
      github: "https://github.com",
      email: "15196771992@139.com",
    },
    joinDate: "2026-05-27",
  },
  {
    id: "2",
    name: "冯郭彬(Benett)",
    role: "技术负责人",
    avatar: "",
    bio: "全栈开发工程师，专注于构建高性能、可扩展的Web应用。",
    skills: ["React", "Node.js", "TypeScript", "云架构"],
    social: {
      github: "https://github.com",
      email: "yifeng@dreamofyouth.com",
      website: "https://yifeng.dev",
    },
    joinDate: "2026-05-27",
  },
  {
    id: "3",
    name: "杨霖",
    role: "视觉设计师",
    avatar: "",
    bio: "追求极致视觉体验的设计师，擅长将抽象概念转化为惊艳的视觉作品。",
    skills: ["平面设计", "插画", "动效设计"],
    social: {
      weibo: "https://weibo.com",
      email: "shihan@dreamofyouth.com",
    },
    joinDate: "2026-05-27",
  },
  {
    id: "4",
    name: "Heinz",
    role: "counselor",
    avatar: "",
    bio: "数据驱动的产品经理，善于洞察用户需求，打造极致产品体验。",
    skills: ["产品规划", "数据分析", "用户研究"],
    social: {
      github: "https://github.com",
      email: "yuanhang@dreamofyouth.com",
    },
    joinDate: "2026-05-27",
  },
];

export const initialWorks: Work[] = [
  {
    id: "1",
    title: "品牌视觉识别系统",
    category: "设计",
    cover: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    ],
    description: "为科技初创公司打造的完整品牌视觉识别系统，包含Logo设计、色彩体系、字体规范和应用场景。",
    author: "林晓梦",
    date: "2024-01-15",
  },
  {
    id: "2",
    title: "城市光影",
    category: "摄影",
    cover: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
    ],
    description: "捕捉城市夜晚的光影变化，展现都市生活的独特魅力。",
    author: "王诗涵",
    date: "2024-02-20",
  },
  {
    id: "3",
    title: "创意短片《追梦》",
    category: "视频",
    cover: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    ],
    description: "关于年轻人追逐梦想的励志短片，展现青春的无限可能。",
    author: "陈逸风",
    date: "2024-03-08",
  },
  {
    id: "4",
    title: "插画系列：自然之声",
    category: "设计",
    cover: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=600&fit=crop",
    ],
    description: "以自然为主题的插画系列，用色彩和线条诠释大自然的美妙。",
    author: "王诗涵",
    date: "2024-03-25",
  },
];

export const initialProjects: Project[] = [
  {
    id: "1",
    title: "智能办公平台",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "基于AI技术的智能办公协作平台，提升团队工作效率，支持实时协作、智能任务分配和数据分析。",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API"],
    members: ["陈逸风", "张远航", "林晓梦"],
    link: "https://github.com",
    date: "2024-01-10",
  },
  {
    id: "2",
    title: "电商平台 redesign",
    cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description: "为知名电商平台进行全面的用户体验 redesign，提升转化率和用户满意度。",
    techStack: ["Vue.js", "Figma", "Tailwind CSS", "A/B Testing"],
    members: ["林晓梦", "王诗涵", "张远航"],
    link: "https://github.com",
    date: "2024-02-15",
  },
  {
    id: "3",
    title: "数据可视化大屏",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "企业级数据可视化大屏解决方案，实时展示业务数据，支持多维度分析和交互探索。",
    techStack: ["React", "D3.js", "WebSocket", "Redis"],
    members: ["陈逸风", "张远航"],
    link: "https://github.com",
    date: "2024-03-20",
  },
];

export const initialMedia: MediaItem[] = [
  {
    id: "1",
    type: "photo",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    title: "团队协作",
    date: "2024-01-20",
  },
  {
    id: "2",
    type: "photo",
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
    title: "创意工作坊",
    date: "2024-02-10",
  },
  {
    id: "3",
    type: "photo",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    title: "项目讨论",
    date: "2024-02-25",
  },
  {
    id: "4",
    type: "photo",
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    title: "办公环境",
    date: "2024-03-05",
  },
  {
    id: "5",
    type: "photo",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
    title: "团队建设",
    date: "2024-03-15",
  },
  {
    id: "6",
    type: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
    title: "团队介绍视频",
    date: "2024-03-01",
  },
];
