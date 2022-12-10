// type Props = {};

import CardKeislaman from "../components/Card/CardKeislaman";
import Carousel from "../components/Carousel/Carousel";
import SepatorContent from "../components/SepartorsContent/SepatorContent";

function Home() {
  return (
    <>
      <div className="flex w-full flex-col items-start">
        <Carousel />
        <SepatorContent name="Keislaman" link="/keislaman" />
        <div className="snap-proximity  snap-x flex overflow-x-scroll overflow-auto w-full h-56 gap-4">
          <CardKeislaman />
          <CardKeislaman />
          <CardKeislaman />
          <CardKeislaman />
          <CardKeislaman />
        </div>
        <SepatorContent name="Keislaman" link="/keislaman" />
        <div className="snap-proximity  snap-x flex overflow-x-scroll overflow-auto w-full h-56 gap-4">
          <CardKeislaman />
          <CardKeislaman />
          <CardKeislaman />
          <CardKeislaman />
          <CardKeislaman />
        </div>
      </div>
    </>
  );
}

export default Home;
