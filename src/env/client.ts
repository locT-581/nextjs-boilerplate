import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_PUBLIC_DOMAIN: z.string().url().min(1, 'NEXT_PUBLIC_PUBLIC_DOMAIN is url'),
  },
  runtimeEnv: {
    NEXT_PUBLIC_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_PUBLIC_DOMAIN,
  },
});
