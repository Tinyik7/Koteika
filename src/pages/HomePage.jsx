import Poster from '../components/PosterFirstChildPage';
import WhyUs from '../components/WhyUsPage';
import Numbers from '../components/NumbersPage';
import Reviews from '../components/ReviewsPage';
import HowToFindUs from '../components/HowToFindUsPage';

function HomePage() {
    return (
        <main>
            <Poster />
            <WhyUs />
            <Numbers />
            <Reviews />
            <HowToFindUs />
        </main>     
    );
}

export default HomePage;