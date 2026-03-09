import IntroduceComponent from "./components/IntroduceComponent";
import LinkInfomation from "./components/linkInfomation";
import Utility from "./components/Utility";

export default function Home() {
  return (
  <div className="text-2xl">   
    <IntroduceComponent />
    <Utility />
    <LinkInfomation />
  </div>
  );
}
