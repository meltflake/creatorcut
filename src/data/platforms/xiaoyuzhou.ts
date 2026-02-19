import type { Platform } from '../types';

export const xiaoyuzhou: Platform = {
  id: 'xiaoyuzhou',
  name: '小宇宙',
  nameEn: 'Xiaoyuzhou',
  region: 'cn',
  type: '播客',
  url: 'https://www.xiaoyuzhoufm.com',
  foundedYear: 2020,
  mau: '未公开',
  contentForms: ['audio'],
  creatorCutMin: 70,
  creatorCutMax: 90,
  monetization: [
    {
      type: 'subscription',
      name: '付费节目',
      platformCut: '平台抽成（比例未公开）',
      creatorCut: '大部分归创作者（不含税）',
      creatorCutMin: 70,
      creatorCutMax: 90,
      threshold: '开通付费',
      notes: '早期阶段，具体分成比例未公开，据行业估算创作者拿大头',
      source: {
        type: 'estimate',
        name: '行业估算',
        date: '2025-12',
      },
    },
    {
      type: 'tipping',
      name: '打赏/赞助',
      platformCut: '平台抽成',
      creatorCut: '大部分归创作者（不含税）',
      creatorCutMin: 70,
      creatorCutMax: 90,
      threshold: '无门槛',
      notes: '具体抽成比例未公开',
      source: {
        type: 'estimate',
        name: '行业估算',
        date: '2025-12',
      },
    },
  ],
  pros: [
    '中国播客平台领导者，社区氛围好',
    '用户付费意愿较高',
    '播客听众高质量，广告主认可度高',
  ],
  cons: [
    '分成比例未公开，透明度不足',
    '平台规模仍较小，变现天花板有限',
    '播客市场整体商业化程度低',
  ],
  bestFor: ['播客创作者', '深度对话/访谈类内容创作者'],
  lastUpdated: '2025-12-31',
};
