import Box from "../../components/common/Box";
import Flex from "../../components/common/Flex";
import RoadmapPhase from "../../components/RoadmapCard";

const Roadmap = () => {
  const roadmaps = [
    {
      title: "Phase One",
      season: "Q2 2021",
      items: [
        {
          label: "Complete Main Smart Contract - ERC721",
          completed: true,
        },
        {
          label: "Twitter/Intsagram Launch/Discord Launch",
          completed: true,
        },
        {
          label: "Launch website V1",
          completed: true,
        },
        {
          label: "Mint First NFTs",
          completed: false,
        },
        {
          label: "Community Giveaways And Contests",
          completed: false,
        },
      ],
    },
    {
      title: "Phase Two",
      season: "Q3 2021",
      items: [
        {
          label: "Community Event",
          completed: false,
        },
        {
          label: "Upgrade Website V2",
          completed: false,
        },
        {
          label: "Mint NFTs",
          completed: false,
        },
        {
          label: "Launch Item Smart Contract - ERC 721",
          completed: false,
        },
        {
          label: "Announcement",
          completed: false,
        },
        {
          label: "NFT Edition",
          completed: false,
        },
      ],
    },
    {
      title: "Phase Three",
      season: "Q4 2021",
      items: [
        {
          label: "Company Token Launch",
          completed: false,
        },
        {
          label: "Mint NFTs",
          completed: false,
        },
        {
          label: "Upgrade Website V3",
          completed: false,
        },
        {
          label: "Migrate to Polygon",
          completed: false,
        },
        {
          label: "Community Event",
          completed: false,
        },
      ],
    },
    {
      title: "Phase Four",
      season: "Q1 2022",
      items: [
        {
          label: "Launch Marketing Website",
          completed: false,
        },
        {
          label: "Big Brand Collaboration",
          completed: false,
        },
        {
          label: "Build, Build, Build",
          completed: false,
        },
      ],
    },
  ];

  return (
    <Box cssClasses={["section-pad-top", "bg-dark1"]}>
      <h1 className="text-center">Roadmap</h1>
      <Box cssClasses={["col-md-10", "mx-auto"]}>
        <Flex
          cssClasses={["mt-4"]}
          direction={"row"}
          justifyContent="space-between"
        >
          {roadmaps.map((roadmap, index) => (
            <RoadmapPhase
              key={index}
              title={roadmap.title}
              items={roadmap.items}
              season={roadmap.season}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Roadmap;
