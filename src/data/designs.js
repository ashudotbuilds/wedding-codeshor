import bandhanPreview from '../assets/previews/bandhan.jpg';
import milanPreview from '../assets/previews/milan.jpg';
import vivahPreview from '../assets/previews/vivah.jpg';

export const designs = [
  {
    name: 'Bandhan', style: 'Traditional & illustrated',
    description: 'Warm colours, Indian wedding illustrations and a full invitation for every ceremony.',
    features: ['Ceremony details', 'Background music', 'Photo gallery'],
    preview: bandhanPreview,
    previewAlt: 'Bandhan invitation with illustrated wedding hands and Aarav and Meera’s names',
    url: 'https://bandhan-blush.vercel.app/',
  },
  {
    name: 'Milan', style: 'Classic & personal',
    description: 'A cream and gold design with space for your story, your families and your guests.',
    features: ['Your love story', 'Guest RSVP', 'Blessings wall'],
    preview: milanPreview,
    previewAlt: 'Milan cream and gold invitation with Anshul and Radhika’s portraits',
    url: 'https://milan-beige.vercel.app/',
  },
  {
    name: 'Vivah', style: 'Festive & interactive',
    description: 'A photo-led invitation with an interactive event journey and a few playful details.',
    features: ['Event journey', 'Flipbook gallery', 'Scratch-to-reveal'],
    preview: vivahPreview,
    previewAlt: 'Vivah burgundy and gold invitation with Priya and Arjun’s wedding portrait',
    url: 'https://vivah-nu.vercel.app/',
  },
];
