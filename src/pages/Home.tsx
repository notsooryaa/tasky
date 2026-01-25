import { ActivityCard } from "../components/home/ActivityCard";
import { BreakDownCard } from "../components/home/BreakDownCard";
import { Header } from "../components/home/Header";
import { TimeTrackerButton } from "../components/home/TimeTrackerButton";
import { ArrowDownToLine } from "lucide-react";

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-6 bg-[#F9F9F9] h-full p-6">
        <div className="flex flex-row items-center justify-between w-full p-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-medium text-gray-900">Today</h1>
            <h2 className="text-xl text-gray-800">Sun 25, 2026 | 10:00 AM</h2>
          </div>
          <div>
            <TimeTrackerButton
              onClick={() => console.log("Start Time Tracker clicked")}
            />
          </div>
        </div>
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
        <div className="flex flex-row gap-6 w-full">
          <BreakDownCard
            title="Recent Activities"
            activities={[
              {
                id: "a1",
                name: "John Doe",
                imageUrl: ["https://randomuser.me/api/portraits/men/1.jpg"],
              },
              {
                id: "a2",
                name: "Jane Smith",
                imageUrl: ["https://randomuser.me/api/portraits/women/2.jpg"],
              },
              {
                id: "a3",
                name: "Alice Johnson",
                imageUrl: ["https://randomuser.me/api/portraits/women/3.jpg"],
              },
            ]}
          />
          <BreakDownCard
            projects={[
              { id: "1", name: "Project A", time: "5h", progress: 70 },
              { id: "2", name: "Project B", time: "3h", progress: 40 },
              { id: "3", name: "Project C", time: "8h", progress: 90 },
            ]}
            onViewAll={{
              title: "View All",
              onViewAll: () => {
                console.log("View All Projects clicked");
              },
            }}
          />
        </div>
        <div className="flex flex-row gap-6 w-full">
          <BreakDownCard
            title="Members"
            members={[
              {
                id: "1",
                name: "John Ekeler",
                projectName: "Food Dashboard Design",
                task: "Creating UI and Research",
                todayTime: "00:40:00",
                weekTime: "08:40:00",
                avatarUrl: "👨‍💼",
              },
              {
                id: "2",
                name: "Rubik Sans",
                projectName: "Project Name",
                task: "Creating UI and Research",
                todayTime: "00:40:00",
                weekTime: "08:40:00",
                avatarUrl: "👨‍💼",
              },
            ]}
          />
          <BreakDownCard
            title="To Do"
            projects={[
              { id: "1", name: "Project A", time: "5h", progress: 70 },
              { id: "2", name: "Project B", time: "3h", progress: 40 },
              { id: "3", name: "Project C", time: "8h", progress: 90 },
            ]}
            onViewAll={{
              title: "View Reports",
              onViewAll: () => {
                console.log("View All Projects clicked");
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
