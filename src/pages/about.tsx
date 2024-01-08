import Header from "@/app/components/Header";

const AboutPage = () => (
    <>
        <Header />
        <div className={`pt-20 `}>
            <section className={`p-40 px-16 flex-wrap `}>
                <p className={`font-semibold text-5xl text-center content-center`}>
                    Lorem Ipsum, Pellentesque interdum lectus diam, quis semper velit laoreet et. Praesent imperdiet tincidunt orci, at porttitor ipsum gravida a.
                </p>
            </section>
            <section className={`p-40 px-16 bg-primary flex-wrap `}>
                <p className={`font-semibold text-5xl text-center`}>
                    Awards
                </p>
            </section>
            <section className={`p-40 px-16 flex-wrap `}>
                <p className={`font-semibold text-5xl text-center`}>
                    Properties
                </p>
            </section>
            <section className={`p-40 px-16 bg-primary flex-wrap `}>
                <p className={`font-semibold text-5xl text-center`}>
                    Locations
                </p>
            </section>
            <section className={`p-40 px-16 flex-wrap `}>
                <p className={`font-semibold text-5xl text-center`}>
                    Blogs
                </p>
            </section>
            <footer className={`px-16 bg-primary flex-wrap`}>
                footer
            </footer>
        </div>
    </>
)
export default AboutPage;