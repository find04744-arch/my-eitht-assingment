import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import 'animate.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased">
        <Navbar />
        <Toaster position="top-center" />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}