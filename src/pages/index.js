import Header from "../../components/Header";

import HomeBanner from "@/routs/Home/HomeBanner";
import ShopByCategory from "@/routs/Home/shopByCategory";
import ThirdSection from "@/routs/Home/thirdSection";
import ToysSection from "@/routs/Home/ToysSection";
import Footer from "../../components/Footer";
import Sustainable from "@/routs/Home/sustainable";
import OurStory from "@/routs/Home/ourStory";
import ShopAllProduct from "@/routs/Home/shopAllProduct";
export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <ShopByCategory />
      <ThirdSection />
      <ToysSection />
      <ShopAllProduct />
      <OurStory />
      <Sustainable />
      <Footer />
    </>
  );
}
