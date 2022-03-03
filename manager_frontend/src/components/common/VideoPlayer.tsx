import Box from "./Box";

const VideoPlayer = ({ source }: { source: any }) => {
  return (
    <Box cssClasses={["mx-4"]}>
      <video width="100%" height="100%" autoPlay muted loop>
        <source src={source} type="video/mp4" />
      </video>
    </Box>
  );
};

export default VideoPlayer;
