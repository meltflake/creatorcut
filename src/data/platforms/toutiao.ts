import type { Platform } from '../types';

export const toutiao: Platform = {
  id: 'toutiao',
  name: '今日头条/西瓜视频',
  nameEn: 'Toutiao / Xigua Video',
  region: 'cn',
  type: '图文/中视频',
  url: 'https://www.toutiao.com',
  foundedYear: 2012,
  mau: '4亿+',
  contentForms: ['article', 'video'],
  creatorCutMin: 50,
  creatorCutMax: 70,
  monetization: [
    {
      type: 'ads',
      name: '创作收益（广告分成）',
      platformCut: '约 30-50%',
      creatorCut: '50-70%（不含税）',
      creatorCutMin: 50,
      creatorCutMax: 70,
      threshold: '开通创作收益',
      notes: '按阅读量+广告展示计算',
      source: {
        type: 'media',
        name: '创作者反馈',
        date: '2025-12',
      },
    },
    {
      type: 'ads',
      name: '中视频伙伴计划',
      platformCut: '统一池分配',
      creatorCut: '按播放量+互动+完播率（不含税）',
      creatorCutMin: 50,
      creatorCutMax: 70,
      threshold: '申请加入',
      notes: '与抖音中视频计划打通，按播放量、互动率、完播率综合分配',
      source: {
        type: 'official',
        name: '头条创作者平台',
        date: '2025-12',
      },
    },
  ],
  pros: [
    '算法推荐能力强，冷启动友好',
    '图文和中视频都有广告分成',
    '与抖音/西瓜视频打通，分发渠道广',
  ],
  cons: [
    '单纯靠广告分成收入天花板有限',
    '缺乏直接的付费内容变现工具',
    '内容调性偏大众，不利于垂直内容',
  ],
  bestFor: ['图文创作者', '中视频创作者', '新闻/资讯类创作者'],
  lastUpdated: '2025-12-31',
};
