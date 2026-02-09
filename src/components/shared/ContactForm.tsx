'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const serviceOptions = [
  'Billboards & Banners',
  'Full Color Printing',
  'Signage',
  'Exhibition Stands',
  'Vehicle Branding',
  'Indoor & Outdoor Branding',
  'Mall Activation',
  'Digital Signage',
  'Retail Solutions',
  'Other',
];

export default function ContactForm({ dark = true }: { dark?: boolean }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const inputClasses = cn(
    'w-full rounded-lg border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan/40',
    dark
      ? 'border-white/10 bg-white/5 text-brand-cream placeholder:text-brand-muted/60'
      : 'border-brand-charcoal/10 bg-brand-charcoal/5 text-brand-charcoal placeholder:text-brand-charcoal/40'
  );

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="mb-4 h-10 w-10 text-brand-cyan" />
        <h3 className={cn('font-display text-lg font-semibold', dark ? 'text-brand-cream' : 'text-brand-charcoal')}>
          Message Sent
        </h3>
        <p className={cn('mt-2 text-sm', dark ? 'text-brand-muted' : 'text-brand-charcoal/60')}>
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={cn('mb-1 block text-xs font-medium', dark ? 'text-brand-muted' : 'text-brand-charcoal/70')}>
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={inputClasses}
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
              <AlertCircle className="h-3 w-3" />
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={cn('mb-1 block text-xs font-medium', dark ? 'text-brand-muted' : 'text-brand-charcoal/70')}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={inputClasses}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
              <AlertCircle className="h-3 w-3" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={cn('mb-1 block text-xs font-medium', dark ? 'text-brand-muted' : 'text-brand-charcoal/70')}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+966 5XX XXX XXXX"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="company" className={cn('mb-1 block text-xs font-medium', dark ? 'text-brand-muted' : 'text-brand-charcoal/70')}>
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Your company name"
            value={form.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={cn('mb-1 block text-xs font-medium', dark ? 'text-brand-muted' : 'text-brand-charcoal/70')}>
          Service Interest
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => handleChange('service', e.target.value)}
          className={cn(inputClasses, 'appearance-none')}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={cn('mb-1 block text-xs font-medium', dark ? 'text-brand-muted' : 'text-brand-charcoal/70')}>
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={cn(inputClasses, 'resize-none')}
          aria-required="true"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
            <AlertCircle className="h-3 w-3" />
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        <Send className="h-3.5 w-3.5" />
        Send Message
      </Button>
    </form>
  );
}
