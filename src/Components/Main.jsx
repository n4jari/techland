import { LeftPage, OtherContent } from "./Index";

const Main = () => {
  return (
    <main>
      <h2 className="main_title">
        آرشیو مطالب جدید <i className="fa fa-archive" />
        <hr />
      </h2>

      <div className="main_layout">
        <div className="rightPage">
          <OtherContent />
        </div>
        <div className="leftPage">
          <LeftPage />
        </div>
      </div>
    </main>
  );
};
export default Main;
