import Box from "./common/Box";
import Image from "./common/Image";

const Blog = ({ blog, index }: { blog: any; index: number }) => {
  return (
    <div
      className="col-md-4 container col-12 mb-4 mb-sm-0"
      data-aos="fade-up"
      data-aos-delay={100 * (index + 1)}
      data-aos-duration="800"
    >
      <Box cssClasses={["p-0", "p-sm-2"]}>
        <a
          href={blog.link}
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <Image
            cssClasses={["rounded-20"]}
            width="100%"
            height="80%"
            src={blog.img}
          />
          <Box cssClasses={["mt-4", "pt-2"]}>
            <h3>{blog.title}</h3>
          </Box>
          <Box cssClasses={["mt-3"]}>
            <p className="text-sm blog-description">{blog.description}</p>
          </Box>
        </a>
      </Box>
    </div>
  );
};

export default Blog;
