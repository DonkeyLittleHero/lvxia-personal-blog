export const siteConfig = {
  name: '驴驴小侠',
  fullTitle: '驴驴小侠｜投放、AI与代码的个人博客',
  description: '记录B站投放、电商运营、AI创作与编程实践，把零散经验沉淀成可以重复使用的方法。',
  heroEyebrow: 'PERSONAL LAB · 2026',
  heroTitle: ['在投放、AI与', '代码之间，记录', '真实增长'],
  heroDescription: '一个经营者的个人实验室。拆解真实项目，复盘每一次尝试，把灵感、数据与代码沉淀成可以反复使用的方法。',
  author: '驴驴小侠',
  location: 'Shanghai · Online',
  email: '',
  socials: {
    github: 'https://github.com/',
    bilibili: 'https://space.bilibili.com/',
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
