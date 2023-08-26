import Faq from "../components/Layout/Faq/Faq";
import HowItWorks from "../components/Layout/How It Works/HowItWorks";
import IntroductionLayout from "../components/Layout/Introduction/IntroductionLayout";
import TopCryptoCurrencies from "../components/Layout/Top Crypto Currencies/TopCryptoCurrencies";
import Market from "../components/Market/Market";

const HomePage = () => {
  return (
    <>
      <IntroductionLayout />
      <TopCryptoCurrencies />
      <Market />
      <HowItWorks />
      <Faq />
    </>
  );
};

export default HomePage;
