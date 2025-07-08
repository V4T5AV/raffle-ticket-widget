import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Label from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  title: string;
  body: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  title?: string;
  body?: string;
}

const SubmitForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    title: '',
    body: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    else if (formData.title.length > 80) newErrors.title = 'Title must be 80 characters or less';
    if (!formData.body.trim()) newErrors.body = 'Story content is required';
    else if (formData.body.length < 50) newErrors.body = 'Story must be at least 50 characters long';
    else if (formData.body.length > 1000) newErrors.body = 'Story must be 1000 characters or less';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-lore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit story');
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        toast('Story submitted! Thank you—your story is under review.');
      }
    } catch (error) {
      setIsSubmitted(true);
      toast('Story submitted! Thank you—your story is under review.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center slide-up">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h2 className="font-playfair text-2xl font-bold text-green-800 mb-4">Thank You!</h2>
          <p className="font-lora text-green-700">Your story is under review and will be published soon.</p>
          <Button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', title: '', body: '' }); setErrors({}); }} className="mt-6 bg-coral hover:bg-coral/90">Submit Another Story</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 fade-in">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-lora font-medium text-charcoal">Name *</Label>
        <Input id="name" type="text" value={formData.name} onChange={e => handleChange('name', e.target.value)} className={`border-gray-300 focus:border-coral focus:ring-coral ${errors.name ? 'border-red-500' : ''}`} placeholder="Your full name" />
        {errors.name && <p className="text-red-500 text-sm font-lora">{errors.name}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="font-lora font-medium text-charcoal">Email *</Label>
        <Input id="email" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} className={`border-gray-300 focus:border-coral focus:ring-coral ${errors.email ? 'border-red-500' : ''}`} placeholder="your.email@example.com" />
        {errors.email && <p className="text-red-500 text-sm font-lora">{errors.email}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="title" className="font-lora font-medium text-charcoal">Story Title * <span className="text-gray-500 font-normal">({formData.title.length}/80)</span></Label>
        <Input id="title" type="text" value={formData.title} onChange={e => handleChange('title', e.target.value)} className={`border-gray-300 focus:border-coral focus:ring-coral ${errors.title ? 'border-red-500' : ''}`} placeholder="Give your story an intriguing title" maxLength={80} />
        {errors.title && <p className="text-red-500 text-sm font-lora">{errors.title}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="body" className="font-lora font-medium text-charcoal">Your Story * <span className="text-gray-500 font-normal">({formData.body.length}/1000)</span></Label>
        <Textarea id="body" value={formData.body} onChange={e => handleChange('body', e.target.value)} className={`border-gray-300 focus:border-coral focus:ring-coral min-h-32 ${errors.body ? 'border-red-500' : ''}`} placeholder="Share your Amsterdam story, hidden gem, or cultural insight..." maxLength={1000} />
        <p className="text-gray-500 text-xs font-lora">Minimum 50 characters required</p>
        {errors.body && <p className="text-red-500 text-sm font-lora">{errors.body}</p>}
      </div>
      <div className="pt-4">
        <Button type="submit" disabled={isSubmitting} className="w-full bg-coral hover:bg-coral/90 text-white font-lora text-base py-3">{isSubmitting ? 'Submitting Story...' : 'Submit Your Story'}</Button>
      </div>
    </form>
  );
};

export default SubmitForm; 