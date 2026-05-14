export type PortfolioFilter = 'all' | 'exhibitions' | 'cnc' | 'laser' | 'prints';

export interface PortfolioItem {
  id: string;
  label: string;
  category: Exclude<PortfolioFilter, 'all'>;
  image: string;
}

const gd = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

// Real Kit Factory work, pulled from the production Drive folders.
// Filter mapping:
//   exhibitions → Saudia event activations
//   cnc         → 3D Letters in-house fabrication
//   laser       → corporate signage builds (SGS, Salama Hospital)
//   prints      → branded décor & illuminated print work
export const portfolioItems: PortfolioItem[] = [
  // Exhibitions / Activations — Saudia
  { id: 'p-saudia-1', label: 'Saudia — Family Day Activation', category: 'exhibitions', image: gd('1lp_PbCGqxU5tRzeyzvEtdJADMWR9NLKf') },
  { id: 'p-saudia-2', label: 'Saudia — Eid Brand Zone',         category: 'exhibitions', image: gd('10e7mM1xXE0D14Jzl3i1Nn31Q5lxMlgwh') },
  { id: 'p-saudia-3', label: 'Saudia — Themed Décor',           category: 'exhibitions', image: gd('1rsp16lCNNGV0ydCzZGJBrBDF4jgQxt4V') },

  // CNC / Fabrication — 3D Letters
  { id: 'p-3d-1', label: '3D Letters — Illuminated Build',  category: 'cnc', image: gd('1x_yHST6mZ-d8L0QBK11L-YJQexACT_kR') },
  { id: 'p-3d-2', label: '3D Letters — Metal Faces',        category: 'cnc', image: gd('1sfSDREOlXBWpap-Qr7bVbnNXzuzNoArp') },
  { id: 'p-3d-3', label: '3D Letters — Acrylic Returns',    category: 'cnc', image: gd('1R2bjFfxUm93vskbsvI49A5Ziz6h3o04y') },

  // Laser / Signage — SGS & Salama Hospital
  { id: 'p-sgs-1',    label: 'SGS — Façade Identity',          category: 'laser', image: gd('1rhDS9-bjtM3olB98uzNIm734nHwJp5RS') },
  { id: 'p-sgs-2',    label: 'SGS — Indoor Branding',          category: 'laser', image: gd('1zOpjGjA_fDr1P9_uGqVsXF5PHBcaVfZq') },
  { id: 'p-salama-1', label: 'Salama Hospital — Wayfinding',   category: 'laser', image: gd('1xM6gYOiLw2LPX6jajJlXiMHv4sCSNlev') },

  // Prints / Branded Production — IO Suite, Salama
  { id: 'p-io-1',     label: 'IO Suite — Office Branding',     category: 'prints', image: gd('1-5fKGwVq98WVNNAysnA_vyGTxIU_D2pY') },
  { id: 'p-io-2',     label: 'IO Suite — Identity Wall',       category: 'prints', image: gd('1Ymuan2crxax8GEndwzNBm099_pVQxfWA') },
  { id: 'p-salama-2', label: 'Salama Polyclinic — Signage',    category: 'prints', image: gd('1xGC1WfDcR3Ap21EyuDz23KK5hw5rWtqc') },
];
