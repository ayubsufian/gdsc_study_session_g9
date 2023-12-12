import GroupMembers from "./GroupMembers";

const App = () => {
  const groupMembers = [
    "Ayub Sufian",
    "Barok Teshome",
    "Helen Firew",
    "Kaleab Hailu",
    "Mikias Nigussie",
    "Natnael Petros",
    "Yonas Ayenew",
    "Zakaria Yunus",
  ];

  return (
    <div className="container mx-auto">
      <GroupMembers members={groupMembers} />
    </div>
  );
};

export default App;
