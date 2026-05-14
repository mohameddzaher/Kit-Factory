export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
  /** Optional Google Drive preview embed URLs (https://drive.google.com/file/d/<id>/preview) */
  videos?: string[];
  client: string;
  year: string;
  scope: string[];
  type: 'photo' | 'video';
  /** Public folder on Google Drive — opens the full media set */
  driveUrl?: string;
}

// Google Drive direct image URL — works for any publicly-shared file id.
const gd = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;
// Drive video embed URL
const gv = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

export const projects: Project[] = [
  {
    slug: 'salama-hospital',
    title: 'Salama Hospital',
    category: 'Signage',
    description:
      'Comprehensive wayfinding and identity signage package for Salama Hospital — façade branding, illuminated 3D letters, internal directional signs, and full on-site installation.',
    thumbnail: gd('1xM6gYOiLw2LPX6jajJlXiMHv4sCSNlev'),
    images: [
      gd('1xM6gYOiLw2LPX6jajJlXiMHv4sCSNlev'),
      gd('1XdLgqPqIzwcAky5iAwZyZH_9w36Z8dQS'),
      gd('19fGwFaBCYxFk5T1-SY4HEonFIMpYy-9G'),
      gd('12dag7Q930Z4cGp0YVAPwKzPpDeGcyzL7'),
      gd('1tlzwW1m9K8YbQow5xOGB1HyPg6nl5A3w'),
      gd('1p1nPSH6sIokGi9kVwrrQRDw4Iv4ywCTB'),
      gd('1VKoIQQxAEHrC9mUHnEAMklS52w4X6Q04'),
      gd('1Al45VLGudyArRZg_FY9KlDUKWnoChygE'),
      gd('10W8YI4qaUz9Xyo2-rNMctoFtB7ossECE'),
      gd('1STAksZYhUZr-QzCMXKfvwEocbUmTZtXP'),
      gd('1Kw0GdeUV9kGi4zU9_R-J_VA6zcOnzZsL'),
    ],
    client: 'Salama Hospital',
    year: '2026',
    scope: ['Wayfinding', '3D Signage', 'Façade Branding', 'Installation'],
    type: 'photo',
    driveUrl:
      'https://drive.google.com/drive/folders/1ErNDAfef-CtW81Y_xup9egKmxgd54Qmo',
  },
  {
    slug: 'salama-2',
    title: 'Salama Polyclinic — Phase 2',
    category: 'Signage',
    description:
      'Phase-two signage roll-out for the Salama Polyclinic network — exterior branding, departmental wayfinding, and ceiling-mounted directional panels delivered and installed end-to-end.',
    thumbnail: gd('1xGC1WfDcR3Ap21EyuDz23KK5hw5rWtqc'),
    images: [
      gd('1xGC1WfDcR3Ap21EyuDz23KK5hw5rWtqc'),
      gd('15EoknwSoqDUXoQ275O8Og97tfgWSQ9EF'),
      gd('19shfGmKiv23bOaEdEFPulBZBKM7pd4kr'),
      gd('1HplvbyxQlFYT-QLuoBxlKlIwLJOKlJM6'),
      gd('1DMPg0uAEcAVh_ttPFti3RxyQBenrWFb6'),
      gd('16YN2PbZGlMl-b27o9xtqUCfzFskBVRZT'),
    ],
    client: 'Salama Polyclinic',
    year: '2026',
    scope: ['Wayfinding', 'Indoor Signage', 'Installation'],
    type: 'photo',
    driveUrl:
      'https://drive.google.com/drive/folders/1KF5rUxcj67Ik7xJP2rtmWdpXFkl1CQM1',
  },
  {
    slug: 'io-suite',
    title: 'IO Suite Office Branding',
    category: 'Signage',
    description:
      'Premium office branding for IO Suite — illuminated façade letters, interior identity walls, and on-site video documentation of the install. Designed, fabricated, and mounted by our team.',
    thumbnail: gd('1-5fKGwVq98WVNNAysnA_vyGTxIU_D2pY'),
    images: [
      gd('1-5fKGwVq98WVNNAysnA_vyGTxIU_D2pY'),
      gd('1zWY7CFovREeri6T7k3DV8uOk0NbGbk85'),
      gd('1fpQczsdXCw36VxJo_owOwZBfs2yJ2k9V'),
      gd('1lIXg9m9UsrOVKx7-jbhKsooC0wqp5Ywz'),
      gd('1Ymuan2crxax8GEndwzNBm099_pVQxfWA'),
      gd('1GMNAxGqixpiAkNFGOBF2qkSEcsx1YBVI'),
    ],
    videos: [
      gv('1CDJiJJV1lDWwrtp2GIbyCVIrJyLnrRpt'),
      gv('19m81TM3k0j9pTM_aPSzapAxthJ60R70b'),
      gv('1H_zq0XT038SZeSn_uvQxehYe7SkwTxQm'),
    ],
    client: 'IO Suite',
    year: '2026',
    scope: ['Office Branding', '3D Letters', 'Installation'],
    type: 'photo',
    driveUrl:
      'https://drive.google.com/drive/folders/14pkhllsWI2JUHBaWDx-Tf0Uzr1g1qZpI',
  },
  {
    slug: '3d-letters',
    title: '3D Letters Fabrication',
    category: 'Fabrication',
    description:
      'A close-up showcase of our 3D letter craftsmanship — laser-cut metal faces, illuminated returns, and clean acrylic edges, fabricated entirely in-house and ready for installation.',
    thumbnail: gd('1x_yHST6mZ-d8L0QBK11L-YJQexACT_kR'),
    images: [
      gd('1x_yHST6mZ-d8L0QBK11L-YJQexACT_kR'),
      gd('1tbIEjw5Ohaz4tXiRA7kEixCnZT2rVl0z'),
      gd('1sfSDREOlXBWpap-Qr7bVbnNXzuzNoArp'),
      gd('1R2bjFfxUm93vskbsvI49A5Ziz6h3o04y'),
      gd('19yrVUHHNvLk-5dBq2u6Qf_7WOmhHGSIb'),
    ],
    client: 'Kit Factory In-House',
    year: '2026',
    scope: ['Laser-Cut Metal', 'Acrylic', '3D Letters'],
    type: 'photo',
    driveUrl:
      'https://drive.google.com/drive/folders/1z_qCDo1Ed0HeVpbza9IoC29ZnKAvjiPm',
  },
  {
    slug: 'sgs-corporate-signage',
    title: 'SGS Corporate Signage',
    category: 'Signage',
    description:
      'A large-scale corporate signage programme for SGS — exterior identity, façade illumination, and indoor branding installed across the facility. Documented over a multi-day on-site build.',
    thumbnail: gd('1rhDS9-bjtM3olB98uzNIm734nHwJp5RS'),
    images: [
      gd('1rhDS9-bjtM3olB98uzNIm734nHwJp5RS'),
      gd('1jGxC4izkJMmDMfj7t_Y86dvPKyFtjniW'),
      gd('1UVDeK0_ftf2e-jrGcUQfiKUcEMgjc6be'),
      gd('1PQFfHi5jTFCB_06Kc-i908q-L6UgXHaU'),
      gd('1DoSMdk_bWqYhG8jQ5-q2EFOqe-SncMOf'),
      gd('1CCC-63TaHTxdiHzp_-gsNOkE10l9ZFio'),
      gd('1hZyXzQbCLwSHw4JlcxxYNaiKmokLcVOs'),
      gd('183uUgwTvHaP6k3pFbxPz5dYEbftmX6UK'),
      gd('1LXnUJ0akzHOtvM4LQHINA7sUpyzzOTxJ'),
      gd('1UTk0Q4FQSp4al3mYz3kV01GrgOebD5pb'),
      gd('1B1S0QVt0G2yV3NHg28JDY7klRpOoU0Ae'),
      gd('1PlKA_FCKU5Oy2pmb1OFP5hqKb7HlaECW'),
      gd('1Hw_KRsNZyMBmQiRHZGAkLCl4UCqaJSJ8'),
      gd('18uhFia_aZjJGdjxh02Q6mKUMsbPZ-hEm'),
      gd('12dqKeNXQ5ltRCy3ikhyoasEJerXt6eAq'),
      gd('1eiWmj1q-xP2BFkCjLiH2gHP0M86rrsxU'),
      gd('1zOpjGjA_fDr1P9_uGqVsXF5PHBcaVfZq'),
      gd('1MItstFvI22hLe4gmx_pK42AqT_X9KFYn'),
      gd('1A9bqgb_Sgq_o1tF2kBEJuk-6p2RLfiiU'),
    ],
    client: 'SGS',
    year: '2026',
    scope: ['Corporate Signage', 'Façade Identity', 'Indoor Branding', 'Installation'],
    type: 'photo',
    driveUrl:
      'https://drive.google.com/drive/folders/1gqppHWXX4XgGzPijLw8ON6ZFRqTjUTyU',
  },
  {
    slug: 'saudia-activations',
    title: 'Saudia — Family Day & Eid Activations',
    category: 'Events',
    description:
      'Brand activations for Saudia spanning the Family Day employee event and the seasonal Eid campaign — themed environments, photo zones, custom-printed décor, and branded giveaways.',
    thumbnail: gd('1lp_PbCGqxU5tRzeyzvEtdJADMWR9NLKf'),
    images: [
      // Family Day
      gd('1lp_PbCGqxU5tRzeyzvEtdJADMWR9NLKf'),
      gd('1-H50NN362ErosymxYKCl_nHq7ipoES9H'),
      gd('1YqWQr2_diGjLMuKVV8IrfmiVSMpCrKPs'),
      gd('1_XfVcM1JyfGh5d7AhFCW5pPq-UUIKmTn'),
      gd('1D9yvI0P71P89EPdGa2lQNgs3GLqGhRbJ'),
      // Eid
      gd('1h650p-yiVby2AIAZMOH5laAZoXnUK0kn'),
      gd('10e7mM1xXE0D14Jzl3i1Nn31Q5lxMlgwh'),
      gd('1x-ByIFwB0nalZ-bQ58SwjFctlZ3Eyow2'),
      gd('1wke3i6I5LHnp9K-P9niIPv4BGEKlEfJT'),
      gd('1rxdIgVYHHUdj7zRD3pJNv9DxS8UBPH6A'),
      gd('1rsp16lCNNGV0ydCzZGJBrBDF4jgQxt4V'),
      gd('1q33Cb7U1TxMKxKHp9EnvW3_BGeJVHUg3'),
      gd('1lRl2kjqY6fmCq7ulT7kNcvJGcwnJNy8H'),
      gd('1_8kOVGkEPrymA_j9NmTL5Zr2ZPkzqmNw'),
      gd('1YO5K-pmJfWm5JyCLbVgsyuJ_pGuEo1Xh'),
    ],
    client: 'Saudia',
    year: '2026',
    scope: ['Event Activation', 'Themed Décor', 'Print Production'],
    type: 'photo',
    driveUrl:
      'https://drive.google.com/drive/folders/1V9nwj9udfk7c0di7QPFKWj-57aG_gIbt',
  },
];

export const projectCategories = [
  'All',
  'Signage',
  'Events',
  'Fabrication',
] as const;
