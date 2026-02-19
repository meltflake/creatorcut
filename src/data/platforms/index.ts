import { douyin } from './douyin';
import { kuaishou } from './kuaishou';
import { weixinVideo } from './weixin-video';
import { weixinGongzhonghao } from './weixin-gongzhonghao';
import { bilibili } from './bilibili';
import { zhihu } from './zhihu';
import { zsxq } from './zsxq';
import { xiaohongshu } from './xiaohongshu';
import { ximalaya } from './ximalaya';
import { toutiao } from './toutiao';
import { xiaoyuzhou } from './xiaoyuzhou';
import { dedao } from './dedao';
import type { Platform } from '../types';

export const platforms: Platform[] = [
  douyin,
  kuaishou,
  weixinVideo,
  weixinGongzhonghao,
  bilibili,
  zhihu,
  zsxq,
  xiaohongshu,
  ximalaya,
  toutiao,
  xiaoyuzhou,
  dedao,
];

export {
  douyin,
  kuaishou,
  weixinVideo,
  weixinGongzhonghao,
  bilibili,
  zhihu,
  zsxq,
  xiaohongshu,
  ximalaya,
  toutiao,
  xiaoyuzhou,
  dedao,
};
