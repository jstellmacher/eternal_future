// app/layout.js

import './globals.css'; // Import global styles
import Navbar from './components/Navbar'; // Import the new Navbar component

export const metadata = {
  title: 'Eternal Future',
  description: 'Your AI-powered workout suggestion app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-secondary text-primary">
        <Navbar /> {/* Updated to include Navbar */}
        <main className="p-4">
          {children}
        </main>
        <footer className="p-4 bg-primary text-white text-center">
          &copy; {new Date().getFullYear()} Eternal Future
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
