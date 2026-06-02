import CardItem from "./components/cardItem";
import Event from "./components/Event";
import IntroduceComponent from "./components/IntroduceComponent";
import LinkInfomation from "./components/linkInfomation";
import Project from "./components/Project";
import Utility from "./components/Utility";

export default function Home() {
  return (
  <div className="text-2xl bg-[#0b0f19d4]">   
    <IntroduceComponent />
    <CardItem />
    <Project />
    <Event />
    <Utility />
    
    <LinkInfomation />
  </div>
  );
}
