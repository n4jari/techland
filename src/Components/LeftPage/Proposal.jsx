import { ProposalItems } from "./ProposalItems";
const Proposal = () => {
  return (
    <div className="proposal">
      <h2 className="title">پیشنهادها</h2>
      {ProposalItems.map((item) => (
        <div className="box" key={item.id}>
          <img src={item.img} />
          <a href="#">{item.title}</a>
          <br />
        </div>
      ))}
      <button className="btn btn-sm">عناوین بیشتر</button>
    </div>
  );
};
export default Proposal;
