import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import korun
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* Footer add korun */}
      </body>
    </html>
  );
}