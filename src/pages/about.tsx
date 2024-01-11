import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import GoogleMapsComponent from "@/app/components/Map";
import Services from "@/app/components/Services";

const AboutPage = () => (
  <>
    <Header />
    <div className="pt-10 lg:pt-20">
      <section className="p-20 lg:p-40 px-16 flex-wrap">
        <p
          className={`font-semibold text-xl lg:text-3xl text-center content-center`}
        >
          Welcome to EpicEstate Hub, where we redefine the way you experience
          real estate. At EpicEstate Hub, we believe that every home should be a
          masterpiece, an embodiment of luxury and comfort. As a pioneering
          force in the real estate industry, we strive to provide an
          unparalleled platform that transcends the conventional boundaries of
          property search.
        </p>
      </section>
      <section className="p-20 lg:p-40 px-16 bg-primary text-white flex-wrap">
        <div className="flex flex-col lg:flex-row gap-10 text-center">
          <div className="w-full flex flex-col gap-2 justify-around items-center ">
            <p className="text-3xl bg-gradient-to-b from-transparent from-50% to-50% to-red-500">
              Who We Are
            </p>
            <p className="p-10">
              {` EpicEstate Hub is not just a real estate platform; it's a vision
              realized. We are a team of passionate individuals dedicated to
              reshaping your home-buying or selling journey. Our mission is to
              empower you with the tools, insights, and support needed to make
              informed decisions that align with your unique lifestyle.`}
            </p>
          </div>
          <div className="w-full  flex flex-col gap-2 justify-around items-center">
            <p className="text-3xl bg-gradient-to-b from-transparent from-50% to-50% to-red-500 w-fit">
              What Sets Us Apart
            </p>
            <p className="p-10">
              {` At EpicEstate Hub, we recognize that a home is not just a physical space; it's a reflection of your dreams and aspirations. What sets us apart is our commitment to curating a portfolio of properties that go beyond expectations. Whether you are seeking a cozy family home or an upscale urban retreat, our diverse range of listings ensures that every residence is a masterpiece in its own right.`}
            </p>
          </div>
        </div>
      </section>
      <section className="p-20 lg:p-40 flex flex-col justify-center gap-10 text-center items-center">
        <p className="font-semibold text-3xl lg:text-5xl text-center w-fit bg-gradient-to-b from-transparent from-50% to-50% to-red-500">
          Our Values
        </p>
        <div className="flex flex-col lg:flex-row gap-10 text-center">
          <div className="p-10 rounded-lg shadow-md bg-primary bg-opacity-10 gap-5 flex flex-col justify-center items-center">
            <p className="font-semibold text-2xl">Excellence</p>
            <p>
              We are driven by a commitment to excellence in every aspect of our
              service, from user experience to property representation.
            </p>
          </div>

          <div className="p-10 rounded-lg shadow-md bg-primary bg-opacity-10 gap-5 flex flex-col justify-center items-center">
            <p className="font-semibold text-2xl">Integrity</p>
            <p>
              Trust is the cornerstone of any successful real estate
              transaction. We prioritize transparency, honesty, and integrity in
              all our dealings.
            </p>
          </div>

          <div className="p-10 rounded-lg shadow-md bg-primary bg-opacity-10 gap-5 flex flex-col justify-center items-center">
            <p className="font-semibold text-2xl">Innovation</p>
            <p>
              Embracing cutting-edge technology, we continuously strive to
              enhance our platform, providing you with the latest tools and
              trends in the real estate market.
            </p>
          </div>

          <div className="p-10 rounded-lg shadow-md bg-primary bg-opacity-10 gap-5 flex flex-col justify-center items-center">
            <p className="font-semibold text-2xl">Customer-Centric Approach</p>
            <p>
              our satisfaction is our priority. Our dedicated team of real
              estate professionals is here to guide you through every step,
              ensuring a seamless and enjoyable experience.
            </p>
          </div>
        </div>
      </section>
      <section className="p-20 flex flex-col gap-10 justify-center items-center bg-primary text-white flex-wrap h-full w-full">
        <p className="text-3xl inline font-semibold bg-gradient-to-b from-transparent from-50% to-50% to-red-500">
          Were located at:
        </p>
        <div className="flex flex-col gap-10 lg:flex-row justify-center items-center">
          <div className="w-1/3">
            <h2 className="text-2xl mb-5">Visit Our Office</h2>
            <p>
              Welcome to our office! We are conveniently situated in [City,
              Country]. Come and explore the vibrant atmosphere of our location.
              Our team is ready to assist you in finding your dream property or
              addressing any real estate needs you may have.
            </p>
          </div>
          <div className="bg-blue-500 h-[400px] w-[400px] brightness-95">
            <GoogleMapsComponent
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            />
          </div>
        </div>
      </section>
      <Services />
      <Footer />
    </div>
  </>
);
export default AboutPage;
