# CreatorCut PRD

> 版本：v0.1（初稿）
> 日期：2026-02-19
> 作者：Nix（AI 助手）
> 决策人：Luca

---

## 一、项目概述

### 是什么

CreatorCut 是一个创作者平台分成数据库网站，系统整理全球内容平台的变现方式、分成比例、入驻门槛等信息，帮助创作者做出更明智的平台选择。

### 为什么做

- 目前没有人系统整理中外平台的分成数据并放在一起对比
- 创作者在平台间选择时缺乏可靠的横向比较工具
- 平台政策分散在各自的帮助文档、媒体报道、创作者口耳相传中，没有统一的信息源

### 给谁用

内容创作者（主要是中文创作者），帮助他们：
- 了解各平台的分成结构
- 选择最适合自己的变现平台
- 横向比较不同平台的收入潜力

### 谁在做

以 meltflake 身份发布和维护。个人项目，非商业化。

---

## 二、核心功能

### 2.1 平台总览表

一个可筛选、可排序的汇总表格，展示所有平台的关键分成数据。

**功能：**
- 按收入类型筛选（直播打赏、电商带货、广告分成、付费内容/订阅、商单合作、Tips/打赏、课程、Newsletter、Affiliate）
- 按分成比例排序（创作者到手比例，从高到低 / 从低到高）
- 按地区筛选（中国 / 海外 / 全部）
- 按内容形式标签筛选（视频、图文、音频、社群、课程、Newsletter）

**表格列：**
- 平台名称 + logo
- 地区（中国/海外）
- 核心变现方式
- 平台抽成范围
- 创作者到手比例范围
- 入驻门槛（简要）
- 平台成立时间

### 2.2 平台详情页

每个平台一个独立页面。

**内容结构：**
- 平台基本信息：名称、logo、类型、地区、成立时间、官网链接、月活用户数（如有公开数据）
- 变现方式列表：每种方式单独一个卡片，包含：
  - 变现方式名称
  - 平台抽成比例
  - 创作者到手比例
  - 入驻门槛 / 开通条件
  - 备注（阶梯分成、公会模式等特殊情况）
- 优势和劣势（简要，2-3 条）
- 适合什么类型的创作者
- 数据来源链接列表
- 最后更新时间

### 2.3 平台对比器

用户选择 2-3 个平台，并排展示分成数据对比。

**功能：**
- 从平台列表中选择（支持搜索）
- 选择对比维度（某种收入类型，或全部）
- 并排卡片展示，差异高亮
- 可分享对比结果（URL 参数编码选中的平台）

### 2.4 收入计算器

用户输入预估收入，查看在不同平台的实际到手金额。

**功能：**
- 输入：月收入金额（支持人民币 / 美元切换）
- 选择收入类型（直播打赏、付费内容、广告分成等）
- 输出：各平台的到手金额排行
- 显示计算公式（抽成比例 × 收入 = 到手）
- 醒目提示：计算结果不含税。平台代扣税及个人所得税由创作者自行处理。各平台税务处理方式不同，请以平台实际扣除为准。

### 2.5 数据标注系统

**每条数据标注：**
- 数据来源（官方公告 / 媒体报道 / 创作者反馈 / 行业估算）
- 来源链接（可点击）
- 数据更新时间
- 可信度标识：
  - 🟢 官方公开数据
  - 🟡 媒体报道 / 行业估算
  - ⚪ 平台未公开，基于创作者反馈推算

### 2.6 用户纠错

- 页面底部放纠错邮件地址
- 格式：邮件标题包含平台名称，正文说明哪条数据有误、正确数据及来源
- 由 Nix 人工审核后更新

---

## 三、平台覆盖范围

### 中国平台（第一批）

1. 抖音
2. 快手
3. 微信视频号
4. 微信公众号
5. B 站（哔哩哔哩）
6. 知乎
7. 知识星球
8. 小红书
9. 喜马拉雅
10. 今日头条 / 西瓜视频
11. 小宇宙
12. 得到

### 海外平台（第一批）

1. YouTube
2. TikTok（海外版）
3. Twitch
4. Patreon
5. Substack
6. Medium
7. Gumroad
8. Ko-fi
9. Buy Me a Coffee
10. Teachable
11. Kajabi
12. OnlyFans
13. Fanhouse
14. X (Twitter)
15. Instagram / Facebook (Meta)
16. Spotify (Podcasters)
17. Apple Podcasts (Subscriptions)
18. Kickstarter / Indiegogo（众筹）
19. Etsy（数字商品）
20. Shopify Creator Programs

### 收入类型分类

1. 直播打赏 / Tips
2. 电商带货
3. 广告 / 流量分成
4. 付费内容 / 订阅
5. 商单 / 品牌合作
6. 课程售卖
7. Newsletter 付费
8. Affiliate / 推荐佣金
9. 众筹
10. 数字商品售卖

---

## 四、技术方案

### 架构

- 框架：Astro（静态站点生成）
- UI 风格：WebTUI（terminal UI CSS 库，官方支持 Astro）
- 主题：Catppuccin（深色，可后续切换）
- CJK 字体：单独设 fallback（Noto Sans SC 等）
- 数据：TypeScript 文件存储（`src/data/`），编译时生成页面
- 部署：GitHub Pages
- 仓库：`meltflake/creatorcut`

### 路径

- 线上访问：`meltflake.com/creatorcut`
- Base path：`/creatorcut`

### 数据结构（初步设计）

```typescript
// src/data/types.ts

interface Platform {
  id: string;                    // 唯一标识，如 'douyin', 'youtube'
  name: string;                  // 显示名称
  nameEn?: string;               // 英文名（如有）
  logo?: string;                 // logo 路径
  region: 'cn' | 'global';      // 地区
  type: string;                  // 平台类型，如 '短视频/直播'
  url: string;                   // 官网
  foundedYear?: number;          // 成立时间
  mau?: string;                  // 月活（如 '8亿+'）
  contentForms: ContentForm[];   // 内容形式标签
  monetization: MonetizationMethod[];  // 变现方式列表
  pros: string[];                // 优势
  cons: string[];                // 劣势
  bestFor: string[];             // 适合什么创作者
  lastUpdated: string;           // 最后更新日期
}

interface MonetizationMethod {
  type: RevenueType;             // 收入类型
  name: string;                  // 方式名称，如 '直播打赏'
  platformCut: string;           // 平台抽成，如 '20-50%'
  creatorCut: string;            // 创作者到手，如 '50-80%'
  creatorCutMin?: number;        // 最低到手比例（用于排序/计算）
  creatorCutMax?: number;        // 最高到手比例
  threshold?: string;            // 门槛
  notes?: string;                // 备注
  source: DataSource;            // 数据来源
}

interface DataSource {
  type: 'official' | 'media' | 'estimate';  // 来源类型
  name: string;                  // 来源名称
  url?: string;                  // 来源链接
  date: string;                  // 数据日期
}

type ContentForm = 'video' | 'article' | 'audio' | 'community' | 'course' | 'newsletter' | 'livestream';

type RevenueType =
  | 'tipping'        // 直播打赏 / Tips
  | 'ecommerce'      // 电商带货
  | 'ads'            // 广告/流量分成
  | 'subscription'   // 付费内容/订阅
  | 'sponsorship'    // 商单/品牌合作
  | 'course'         // 课程售卖
  | 'newsletter'     // Newsletter 付费
  | 'affiliate'      // Affiliate/推荐佣金
  | 'crowdfunding'   // 众筹
  | 'digital-goods'; // 数字商品售卖
```

### 页面结构

```
/creatorcut/                    # 首页（总览表 + 简介）
/creatorcut/platform/[id]       # 平台详情页
/creatorcut/compare             # 对比器
/creatorcut/calculator          # 收入计算器
/creatorcut/about               # 关于（数据说明、纠错方式）
```

---

## 五、设计原则

1. **数据为王**：所有设计服务于数据的清晰展示。不要花哨的动画，不要多余的装饰。
2. **来源透明**：每条数据都要有出处。没有来源的数据不上线。
3. **保持中立**：不做排名推荐，只呈现事实。让创作者自己判断。
4. **简洁高效**：用户进来，找到想要的数据，走人。不搞注册、不搞社交、不搞 feed。
5. **税务免责**：所有涉及金额的地方，醒目标注"不含税"。

---

## 六、里程碑

### v0.1 — MVP（目标：1-2 周）

- 12 个中国平台数据录入
- 总览表（可排序）
- 平台详情页
- 数据来源标注
- 部署上线

### v0.2 — 海外平台 + 对比器

- 15-20 个海外平台数据录入
- 对比器功能
- 地区筛选
- 收入类型筛选

### v0.3 — 计算器 + 优化

- 收入计算器
- 移动端优化
- SEO 优化（平台名称搜索能找到）

---

## 七、不做的事

- 不做用户注册 / 登录
- 不做社区 / 评论系统
- 不做平台推荐 / 排名
- 不做广告 / 商业化
- 不做创作者案例故事（第一版）
- 不做英文版（第一版）
- 不收录已停运的平台

---

## 八、开放问题

1. ~~项目名称~~ → 已定：CreatorCut
2. ~~域名~~ → 已定：meltflake.com/creatorcut
3. logo / 视觉风格 — 沿用 AstroWind 默认，还是做简单定制？
4. 海外平台数据采集 — 需要花时间整理，第一版是否先只上中国平台？
5. MCN/公会分成 — 要不要单独列一个维度？还是作为备注？

---

## 九、参考

- 现有数据：`workspace/data/china-content-platform-revenue-models.md`
- 技术参考：`meltflake/aisg`（同架构项目）
- AstroWind 模板：https://github.com/onwidget/astrowind
