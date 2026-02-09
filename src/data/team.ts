export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Team Member',
    role: 'Chief Executive Officer',
    image: '/placeholders/team-1.jpg',
    bio: 'Leading the vision and strategic direction of Kit Factory since its founding.',
  },
  {
    name: 'Team Member',
    role: 'Creative Director',
    image: '/placeholders/team-2.jpg',
    bio: 'Driving creative excellence across all projects with 15+ years of industry experience.',
  },
  {
    name: 'Team Member',
    role: 'Head of Production',
    image: '/placeholders/team-3.jpg',
    bio: 'Overseeing manufacturing operations and ensuring precision in every deliverable.',
  },
  {
    name: 'Team Member',
    role: 'Business Development Manager',
    image: '/placeholders/team-4.jpg',
    bio: 'Building strategic partnerships and expanding our presence across the GCC.',
  },
  {
    name: 'Team Member',
    role: 'Design Lead',
    image: '/placeholders/team-5.jpg',
    bio: 'Transforming concepts into compelling visual experiences for global brands.',
  },
  {
    name: 'Team Member',
    role: 'Operations Manager',
    image: '/placeholders/team-6.jpg',
    bio: 'Ensuring seamless project delivery across 33 cities in Saudi Arabia.',
  },
];
