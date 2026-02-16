import HeroSection from "../components/Home page/HeroSection"
import ResumeSction from "../components/Home page/ResumeSction"
import Services from "../components/Home page/Services"
import PageWrapper from "../components/PageWrapper"


const Home = () => {
    return (
        <>
        <div className=" bg-gray-200 dark:bg-gray-900">
            <PageWrapper>
                <HeroSection />
                <ResumeSction />
                <Services/>
            </PageWrapper>
        </div>
        </>
    )
}

export default Home
