import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import Privacy from "./Privacy";
import Contact from "./Contact";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Privacy />
      <Footer />
    </div>
  );
}

export default LandingPage;
