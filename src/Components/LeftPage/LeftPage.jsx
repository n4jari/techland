import { Videos, AdsList,Proposal } from "../Index";
import AdsList1 from "./1.gif";
import AdsList2 from "./2.gif";

const LeftPage = () => {
  return (
    <div>
      <Videos />
      <AdsList AdsList={AdsList1} />
      <Proposal />
      <AdsList AdsList={AdsList2} />

    </div>
  );
};
export default LeftPage;
