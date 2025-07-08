import { useEffect, useState } from 'react';

type Story = {
  id: number;
  title: string;
  summary: string;
};

const dummyStories: Story[] = [
  { id: 1, title: "The Hidden Courtyard", summary: "A serene garden hidden in the center of Jordaan." },
  { id: 2, title: "The Night Cyclist", summary: "A mysterious rider who appears every full moon in Vondelpark." },
  { id: 3, title: "Graffiti Tales", summary: "How local artists use street walls to preserve political memories." }
];

const StoryGrid = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setStories(dummyStories);
    }, 500); // Simulate fetch delay
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <div key={story.id} className="p-4 shadow-md border border-gray-200 rounded-lg">
          <h3 className="text-xl font-playfair text-charcoal mb-2">{story.title}</h3>
          <p className="text-gray-600 font-lora">{story.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryGrid;
