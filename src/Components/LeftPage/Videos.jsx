import { VideosItems } from "./VideosItems";
const Videos = () => {
  return (
    <div className="videos">
      <h2 className="title">ویدیو ها</h2>
      {VideosItems.map((item) => (
        <div className="box" key={item.id}>
          <video controls>
            <source src={item.src} type="video/mp4" />
          </video>
          <p>{item.title}</p>
        </div>
      ))}
      <button className="btn btn-sm">عناوین بیشتر</button>
    </div>
  );
};
export default Videos;
