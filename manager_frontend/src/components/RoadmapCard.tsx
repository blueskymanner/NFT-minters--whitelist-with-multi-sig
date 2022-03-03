import Box from "./common/Box";

export interface RoadMapPhaseData {
  title: string;
  season: string;
  items: RoadMapPhaseItemData[];
}

export interface RoadMapPhaseItemData {
  completed: boolean;
  label: string;
}

const RoadmapPhase = ({ title, season, items }: RoadMapPhaseData) => {
  return (
    <div className="col-12 col-md-6 px-0 mt-4 pt-4">
      <div className="container h-100 d-flex flex-column">
        <h2 className="phase-title text-lg-center">{title}</h2>
        {/* <label className="phase-season text-lg-center">{season}</label> */}
        <div className="bg-dark2 h-100 p-md-4 p-3 rounded-20 mt-4">
          {items.map((item, index) => (
            <Box key={index} cssClasses={["py-md-4", "py-3"]}>
              <Box
                cssClasses={["bg-dark3", "rounded-circle", "phase-check-box"]}
              >
                <i
                  className={`bi bi-check ${
                    item.completed ? "visible" : "invisible"
                  }`}
                />
              </Box>
              <span className="ms-md-4 ms-2 phase-label">{item.label}</span>
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPhase;
