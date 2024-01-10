import Homepage from "@/app/components/Homepage";
import Header from "@/app/components/Header";
import Services from "@/app/components/Services";
import FeaturedProperty from "@/app/components/FeaturedProperty";
const App = () => {
  return (
    <>
      <Header />
      <Homepage />
      <FeaturedProperty />
      <Services />
      <div className="h-screen"></div>
    </>
  );
};
export default App;
