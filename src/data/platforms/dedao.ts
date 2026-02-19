import type { Platform } from '../types';

export const dedao: Platform = {
  id: 'dedao',
  name: '得到',
  nameEn: 'Dedao (iGet)',
  region: 'cn',
  type: '知识付费',
  url: 'https://www.dedao.cn',
  foundedYear: 2015,
  mau: '未公开',
  contentForms: ['audio', 'article', 'course'],
  creatorCutMin: 50,
  creatorCutMax: 70,
  monetization: [
    {
      type: 'course',
      name: '课程/专栏',
      platformCut: '~50%',
      creatorCut: '~50%（不含税）',
      creatorCutMin: 50,
      creatorCutMax: 50,
      threshold: '邀约制（平台邀请）',
      notes: '平台深度参与课程制作和推广，非自助上架',
      source: {
        type: 'media',
        name: '行业报道',
        date: '2025-12',
      },
    },
    {
      type: 'digital-goods',
      name: '电子书',
      platformCut: '~30%',
      creatorCut: '~70%（不含税）',
      creatorCutMin: 70,
      creatorCutMax: 70,
      threshold: '签约出版',
      notes: '电子书分成相对友好',
      source: {
        type: 'media',
        name: '行业报道',
        date: '2025-12',
      },
    },
  ],
  pros: [
    '平台品牌背书强，用户付费意愿高',
    '平台深度参与内容制作，质量有保障',
    '电子书分成 70%，较为友好',
  ],
  cons: [
    '邀约制，普通创作者无法自助入驻',
    '课程分成 50%，平台拿走一半',
    '内容形式单一，以知识付费为主',
  ],
  bestFor: ['知名专家/学者', '已有影响力的知识创作者', '图书作者'],
  lastUpdated: '2025-12-31',
};
