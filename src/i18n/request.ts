import { getRequestConfig } from 'next-intl/server';

// NextJS Boilerplate uses Crowdin as the localization software.
// As a developer, you only need to take care of the English (or another default language) version.
// Other languages are automatically generated and handled by Crowdin.

// The localisation files are synced with Crowdin using GitHub Actions.
// By default, there are 3 ways to sync the message files:
// 1. Automatically sync on push to the `main` branch
// 2. Run manually the workflow on GitHub Actions
// 3. Every 24 hours at 5am, the workflow will run automatically

// Using internationalization in Server Components
export default getRequestConfig(async () => {
  // This typically corresponds to the `[locale]` segment
  const locale = 'en';

  // const response = await fetch(env.LANGUAGE_CDN);
  // const messagesFromServer = await response.json();

  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}.json`)).default,
      // ...messagesFromServer,
    },
  };
});
