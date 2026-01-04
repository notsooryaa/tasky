import { ActivityCard } from "../components/home/ActivityCard";
import { Header } from "../components/home/Header";
import { ArrowDownToLine } from "lucide-react";

function Home() {
  return (
    <>
    <Header />
    <div className="flex items-center justify-center gap-6 bg-[#F9F9F9] h-screen p-6">
      <ActivityCard 
        title="Weekly Activity"
        value="0%"
        icon={<ArrowDownToLine size={32} className="text-amber-500" />}
      />
      <ActivityCard 
        title="Weekly Activity"
        value="0%"
        icon={<ArrowDownToLine size={32} className="text-amber-500" />}
      />
      <ActivityCard 
        title="Weekly Activity"
        value="0%"
        icon={<ArrowDownToLine size={32} className="text-amber-500" />}
      />
    </div>
    </>
  );
}

export default Home;
