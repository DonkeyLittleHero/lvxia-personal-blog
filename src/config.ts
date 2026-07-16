export const siteConfig = {
  name: '驴驴小侠',
  fullTitle: '驴驴小侠｜投放、AI与代码的个人博客',
  description: '记录B站投放、电商运营、AI创作与编程实践，把真实问题沉淀成可以重复使用的方法。',
  heroEyebrow: 'BUILD · LEARN · SHARE',
  heroTitle: ['把真实经历，', '写成下一次', '出发的坐标'],
  heroDescription: '我是驴驴小侠，一个在内容、电商、AI 与代码之间持续实践的人。这里记录判断、过程和复盘，也收藏那些让我继续向前的灵感。',
  author: '驴驴小侠',
  location: 'China · Online',
  email: 'nbvgdgjvc@gmail.com',
  emails: ['nbvgdgjvc@gmail.com', 'sl278102@outlook.com'],
  portrait: '/images/profile/graduation-portrait.jpg',
  cmsUrl: 'https://app.pagescms.org',
  socials: {
    github: 'https://github.com/DonkeyLittleHero',
    bilibili: '',
  },
  giscus: {
    enabled: false,
    repo: '',
    repoId: '',
    category: 'Announcements',
    categoryId: '',
  },
};

export const topics = [
  { label: 'B站投放', icon: '▶', accent: 'cyan' },
  { label: '电商运营', icon: '◇', accent: 'amber' },
  { label: 'AI创作', icon: '✦', accent: 'violet' },
  { label: '编程手记', icon: '</>', accent: 'mint' },
] as const;

export const navItems = [
  { href: '/', label: '首页' },
  { href: '/blog/', label: '文章' },
  { href: '/projects/', label: '项目' },
  { href: '/about/', label: '关于' },
] as const;

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}
