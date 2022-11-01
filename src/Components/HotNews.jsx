import Carousel from "@itseasy21/react-elastic-carousel";

import { HotNewsItems } from "./HotNewsItems";

const HotNews = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
    { width: 1450, itemsToShow: 5, pagination: false },
    { width: 1750, itemsToShow: 6, pagination: false },
  ];

  return (
    <div className="hotNews">
      <hr />
      <div className="title-hotNews">
        <h2>
          منتخب اخبار داغ <i className="fa fa-fire" />
        </h2>
        <a href="#">مشاهده عناوین بیشتر</a>
      </div>

      <Carousel itemsToShow={3} breakPoints={breakPoints}>
        {HotNewsItems.map((item) => (
          <div className="card h-100" key={item.id}>
            <a href="#" key={item.id}>
              <img src={item.img} className="card-img-top" />
              <div className="card-body">
                <p className="card-title">{item.title}</p>
              </div>
              <div className="card-footer">
                <small>
                  <i className="fa fa-clock-o" /> {item.date}
                </small>
              </div>
            </a>
          </div>
        ))}
      </Carousel>
      <hr />
    </div>
  );
};

export default HotNews;
