import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const slides = [
    { text: "📈 ML-Powered Predictions", desc: "Real-time trend forecasting" },
    { text: "👵 Elder-Friendly UI", desc: "Simple for all age groups" },
    { text: "📊 Health History", desc: "Doctor-ready dashboard anytime" },
  ];

  const settings = {
    dots: true, infinite: true, autoplay: true, speed: 500, slidesToShow: 1, slidesToScroll: 1
  };

  return (
    <div className="bg-gray-950 py-12">
      <h2 className="text-3xl text-center text-cyan-400 mb-6">Why It Matters</h2>
      <Slider {...settings}>
        {slides.map((s, i) => (
          <div key={i} className="text-center text-white p-6">
            <h3 className="text-2xl">{s.text}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
