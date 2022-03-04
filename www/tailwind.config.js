module.exports = {
  content: [
    './public/**/*.{html,scss}', 
    './src/**/*.{astro,js,jsx,ts,tsx,vue}'
  ],
  theme: {
  
    fontFamily:{},
    extend: {
      screens:{
        "desktop":{'max':'1535px'},
        "laptop":{'max':'1279px'},
        "mobile":{'max':'425px'},
        "tablet":{'max':'768px'},
      },
      typography:{
        DEFAULT:{
          css:{
            '--tw-prose-body': 'var(--tailwind-body-text)',
            '--tw-prose-headings': 'var(--tailwind-headings-text)' ,
            '--tw-prose-links': 'var(--tailwind-links-text)',
            '--tw-prose-bold': 'var(--tailwind-bold-text)',
            '--tw-prose-counters': 'var(--tailwind-counters)',
            '--tw-prose-bullets': 'var(--tailwind-bullets)',
            '--tw-prose-hr': 'var(--tailwind-hr)',
            '--tw-prose-quotes': 'var(--tailwind-quotes)',
            '--tw-prose-quote-borders': 'var(--tailwind-borders-quotes)' ,
            '--tw-prose-captions': 'var(--tailwind-captions)',
            '--tw-prose-code': 'var(--tailwind-code-text)',
            '--tw-prose-pre-code': 'var(--tailwind-code-text)',
            '--tw-prose-pre-bg': 'var(--tailwind-bg-pre)',
            '--tw-prose-th-borders': 'var(--tailwind-borders-th)',
            '--tw-prose-td-borders': 'var(--tailwind-border-td)',
            '--tw-prose-invert-body': 'var(--tailwind-invert-headings-text)',
            '--tw-prose-invert-headings': 'var(--tailwind-invert-headings-text)',
            '--tw-prose-invert-links': 'var(--tailwind-invert-links-text)',
            '--tw-prose-invert-bold': 'var(--tailwind-invert-bold-text)',
            '--tw-prose-invert-counters': 'var(--tailwind-invert-counters)',
            '--tw-prose-invert-bullets': 'var(--tailwind-invert-bullets)',
            '--tw-prose-invert-hr': 'var(--tailwind-invert-hr)',
            '--tw-prose-invert-quotes': 'var(--tailwind-invert-quotes)',
            '--tw-prose-invert-quote-borders': 'var(--tailwind-invert-border-quote)',
            '--tw-prose-invert-captions': 'var(--tailwind-invert-captions)',
            '--tw-prose-invert-code': 'var(--tailwind-invert-code-text)',
            '--tw-prose-invert-pre-code': 'var(--tailwind-invert-pre-text)',
            '--tw-prose-invert-td-borders': 'var(--tailwind-invert-borders-td)',
            //Max-width override  
            maxWidth:'none',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
