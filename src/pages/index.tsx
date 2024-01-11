import Homepage from "@/app/components/Homepage";
import Header from "@/app/components/Header";
import Services from "@/app/components/Services";
import FeaturedProperty from "@/app/components/FeaturedProperty";
import EventNews from "@/app/components/EventNews";
import Footer from "@/app/components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Homepage />
      <FeaturedProperty />
      <Services />
      <EventNews />
      <Footer />
    </div>
  );
};
export default App;
