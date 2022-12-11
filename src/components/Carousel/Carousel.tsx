type Props = {};

const Carousel = () => {
  return (
    <div
      id="carouselCaptions"
      className="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 -bottom-4 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner relative w-full overflow-hidden rounded-md">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption pb-0 block absolute text-center">
            <h5 className="text-sm">First slide label</h5>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption pb-0 block absolute text-center">
            <h5 className="text-sm">Second slide label</h5>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption pb-0 block absolute text-center">
            <h5 className="text-sm">Third slide label</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
