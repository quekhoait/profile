
import CardItem from "./components/CardItem";
import Event from "./components/Event";
import IntroduceComponent from "./components/IntroduceComponent";
import IntroduceV2 from "./components/IntroduceV2";
import LinkInfomation from "./components/linkInfomation";
import Project from "./components/Project";
import Utility from "./components/Utility";

export default function Home() {
  return (
  <div className="text-2xl bg-[#0b0f19d4]">   
    <IntroduceComponent />
    {/* <IntroduceV2 /> */}
    <CardItem  />
    <Project id="projects" />
    <Event id="events" />
    <Utility id="utility" />
    
    <LinkInfomation id="links" />
  </div>
  );
}
