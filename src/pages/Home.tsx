// type Props = {};

import Ads from "../components/Ads/Ads";
import CardBahtsulMasail from "../components/Card/CardBahtsulMasail";
import CardKeislaman from "../components/Card/CardKeislaman";
import Carousel from "../components/Carousel/Carousel";
import SepatorContent from "../components/SepartorsContent/SepatorContent";
function Home() {
  return (
    <>
      <div className="flex w-full flex-col items-start">
        <Carousel />
        <SepatorContent name="Keislaman" link="/keislaman" />
        <div className="snap-proximity snap-x flex overflow-x-scroll overflow-auto w-full h-56 gap-4">
          <CardKeislaman />
          <CardKeislaman />
          <CardKeislaman />
          <CardKeislaman />
          <CardKeislaman />
        </div>
        <SepatorContent name="Bahtsul Masail" link="/bahtsulmsail" />
        <div className="flex flex-col w-full h-auto gap-4">
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
        </div>
        <div className="flex flex-col w-full h-auto pt-5">
          <Ads />
        </div>
        <SepatorContent name="Kabar NU Rancaekek" link="/kabarnu" />
        <div className="flex flex-col w-full h-auto gap-4">
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
          <CardBahtsulMasail />
        </div>
      </div>
    </>
  );
}

export default Home;
