import {
  Footer,
  Header,
  HotNews,
  HrAds,
  Main,
  Nav,
  NewsCage,
} from "./Components/Index";
import Ads1 from "./Components/Ads/ads1.jpg";
import Ads2 from "./Components/Ads/ads2.jpg";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <HrAds ads={Ads1} />
      <NewsCage />
      <HrAds ads={Ads2} />
      <HotNews />
      <Main />
      <Footer />
    </>
  );
};
export default App;
