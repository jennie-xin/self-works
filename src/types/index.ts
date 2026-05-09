export interface Project {
  id: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
  type: 'frontend' | 'backend' | 'tool' | 'design';
}

export interface SocialLink {
  icon: string;
  platform: string;
  handle: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FontSizeOptions {
  label: string;
  value: string;
}

export interface WidthOptions extends FontSizeOptions {}

export interface FontOptions extends FontSizeOptions {}

export interface SelfInfo {
  name: string;
  role: string;
  desc: string;
}