/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom palette colors
        'midnight-blue': '#0D0F1A',
        'deep-indigo': '#1E3A8A',
        'electric-blue': '#3B82F6',
        'mint-green': '#6EE7B7',
        'lavender-purple': '#A5B4FC',
        'pale-gray': '#F3F4F6',
        
        // Dynamic CSS variables for background and foreground
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
