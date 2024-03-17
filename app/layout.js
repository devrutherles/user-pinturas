import "./globals.css";
import Header from "./components/header";
import Container from "./components/container";
import Context from "./hooks/authContext";
import Footer from "./components/footer";

export const metadata = {
  title: "PinteJá",
  description: "Sua plataforma de serviços",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
     <Context> <body >
        <Header />
        <main className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 bg-">
        {children}
        </main>   <Footer />
      </body>
      </Context> 
   
    </html>
  );
}
