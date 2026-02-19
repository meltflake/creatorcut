export type ContentForm = 'video' | 'article' | 'audio' | 'community' | 'course' | 'newsletter' | 'livestream';

export type RevenueType =
  | 'tipping'
  | 'ecommerce'
  | 'ads'
  | 'subscription'
  | 'sponsorship'
  | 'course'
  | 'newsletter'
  | 'affiliate'
  | 'crowdfunding'
  | 'digital-goods';

export const revenueTypeLabels: Record<RevenueType, string> = {
  tipping: '直播打赏',
  ecommerce: '电商带货',
  ads: '广告/流量分成',
  subscription: '付费内容/订阅',
  sponsorship: '商单/品牌合作',
  course: '课程售卖',
  newsletter: 'Newsletter',
  affiliate: '推荐佣金',
  crowdfunding: '众筹',
  'digital-goods': '数字商品',
};

export const contentFormLabels: Record<ContentForm, string> = {
  video: '视频',
  article: '图文',
  audio: '音频',
  community: '社群',
  course: '课程',
  newsletter: 'Newsletter',
  livestream: '直播',
};

export interface DataSource {
  type: 'official' | 'media' | 'estimate';
  name: string;
  url?: string;
  date: string;
}

export interface MonetizationMethod {
  type: RevenueType;
  name: string;
  platformCut: string;
  creatorCut: string;
  creatorCutMin?: number;
  creatorCutMax?: number;
  threshold?: string;
  notes?: string;
  source: DataSource;
}

export interface Platform {
  id: string;
  name: string;
  nameEn?: string;
  region: 'cn' | 'global';
  type: string;
  url: string;
  foundedYear?: number;
  mau?: string;
  contentForms: ContentForm[];
  monetization: MonetizationMethod[];
  creatorCutMin: number;
  creatorCutMax: number;
  pros: string[];
  cons: string[];
  bestFor: string[];
  lastUpdated: string;
}
