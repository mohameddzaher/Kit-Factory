import type { Locale } from '@/lib/i18n/dictionaries';

type Bilingual = { en: string; ar: string };

export interface Testimonial {
  name: Bilingual;
  quote: Bilingual;
  rating: number; // 1..5
  mapUrl?: string;
}

const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/d2NtkPWkcP7fce5AA';

// Real reviews from Google Maps — preserved verbatim in Arabic.
export const testimonials: Testimonial[] = [
  {
    name: { en: 'Mohammed Ayub', ar: 'محمد أيوب' },
    rating: 5,
    quote: {
      en: 'Excellent production quality, with every type of material in premium finishes. They can meet any client timeline. Thank you for your continuous support — best wishes.',
      ar: 'جودة الإنتاج ممتازة، ولديهم جميع أنواع المواد بتشطيبات عالية الجودة، ويمكنهم الالتزام بأي جدول زمني للعميل. شكراً لكم على دعمكم المتواصل، مع أطيب الأمنيات.',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
  {
    name: { en: 'Ali S', ar: 'علي س' },
    rating: 5,
    quote: {
      en: 'Excellent service and high-quality products! The Kit Factory team is extremely professional, friendly, and always cooperative. Highly recommended!',
      ar: 'خدمة ممتازة ومنتجات عالية الجودة! فريق عمل كيت فاكتوري محترف للغاية وودود ومتعاون دائماً. أنصح به بشدة!',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
  {
    name: { en: 'Abu Najm', ar: 'أبو نجم' },
    rating: 5,
    quote: {
      en: 'I want to express my sincere thanks and appreciation for the outstanding effort and distinguished product you delivered. Thanks to your quality and dedication we managed to impress the client and earn their trust — you truly made us look great.',
      ar: 'أود أن أعبر عن خالص شكري وتقديري لكم على الجهود الرائعة والمنتج المميز اللي قدمتوه. بفضل جودتكم وتفانيكم، نجحنا في إبهار العميل وكسب ثقته، فعلاً بيّضتوا وجهنا.',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
  {
    name: { en: 'T.', ar: 'ت.' },
    rating: 5,
    quote: {
      en: 'An inspiring factory led by Mr. Abdullah — mashaAllah. I recommend working with them: precision, fast delivery, and constant development.',
      ar: 'مصنع ملهم والقائم عليه الأستاذ عبدالله ماشاءالله تبارك الله. أنصح بالتعامل معه — دقة وسرعة إنجاز وتطور.',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
  {
    name: { en: 'Ahmed ElSayed', ar: 'أحمد السيد' },
    rating: 5,
    quote: {
      en: 'Always something new and a brilliant way of working.',
      ar: 'دائماً في جديد وطريقة عمل رائعة.',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
  {
    name: { en: 'Madas Beach', ar: 'مداس بيتش' },
    rating: 5,
    quote: {
      en: 'Excellent work and fast execution.',
      ar: 'أعمالهم ممتازة وسرعة في التنفيذ.',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
  {
    name: { en: 'Yousef Al-Otaibi', ar: 'يوسف العتيبي' },
    rating: 5,
    quote: {
      en: 'From one milestone to the next — may God grant you success and bless your work.',
      ar: 'من تطور إلى تطور — الله يوفقكم ويبارك لكم في عملكم.',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
  {
    name: { en: 'Abdelaziz Atef', ar: 'عبدالعزيز عاطف' },
    rating: 5,
    quote: {
      en: 'MashaAllah — creativity and distinction.',
      ar: 'ماشاء الله تبارك الرحمن — إبداع وتميز.',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
  {
    name: { en: 'Nasser Abdulrahman', ar: 'ناصر عبدالرحمن' },
    rating: 5,
    quote: {
      en: 'MashaAllah — clean, well-organized work. Wishing you continued success.',
      ar: 'ماشاء الله تبارك الله شغل مرتب، تمنياتي لكم دوام التوفيق.',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
  {
    name: { en: 'Fado Hh', ar: 'فادو' },
    rating: 5,
    quote: {
      en: 'Excellent — and very fast to reply.',
      ar: 'ممتازين وفي سرعة بالرد.',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
  {
    name: { en: 'Sami Al-Asmari', ar: 'سامي الأسمري' },
    rating: 5,
    quote: {
      en: 'Excellent work and fast execution.',
      ar: 'أعمالهم ممتازة وسرعة في التنفيذ.',
    },
    mapUrl: GOOGLE_REVIEWS_URL,
  },
];

export function localizeTestimonial(t: Testimonial, locale: Locale) {
  return {
    name: t.name[locale],
    quote: t.quote[locale],
    rating: t.rating,
    mapUrl: t.mapUrl,
  };
}
