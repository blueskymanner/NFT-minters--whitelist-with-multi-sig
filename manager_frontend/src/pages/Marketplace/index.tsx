import Box from "../../components/common/Box";
import Button from "../../components/common/Button";
import Flex from "../../components/common/Flex";

const Marketplace = () => {
  return (
    <Box cssClasses={["section-pad-top", "bg-dark1"]}>
      <Flex
        cssClasses={["container"]}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Marketplace</h1>
        <p className="mt-1 text-center">
          Our collection of unique NFTs that can be bought and sold on our
          marketplace..
        </p>
        <Box cssClasses={["mt-4", "pt-4"]}>
          <Button secondary text="Coming soon!" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Marketplace;
