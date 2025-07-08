export type Story = {
  id: string;
  title: string;
  summary: string;
  author?: string;
  date?: string;
};

export const mockStories: Story[] = [
  {
    id: '1',
    title: 'The Secret Courtyard',
    summary: 'A hidden oasis in the heart of Amsterdam, discovered by accident.',
    author: 'Anna de Vries',
    date: '2024-06-01',
  },
  {
    id: '2',
    title: 'Midnight Cyclist',
    summary: 'A mysterious figure rides the canals every full moon.',
    author: 'Jeroen Bakker',
    date: '2024-06-02',
  },
  {
    id: '3',
    title: 'Canal House Cat',
    summary: 'The story of a cat who became a local legend.',
    author: 'Sophie Visser',
    date: '2024-06-03',
  },
]; 