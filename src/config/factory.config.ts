/* ============================================================
   FACTORY CONFIG — single file to rebrand this template.
   Edit values here; pages, components and SEO pull from this source.
   ============================================================ */

import type {
  LocalizedString,
  Product,
  BrandConfig,
  CompanyConfig,
  FactoryStat,
  ContactConfig,
  SeoConfig,
  ThemeConfig,
  Category,
  Certification,
  Capability,
  FaqItem,
  HeroConfig,
  CtaBandConfig,
  NavigationConfig,
  PdpConfig,
  FooterCtaConfig,
} from '../data/types';


/* ---------- brand.ts ---------- */

export const brand: BrandConfig = {
  name: 'NOVA INDUSTRIAL',
  wordmarkPrimary: 'NOVA',
  wordmarkSecondary: 'INDUSTRIAL',
  tagline: { en: 'Wiring devices built to specification.', zh: '按规格生产的电工产品。' },
  description: { en: 'NOVA INDUSTRIAL manufactures wall switches, sockets, USB chargers and smart controls for importers, distributors and OEM buyers worldwide.', zh: 'NOVA INDUSTRIAL 为全球进口商、经销商及 OEM 采购商生产墙壁开关、插座、USB 充电器与智能控制产品。' },
};

/* ---------- company.ts ---------- */

export const company: CompanyConfig = {
  legalName: { en: 'Nova Industrial Electric Co., Ltd.', zh: '诺华工业电气有限公司' },
  founded: 2004,
  headquarters: { en: 'Wenzhou, Zhejiang, China', zh: '中国浙江省温州市' },
  markets: [{ en: 'Europe', zh: '欧洲' }, { en: 'North America', zh: '北美' }, { en: 'Middle East', zh: '中东' }, { en: 'Southeast Asia', zh: '东南亚' }],
  employees: { en: '230+', zh: '230 余人' },
  factoryArea: { en: '52,000 m²', zh: '5.2 万平方米' },
  annualCapacity: { en: '12M units', zh: '1200 万件' },
  experience: { en: '20+ years', zh: '20 余年' },
};

export const factoryStats: FactoryStat[] = [
  { value: '20+', label: { en: 'Years of manufacturing', zh: '年制造经验' }, note: { en: 'Founded in 2004', zh: '2004 年创立' }, },
  { value: '40+', label: { en: 'Export markets', zh: '出口市场' }, note: { en: 'Europe · North America · MEA · SEA', zh: '欧洲 · 北美 · 中东 · 东南亚' }, },
  { value: '52,000', label: { en: 'm² production facility', zh: '平方米生产基地' }, note: { en: 'Molding · assembly · QC under one roof', zh: '注塑 · 组装 · 质检同厂完成' }, },
  { value: '12M', label: { en: 'Units annual capacity', zh: '件年产能' }, note: { en: '8 automated assembly lines', zh: '8 条自动化产线' }, },
];

export const statsBand: FactoryStat[] = [
  { value: '20+', label: { en: 'Years manufacturing', zh: '年制造经验' }, },
  { value: '40+', label: { en: 'Export markets', zh: '出口市场' }, },
  { value: '12M', label: { en: 'Units per year', zh: '年产能（件）' }, },
  { value: '98.6%', label: { en: 'QC pass rate', zh: '质检合格率' }, },
];

/* ---------- contact.ts ---------- */

export const contact: ContactConfig = {
  email: '{{EMAIL_PLACEHOLDER}}',
  salesEmail: '{{SALES_EMAIL_PLACEHOLDER}}',
  phone: '{{PHONE_PLACEHOLDER}}',
  phoneHref: '{{PHONE_HREF_PLACEHOLDER}}',
  whatsapp: '{{WHATSAPP_PLACEHOLDER}}',
  whatsappHref: '{{WHATSAPP_HREF_PLACEHOLDER}}',
  addressLines: [{ en: '{{ADDRESS_LINE_1_PLACEHOLDER}}', zh: '{{ADDRESS_LINE_1_ZH_PLACEHOLDER}}' }, { en: '{{ADDRESS_LINE_2_PLACEHOLDER}}', zh: '{{ADDRESS_LINE_2_ZH_PLACEHOLDER}}' }, { en: '{{ADDRESS_LINE_3_PLACEHOLDER}}', zh: '{{ADDRESS_LINE_3_ZH_PLACEHOLDER}}' }],
  country: { en: '{{COUNTRY_PLACEHOLDER}}', zh: '{{COUNTRY_ZH_PLACEHOLDER}}' },
  businessHours: { en: '{{BUSINESS_HOURS_PLACEHOLDER}}', zh: '{{BUSINESS_HOURS_ZH_PLACEHOLDER}}' },
  responseTime: { en: '{{RESPONSE_TIME_PLACEHOLDER}}', zh: '{{RESPONSE_TIME_ZH_PLACEHOLDER}}' },
};

/* ---------- theme.ts ---------- */

export const seo: SeoConfig = {
  siteUrl: '{{SITE_URL_PLACEHOLDER}}',
  siteName: 'NOVA INDUSTRIAL',
  titleTemplate: '%s — NOVA INDUSTRIAL',
  defaultTitle: 'NOVA INDUSTRIAL — Electrical Components Manufacturer',
  defaultDescription:
    'Manufacturer of wall switches, sockets, USB chargers and smart controls for importers, distributors and OEM buyers across Europe, North America, the Middle East and Southeast Asia.',
  defaultKeywords: [
    'wall switch manufacturer',
    'electrical socket factory',
    'OEM wiring devices',
    'USB wall charger manufacturer',
    'smart switch OEM',
  ],
};

/**
 * Runtime mirror of styles/tokens.css.
 * Used for SEO metadata, og tags and the rebrand test.
 * Keep values in sync with tokens.css.
 */
export const theme: ThemeConfig = {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    surfaceMuted: '#f1efe9',
    ink: '#14181b',
    text: '#171b1e',
    textSecondary: '#44494e',
    textMuted: '#767c81',
    border: '#e3e0d8',
    borderStrong: '#ccc8bf',
    primary: '#1b2328',
    primaryHover: '#2e3940',
    accent: '#c2703e',
    success: '#2e7d53',
    error: '#b3402f',
  },
  fonts: {
    sans: 'Archivo',
    mono: 'IBM Plex Mono',
  },
};

/* ---------- categories.ts ---------- */

export const categories: Category[] = [
  {
    id: 'wall-switches',
    slug: 'wall-switches',
    name: { en: 'Wall Switches', zh: '墙壁开关' },
    shortName: { en: 'Switches', zh: '开关' },
    description: { en: 'Rocker, bell-press and dimmer switches in screwed and screwless plates, 10AX rated.', zh: '翘板、门铃、调光开关，螺钉/无框面板可选，额定 10AX。' },
    longDescription:
      { en: 'Mechanical switches built on a shared 86mm platform: silver-alloy contacts, phosphor-bronze terminals and flame-retardant polycarbonate housings. Rated 10AX 250V~ and endurance-tested to 50,000 operations per IEC 60669-1.', zh: '86mm 通用平台机械开关：银合金触点、磷青铜端子、阻燃聚碳酸酯壳体。额定 10AX 250V~，按 IEC 60669-1 通过 50,000 次耐久测试。' },
    keywords: ['rocker switch', 'dimmer', 'bell press', 'light switch', '1 gang', '2 gang'],
  },
  {
    id: 'electrical-sockets',
    slug: 'electrical-sockets',
    name: { en: 'Electrical Sockets', zh: '电气插座' },
    shortName: { en: 'Sockets', zh: '插座' },
    description: { en: 'Schuko, BS 1363 and universal receptacles with child-protection shutters, 16A.', zh: '德式、英式及通用插座，带儿童保护门，额定 16A。' },
    longDescription:
      { en: 'Receptacles for European, British and international mounting standards. Double-wipe contacts, protected shutters and screwless faceplates; every batch passes 10,000-cycle insertion testing to IEC 60884-1.', zh: '适用于欧标、英标及国际安装标准的插座。双擦拭触点、带保护门、无框面板；每批通过 10,000 次插拔测试，符合 IEC 60884-1。' },
    keywords: ['schuko', 'socket outlet', 'receptacle', 'BS 1363', '13A', '16A', 'universal socket'],
  },
  {
    id: 'usb-wall-chargers',
    slug: 'usb-wall-chargers',
    name: { en: 'USB Wall Chargers', zh: 'USB 墙壁充电插座' },
    shortName: { en: 'USB Chargers', zh: 'USB 充电' },
    description: { en: 'USB-A and USB-C charging outlets, 12W to 45W, PD-capable, flush-mounted.', zh: 'USB-A/C 充电插座，12–45W，支持 PD 快充，暗装。' },
    longDescription:
      { en: 'Charging outlets that replace or combine with standard receptacles. Built-in EMI filtering and over-current protection; USB-C ports deliver up to 45W with Power Delivery for phones, tablets and laptops.', zh: '可替代或与标准插座组合的充电插座。内置 EMI 滤波与过流保护；USB-C 端口支持 PD 快充，最高 45W，可为手机、平板及笔记本供电。' },
    keywords: ['usb outlet', 'usb c', 'power delivery', 'fast charge', 'gan', 'charging socket'],
  },
  {
    id: 'smart-controls',
    slug: 'smart-controls',
    name: { en: 'Smart Controls', zh: '智能控制' },
    shortName: { en: 'Smart', zh: '智能' },
    description: { en: 'Wi-Fi and Zigbee touch switches, dimmers and metered sockets for projects.', zh: 'Wi-Fi/Zigbee 触控开关、调光及带计量插座，适用于工程项目。' },
    longDescription:
      { en: 'Glass-capacitive touch controls that retrofit standard 86mm boxes. Wi-Fi models work with the Tuya ecosystem (Smart Life); Zigbee models integrate with common hubs. Neutral-wire-free versions available for retrofit markets.', zh: '适配标准 86mm 底盒的钢化玻璃电容触控开关。Wi-Fi 款接入涂鸦/Smart Life 生态；Zigbee 款兼容常见网关；部分型号支持免零线改装。' },
    keywords: ['smart switch', 'touch switch', 'wifi', 'zigbee', 'smart dimmer', 'energy monitoring'],
  },
  {
    id: 'plates-accessories',
    slug: 'plates-accessories',
    name: { en: 'Plates & Accessories', zh: '面板与配件' },
    shortName: { en: 'Accessories', zh: '配件' },
    description: { en: 'Screwless wall plates, modular inserts, surface boxes and connection outlets.', zh: '无框面板、模块插芯、明装底盒及出线座。' },
    longDescription:
      { en: 'The parts that finish an installation: blank and modular faceplates, 86mm surface boxes, TV/network outlets and cord outlets with cable clamps — all dimensioned to the same grid as our switch and socket ranges.', zh: '完成安装的配件系列：空白面板、模块化面板、86mm 明装底盒、电视/网络口及带压线夹出线座——全部按同一网格尺寸设计，与开关插座系列配套。' },
    keywords: ['wall plate', 'blank plate', 'surface box', 'modular', 'tv outlet', 'network outlet'],
  },
];

export const categoryById = (id: string): Category => {
  const found = categories.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown category id: ${id}`);
  return found;
};

/* ---------- certifications.ts ---------- */

export const certifications: Certification[] = [
  {
    id: 'ce',
    code: 'CE',
    name: { en: 'CE Conformity', zh: 'CE 符合性' },
    description: { en: 'All switch and socket ranges carry CE marking under the Low Voltage Directive 2014/35/EU, with Declaration of Conformity available per product family.', zh: '全系列开关插座贴 CE 标志，符合低电压指令 2014/35/EU，按系列提供符合性声明。' },
    scope: { en: 'All ranges · EU / EEA', zh: '全系列 · 欧盟/欧洲经济区' },
  },
  {
    id: 'rohs',
    code: 'RoHS',
    name: { en: 'RoHS 2.0 (EU 2015/863)', zh: 'RoHS 2.0（EU 2015/863）' },
    description: { en: 'Every plastic part and plating is screened for the ten restricted substances. Batch-level reports accompany all EU-bound shipments.', zh: '所有塑料件与电镀层经十项限用物质筛查，输欧货物随附批次检测报告。' },
    scope: { en: 'All ranges · EU', zh: '全系列 · 欧盟' },
  },
  {
    id: 'ukca',
    code: 'UKCA',
    name: { en: 'UKCA Marking', zh: 'UKCA 标志' },
    description: { en: 'British-standard socket and switch ranges are UKCA-assessed for the UK market, including BS 1363-2 and BS 5733 compliance.', zh: '英式开关插座系列通过 UKCA 评估，符合 BS 1363-2 与 BS 5733。' },
    scope: { en: 'BS-pattern ranges · United Kingdom', zh: '英式系列 · 英国' },
  },
  {
    id: 'iso9001',
    code: 'ISO 9001',
    name: { en: 'ISO 9001:2015', zh: 'ISO 9001:2015' },
    description: { en: 'Quality management system certified since 2009 and re-audited annually. Scope covers design, molding, assembly and export of wiring devices.', zh: '质量管理体系自 2009 年认证并每年复审，覆盖电工产品的设计、注塑、组装与出口。' },
    scope: { en: 'Site-wide · Wenzhou facility', zh: '全厂 · 温州工厂' },
  },
  {
    id: 'iec',
    code: 'IEC',
    name: { en: 'IEC Product Standards', zh: 'IEC 产品标准' },
    description: { en: 'Products are type-tested to IEC 60669-1 (switches), IEC 60884-1 (sockets) and BS 1363-2, with independent lab reports from Intertek and SGS.', zh: '产品按 IEC 60669-1（开关）、IEC 60884-1（插座）、BS 1363-2 型式试验，附 Intertek/SGS 独立报告。' },
    scope: { en: 'Switches · sockets · weatherproof', zh: '开关 · 插座 · 防水系列' },
  },
  {
    id: 'saso',
    code: 'SASO',
    name: { en: 'SASO / IECEE', zh: 'SASO / IECEE' },
    description: { en: 'Selected ranges are certified under Saudi SASO IECEE recognition for Middle East distribution programs.', zh: '部分系列通过沙特 SASO IECEE 认可，适用于中东分销项目。' },
    scope: { en: 'Selected ranges · Saudi Arabia / GCC', zh: '部分系列 · 沙特/海合会' },
  },
];

export const capabilities: Capability[] = [
  {
    id: 'manufacturing',
    index: '01',
    title: { en: 'Precision Manufacturing', zh: '精密制造' },
    description: { en: 'Molding, stamping, contact assembly and final packing run inside one facility on the same production plan — no outsourced steps in the critical path.', zh: '成型、冲压、触点组装、包装同厂同计划完成，关键环节无外包。' },
    points: [{ en: '24 injection molding machines, 80–650T clamping force', zh: '24 台注塑机，锁模力 80–650T' }, { en: 'High-speed progressive stamping for contact bridges and terminals', zh: '高速级进模冲压触点桥与端子' }, { en: '8 automated assembly lines with vision inspection', zh: '8 条自动化产线，配视觉检测' }, { en: '12M units annual output across 5 product families', zh: '五大产品系列年产能 1200 万件' }],
  },
  {
    id: 'oem',
    index: '02',
    title: { en: 'OEM Service', zh: 'OEM 服务' },
    description: { en: 'Private-label production with your branding on plates, retail packaging and cartons — proven processes, your identity.', zh: '面板、包装、纸箱贴您的品牌，工艺成熟，品牌归您。' },
    points: [{ en: 'Logo engraving or pad printing, artwork proof in 3 days', zh: 'Logo 镭雕或移印，3 天出稿确认' }, { en: 'Retail-ready blister, constructor or plain export packing', zh: '零售吸塑、工程包装或普通出口包装' }, { en: 'MOQ from 1,000 units per finish', zh: '起订量 1,000 件/色' }, { en: 'GS1 barcode labeling to your standard', zh: '按您的标准贴 GS1 条码标签' }],
  },
  {
    id: 'odm',
    index: '03',
    title: { en: 'ODM Development', zh: 'ODM 开发' },
    description: { en: 'Existing platforms adapted to your market requirements — pin types, shutters, finishes and connectivity re-engineered without full custom tooling.', zh: '基于现有平台适配目标市场——插脚、保护门、表面处理、通讯协议改型，无需全新开模。' },
    points: [{ en: 'Platform modifications from 3,000 pcs', zh: '平台改型 3,000 件起' }, { en: 'New tooling in-house: 25–40 days typical', zh: '自有模具车间，新模通常 25–40 天' }, { en: 'First-article inspection before every mass run', zh: '每批量产前首件检验' }, { en: 'Sample submission within 7 days of drawing sign-off', zh: '图纸确认后 7 天内交样' }],
  },
  {
    id: 'quality-control',
    index: '04',
    title: { en: 'Quality Control & Testing', zh: '质量控制与检测' },
    description: { en: 'A dedicated lab runs IEC-aligned test schedules on every production batch, with results archived for traceability.', zh: '专职实验室按 IEC 标准逐批检测，结果存档可追溯。' },
    points: [{ en: 'Endurance rigs: 50,000-cycle switch and 10,000-cycle socket tests', zh: '寿命测试台：开关 50,000 次、插座 10,000 次插拔' }, { en: 'Dielectric 2,000V / 1min and insulation resistance testing', zh: '耐压 2,000V/1min 及绝缘电阻测试' }, { en: 'IPX5/IPX6 spray chamber for weatherproof ranges', zh: 'IPX5/IPX6 喷淋箱，用于防水系列' }, { en: 'Temperature cycling −25°C to +85°C', zh: '温度循环 −25°C 至 +85°C' }],
  },
  {
    id: 'packaging',
    index: '05',
    title: { en: 'Packaging & Private Label', zh: '包装与贴牌' },
    description: { en: 'Packaging engineering that survives the sea freight and sells on the shelf — specified, proofed and packed in-house.', zh: '包装工程兼顾海运耐受与货架陈列——设计、打样、包装内部完成。' },
    points: [{ en: 'Drop-tested export cartons, 20kg max per master box', zh: '纸箱经跌落测试，单箱最重 20kg' }, { en: 'Bilingual retail artwork support', zh: '支持双语零售版面设计' }, { en: 'Blister, box, constructor and bulk packing options', zh: '吸塑、彩盒、工程包装及散装可选' }, { en: 'Container loading plans with utilization report', zh: '提供集装箱装载方案及利用率报告' }],
  },
  {
    id: 'export-logistics',
    index: '06',
    title: { en: 'Export Logistics', zh: '出口物流' },
    description: { en: 'Forty minutes from Ningbo port with bonded warehousing; our documentation team ships to 40+ markets every month.', zh: '距宁波港 40 分钟，保税仓储；单证团队每月向 40+ 市场发货。' },
    points: [{ en: 'FOB / CIF / DDP terms on request', zh: '可按需提供 FOB/CIF/DDP 条款' }, { en: 'Certificate of Origin, L/C and Embassy attestation handled', zh: '代办原产地证、信用证及使馆认证' }, { en: 'Consolidated multi-SKU container loading', zh: '多 SKU 拼箱装载' }, { en: 'Dedicated documentation clerk per account', zh: '每客户配备专职单证员' }],
  },
];

export const faqs: FaqItem[] = [
  {
    question: { en: 'Do you support OEM and ODM orders?', zh: '是否支持 OEM 与 ODM 订单？' },
    answer: { en: 'Yes — both. OEM private-label production starts at 1,000 units per finish, with your logo engraved or printed on plates and packaging. ODM platform modifications (pin types, shutters, finishes, connectivity) start at 3,000 pcs, and full custom tooling runs 25–40 days in our own mold shop.', zh: '可以。OEM 贴牌起订量 1,000 件/色，面板与包装可印您的 Logo；ODM 改型（插脚、保护门、表面处理、通讯协议）3,000 件起，全新模具 25–40 天于自有模具车间完成。' },
  },
  {
    question: { en: 'What is your MOQ?', zh: '起订量是多少？' },
    answer: { en: 'Standard catalog items ship from 1,000 units per finish. Less than container load is acceptable for stocked lines. For mixed orders we consolidate SKUs into a single container loading plan.', zh: '常规产品起订量 1,000 件/色。现货系列可拼箱；多品类订单我们统一制定拼箱方案。' },
  },
  {
    question: { en: 'Can you provide samples before we order?', zh: '下单前能否提供样品？' },
    answer: { en: 'Yes. We send production-intent samples within 7 days — three pieces free of charge, freight collected. Sample finishes and pin types can be mixed so your team can evaluate the range side by side.', zh: '可以。7 天内寄出量产标准样品——3 件免费，运费到付。样品可混搭颜色与插脚类型，便于对比评估。' },
  },
  {
    question: { en: 'Which certifications can you supply?', zh: '可提供哪些认证？' },
    answer: { en: 'CE and RoHS on all ranges, UKCA on British-standard products, SASO IECEE for selected Middle East lines, and type-test reports to IEC 60669-1 / IEC 60884-1 / BS 1363-2 from Intertek and SGS. Declarations of Conformity are issued per shipment on request.', zh: '全系列 CE、RoHS；英式产品 UKCA；部分中东系列 SASO IECEE；型式试验报告（IEC 60669-1 / IEC 60884-1 / BS 1363-2）由 Intertek、SGS 出具。符合性声明可按需提供。' },
  },
  {
    question: { en: 'Which markets do you currently serve?', zh: '目前服务哪些市场？' },
    answer: { en: 'Distributors and OEM buyers in more than 40 countries across Europe, North America, the Middle East and Southeast Asia. Our most common programs are private-label ranges for electrical wholesalers and project supply for hospitality developers.', zh: '欧洲、北美、中东、东南亚 40 多个国家的经销商与 OEM 采购商。主要项目为电气批发商贴牌系列及酒店工程供货。' },
  },
  {
    question: { en: 'How do I request a quote?', zh: '如何询价？' },
    answer: { en: 'Use the Request a Quote form, or add products to the inquiry basket and submit the list together. Include quantities, target market and any certification or packaging requirements — our sales engineers reply within one business day.', zh: '使用询价表单，或将产品加入询盘清单一并提交。请注明数量、目标市场及认证/包装要求——销售工程师一个工作日内回复。' },
  },
  {
    question: { en: 'What are your payment and delivery terms?', zh: '付款与交货条款是什么？' },
    answer: { en: 'Standard terms are 30% deposit with balance against B/L copy, T/T or L/C at sight. Lead time is 35–45 days after deposit for production orders; FOB, CIF and DDP are all workable from Ningbo.', zh: '常规条款：30% 定金，余款凭提单副本支付，电汇或即期信用证。生产订单收到定金后 35–45 天交货；FOB、CIF、DDP 均可自宁波出运。' },
  },
  {
    question: { en: 'What warranty do your products carry?', zh: '产品保修期多久？' },
    answer: { en: 'Five years on mechanical construction and finishes, two years on electronic components — backed by a kept-defect analysis program that feeds results back into production within the same quarter.', zh: '机械结构与表面处理 5 年，电子元件 2 年——配套不良品分析机制，检测结果当季反馈至生产。' },
  },
];

/* ---------- about.ts ---------- */

/* ---------- About page content (all rebrand-editable) ---------- */

export interface ProcessStep {
  step: string;
  title: LocalizedString;
  body: LocalizedString;
}

export const factSheet: { label: LocalizedString; value: string }[] = [
  { label: { en: 'Founded', zh: '成立' }, value: '2004 · Wenzhou, Zhejiang' },
  { label: { en: 'Facility', zh: '工厂' }, value: '52,000 m² · owned' },
  { label: { en: 'Certified', zh: '认证' }, value: 'ISO 9001:2015 since 2009' },
  { label: { en: 'Markets', zh: '市场' }, value: '40+ export countries' },
];

/** The physical production sequence — proof of real manufacturing capability. */
export const manufacturingProcess: ProcessStep[] = [
  { step: '01', title: { en: 'Tooling', zh: '模具' }, body: { en: 'Mold design and steel cutting in the 14-person mold shop; 25–40 days for a new tool.', zh: '14 人模具车间负责模具设计与钢材加工，新模具周期 25–40 天。' } },
  { step: '02', title: { en: 'Injection molding', zh: '注塑' }, body: { en: '24 machines, 80–650T, molding PC and nylon housings around the clock.', zh: '24 台注塑机（80–650T）全天候成型 PC 与尼龙外壳。' } },
  { step: '03', title: { en: 'Contact stamping', zh: '触点冲压' }, body: { en: 'High-speed progressive dies stamp silver-alloy contacts and brass terminals in-house.', zh: '高速级进模内部冲压银合金触点与铜端子。' } },
  { step: '04', title: { en: 'Assembly', zh: '组装' }, body: { en: '8 automated lines with vision inspection at every critical station.', zh: '8 条自动化产线，关键工位均配视觉检测。' } },
  { step: '05', title: { en: 'Testing', zh: '测试' }, body: { en: 'Batch sampling on endurance, dielectric and IP rigs before any carton is sealed.', zh: '封箱前按批次抽样进行寿命、耐压及 IP 防护测试。' } },
  { step: '06', title: { en: 'Packing', zh: '包装' }, body: { en: 'Blister, box or bulk packing with drop-tested cartons and GS1 labeling.', zh: '吸塑、彩盒或散装包装，纸箱经跌落测试，贴 GS1 标签。' } },
  { step: '07', title: { en: 'Export', zh: '出口' }, body: { en: 'Bonded warehouse, container loading plans and documentation 40 minutes from Ningbo port.', zh: '保税仓、装箱方案与单证，距宁波港 40 分钟。' } },
];

/** Photo strip used on the Capabilities page — PHOTO + CAPTION + CONTEXT. */
export const factoryMediaStrip: { subject: 'production' | 'quality' | 'packaging'; caption: LocalizedString }[] = [
  { subject: 'production', caption: { en: 'Injection molding — 24 machines, 80–650T', zh: '注塑车间——24 台机器，80–650T' }, },
  { subject: 'quality', caption: { en: 'Dimensional and electrical testing, per batch', zh: '每批尺寸与电气测试' }, },
  { subject: 'packaging', caption: { en: 'Carton-level export preparation, Ningbo', zh: '宁波港纸箱级出口准备' }, },
];

export const milestones: { year: string; text: LocalizedString }[] = [
  { year: '2004', text: { en: 'Founded in Wenzhou with two molding machines producing wall switches for domestic brands.', zh: '温州创立，两台注塑机为国产品牌生产墙壁开关。' } },
  { year: '2009', text: { en: 'ISO 9001 certification; first European distributor program launches in Germany.', zh: '通过 ISO 9001 认证；首个德国经销商项目启动。' } },
  { year: '2013', text: { en: 'In-house testing lab commissioned; IEC type-testing moved on-site.', zh: '自有检测实验室投入使用；IEC 型式试验移至厂内。' } },
  { year: '2016', text: { en: 'New 52,000 m² plant; USB charging and modular ranges added.', zh: '5.2 万平方米新厂投产；新增 USB 充电与模块系列。' } },
  { year: '2020', text: { en: 'Smart controls platform developed — Wi-Fi and Zigbee lines for project business.', zh: '开发智能控制平台——面向工程业务的 Wi-Fi 与 Zigbee 产品线。' } },
  { year: '2024', text: { en: '40th export market; annual capacity reaches 12 million units.', zh: '出口第 40 个市场；年产能达 1200 万件。' } },
];

/* ---------- hero.ts ---------- */

export const hero: HeroConfig = {
  eyebrow: { en: 'Electrical Components Manufacturer — Est. 2004', zh: '电工产品制造商 — 成立于 2004 年' },
  titleLines: [{ en: 'Wiring devices', zh: '按规格生产的' }, { en: 'built to specification.', zh: '电工产品' }],
  description: {
    en: `${brand.name} manufactures wall switches, sockets, USB chargers and smart controls for distributors, contractors and OEM buyers in 40+ markets. In-house tooling, IEC-compliant testing, ${company.annualCapacity.en} of annual capacity.`,
    zh: `${brand.name} 为 40 多个市场的经销商、承包商及 OEM 采购商生产墙壁开关、插座、USB 充电器与智能控制产品。自有模具、IEC 标准检测、年产能 ${company.annualCapacity.zh}。`,
  },
  primaryCta: { label: { en: 'Request a Quote', zh: '询价' }, href: '/request-quote' },
  secondaryCta: { label: { en: 'Explore Products', zh: '浏览产品' }, href: '/products' },
  footnote: { en: 'MOQ from 1,000 units · OEM & ODM · Samples in 7 days', zh: '起订量 1,000 件 · 支持 OEM/ODM · 样品 7 天' },
  visualCaption: { en: 'NV-210 series · 86 × 86 × 9 mm · IEC 60669-1 · screwless plate system', zh: 'NV-210 系列 · 86 × 86 × 9 mm · IEC 60669-1 · 无框面板系统' },
};

export const ctaBand: CtaBandConfig = {
  eyebrow: { en: 'Request a Quote', zh: '询价' },
  title: { en: 'Tell us what your market needs.', zh: '告诉我们您的市场需求。' },
  description: { en: 'Send quantities, target market and certification requirements. Our sales engineers respond within one business day with pricing, lead time and sample options.', zh: '发送数量、目标市场及认证要求，销售工程师一个工作日内回复报价、交期与样品方案。' },
  primaryCta: { label: { en: 'Request a Quote', zh: '询价' }, href: '/request-quote' },
  secondaryCta: { label: { en: 'Browse the Catalogue', zh: '浏览产品目录' }, href: '/products' },
};

/* ---------- Request Quote page: quiet commercial metadata under the hero ---------- */

export const quotePageMeta: { label: LocalizedString; value: LocalizedString }[] = [
  { label: { en: 'MOQ', zh: '最小起订量' }, value: { en: 'from 1,000 units', zh: '1,000 件起' }, },
  { label: { en: 'Samples', zh: '样品' }, value: { en: '7 days, 3 pcs free', zh: '7 天交样，3 件免费' }, },
  { label: { en: 'Reply', zh: '回复' }, value: { en: 'within one business day', zh: '一个工作日内回复' }, },
  { label: { en: 'OEM / ODM', zh: 'OEM / ODM' }, value: { en: 'from 3,000 pcs', zh: '3,000 件起' }, },
];

/* ---------- PDP commercial note ---------- */

export const pdpConfig: PdpConfig = {
  oemLabel: { en: 'OEM / ODM', zh: 'OEM / ODM' },
  oemNote: { en: 'Private label and platform modifications — from 1,000 pcs', zh: '贴牌及平台改型——1,000 件起' },
  oemHref: '/capabilities#oem',
};

/* ---------- Footer CTA (small, quiet, above the link columns) ---------- */

export const footerCta: FooterCtaConfig = {
  title: { en: 'Ready to specify your next program?', zh: '准备为下一个项目选型？' },
  cta: { label: { en: 'Request a Quote', zh: '询价' }, href: '/request-quote' },
};

/* ---------- Home section copy ---------- */

export const homeSections = {
  categories: {
    index: '01',
    label: { en: 'Product Range', zh: '产品系列' },
    title: { en: 'Five product families. One production standard.', zh: '五大产品系列，统一生产标准。' },
    description: { en: 'Every product is molded, assembled and tested in our Wenzhou facility to the same IEC-aligned process — whether it ships as NOVA branded stock or your private label.', zh: '所有产品均在温州工厂按统一 IEC 标准流程成型、组装、测试，无论贴 NOVA 品牌还是您的自主品牌。' },
  },
  factory: {
    index: '02',
    label: { en: 'Manufacturing', zh: '制造能力' },
    title: {
      en: `${company.factoryArea.en} of controlled production.`,
      zh: `${company.factoryArea.zh} 可控生产基地。`,
    },
    description: { en: 'From mold design to final carton, every stage happens inside our own facility. That control is why our defect rates stay low and our lead times stay predictable.', zh: '从模具设计到最终纸箱，每一道工序都在自有工厂内完成。正是这种控制让我们的缺陷率保持低位、交期可控。' },
    points: [{ en: '24 injection molding machines, 80–650T, running engineering-grade PC and nylon', zh: '24 台注塑机（80–650T），加工工程级 PC 与尼龙' }, { en: '8 automated assembly lines with vision inspection at every critical station', zh: '8 条自动化产线，关键工位均配视觉检测' }, { en: 'In-house testing lab: endurance rigs, temperature cycling, IPX5/IPX6 spray chambers', zh: '自有检测实验室：寿命测试、温度循环、IPX5/IPX6 喷淋' }, { en: 'Bonded warehouse and export packing line 40 minutes from Ningbo port', zh: '保税仓与出口包装线，距宁波港 40 分钟' }],
    visual: 'production' as const,
  },
  featured: {
    index: '03',
    label: { en: 'Featured Products', zh: '精选产品' },
    title: { en: 'The lines distributors reorder.', zh: '经销商反复补货的产品。' },
    description: { en: 'Four catalogue heroes — proven sellers across European, British and smart-home programs, each available under private label.', zh: '四款目录热销产品——欧洲、英式及智能家居方案中的验证品，均可贴牌生产。' },
  },
  capabilities: {
    index: '04',
    label: { en: 'Capabilities', zh: '核心能力' },
    title: { en: 'What we do in-house.', zh: '全部工序内部完成。' },
    description: { en: 'Six disciplines under one roof keep quality consistent and lead times honest.', zh: '六大工序同厂完成，品质稳定、交期可控。' },
  },
  oem: {
    index: '05',
    label: { en: 'OEM / ODM', zh: 'OEM / ODM' },
    title: { en: 'Your brand. Our production line.', zh: '您的品牌，我们的产线。' },
    description: { en: 'We produce wiring devices under private label for distributors and retail chains across four continents. Send us a sample or a drawing — we handle tooling, certification mapping and packaging to your standard.', zh: '为四大洲经销商与连锁商超提供贴牌生产。寄样或提供图纸即可，模具、认证与包装按您的标准执行。' },
    points: [
      {
        title: { en: 'OEM private label', zh: 'OEM 贴牌' },
        body: { en: 'Your logo engraved or pad-printed on plates and packaging. Artwork proofed in 3 days, MOQ from 1,000 units per finish.', zh: '面板与包装镭雕或移印您的 Logo，3 天出稿，起订量 1,000 件/色。' },
      },
      {
        title: { en: 'ODM development', zh: 'ODM 开发' },
        body: { en: 'Existing platforms adapted to your market: pin types, shutter systems, finishes and radio standards re-engineered without a full custom tooling cycle.', zh: '基于现有平台适配目标市场：插脚类型、保护门、表面处理、无线协议改型，无需全新开模。' },
      },
      {
        title: { en: 'Custom packaging', zh: '定制包装' },
        body: { en: 'Retail-ready blister boxes, constructor packs or plain export cartons — barcode labeling to your GS1 standard included.', zh: '零售吸塑盒、工程包装或普通出口纸箱——含按您 GS1 标准打印的条码标签。' },
      },
      {
        title: { en: 'Engineering support', zh: '工程支持' },
        body: { en: 'A dedicated project engineer reviews drawings, confirms materials and runs first-article inspection before mass production.', zh: '指定项目工程师审图、确认材料，并在量产前执行首件检验。' },
      },
    ],
  },
  quality: {
    index: '06',
    label: { en: 'Quality & Compliance', zh: '质量与认证' },
    title: { en: 'Tested here. Certified for your market.', zh: '本地检测，符合您市场标准。' },
    description: { en: 'Every batch passes endurance and dielectric testing before it leaves the floor. Our lab runs to IEC 60669-1, IEC 60884-1 and BS 1363-2 schedules, and the facility is audited annually to ISO 9001:2015.', zh: '每批产品出厂前完成寿命与耐压测试。实验室按 IEC 60669-1、IEC 60884-1、BS 1363-2 标准执行，工厂每年通过 ISO 9001:2015 审核。' },
  },
  export: {
    index: '07',
    label: { en: 'Export & Markets', zh: '出口与市场' },
    title: { en: 'Shipping from Ningbo to 40+ markets.', zh: '宁波港直发，覆盖 40+ 市场。' },
    description: { en: 'The plant gate is 40 minutes from Ningbo port. Documentation teams handle Certificates of Origin, L/C shipments and attestation per market, so mixed-SKU containers clear without surprises.', zh: '工厂距宁波港 40 分钟。单证团队办理原产地证、信用证及各市场使馆认证，多品类拼箱清关无忧。' },
    facts: [
      { label: { en: 'Terms', zh: '贸易条款' }, value: 'FOB · CIF · DDP' },
      { label: { en: 'Documents', zh: '单证' }, value: 'CoO · L/C · attestation' },
      { label: { en: 'Loading', zh: '装载' }, value: 'Consolidated multi-SKU' },
      { label: { en: 'Markets', zh: '市场' }, value: 'EU · NA · MEA · SEA' },
    ],
    visual: 'packaging' as const,
  },
  tour: {
    index: '08',
    label: { en: 'Factory Tour', zh: '车间导览' },
    title: { en: 'Inside the plant.', zh: '走进工厂。' },
    description: { en: 'A walk through the workshop floor — molding, stamping, assembly, testing and packing — all in one controlled facility.', zh: '从注塑、冲压、组装、测试到包装，全部在同一受控基地内完成。' },
    slots: [
      { image: '/assets/img/factory-workshop-01.jpg', subject: 'production' as const, caption: { en: 'Injection molding floor', zh: '注塑车间' }, },
      { image: '/assets/img/factory-workshop-02.jpg', subject: 'quality' as const, caption: { en: 'QC laboratory', zh: '质检实验室' }, },
      { image: '/assets/img/factory-workshop-03.jpg', subject: 'engineering' as const, caption: { en: 'Tooling room', zh: '模具车间' }, },
      { image: '/assets/img/factory-workshop-04.jpg', subject: 'warehouse' as const, caption: { en: 'Raw-material warehouse', zh: '原料仓' }, },
      { image: '/assets/img/factory-workshop-05.jpg', subject: 'packaging' as const, caption: { en: 'Export packing line', zh: '出口包装线' }, },
      { image: '/assets/img/factory-workshop-06.jpg', subject: 'markets' as const, caption: { en: 'Container loading bay', zh: '集装箱装货区' }, },
    ],
  },
  certificates: {
    index: '09',
    label: { en: 'Certifications', zh: '认证扫描件' },
    title: { en: 'Paperwork your import desk can use.', zh: '进口清关可用的认证文件。' },
    description: { en: 'High-resolution scans of ISO, CE, RoHS and UKCA certificates are available for every shipment on request.', zh: '可按需提供 ISO、CE、RoHS、UKCA 证书高清扫描件。' },
  },
  trust: {
    index: '10',
    label: { en: 'Why Buyers Trust Us', zh: '采购商为何信任我们' },
    title: { en: 'Numbers that matter to a purchase order.', zh: '采购订单上真正关心的数字。' },
    description: { en: 'Consistent capacity, controlled quality and transparent lead times — the data points buyers verify before placing a program.', zh: '稳定的产能、可控的品质、透明的交期——下单前采购商都会核实的指标。' },
    points: [
      { value: '12M', label: { en: 'Annual capacity', zh: '年产能' }, },
      { value: '98.6%', label: { en: 'QC pass rate', zh: '质检合格率' }, },
      { value: '35–45', label: { en: 'Days lead time', zh: '天生产交期' }, },
      { value: '7', label: { en: 'Days for samples', zh: '天出样' }, },
      { value: '40+', label: { en: 'Export markets', zh: '出口市场' }, },
      { value: '20+', label: { en: 'Years in business', zh: '年行业经验' }, },
    ],
  },
};

/* ---------- navigation.ts ---------- */

export const navigation: NavigationConfig = {
  header: [
    { label: { en: 'Products', zh: '产品' }, href: '/products' },
    { label: { en: 'Capabilities', zh: '生产能力' }, href: '/capabilities' },
    { label: { en: 'Quality', zh: '质量' }, href: '/quality' },
    { label: { en: 'Insights', zh: '洞察' }, href: '/insights' },
    { label: { en: 'About', zh: '关于我们' }, href: '/about' },
    { label: { en: 'Contact', zh: '联系我们' }, href: '/contact' },
  ],
  headerCta: { label: { en: 'Request a Quote', zh: '询价' }, href: '/request-quote' },
  footerColumns: [
    {
      title: { en: 'Products', zh: '产品' },
      links: [
        { label: { en: 'Wall Switches', zh: '墙壁开关' }, href: '/products?category=wall-switches' },
        { label: { en: 'Electrical Sockets', zh: '电气插座' }, href: '/products?category=electrical-sockets' },
        { label: { en: 'USB Wall Chargers', zh: 'USB 充电插座' }, href: '/products?category=usb-wall-chargers' },
        { label: { en: 'Smart Controls', zh: '智能控制' }, href: '/products?category=smart-controls' },
        { label: { en: 'Plates & Accessories', zh: '面板与配件' }, href: '/products?category=plates-accessories' },
      ],
    },
    {
      title: { en: 'Company', zh: '公司' },
      links: [
        { label: { en: 'About', zh: '关于我们' }, href: '/about' },
        { label: { en: 'Capabilities', zh: '生产能力' }, href: '/capabilities' },
        { label: { en: 'Quality', zh: '质量' }, href: '/quality' },
        { label: { en: 'Insights', zh: '洞察' }, href: '/insights' },
        { label: { en: 'Contact', zh: '联系我们' }, href: '/contact' },
        { label: { en: 'Request a Quote', zh: '询价' }, href: '/request-quote' },
      ],
    },
    {
      title: { en: 'Buyers', zh: '采购商' },
      links: [
        { label: { en: 'OEM & ODM Service', zh: 'OEM / ODM 服务' }, href: '/capabilities#oem' },
        { label: { en: 'Certifications', zh: '认证' }, href: '/quality#certifications' },
        { label: { en: 'FAQ', zh: '常见问题' }, href: '/contact#faq' },
        { label: { en: 'Inquiry', zh: '询盘' }, href: '/inquiry' },
      ],
    },
  ],
};

/* ---------- products.ts ---------- */

/* ============================================================
   PRODUCT CATALOGUE — 23 SKUs across 5 families.
   All catalogue-driven pages render from this file.
   ============================================================ */

const WTY: LocalizedString = { en: '5-year mechanical · 2-year on electronics', zh: '机械结构 5 年 · 电子元件 2 年' };
const LEAD: LocalizedString = { en: 'Samples 7 days · production 35–45 days', zh: '样品 7 天 · 生产 35–45 天' };

export const products: Product[] = [
  /* ---------------- WALL SWITCHES ---------------- */

  {
    id: 'nv-s110',
    slug: 'rocker-switch-1-gang-10ax',
    name: { en: '1-Gang 10AX Rocker Switch', zh: '单联 10AX 翘板开关' },
    sku: 'NV-S110',
    categoryId: 'wall-switches',
    shortDescription: { en: 'Single-gang rocker switch on the 86mm platform, rated 10AX 250V~ with silver-alloy contacts.', zh: '86mm 平台单联翘板开关，额定 10AX 250V~，银合金触点。' },
    description: { en: 'The NV-S110 is the baseline switch of the NOVA range: a large rocker on a screwless faceplate, molded from V-0 polycarbonate with a 1.4mm wall section. Silver-alloy contacts carry 10AX inductive loads, and phosphor-bronze terminals accept 2×2.5mm² conductors. The rocker mechanism is rated for 50,000 operations and passes the IEC 60669-1 endurance schedule.', zh: 'NV-S110 是 NOVA 系列的基础款翘板开关：大翘板配无框面板，壳体采用 V-0 级聚碳酸酯注塑，壁厚 1.4mm。银合金触点可承载 10AX 感性负载，磷青铜端子可接入 2×2.5mm² 导线。翘板机构寿命 50,000 次，通过 IEC 60669-1 耐久测试。' },
    features: [{ en: '10AX 250V~ rating for lighting and inductive loads', zh: '额定 10AX 250V~，适用于照明及感性负载' }, { en: 'Silver-alloy contacts, 50,000-cycle mechanical endurance', zh: '银合金触点，机械寿命 50,000 次' }, { en: 'Screwless clip-on faceplate, zero visible fixings', zh: '无框卡扣面板，无可见螺丝' }, { en: 'Flame-retardant polycarbonate housing to UL94 V-0', zh: '阻燃聚碳酸酯壳体，达 UL94 V-0' }, { en: 'Phosphor-bronze terminals accept 2×2.5mm² conductors', zh: '磷青铜端子，可接 2×2.5mm² 导线' }],
    specifications: [
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '250V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '10AX (inductive)' },
      { label: { en: 'Endurance', zh: '机械寿命' }, value: '50,000 operations' },
      { label: { en: 'Terminal capacity', zh: '端子容量' }, value: '2 × 2.5mm² solid / flexible' },
      { label: { en: 'Housing material', zh: '外壳材料' }, value: 'Polycarbonate, UL94 V-0' },
      { label: { en: 'Faceplate', zh: '面板' }, value: 'Screwless clip-on, 1.4mm wall' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Standard', zh: '执行标准' }, value: 'IEC 60669-1' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }, { en: 'Hospitality', zh: '酒店' }],
    certificationIds: ['ce', 'rohs', 'iec', 'iso9001'],
    keywords: ['light switch', 'rocker', '1 gang', '10AX', 'screwless'],
    featured: true,
    flagship: true,
    visual: { kind: 'rocker', variant: 1, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }, { en: 'Polished Chrome', zh: '镀铬' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 11.5 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 11.5 kg' },
    moq: { en: '1,000 pcs (finishes may be mixed)', zh: '1,000 件（可混色）' },
    leadTime: LEAD,
    relatedSlugs: ['rocker-switch-2-gang', 'schuko-socket-16a', 'dual-usb-a-outlet', 'screwless-wall-plate'],
  },

  {
    id: 'nv-s210',
    slug: 'rocker-switch-2-gang-2-way',
    name: { en: '2-Gang 2-Way Rocker Switch', zh: '双联双控翘板开关' },
    sku: 'NV-S210',
    categoryId: 'wall-switches',
    shortDescription: { en: 'Two independent rockers on a single plate for stairway and corridor 2-way circuits.', zh: '单面板双翘板，适用于楼梯、走廊双控回路。' },
    description: { en: 'The NV-S210 doubles circuit control without widening the plate: two independent 10AX rockers with separate terminal chambers on the standard 86mm grid. Common applications are 2-way stairway switching and paired lighting zones in hotels and offices.', zh: 'NV-S210 在不加宽面板的前提下实现双路控制：标准 86mm 网格内装有两组独立 10AX 翘板，端子腔分离。常用于楼梯双控及酒店、办公区的成对照明分区。' },
    features: [{ en: 'Two independent 10AX circuits behind one plate', zh: '单面板内置两路独立 10AX 电路' }, { en: '2-way switching for stairway / corridor circuits', zh: '支持楼梯/走廊双控接线' }, { en: 'Color-coded terminal screws with captive clamps', zh: '彩色端子螺丝，配防松夹' }, { en: 'Shared terminal chamber simplifies loop-in wiring', zh: '共用端子腔，简化并线接线' }, { en: 'Same screwless plate system as the full NOVA range', zh: '与全系列 NOVA 产品共用无框面板系统' }],
    specifications: [
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '250V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '2 × 10AX' },
      { label: { en: 'Switching', zh: '开关方式' }, value: '2-way' },
      { label: { en: 'Endurance', zh: '机械寿命' }, value: '50,000 operations' },
      { label: { en: 'Terminal capacity', zh: '端子容量' }, value: '2 × 2.5mm² per gang' },
      { label: { en: 'Housing material', zh: '外壳材料' }, value: 'Polycarbonate, UL94 V-0' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Standard', zh: '执行标准' }, value: 'IEC 60669-1' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }, { en: 'Hospitality', zh: '酒店' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['2 gang switch', '2 way', 'stairway', 'corridor'],
    visual: { kind: 'rocker', variant: 2, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 12 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 12 kg' },
    moq: { en: '1,000 pcs (finishes may be mixed)', zh: '1,000 件（可混色）' },
    leadTime: LEAD,
    relatedSlugs: ['rocker-switch-1-gang-10ax', 'rotary-led-dimmer-250w', 'schuko-socket-16a'],
  },

  {
    id: 'nv-s130',
    slug: 'bell-press-momentary-switch',
    name: { en: 'Bell-Press Momentary Switch', zh: '门铃式点动开关' },
    sku: 'NV-S130',
    categoryId: 'wall-switches',
    shortDescription: { en: 'Spring-return push switch for doorbells, hold-to-run controls and impulse relays.', zh: '弹簧复位点动开关，适用于门铃、点动控制及脉冲继电器。' },
    description: { en: 'The NV-S130 returns to rest the moment it is released, making it the right switch for bell circuits, impulse relay systems (latching actuators) and hold-to-run machine stations. The deep-travel push button gives a clear tactile confirmation that reads well in commercial corridors.', zh: 'NV-S130 松手即复位，适用于门铃回路、脉冲继电器系统（自锁执行器）及点动控制工位。4mm 深行程按键触感明确，在商用走廊中操作反馈清晰。' },
    features: [{ en: 'Spring-return momentary action, 10A 250V~', zh: '弹簧复位点动，10A 250V~' }, { en: 'Impulse-relay compatible for modern latching circuits', zh: '兼容脉冲继电器，适配现代自锁电路' }, { en: 'Deep 4mm travel with positive tactile feedback', zh: '4mm 深行程，触感反馈明确' }, { en: 'Interchangeable button caps in five finishes', zh: '五色可选按键盖，可互换' }, { en: 'Suitable for doorbell and hold-to-run duty', zh: '适用于门铃及点动运行控制' }],
    specifications: [
      { label: { en: 'Contact type', zh: '触点类型' }, value: 'NO, momentary (spring return)' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '250V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '10A' },
      { label: { en: 'Endurance', zh: '机械寿命' }, value: '100,000 operations' },
      { label: { en: 'Terminal capacity', zh: '端子容量' }, value: '2 × 2.5mm²' },
      { label: { en: 'Housing material', zh: '外壳材料' }, value: 'Polycarbonate, UL94 V-0' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Standard', zh: '执行标准' }, value: 'IEC 60669-1' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Commercial', zh: '商业' }, { en: 'Residential', zh: '住宅' }, { en: 'Industrial', zh: '工业' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['bell press', 'momentary', 'push button', 'doorbell', 'impulse relay'],
    visual: { kind: 'rocker', variant: 3, finish: 'chrome' },
    colors: [{ en: 'Polished Chrome', zh: '镀铬' }, { en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 11 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 11 kg' },
    moq: { en: '1,000 pcs (finishes may be mixed)', zh: '1,000 件（可混色）' },
    leadTime: LEAD,
    relatedSlugs: ['rocker-switch-1-gang-10ax', 'rotary-led-dimmer-250w'],
  },

  {
    id: 'nv-s150',
    slug: 'rotary-led-dimmer-250w',
    name: { en: 'Rotary LED Dimmer 250W', zh: '旋转 LED 调光器 250W' },
    sku: 'NV-S150',
    categoryId: 'wall-switches',
    shortDescription: { en: 'Push-on/off rotary dimmer with trailing-edge control, tuned for LED downlight loads from 5W.', zh: '按压开关旋转调光，后沿控制，LED 筒灯 5W 起可调。' },
    description: { en: 'The NV-S150 is a trailing-edge dimmer developed for the LED era: a stable dimming curve down to 5W loads without flicker or low-end dropout, with a minimum-load setting adjusted by the installer. Press the knob for on/off, turn for level. A replaceable trim ring covers retrofit plates from the NOVA accessory range.', zh: 'NV-S150 是面向 LED 时代开发的后沿调光器：低至 5W 负载仍可保持稳定调光曲线，无闪烁、无低端熄灭，最小负载可由安装人员设定。按压旋钮开关，旋转调节亮度。可更换装饰环适配 NOVA 配件系列的改装面板。' },
    features: [{ en: 'Trailing-edge control, 5–250W LED / 40–400W halogen', zh: '后沿控制，LED 5–250W / 卤素灯 40–400W' }, { en: 'Flicker-free low-end with installer-adjustable minimum load', zh: '低端无闪烁，最小负载可由安装人员调节' }, { en: 'Push-on / push-off switching through the knob', zh: '按压式开关，旋钮一体' }, { en: 'Short-circuit and over-temperature protection', zh: '短路及过温保护' }, { en: 'Rotary knob interchangeable across NOVA finishes', zh: '旋钮可与 NOVA 全系列颜色互换' }],
    specifications: [
      { label: { en: 'Control type', zh: '控制类型' }, value: 'Trailing edge (reverse phase)' },
      { label: { en: 'LED load range', zh: 'LED 负载范围' }, value: '5–250W' },
      { label: { en: 'Halogen load range', zh: '卤素灯负载范围' }, value: '40–400W' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '220–240V~, 50Hz' },
      { label: { en: 'Protection', zh: '保护功能' }, value: 'Short-circuit · over-temperature' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Standard', zh: '执行标准' }, value: 'IEC 60669-2-1' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Hospitality', zh: '酒店' }, { en: 'Commercial', zh: '商业' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['dimmer', 'trailing edge', 'led dimmer', 'rotary', '250w'],
    visual: { kind: 'rocker', variant: 4, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }, { en: 'Champagne', zh: '香槟金' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 60 pcs/ctn · 9.5 kg', zh: '双泡罩，1 件/盒 · 60 件/箱 · 9.5 kg' },
    moq: { en: '500 pcs', zh: '500 件' },
    leadTime: LEAD,
    relatedSlugs: ['wifi-smart-dimmer-2g', 'rocker-switch-1-gang-10ax', 'led-downlight-plate'],
  },

  {
    id: 'nv-s660',
    slug: 'weatherproof-switch-ip66',
    name: { en: 'IP66 Weatherproof Switch', zh: 'IP66 防水开关' },
    sku: 'NV-S660',
    categoryId: 'wall-switches',
    shortDescription: { en: 'Sealed 20A rocker switch with hinged transparent cover for outdoor and wash-down areas.', zh: '密封 20A 翘板开关，透明翻盖，适用于户外及冲洗区域。' },
    description: { en: 'The NV-S660 puts a 20A industrial rocker behind a gasket-sealed, UV-stabilized housing with a hinged clear cover. It holds IP66 under hose-down conditions, which makes it standard equipment for outdoor lighting, pump rooms, food-processing wash areas and Gulf-region exterior circuits.', zh: 'NV-S660 将 20A 工业翘板开关置于密封圈防护、抗 UV 老化外壳中，配透明翻盖。在喷淋条件下仍保持 IP66 防护等级，是户外照明、泵房、食品加工冲洗区及海湾地区室外电路的标配。' },
    features: [{ en: 'IP66 sealing with dual-lip gasket and hinged cover', zh: 'IP66 密封，双唇密封圈配翻盖' }, { en: 'UV-stabilized grey polycarbonate, resistant to Gulf sun loads', zh: '抗 UV 灰色聚碳酸酯，耐受海湾地区日照' }, { en: '20A switch mechanism with silver contacts', zh: '20A 开关机构，银触点' }, { en: 'Padlockable cover for maintenance lock-out', zh: '翻盖可挂锁，便于检修锁定' }, { en: 'Cable glands top and bottom, M20 / M25', zh: '顶部/底部配 M20/M25 电缆接头' }],
    specifications: [
      { label: { en: 'Ingress protection', zh: '防护等级' }, value: 'IP66' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '250V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '20A' },
      { label: { en: 'Endurance', zh: '机械寿命' }, value: '50,000 operations' },
      { label: { en: 'Housing material', zh: '外壳材料' }, value: 'UV-stabilized polycarbonate, grey RAL 7035' },
      { label: { en: 'Cable entry', zh: '电缆入口' }, value: 'M20 / M25 glands, top + bottom' },
      { label: { en: 'Operating temperature', zh: '工作温度' }, value: '−25°C to +60°C' },
      { label: { en: 'Standard', zh: '执行标准' }, value: 'IEC 60669-1 · IP66 to IEC 60529' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '120 × 120 × 95mm' },
    ],
    applications: [{ en: 'Outdoor', zh: '户外' }, { en: 'Industrial', zh: '工业' }, { en: 'Commercial', zh: '商业' }],
    certificationIds: ['ce', 'rohs', 'iec', 'saso'],
    keywords: ['weatherproof switch', 'IP66', 'outdoor', '20A', 'waterproof'],
    visual: { kind: 'rocker', variant: 5, finish: 'graphite' },
    colors: [{ en: 'Industrial Grey (RAL 7035)', zh: '工业灰（RAL 7035）' }],
    warranty: WTY,
    packaging: { en: 'Inner box, 1 pc · 40 pcs/ctn · 14 kg', zh: '内盒，1 件/盒 · 40 件/箱 · 14 kg' },
    moq: { en: '500 pcs', zh: '500 件' },
    leadTime: LEAD,
    relatedSlugs: ['weatherproof-socket-ip66', 'rocker-switch-1-gang-10ax'],
  },

  /* ---------------- ELECTRICAL SOCKETS ---------------- */

  {
    id: 'nv-e116',
    slug: 'schuko-socket-16a',
    name: { en: 'Schuko Socket Outlet 16A', zh: '德式 Schuko 插座 16A' },
    sku: 'NV-E116',
    categoryId: 'electrical-sockets',
    shortDescription: { en: 'German-standard CEE 7 receptacle with double-wipe contacts and child-protection shutters.', zh: '德标 CEE 7 插座，双擦拭触点，带儿童保护门。' },
    description: { en: 'The NV-E116 is our highest-volume receptacle: a Schuko outlet to CEE 7 / IEC 60884-1 with double-wipe contact springs that hold insertion force across 10,000 cycles. Patented child shutters block single-pole access, and the screwless plate finishes the wall line with the rest of the NOVA range.', zh: 'NV-E116 是我们出货量最大的插座：符合 CEE 7 / IEC 60884-1 的 Schuko 插座，双擦拭触点弹簧在 10,000 次插拔后仍保持插拔力。专利儿童保护门防止单极插入，无框面板与 NOVA 全系列墙面产品线保持统一。' },
    features: [{ en: 'CEE 7 standard sheet, 16A 250V~', zh: 'CEE 7 标准，16A 250V~' }, { en: 'Double-wipe contacts, 10,000-cycle insertion endurance', zh: '双擦拭触点，10,000 次插拔寿命' }, { en: 'Child-protection shutters block single-pole access', zh: '儿童保护门，防止单极插入' }, { en: 'Integrated earthing clips both sides', zh: '两侧一体接地弹片' }, { en: 'Screwless clip-on faceplate, zero visible fixings', zh: '无框卡扣面板，无可见螺丝' }],
    specifications: [
      { label: { en: 'Standard', zh: '执行标准' }, value: 'CEE 7 · IEC 60884-1' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '250V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '16A' },
      { label: { en: 'Shutter system', zh: '保护门结构' }, value: 'Child protection, double-pole release' },
      { label: { en: 'Contact material', zh: '触点材料' }, value: 'Brass, 0.5mm silver plating' },
      { label: { en: 'Endurance', zh: '机械寿命' }, value: '10,000 insertion cycles' },
      { label: { en: 'Terminal capacity', zh: '端子容量' }, value: '3 × 2.5mm²' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }, { en: 'Hospitality', zh: '酒店' }],
    certificationIds: ['ce', 'rohs', 'iec', 'iso9001'],
    keywords: ['schuko', 'socket outlet', 'CEE 7', '16A', 'german socket'],
    featured: true,
    flagship: true,
    visual: { kind: 'socket', variant: 1, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }, { en: 'Polished Chrome', zh: '镀铬' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 13 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 13 kg' },
    moq: { en: '1,000 pcs (finishes may be mixed)', zh: '1,000 件（可混色）' },
    leadTime: LEAD,
    relatedSlugs: ['british-switched-socket-13a', 'dual-usb-a-outlet', 'usb-c-pd-outlet-30w', 'rocker-switch-1-gang-10ax'],
  },

  {
    id: 'nv-e213',
    slug: 'british-switched-socket-13a',
    name: { en: 'British Switched Socket 13A', zh: '英式带开关插座 13A' },
    sku: 'NV-E213',
    categoryId: 'electrical-sockets',
    shortDescription: { en: 'BS 1363 twin switched socket with integral 13A fuse and individually switched outlets.', zh: 'BS 1363 双位带开关插座，内置 13A 保险丝，分位独立开关。' },
    description: { en: 'Built to BS 1363-2 for UK, Gulf and Commonwealth markets, the NV-E213 pairs a twin 13A outlet with individually switched rockers and an accessible fuse holder. Shuttered pin entries, brass earth pin and color-coded screws make it the workhorse of UK-spec residential and hospitality programs.', zh: 'NV-E213 按 BS 1363-2 为英国、海湾及英联邦市场设计：双位 13A 插座配独立开关翘板，保险丝座可便捷更换。带保护门插孔、黄铜接地脚及彩色端子螺丝，是英国标准住宅及酒店项目的可靠主力。' },
    features: [{ en: 'BS 1363-2 twin outlet, 13A with integral fuse', zh: 'BS 1363-2 双位插座，13A 内置保险丝' }, { en: 'Individually switched per gang', zh: '每位独立开关' }, { en: 'Shuttered live and neutral entries', zh: '火线/零线孔带保护门' }, { en: 'Brass earth pin, double-wipe contacts', zh: '黄铜接地脚，双擦拭触点' }, { en: 'UKCA-assessed, Gulf-market proven', zh: 'UKCA 评估，海湾市场验证' }],
    specifications: [
      { label: { en: 'Standard', zh: '执行标准' }, value: 'BS 1363-2' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '250V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '13A per gang' },
      { label: { en: 'Fuse', zh: '保险丝' }, value: '13A BS 1362, replaceable' },
      { label: { en: 'Switching', zh: '开关方式' }, value: 'Double-pole per gang' },
      { label: { en: 'Terminal capacity', zh: '端子容量' }, value: '3 × 4mm²' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60.3mm centres' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Hospitality', zh: '酒店' }, { en: 'Commercial', zh: '商业' }],
    certificationIds: ['ce', 'ukca', 'rohs', 'iec', 'saso'],
    keywords: ['BS 1363', '13A socket', 'switched socket', 'UK socket', 'twin socket'],
    featured: true,
    visual: { kind: 'socket', variant: 2, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }, { en: 'Polished Chrome', zh: '镀铬' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 14 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 14 kg' },
    moq: { en: '1,000 pcs (finishes may be mixed)', zh: '1,000 件（可混色）' },
    leadTime: LEAD,
    relatedSlugs: ['schuko-socket-16a', 'universal-receptacle-2pe', 'usb-a-usb-c-outlet'],
  },

  {
    id: 'nv-e310',
    slug: 'universal-receptacle-2pe',
    name: { en: 'Universal Receptacle 2P+E', zh: '万能插座 2P+E' },
    sku: 'NV-E310',
    categoryId: 'electrical-sockets',
    shortDescription: { en: 'Multi-standard outlet that accepts Euro, UK, US, Australian and Chinese plugs.', zh: '多标准插座，兼容欧式、英式、美式、澳式及中式插头。' },
    description: { en: 'The NV-E310 solves the mixed-plug problem in one plate: shutters and contact sets arranged to accept Europlug, BS 1363, NEMA 5-15, AS/NZS 3112 and GB 1002 plugs. It is the default receptacle for international hotels, serviced apartments and airport lounges where guest plug types cannot be predicted.', zh: 'NV-E310 在一块面板上解决多国插头问题：保护门与触点组可兼容 Europlug、BS 1363、NEMA 5-15、AS/NZS 3112 及 GB 1002 插头。是国际酒店、服务式公寓及机场贵宾室的默认选择，应对不确定的客用插头类型。' },
    features: [{ en: 'Accepts Euro, UK, US, Australian and Chinese plugs', zh: '兼容欧式、英式、美式、澳式及中式插头' }, { en: 'Universal shutter geometry, child-safe single-pole block', zh: '通用保护门结构，单极防儿童误插' }, { en: '16A 250V~ rating with 0.5mm silver-plated contacts', zh: '额定 16A 250V~，0.5mm 镀银触点' }, { en: 'Preferred receptacle for hospitality projects', zh: '酒店项目首选插座' }, { en: 'Interchangeable with all NOVA 86mm-grid products', zh: '可与所有 NOVA 86mm 网格产品互换' }],
    specifications: [
      { label: { en: 'Plug compatibility', zh: '插头兼容性' }, value: 'CEE 7 · BS 1363 · NEMA 5-15 · AS/NZS 3112 · GB 1002' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '250V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '16A' },
      { label: { en: 'Shutter system', zh: '保护门结构' }, value: 'Universal, child protection' },
      { label: { en: 'Contact material', zh: '触点材料' }, value: 'Brass, 0.5mm silver plating' },
      { label: { en: 'Endurance', zh: '机械寿命' }, value: '10,000 insertion cycles' },
      { label: { en: 'Terminal capacity', zh: '端子容量' }, value: '3 × 2.5mm²' },
      { label: { en: 'Standard', zh: '执行标准' }, value: 'IEC 60884-1 (universal type)' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Hospitality', zh: '酒店' }, { en: 'Commercial', zh: '商业' }, { en: 'Residential', zh: '住宅' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['universal socket', 'multi standard', 'hotel socket', 'travel', '2P+E'],
    featured: true,
    visual: { kind: 'socket', variant: 3, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Polished Chrome', zh: '镀铬' }, { en: 'Champagne', zh: '香槟金' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 13.5 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 13.5 kg' },
    moq: { en: '1,000 pcs', zh: '1,000 件' },
    leadTime: LEAD,
    relatedSlugs: ['schuko-socket-16a', 'usb-a-usb-c-outlet', 'zigbee-scene-panel-4-zone'],
  },

  {
    id: 'nv-e415',
    slug: 'tamper-resistant-duplex-15a',
    name: { en: 'Tamper-Resistant Duplex Receptacle 15A', zh: '防误插双联插座 15A' },
    sku: 'NV-E415',
    categoryId: 'electrical-sockets',
    shortDescription: { en: 'NEMA 5-15R duplex outlet with tamper-resistant shutters for North American programs.', zh: 'NEMA 5-15R 双联插座，带防误插保护门，适用于北美项目。' },
    description: { en: 'Developed for North American distributor programs, the NV-E415 is a NEMA 5-15R duplex receptacle with TR shutters that release only under simultaneous two-pole pressure. Break-off tabs allow split-wiring, and the self-grounding yoke speeds rough-in work.', zh: 'NV-E415 面向北美经销商项目开发：NEMA 5-15R 双联插座配 TR 防误插保护门，仅在两极同时受压时打开。可掰离分接片支持分路接线，自接地支架加快粗装施工。' },
    features: [{ en: 'NEMA 5-15R, 15A 125V~, TR shutters', zh: 'NEMA 5-15R，15A 125V~，TR 保护门' }, { en: 'Break-off tab for split-circuit wiring', zh: '可掰离分接片，支持分路接线' }, { en: 'Self-grounding yoke, back and side wiring', zh: '自接地支架，支持背部与侧部接线' }, { en: 'Heavy-gauge brass strap and contacts', zh: '加厚黄铜支架与触点' }, { en: 'Complements US-market wiring device lines', zh: '适配美国市场电工产品线' }],
    specifications: [
      { label: { en: 'Standard', zh: '执行标准' }, value: 'NEMA 5-15R · UL 498 style' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '125V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '15A' },
      { label: { en: 'Shutter system', zh: '保护门结构' }, value: 'Tamper-resistant (TR)' },
      { label: { en: 'Wiring', zh: '接线方式' }, value: 'Back-wire clamp + side screw' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: 'Single-gang US box' },
      { label: { en: 'Operating temperature', zh: '工作温度' }, value: '−20°C to +60°C' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '70 × 115mm (strap)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }],
    certificationIds: ['ce', 'rohs', 'iso9001'],
    keywords: ['duplex receptacle', 'NEMA 5-15', 'tamper resistant', 'US socket', '15A'],
    visual: { kind: 'socket', variant: 4, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Ivory', zh: '象牙白' }],
    warranty: WTY,
    packaging: { en: 'Inner box, 1 pc · 100 pcs/ctn · 12 kg', zh: '内盒，1 件/盒 · 100 件/箱 · 12 kg' },
    moq: { en: '2,000 pcs', zh: '2,000 件' },
    leadTime: LEAD,
    relatedSlugs: ['schuko-socket-16a', 'dual-usb-a-outlet'],
  },

  {
    id: 'nv-e660',
    slug: 'weatherproof-socket-ip66',
    name: { en: 'IP66 Weatherproof Socket 16A', zh: 'IP66 防水插座 16A' },
    sku: 'NV-E660',
    categoryId: 'electrical-sockets',
    shortDescription: { en: 'Sealed Schuko outlet in a hinged-cover enclosure for outdoor and industrial duty.', zh: '翻盖密封外壳德式插座，适用于户外及工业环境。' },
    description: { en: 'The NV-E660 packages our Schuko mechanism in the same IP66 enclosure family as the NV-S660 switch: dual-lip gasket, hinged clear cover and M20/M25 gland entries. Facilities teams use it for exterior power, workshops and agricultural buildings where hose-down and dust are routine.', zh: 'NV-E660 将我们的 Schuko 机构封装在与 NV-S660 开关同系列的 IP66 外壳中：双唇密封圈、透明翻盖及 M20/M25 电缆接头。设施团队将其用于室外供电、车间及农业建筑，这些场所日常需要冲洗且灰尘较多。' },
    features: [{ en: 'IP66 enclosure with padlockable hinged cover', zh: 'IP66 外壳，翻盖可挂锁' }, { en: '16A Schuko mechanism with child shutters', zh: '16A Schuko 机构，带儿童保护门' }, { en: 'UV-stabilized grey polycarbonate housing', zh: '抗 UV 灰色聚碳酸酯外壳' }, { en: 'M20 / M25 cable glands top and bottom', zh: '顶部/底部 M20/M25 电缆接头' }, { en: 'Gulf and tropical climate proven', zh: '海湾及热带气候验证' }],
    specifications: [
      { label: { en: 'Ingress protection', zh: '防护等级' }, value: 'IP66' },
      { label: { en: 'Standard', zh: '执行标准' }, value: 'CEE 7 · IEC 60884-1' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '250V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '16A' },
      { label: { en: 'Housing material', zh: '外壳材料' }, value: 'UV-stabilized polycarbonate, grey RAL 7035' },
      { label: { en: 'Cable entry', zh: '电缆入口' }, value: 'M20 / M25 glands, top + bottom' },
      { label: { en: 'Operating temperature', zh: '工作温度' }, value: '−25°C to +60°C' },
      { label: { en: 'Standard reference', zh: '标准参考' }, value: 'IEC 60529 (IP66)' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '120 × 120 × 95mm' },
    ],
    applications: [{ en: 'Outdoor', zh: '户外' }, { en: 'Industrial', zh: '工业' }, { en: 'Commercial', zh: '商业' }],
    certificationIds: ['ce', 'rohs', 'iec', 'saso'],
    keywords: ['weatherproof socket', 'IP66', 'outdoor socket', 'waterproof', '16A'],
    visual: { kind: 'socket', variant: 5, finish: 'graphite' },
    colors: [{ en: 'Industrial Grey (RAL 7035)', zh: '工业灰（RAL 7035）' }],
    warranty: WTY,
    packaging: { en: 'Inner box, 1 pc · 40 pcs/ctn · 15 kg', zh: '内盒，1 件/盒 · 40 件/箱 · 15 kg' },
    moq: { en: '500 pcs', zh: '500 件' },
    leadTime: LEAD,
    relatedSlugs: ['weatherproof-switch-ip66', 'schuko-socket-16a'],
  },

  /* ---------------- USB WALL CHARGERS ---------------- */

  {
    id: 'nv-u212',
    slug: 'dual-usb-a-outlet',
    name: { en: 'Dual USB-A Charging Outlet 12W', zh: '双 USB-A 充电插座 12W' },
    sku: 'NV-U212',
    categoryId: 'usb-wall-chargers',
    shortDescription: { en: 'Two USB-A ports behind a standard plate, 2.4A per port for guest rooms and offices.', zh: '标准面板内嵌双 USB-A 端口，单口 2.4A，适用于客房与办公。' },
    description: { en: 'The NV-U212 replaces a blank plate with two USB-A charging ports rated 5V/2.4A each — the configuration hospitality buyers still standardize on for bedside and desk power. EMI filtering keeps the radio-quiet profile hotel Wi-Fi surveys demand, and the converter module is replaceable from the front.', zh: 'NV-U212 用两个 USB-A 充电端口取代空白面板，单口 5V/2.4A——这是酒店采购方仍为床头与桌面供电标准化的配置。EMI 滤波满足酒店 Wi-Fi 勘测对电磁静默的要求，转换模块可从正面更换。' },
    features: [{ en: '2 × USB-A, 5V/2.4A each, 12W total', zh: '2 × USB-A，单口 5V/2.4A，共 12W' }, { en: 'Replaceable converter module, service from the front', zh: '转换模块可更换，正面即可维护' }, { en: 'EMI filtering to EN 55032 Class B', zh: 'EMI 滤波符合 EN 55032 Class B' }, { en: 'Over-current and over-temperature protection', zh: '过流及过温保护' }, { en: 'Combines with Schuko or universal receptacles', zh: '可与 Schuko 或万能插座组合安装' }],
    specifications: [
      { label: { en: 'Output', zh: '输出' }, value: '2 × 5V / 2.4A (12W total)' },
      { label: { en: 'Input', zh: '输入' }, value: '220–240V~, 50/60Hz' },
      { label: { en: 'Conversion efficiency', zh: '转换效率' }, value: '≥ 85%' },
      { label: { en: 'Protection', zh: '保护功能' }, value: 'OCP · OTP · short-circuit' },
      { label: { en: 'EMC', zh: '电磁兼容' }, value: 'EN 55032 Class B' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Module service', zh: '模块维护' }, value: 'Front-replaceable converter' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Hospitality', zh: '酒店' }, { en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['usb outlet', 'usb a', 'charging socket', '12W', 'hotel'],
    visual: { kind: 'usb', variant: 1, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }, { en: 'Polished Chrome', zh: '镀铬' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 12.5 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 12.5 kg' },
    moq: { en: '1,000 pcs', zh: '1,000 件' },
    leadTime: LEAD,
    relatedSlugs: ['usb-c-pd-outlet-30w', 'usb-a-usb-c-outlet', 'schuko-socket-16a'],
  },

  {
    id: 'nv-u330',
    slug: 'usb-c-pd-outlet-30w',
    name: { en: 'USB-C PD Charging Outlet 30W', zh: 'USB-C PD 充电插座 30W' },
    sku: 'NV-U330',
    categoryId: 'usb-wall-chargers',
    shortDescription: { en: 'Single USB-C Power Delivery port, 30W — charges phones, tablets and most laptops.', zh: '单 USB-C PD 端口 30W，可为手机、平板及多数笔记本充电。' },
    description: { en: 'The NV-U330 delivers USB-C Power Delivery at 30W: full-speed charging for MacBook Air-class laptops, tablets and every current phone. Active PD negotiation and a GaN-based converter stage keep the module cool inside the wall, and a status LED confirms live output without lighting up a dark bedroom.', zh: 'NV-U330 提供 30W USB-C PD 快充：可为 MacBook Air 级别笔记本、平板及当前主流手机全速充电。主动 PD 协议协商与 GaN 转换级让墙内模块保持低温，状态 LED 可确认输出状态，又不至于在暗室中过亮。' },
    features: [{ en: 'USB-C PD 3.0 output, 30W (5/9/12/15/20V profiles)', zh: 'USB-C PD 3.0 输出，30W（5/9/12/15/20V 档位）' }, { en: 'GaN converter stage, cool wall operation', zh: 'GaN 转换级，墙内低温运行' }, { en: 'Active PD negotiation with connected devices', zh: '与连接设备主动协商 PD 协议' }, { en: 'Sub-lumen status LED, dusk-friendly', zh: '亚流明状态灯，夜间不刺眼' }, { en: 'Charges laptops, tablets and phones from one plate', zh: '一块面板即可为笔记本、平板和手机充电' }],
    specifications: [
      { label: { en: 'Output', zh: '输出' }, value: 'USB-C PD 3.0, 30W max' },
      { label: { en: 'PD profiles', zh: 'PD 档位' }, value: '5V/3A · 9V/3A · 12V/2.5A · 15V/2A · 20V/1.5A' },
      { label: { en: 'Input', zh: '输入' }, value: '220–240V~, 50/60Hz' },
      { label: { en: 'Converter', zh: '转换器' }, value: 'GaN-based, ≥ 90% efficiency' },
      { label: { en: 'Protection', zh: '保护功能' }, value: 'OCP · OVP · OTP · short-circuit' },
      { label: { en: 'EMC', zh: '电磁兼容' }, value: 'EN 55032 Class B' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Hospitality', zh: '酒店' }, { en: 'Commercial', zh: '商业' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['usb c', 'power delivery', 'PD', '30W', 'laptop charging', 'fast charge'],
    featured: true,
    flagship: true,
    visual: { kind: 'usb', variant: 2, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 13 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 13 kg' },
    moq: { en: '1,000 pcs', zh: '1,000 件' },
    leadTime: LEAD,
    relatedSlugs: ['usb-a-usb-c-outlet', 'gan-module-45w', 'schuko-socket-16a'],
  },

  {
    id: 'nv-u420',
    slug: 'usb-a-usb-c-outlet',
    name: { en: 'USB-A + USB-C Combo Outlet 20W', zh: 'USB-A + USB-C 组合插座 20W' },
    sku: 'NV-U420',
    categoryId: 'usb-wall-chargers',
    shortDescription: { en: 'USB-C PD and USB-A in one plate — the mixed-device answer for offices and hotels.', zh: 'USB-C PD 与 USB-A 同板设计，兼顾新旧设备，适用于办公与酒店。' },
    description: { en: 'Guests carry both cable types, so the NV-U420 puts one 20W USB-C PD port beside a 5V/2.4A USB-A port on a single plate. Port power is negotiated independently, and the mixed layout fits every 86mm-box program in the NOVA range without an oversized plate.', zh: '住客常携带两种线缆，因此 NV-U420 在单面板上并排布置一个 20W USB-C PD 端口与一个 5V/2.4A USB-A 端口。两端口独立协商功率，混合布局适配 NOVA 系列所有 86mm 底盒方案，无需加大面板。' },
    features: [{ en: 'USB-C 20W PD + USB-A 5V/2.4A, independent negotiation', zh: 'USB-C 20W PD + USB-A 5V/2.4A，独立协商' }, { en: 'One plate covers legacy and current devices', zh: '一块面板兼容新旧设备' }, { en: 'GaN converter, ≥ 88% efficiency', zh: 'GaN 转换器，效率 ≥ 88%' }, { en: 'Full protection suite: OCP, OVP, OTP', zh: '完整保护：OCP、OVP、OTP' }, { en: 'Matches all NOVA plate finishes', zh: '匹配 NOVA 全系列面板颜色' }],
    specifications: [
      { label: { en: 'Output', zh: '输出' }, value: 'USB-C 20W PD · USB-A 5V/2.4A' },
      { label: { en: 'PD profiles', zh: 'PD 档位' }, value: '5V/3A · 9V/2.22A · 12V/1.67A' },
      { label: { en: 'Input', zh: '输入' }, value: '220–240V~, 50/60Hz' },
      { label: { en: 'Converter', zh: '转换器' }, value: 'GaN-based, ≥ 88% efficiency' },
      { label: { en: 'Protection', zh: '保护功能' }, value: 'OCP · OVP · OTP · short-circuit' },
      { label: { en: 'EMC', zh: '电磁兼容' }, value: 'EN 55032 Class B' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Hospitality', zh: '酒店' }, { en: 'Commercial', zh: '商业' }, { en: 'Residential', zh: '住宅' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['usb c', 'usb a', 'combo outlet', '20W', 'charging'],
    featured: true,
    visual: { kind: 'usb', variant: 3, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }, { en: 'Polished Chrome', zh: '镀铬' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 13 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 13 kg' },
    moq: { en: '1,000 pcs', zh: '1,000 件' },
    leadTime: LEAD,
    relatedSlugs: ['usb-c-pd-outlet-30w', 'dual-usb-a-outlet', 'universal-receptacle-2pe'],
  },

  {
    id: 'nv-u445',
    slug: 'gan-module-45w',
    name: { en: 'GaN Fast-Charge Module 45W', zh: '氮化镓快充模块 45W' },
    sku: 'NV-U445',
    categoryId: 'usb-wall-chargers',
    shortDescription: { en: 'Modular 45W GaN insert for 2-module faceplates — the highest output in the range.', zh: '2 模块面板氮化镓插芯，45W 输出，为本系列最高功率。' },
    description: { en: 'The NV-U445 is a 45W GaN charging module built to the European 2-module format: it snaps into the NV-P102 faceplate beside a socket or switch insert. One port negotiates PD up to 45W for laptop charging; the second serves USB-A. Service crews replace the module in under a minute, without disturbing the wall.', zh: 'NV-U445 是 45W GaN 充电模块，按欧式 2 模块规格设计：可卡入 NV-P102 面板，与插座或开关插芯并排。C 口 PD 最高 45W，可为笔记本充电；A 口供普通设备。维护人员可在 1 分钟内更换模块，无需拆墙。' },
    features: [{ en: 'USB-C PD 45W (PPS supported) + USB-A 12W', zh: 'USB-C PD 45W（支持 PPS）+ USB-A 12W' }, { en: 'European 2-module format, tool-free snap-in', zh: '欧式 2 模块规格，免工具卡入' }, { en: 'GaN converter with active thermal rollback', zh: 'GaN 转换器，主动热降额' }, { en: 'Front-serviceable module, 1-minute swap', zh: '正面可维护模块，1 分钟快速更换' }, { en: 'PPS profile for Samsung and modern Android fast charge', zh: '支持 PPS，适配三星及主流安卓快充' }],
    specifications: [
      { label: { en: 'Output', zh: '输出' }, value: 'USB-C 45W PD/PPS · USB-A 5V/2.4A' },
      { label: { en: 'PD profiles', zh: 'PD 档位' }, value: '5V/3A · 9V/3A · 15V/3A · 20V/2.25A · PPS' },
      { label: { en: 'Input', zh: '输入' }, value: '220–240V~, 50/60Hz' },
      { label: { en: 'Converter', zh: '转换器' }, value: 'GaN, ≥ 92% efficiency' },
      { label: { en: 'Thermal', zh: '热管理' }, value: 'Active rollback at 75°C internal' },
      { label: { en: 'Format', zh: '规格' }, value: '2-module snap-in (55 × 55mm)' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: 'NV-P102 faceplate / 2-gang frame' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '55 × 55 × 32mm (module)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }, { en: 'Hospitality', zh: '酒店' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['gan', '45W', 'module', 'pps', 'laptop', 'fast charge'],
    visual: { kind: 'usb', variant: 4, finish: 'graphite' },
    colors: [{ en: 'Graphite', zh: '石墨灰' }, { en: 'Matte White', zh: '哑光白' }],
    warranty: WTY,
    packaging: { en: 'Inner box, 1 pc · 60 pcs/ctn · 9 kg', zh: '内盒，1 件/盒 · 60 件/箱 · 9 kg' },
    moq: { en: '500 pcs', zh: '500 件' },
    leadTime: LEAD,
    relatedSlugs: ['modular-faceplate-2-module', 'usb-c-pd-outlet-30w'],
  },

  /* ---------------- SMART CONTROLS ---------------- */

  {
    id: 'nv-t110',
    slug: 'wifi-touch-switch-1g',
    name: { en: 'Wi-Fi Touch Switch 1-Gang', zh: 'Wi-Fi 触控开关 单联' },
    sku: 'NV-T110',
    categoryId: 'smart-controls',
    shortDescription: { en: 'Tempered-glass capacitive touch switch with Wi-Fi control and scheduling via Smart Life.', zh: '钢化玻璃电容触控开关，支持 Wi-Fi 控制与涂鸦智能定时。' },
    description: { en: 'The NV-T110 replaces a mechanical rocker with a tempered-glass capacitive panel that pairs to 2.4GHz Wi-Fi through the Smart Life / Tuya platform. Installers commission in about two minutes; residents get app control, scheduling, countdown timers and voice control through Alexa and Google Home. No hub required.', zh: 'NV-T110 以钢化玻璃电容面板取代机械翘板，通过 Smart Life / 涂鸦平台接入 2.4GHz Wi-Fi。安装人员约 2 分钟即可完成配网；用户可通过 APP 控制、定时、倒计时，并支持 Alexa 与 Google Home 语音控制。无需网关。' },
    features: [{ en: 'Wi-Fi 2.4GHz, no hub required (Smart Life / Tuya)', zh: 'Wi-Fi 2.4GHz，无需网关（Smart Life / 涂鸦）' }, { en: 'Tempered-glass panel, capacitive touch, LED backlight', zh: '钢化玻璃面板，电容触控，LED 背光' }, { en: 'Schedules, countdown timers and grouping in app', zh: 'APP 支持定时、倒计时及分组' }, { en: 'Works with Amazon Alexa and Google Home', zh: '兼容 Amazon Alexa 与 Google Home' }, { en: 'Neutral required · retrofit neutral-free version on request', zh: '需零线 · 可提供免零线改装版本' }],
    specifications: [
      { label: { en: 'Connectivity', zh: '连接方式' }, value: 'Wi-Fi 2.4GHz (Smart Life / Tuya)' },
      { label: { en: 'Voice control', zh: '语音控制' }, value: 'Amazon Alexa · Google Home' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '110–240V~, neutral required' },
      { label: { en: 'Load per gang', zh: '每路负载' }, value: 'LED ≤ 200W · incandescent ≤ 500W' },
      { label: { en: 'Panel', zh: '面板' }, value: 'Tempered glass, 4mm, capacitive' },
      { label: { en: 'Standby power', zh: '待机功耗' }, value: '< 0.3W' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 11mm' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Hospitality', zh: '酒店' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['smart switch', 'wifi switch', 'touch switch', 'smart life', 'tuya'],
    featured: true,
    flagship: true,
    visual: { kind: 'smart', variant: 1, finish: 'black' },
    colors: [{ en: 'Black Glass', zh: '黑玻璃' }, { en: 'White Glass', zh: '白玻璃' }],
    warranty: WTY,
    packaging: { en: 'Colour box, 1 pc · 60 pcs/ctn · 10 kg', zh: '彩盒，1 件/盒 · 60 件/箱 · 10 kg' },
    moq: { en: '500 pcs', zh: '500 件' },
    leadTime: LEAD,
    relatedSlugs: ['wifi-smart-dimmer-2g', 'zigbee-scene-panel-4-zone', 'smart-socket-metered-16a'],
  },

  {
    id: 'nv-t220',
    slug: 'wifi-smart-dimmer-2g',
    name: { en: 'Wi-Fi Smart Dimmer 2-Gang', zh: 'Wi-Fi 智能调光器 双联' },
    sku: 'NV-T220',
    categoryId: 'smart-controls',
    shortDescription: { en: 'Two-channel glass touch dimmer with app, voice and slide dimming for LED loads.', zh: '双路玻璃触控调光，支持 APP、语音及滑动调光，适配 LED 负载。' },
    description: { en: 'The NV-T220 dims two independent LED circuits from one glass panel: touch for on/off, slide for level, or control remotely through Smart Life. Trailing-edge output is tuned for low minimum loads, so dimmable LED downlights hold a stable low-end without flicker — the detail that decides whether a hotel project signs off.', zh: 'NV-T220 在一块玻璃面板上独立调光两路 LED：触控开关，滑动调光，也可通过 Smart Life 远程控制。后沿输出针对低最小负载调校，可调光 LED 筒灯在低亮度端稳定无闪烁——这正是酒店项目能否验收的关键细节。' },
    features: [{ en: '2 × 150W LED trailing-edge dimming channels', zh: '2 × 150W LED 后沿调光通道' }, { en: 'Touch on/off + slide brightness, or full app control', zh: '触控开关 + 滑动调光，或全 APP 控制' }, { en: 'Stable low-end from 5W, no flicker', zh: '5W 起稳定低亮，无闪烁' }, { en: 'Scene and schedule support via Smart Life', zh: 'Smart Life 支持场景与定时' }, { en: 'Alexa and Google Home voice control', zh: '支持 Alexa 与 Google Home 语音控制' }],
    specifications: [
      { label: { en: 'Connectivity', zh: '连接方式' }, value: 'Wi-Fi 2.4GHz (Smart Life / Tuya)' },
      { label: { en: 'Channels', zh: '通道数' }, value: '2 independent dimming circuits' },
      { label: { en: 'Load per channel', zh: '每通道负载' }, value: 'LED ≤ 150W · incandescent ≤ 300W' },
      { label: { en: 'Control type', zh: '控制类型' }, value: 'Trailing edge, 5W minimum load' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '110–240V~, neutral required' },
      { label: { en: 'Panel', zh: '面板' }, value: 'Tempered glass, 4mm, capacitive' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 11mm' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Hospitality', zh: '酒店' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['smart dimmer', 'touch dimmer', 'wifi dimmer', 'led dimming'],
    featured: true,
    visual: { kind: 'smart', variant: 2, finish: 'black' },
    colors: [{ en: 'Black Glass', zh: '黑玻璃' }, { en: 'White Glass', zh: '白玻璃' }],
    warranty: WTY,
    packaging: { en: 'Colour box, 1 pc · 60 pcs/ctn · 10.5 kg', zh: '彩盒，1 件/盒 · 60 件/箱 · 10.5 kg' },
    moq: { en: '500 pcs', zh: '500 件' },
    leadTime: LEAD,
    relatedSlugs: ['wifi-touch-switch-1g', 'rotary-led-dimmer-250w', 'zigbee-scene-panel-4-zone'],
  },

  {
    id: 'nv-t316',
    slug: 'smart-socket-metered-16a',
    name: { en: 'Smart Socket 16A with Energy Monitoring', zh: '智能插座 16A 带电量监测' },
    sku: 'NV-T316',
    categoryId: 'smart-controls',
    shortDescription: { en: 'Schuko smart socket with per-outlet metering, remote switching and consumption history.', zh: '德式智能插座，单口计量、远程开关及用电记录。' },
    description: { en: 'The NV-T316 is a connected Schuko outlet: switch it remotely, set schedules, and read live power plus cumulative kWh per outlet from the app. Facility managers use it for after-hours load control and energy audits; residents use it for heater and appliance automation with hard 16A protection.', zh: 'NV-T316 是一款联网 Schuko 插座：可远程开关、设定定时，并在 APP 中查看实时功率及单口累计 kWh。设施管理人员用于非工作时段负载控制与能耗审计；家庭用户用于取暖器与家电自动化，具备硬 16A 保护。' },
    features: [{ en: 'Live power (W) and cumulative kWh per outlet', zh: '单口实时功率（W）与累计 kWh' }, { en: 'Remote switching and schedules via Smart Life', zh: 'Smart Life 远程开关与定时' }, { en: '16A Schuko mechanism with child shutters', zh: '16A Schuko 机构，带儿童保护门' }, { en: 'Overload cutoff with app notification', zh: '过载自动断电并推送 APP 通知' }, { en: 'Consumption history export for energy audits', zh: '用电历史可导出，便于能耗审计' }],
    specifications: [
      { label: { en: 'Connectivity', zh: '连接方式' }, value: 'Wi-Fi 2.4GHz (Smart Life / Tuya)' },
      { label: { en: 'Metering', zh: '计量参数' }, value: 'Voltage · current · power · kWh' },
      { label: { en: 'Metering accuracy', zh: '计量精度' }, value: '± 1%' },
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '250V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '16A, overload cutoff' },
      { label: { en: 'Standard', zh: '执行标准' }, value: 'CEE 7 · IEC 60884-1' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 11mm' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }, { en: 'Hospitality', zh: '酒店' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['smart socket', 'energy monitoring', 'metering', 'wifi socket', 'kwh'],
    visual: { kind: 'smart', variant: 3, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }],
    warranty: WTY,
    packaging: { en: 'Colour box, 1 pc · 60 pcs/ctn · 11 kg', zh: '彩盒，1 件/盒 · 60 件/箱 · 11 kg' },
    moq: { en: '500 pcs', zh: '500 件' },
    leadTime: LEAD,
    relatedSlugs: ['schuko-socket-16a', 'wifi-touch-switch-1g'],
  },

  {
    id: 'nv-t440',
    slug: 'zigbee-scene-panel-4-zone',
    name: { en: 'Zigbee Scene Panel 4-Zone', zh: 'Zigbee 场景面板 四区' },
    sku: 'NV-T440',
    categoryId: 'smart-controls',
    shortDescription: { en: 'Battery-free Zigbee scene controller with four backlit zones for hotel and office projects.', zh: '免电池 Zigbee 场景控制器，四区背光，适用于酒店与办公项目。' },
    description: { en: 'The NV-T440 is a self-powered Zigbee scene controller: four zones trigger lighting scenes through the project hub with no battery and no neutral wiring, because the press generates its own energy. Installers bind zones in seconds; hotel and office operators use it at every entrance as the scene recall point.', zh: 'NV-T440 是自供电 Zigbee 场景控制器：四区按键通过项目网关触发灯光场景，无需电池、无需零线，按压自发电。安装人员数秒完成绑定；酒店与办公运营方将其装于各入口作为场景召回面板。' },
    features: [{ en: 'Zigbee 3.0, self-powered — no battery, no neutral', zh: 'Zigbee 3.0，自供电——无需电池与零线' }, { en: '4 scene zones, each binding up to 30 devices', zh: '4 个场景区，每区最多绑定 30 个设备' }, { en: 'Enocean-style energy harvesting push generator', zh: 'Enocean 式压电取能发电机构' }, { en: '2-year memory retention of bindings', zh: '绑定关系断电记忆 2 年' }, { en: 'Ideal entrance-panel for hotel and office scenes', zh: '酒店与办公场景的理想入口面板' }],
    specifications: [
      { label: { en: 'Connectivity', zh: '连接方式' }, value: 'Zigbee 3.0, hub required' },
      { label: { en: 'Zones', zh: '区数' }, value: '4, up to 30 devices each' },
      { label: { en: 'Power', zh: '供电方式' }, value: 'Energy harvesting, no battery' },
      { label: { en: 'Range', zh: '传输距离' }, value: '30m indoor typical' },
      { label: { en: 'Panel', zh: '面板' }, value: 'Tempered glass, capacitive zones' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, neutral not required' },
      { label: { en: 'Radio compliance', zh: '射频合规' }, value: 'ETSI EN 300 328' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 11mm' },
    ],
    applications: [{ en: 'Hospitality', zh: '酒店' }, { en: 'Commercial', zh: '商业' }],
    certificationIds: ['ce', 'rohs'],
    keywords: ['zigbee', 'scene controller', 'smart panel', 'energy harvesting', 'hotel'],
    visual: { kind: 'smart', variant: 4, finish: 'black' },
    colors: [{ en: 'Black Glass', zh: '黑玻璃' }],
    warranty: WTY,
    packaging: { en: 'Colour box, 1 pc · 60 pcs/ctn · 9 kg', zh: '彩盒，1 件/盒 · 60 件/箱 · 9 kg' },
    moq: { en: '500 pcs', zh: '500 件' },
    leadTime: LEAD,
    relatedSlugs: ['wifi-touch-switch-1g', 'wifi-smart-dimmer-2g', 'rocker-switch-2-gang-2-way'],
  },

  /* ---------------- PLATES & ACCESSORIES ---------------- */

  {
    id: 'nv-p001',
    slug: 'screwless-wall-plate',
    name: { en: 'Screwless Wall Plate', zh: '无框墙壁面板' },
    sku: 'NV-P001',
    categoryId: 'plates-accessories',
    shortDescription: { en: 'Blank screwless faceplate that clips over any NOVA mechanism — the range signature finish.', zh: '无框空白面板，卡扣适配全系列功能件，系列标志性外观。' },
    description: { en: 'The NV-P001 is the plate that defines the NOVA look: a 1.4mm screwless face with a 2mm shadow gap, clipped over switches, sockets and modules alike. It snaps on by hand, aligns flush to the wall in one action, and can be removed for service without tools.', zh: 'NV-P001 是定义 NOVA 外观的面板：1.4mm 厚无框面板配 2mm 阴影缝，可卡扣覆盖开关、插座与模块。单手按压即可安装，一步贴合墙面，维护时可徒手拆卸。' },
    features: [{ en: 'Screwless clip-on design, 2mm shadow gap', zh: '无框卡扣设计，2mm 阴影缝' }, { en: 'Fits every mechanism in the NOVA 86mm range', zh: '适配 NOVA 86mm 全系列功能件' }, { en: 'Tool-free removal for service and re-decoration', zh: '免工具拆卸，便于维护与翻新' }, { en: 'Available in all five range finishes', zh: '提供全系列五种颜色' }, { en: '1.4mm wall section, UV-stable colorants', zh: '1.4mm 壁厚，抗 UV 色母' }],
    specifications: [
      { label: { en: 'Type', zh: '类型' }, value: 'Blank screwless faceplate' },
      { label: { en: 'Material', zh: '材料' }, value: 'Polycarbonate, UL94 V-0' },
      { label: { en: 'Wall section', zh: '壁厚' }, value: '1.4mm' },
      { label: { en: 'Fixing', zh: '固定方式' }, value: 'Hand-clip, no screws' },
      { label: { en: 'Compatibility', zh: '兼容性' }, value: 'All NOVA 86mm mechanisms' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm' },
      { label: { en: 'Finish options', zh: '颜色选项' }, value: 'White · Black · Chrome · Champagne · Graphite' },
      { label: { en: 'Standard', zh: '执行标准' }, value: 'IEC 60669-1 (mechanical)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }, { en: 'Hospitality', zh: '酒店' }],
    certificationIds: ['ce', 'rohs'],
    keywords: ['wall plate', 'blank plate', 'screwless', 'faceplate'],
    visual: { kind: 'accessory', variant: 1, finish: 'chrome' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }, { en: 'Polished Chrome', zh: '镀铬' }, { en: 'Champagne', zh: '香槟金' }, { en: 'Graphite', zh: '石墨灰' }],
    warranty: WTY,
    packaging: { en: 'Bulk box · 500 pcs/ctn · 14 kg', zh: '散装盒 · 500 件/箱 · 14 kg' },
    moq: { en: '1,000 pcs (finishes may be mixed)', zh: '1,000 件（可混色）' },
    leadTime: LEAD,
    relatedSlugs: ['rocker-switch-1-gang-10ax', 'schuko-socket-16a', 'modular-faceplate-2-module'],
  },

  {
    id: 'nv-p102',
    slug: 'modular-faceplate-2-module',
    name: { en: 'Modular Faceplate 2-Module', zh: '模块化面板 2 位' },
    sku: 'NV-P102',
    categoryId: 'plates-accessories',
    shortDescription: { en: 'Two-module European frame that mixes switches, sockets, USB and data inserts.', zh: '欧式 2 模块框架，可混搭开关、插座、USB 及数据插芯。' },
    description: { en: 'The NV-P102 is the European 2-module frame that lets one plate carry whatever the room needs: a Schuko insert beside a USB module, a data jack beside a switch. Inserts snap in tool-free and stay interchangeable for the life of the installation.', zh: 'NV-P102 是欧式 2 模块框架，让一块面板承载房间所需任意组合：Schuko 插芯旁配 USB 模块，数据口旁配开关。插芯免工具卡入，且在安装生命周期内可随时更换。' },
    features: [{ en: 'Standard European 2-module (55 × 55mm) format', zh: '标准欧式 2 模块（55 × 55mm）规格' }, { en: 'Mix and match NOVA and compatible inserts', zh: '可混搭 NOVA 及兼容插芯' }, { en: 'Tool-free snap-in assembly', zh: '免工具卡入组装' }, { en: 'Center bridge aligns inserts to one plane', zh: '中心桥将插芯对齐同一平面' }, { en: 'Also hosts the NV-U445 GaN charge module', zh: '亦可安装 NV-U445 GaN 充电模块' }],
    specifications: [
      { label: { en: 'Format', zh: '规格' }, value: 'European 2-module (2 × 55 × 55mm)' },
      { label: { en: 'Material', zh: '材料' }, value: 'Polycarbonate, UL94 V-0' },
      { label: { en: 'Insert retention', zh: '插芯固定' }, value: 'Snap-in, tool-free' },
      { label: { en: 'Compatible inserts', zh: '兼容插芯' }, value: 'NOVA modular range · NV-U445' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
      { label: { en: 'Finish options', zh: '颜色选项' }, value: 'White · Black · Chrome · Graphite' },
      { label: { en: 'Standard', zh: '执行标准' }, value: 'DIN 49075 frame format' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }],
    certificationIds: ['ce', 'rohs'],
    keywords: ['modular', '2 module', 'faceplate', 'frame', 'insert'],
    visual: { kind: 'accessory', variant: 2, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }, { en: 'Polished Chrome', zh: '镀铬' }, { en: 'Graphite', zh: '石墨灰' }],
    warranty: WTY,
    packaging: { en: 'Bulk box · 400 pcs/ctn · 13 kg', zh: '散装盒 · 400 件/箱 · 13 kg' },
    moq: { en: '1,000 pcs', zh: '1,000 件' },
    leadTime: LEAD,
    relatedSlugs: ['gan-module-45w', 'screwless-wall-plate', 'tv-network-outlet'],
  },

  {
    id: 'nv-p086',
    slug: 'surface-mount-box-86mm',
    name: { en: 'Surface Mount Box 86mm', zh: '明装底盒 86mm' },
    sku: 'NV-P086',
    categoryId: 'plates-accessories',
    shortDescription: { en: '32mm-deep surface box for concrete walls and retrofit installations, 86mm grid.', zh: '32mm 深明装底盒，适用于混凝土墙及改造项目，86mm 网格。' },
    description: { en: 'Where chasing concrete is not economical, the NV-P086 carries the full NOVA range on the wall surface: a 32mm-deep box with molded landings for conduit entry, cable clamps and the same 60mm fixing centres as our flush products.', zh: '在混凝土墙面开槽不经济时，NV-P086 可将全系列 NOVA 产品明装于墙面：32mm 深底盒，带一体化线管入口平台、压线夹，安装孔距 60mm，与暗装产品一致。' },
    features: [{ en: '32mm depth fits smart modules and dimmer bodies', zh: '32mm 深度可容纳智能模块与调光器本体' }, { en: 'Molded conduit landings, 20mm top and bottom', zh: '顶部/底部一体化 20mm 线管入口平台' }, { en: 'Integral cable clamps, no loose parts', zh: '内置压线夹，无松散零件' }, { en: 'Same 60mm centres as flush range', zh: '安装孔距 60mm，与暗装系列一致' }, { en: 'Powder-coat-friendly surface for project colors', zh: '表面适合喷涂，便于项目定制颜色' }],
    specifications: [
      { label: { en: 'Depth', zh: '深度' }, value: '32mm' },
      { label: { en: 'Footprint', zh: '外形' }, value: '86 × 86mm' },
      { label: { en: 'Material', zh: '材料' }, value: 'Polycarbonate, UL94 V-0' },
      { label: { en: 'Conduit entry', zh: '线管入口' }, value: '20mm, top + bottom landings' },
      { label: { en: 'Fixing centres', zh: '安装孔距' }, value: '60mm' },
      { label: { en: 'Cable clamps', zh: '压线夹' }, value: 'Integral, 2 × 2.5mm²' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 32mm' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }, { en: 'Industrial', zh: '工业' }],
    certificationIds: ['ce', 'rohs'],
    keywords: ['surface box', 'mounting box', '86mm', 'retrofit'],
    visual: { kind: 'accessory', variant: 3, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }],
    warranty: WTY,
    packaging: { en: 'Bulk box · 300 pcs/ctn · 12 kg', zh: '散装盒 · 300 件/箱 · 12 kg' },
    moq: { en: '2,000 pcs', zh: '2,000 件' },
    leadTime: LEAD,
    relatedSlugs: ['screwless-wall-plate', 'modular-faceplate-2-module'],
  },

  {
    id: 'nv-p502',
    slug: 'tv-network-outlet',
    name: { en: 'TV + Network Wall Outlet', zh: '电视+网络墙壁插座' },
    sku: 'NV-P502',
    categoryId: 'plates-accessories',
    shortDescription: { en: 'Coax F-connector and Cat6 RJ45 jack on one plate, with tool-free termination.', zh: '同板集成同轴 F 头与 Cat6 网口，免工具接线。' },
    description: { en: 'The NV-P502 puts a screened coax F-outlet and a Cat6 RJ45 jack behind one NOVA plate. Both modules terminate tool-free — IDC contacts for the Cat6 jack, captive F-connector for coax — and the assembly is shielded end-to-end for Gigabit-class networks.', zh: 'NV-P502 在同一块 NOVA 面板后集成屏蔽同轴 F 头与 Cat6 RJ45 网口。两个模块均免工具接线——Cat6 网口用 IDC 触点，同轴用固定式 F 头——整体屏蔽端到端，满足千兆网络要求。' },
    features: [{ en: 'Cat6 RJ45 jack, tool-free IDC termination', zh: 'Cat6 RJ45 网口，IDC 免工具接线' }, { en: 'Screened coax F-connector, 75Ω', zh: '屏蔽同轴 F 头，75Ω' }, { en: 'Shielded assembly for Gigabit networks', zh: '整体屏蔽，适配千兆网络' }, { en: 'Modules removable independently', zh: '两模块可独立拆卸' }, { en: 'T568A / T568B compatible labeling', zh: '兼容 T568A/T568B 标识' }],
    specifications: [
      { label: { en: 'Data module', zh: '数据模块' }, value: 'Cat6 UTP/FTP RJ45, IDC' },
      { label: { en: 'TV module', zh: '电视模块' }, value: 'F-connector female, 75Ω, 5–2400MHz' },
      { label: { en: 'Shielding', zh: '屏蔽' }, value: 'End-to-end screened housing' },
      { label: { en: 'Termination', zh: '接线方式' }, value: 'Tool-free (IDC + captive F)' },
      { label: { en: 'Wiring scheme', zh: '接线标准' }, value: 'T568A / T568B' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush box, 60mm centres' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }, { en: 'Hospitality', zh: '酒店' }],
    certificationIds: ['ce', 'rohs'],
    keywords: ['network outlet', 'cat6', 'rj45', 'tv outlet', 'coax', 'f connector'],
    visual: { kind: 'accessory', variant: 4, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 12 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 12 kg' },
    moq: { en: '1,000 pcs', zh: '1,000 件' },
    leadTime: LEAD,
    relatedSlugs: ['modular-faceplate-2-module', 'screwless-wall-plate'],
  },

  {
    id: 'nv-p616',
    slug: 'cord-outlet-16a',
    name: { en: 'Cord Outlet 16A with Cable Clamp', zh: '出线座 16A 带压线夹' },
    sku: 'NV-P616',
    categoryId: 'plates-accessories',
    shortDescription: { en: 'Hard-wired cord exit with strain-relief clamp for fixed appliances and furniture power.', zh: '硬接线出线座，带防拉线夹，适用于固定电器及家具供电。' },
    description: { en: 'The NV-P616 provides a clean, code-compliant cord exit where a plug is not wanted: a 16A terminal block behind a plate with an adjustable strain-relief clamp that grips 6–10mm cables. Kitchens, furniture power and fixed appliance connections are the standard applications.', zh: 'NV-P616 在不需要插头的地方提供整洁、合规的出线方案：面板后装 16A 端子台，配可调防拉线夹，夹持 6–10mm 电缆。厨房、家具供电及固定电器连接是典型应用。' },
    features: [{ en: '16A terminal block, 3-pole', zh: '16A 端子台，3 极' }, { en: 'Adjustable strain-relief clamp, 6–10mm cables', zh: '可调防拉线夹，适配 6–10mm 电缆' }, { en: 'Captive cord-grip screws cannot be dropped', zh: '防松压线螺丝，不易脱落' }, { en: 'Flush or surface installation', zh: '暗装或明装均可' }, { en: 'Completes appliance and furniture power circuits', zh: '完善电器与家具供电回路' }],
    specifications: [
      { label: { en: 'Rated voltage', zh: '额定电压' }, value: '250V~' },
      { label: { en: 'Rated current', zh: '额定电流' }, value: '16A' },
      { label: { en: 'Terminals', zh: '端子' }, value: '3-pole, 2 × 2.5mm² each' },
      { label: { en: 'Cable grip', zh: '电缆夹持' }, value: '6–10mm dia., adjustable clamp' },
      { label: { en: 'Mounting', zh: '安装方式' }, value: '86mm flush or surface box' },
      { label: { en: 'Material', zh: '材料' }, value: 'Polycarbonate, UL94 V-0' },
      { label: { en: 'Dimensions', zh: '外形尺寸' }, value: '86 × 86 × 9mm (plate)' },
    ],
    applications: [{ en: 'Residential', zh: '住宅' }, { en: 'Commercial', zh: '商业' }],
    certificationIds: ['ce', 'rohs', 'iec'],
    keywords: ['cord outlet', 'strain relief', 'appliance outlet', 'furniture power'],
    visual: { kind: 'accessory', variant: 5, finish: 'white' },
    colors: [{ en: 'Matte White', zh: '哑光白' }, { en: 'Gloss Black', zh: '亮黑' }],
    warranty: WTY,
    packaging: { en: 'Double blister, 1 pc/box · 100 pcs/ctn · 11 kg', zh: '双泡罩，1 件/盒 · 100 件/箱 · 11 kg' },
    moq: { en: '1,000 pcs', zh: '1,000 件' },
    leadTime: LEAD,
    relatedSlugs: ['schuko-socket-16a', 'surface-mount-box-86mm'],
  },
];

/* Catalogue references used by copy blocks */
export const productCount = products.length;

export const productBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const productById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);
