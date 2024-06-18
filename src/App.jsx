import Header from "./components/header";
import HeroSection from "./pages/homepage/heroSection";
import Features from "./pages/homepage/features";
import Plans from "./pages/homepage/plans";
import Qna from "./pages/homepage/qna";
import Cta from "./pages/homepage/cta";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Qna />
        <Plans />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
