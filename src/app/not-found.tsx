'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center pt-14">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-display text-6xl font-bold gradient-text">
            404
          </span>
          <h1 className="mt-4 font-display text-2xl font-bold text-brand-cream">
            Page Not Found
          </h1>
          <p className="mt-2 text-sm text-brand-muted">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/" variant="primary" size="md">
              <ArrowLeft className="h-3 w-3" />
              Back to Home
            </Button>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
