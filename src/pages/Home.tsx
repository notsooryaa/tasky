import { ActivityCard } from "../components/home/ActivityCard";
import { BreakDownCard } from "../components/home/BreakDownCard";
import { Header } from "../components/home/Header";
import { ArrowDownToLine } from "lucide-react";

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-6 bg-[#F9F9F9] h-screen p-6">
        <div className="flex flex-row gap-6 w-full">
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
        <BreakDownCard
          projects={[
            { id: "1", name: "Project A", time: "5h", progress: 70 },
            { id: "2", name: "Project B", time: "3h", progress: 40 },
            { id: "3", name: "Project C", time: "8h", progress: 90 },
          ]}
        />
      </div>
    </>
  );
}

export default Home;
