import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSection = ({ list }: { list: Array<string> }) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings}>
            {list.map((item, index) => (
                <div key={index}>
                    <h3>{item}</h3>
                </div>
            ))}
        </Slider>
    )
}

export default SlickSection