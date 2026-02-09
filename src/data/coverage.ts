export interface Region {
  name: string;
  cities: string[];
  color: string;
}

export const regions: Region[] = [
  {
    name: 'Western',
    cities: [
      'Jeddah',
      'Makkah',
      'Taif',
      'Baha',
      'Yanbu',
      'Rabigh',
      'Madainah',
      'Tabouk',
      'Olaa',
    ],
    color: 'cyan',
  },
  {
    name: 'Eastern',
    cities: [
      'Dammam',
      'Khubar',
      'Dhahran',
      'Qateif',
      'Al Jubail',
      'Haferalbaten',
      'Al Hafouf',
      'Ehssa',
    ],
    color: 'mauve',
  },
  {
    name: 'Southern',
    cities: [
      'Abha',
      'Khamis Mushait',
      'Jizan',
      'Najran',
      'Bishah',
      'Al Nimas',
      'Muhaiel Aseer',
    ],
    color: 'cyan',
  },
  {
    name: 'Central',
    cities: [
      'Riyadh',
      'Al Kharj',
      'Buraidah',
      'Unaizah',
      'Haeil',
      'Qurayat',
      'Al Jouf',
      'Arar',
      'Wadi Dawaser',
    ],
    color: 'mauve',
  },
];
