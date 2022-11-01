import { OtherContentItems } from "./OtherContentItems";
import { RED, BLUE, WHITE } from "../Helper/Colors";
import { useEffect, useState } from "react";

const OtherContent = () => {
  const [noOfElement, setNoOfElement] = useState(7);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (noOfElement > 7) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [noOfElement]);

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  const lessMore = () => {
    setNoOfElement(7);
  };
  const slice = OtherContentItems.slice(0, noOfElement);

  return (
    <div className="otherContent">
      {slice.map((item) => (
        <div className="card" style={{ background: WHITE }} key={item.id}>
          <div className="row " key={item.id}>
            <div className="col-md-4 ">
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid h-100"
              />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <p className="card-title" style={{ color: RED }}>
                  {item.title}
                </p>
                <p className="card-text" style={{ color: BLUE }}>
                  <i className="fa fa-clock-o" /> {item.date}
                </p>
                <p className="card-text">{item.text}</p>
                <p className="card-text">
                  <button
                    className="btn btn-sm"
                    style={{ background: BLUE, color: WHITE }}
                  >
                    بیشتر
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center ">
        <button
          onClick={() => loadMore()}
          className="btn w-25 btn-sm btn-primary my-4 m-2"
        >
          مطالب بیشتر
        </button>
        <button
          disabled={disabled}
          onClick={() => lessMore()}
          className="btn btn-danger w-25 btn-sm my-4 mx-2"
        >
          بستن مطالب
        </button>
      </div>
    </div>
  );
};

export default OtherContent;
