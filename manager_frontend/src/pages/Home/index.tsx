import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import Flex from "../../components/common/Flex";
// import GroupImage from "../../assets/images/group.png";
import Image from "../../components/common/Image";
import Box from "../../components/common/Box";
import Slider from "react-slick";
import SliderArrow from "../../components/common/SliderArrow";
import RoadMapImage from "../../assets/images/roadmap.png";
import Team from "../../components/Team";
import Blog from "../../components/Blog";
import Accordion from "../../components/common/Accordion";
import BlogImage1 from "../../assets/images/blog1.png";
import BlogImage2 from "../../assets/images/blog2.png";
import BlogImage3 from "../../assets/images/blog3.png";
import TeamImage1 from "../../assets/images/team1.png";
import TeamImage2 from "../../assets/images/team2.png";
import TeamImage3 from "../../assets/images/team3.png";
import LogoImage from "../../assets/images/new_logo.png";
import VideoPlayer from "../../components/common/VideoPlayer";
const Video1 = require("../../assets/videos/video1.mp4");
const Video2 = require("../../assets/videos/video2.mp4");

const Home = () => {
  const videos = [{ src: Video1 }, { src: Video2 }];

  const teams = [
    {
      img: TeamImage1,
      title: "Gregory",
      position: "Founder, Marketing, Developer",
    },
    { img: TeamImage2, title: "Arda", position: "Marketing Manager" },
    { img: TeamImage3, title: "Ana", position: "Design Leader" },
  ];

  const blogs = [
    {
      img: BlogImage1,
      title: "THE INSTABILITY OF CRYPTOCURRENCIES VERSUS THE STABILITY OF NFTs",
      description:
        "The second saga of a trilogy The personal ‘Elixir of Love’ Like the ‘Elixir of Love’, which Valentine left after his execution to make his blind lover see ...",
      link: "https://diversifynft.medium.com/the-instability-of-cryptocurrencies-versus-the-stability-of-nfts-5ec6b9f07e11",
    },
    {
      img: BlogImage2,
      title: "OUR STORY — DiversifyNFT",
      description:
        "A long time ago, in an era when mankind haven’t attained advanced civilization, mankind discovered a set of strange, strong and shiny crystals and they named these beautiful crystals DIAMONDS (derived ...",
      link: "https://diversifynft.medium.com/our-story-diversifynft-57ad52b18",
    },
    {
      img: BlogImage3,
      title:
        "Love is Purity: Let’s Celebrate the ‘Elixir of Love’ Collection by DiversifyNFT",
      description:
        "The first saga of a TRILOGY! The Sweet Love Story of St Valentine and the Cruelty on Him…. Just like diamonds, love is also about purity and toughness. One such story of toughness and love ...",
      link: "https://diversifynft.medium.com/love-is-purity-lets-celebrate-the-elixir-of-love-collection-by-diversifynft-236b8d2adbf1",
    },
  ];

  const faqs = [
    {
      title: "Where  and how can I buy DiversifyNFT?",
      description:
        "Our NFTs would be available in our marketplace as well as Opensea. You can make purchases there",
    },
    {
      title: "How can I get whitelisted?",
      description:
        "To get whitelisted, you would have to part of  our Discord community, follow our Twitter and Instagram handles and participate in our giveaways",
    },
    {
      title: "When is the Mint Date?",
      description: "The Mint Date for our NFTs is on 14th of February, 2022.",
    },
    {
      title: "What is the Mint Price?",
      description:
        "The mint price is set at 0.5 ETH Howeveer, we have giveaway offers that gives a great discount on mint price. See how to get whitelisted to know how to get these offers.",
    },
    {
      title: "Which Markets would the NFTs be listed?",
      description:
        "The NFTs would be listed on Opeansea, Rarible and all Blockchain marketplaces",
    },
  ];

  return (
    <>
      <Box cssClasses={["bg-dark1", "overflow-hidden"]}>
        <div id="home">
          <Box cssClasses={["container", "pt-4"]}>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box cssClasses={["col-md-6", "col-lg-7", "col-12", "section"]}>
                <h1 data-aos="fade-right" data-aos-duration="500">
                  Discover, Collect & Sell unique NFTs
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-delay="200"
                  className="my-4 hero-text"
                >
                  Safely Invest in High-Class Crystal Ring NFT – our 'Token of
                  Love' grows with time. Gift, Invest, Secure – enter the Future
                  of Investment.
                </p>
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-delay="400"
                >
                  <Flex
                    direction="row"
                    justifyContent="start"
                    alignItems="center"
                    cssClasses={["pt-2"]}
                  >
                    <Button primary text="View on OpeanSea" />
                  </Flex>
                </div>
              </Box>
              <Box
                cssClasses={[
                  "col-md-5",
                  "col-lg-4",
                  "col-12",
                  "pb-4",
                  "pb-md-0",
                ]}
              >
                <div data-aos="fade-left" data-aos-duration="1000">
                  <Image
                    cssClasses={["logo-img"]}
                    src={LogoImage}
                    width="100%"
                    height="auto"
                  />
                </div>
              </Box>
            </Flex>
          </Box>
          {/* <Image
            cssClasses={["d-md-block", "d-none"]}
            width="auto"
            height="auto"
            src={GroupImage}
          /> */}
        </div>
      </Box>
      <Box cssClasses={["bg-dark2"]}>
        <div id="art" className="section">
          <Box cssClasses={["container"]}>
            <h1 className="text-sm-center" data-aos="fade-up">
              What is Diversify NFT
            </h1>
            <Box cssClasses={["col-md-8", "col-xxl-10", "mt-3", "mx-auto"]}>
              <p className="text-sm-center" data-aos="fade-up">
                Diversity NFTs is the purest form of Crystal Rings on the
                metaverse, a brand built as a 'Token of Love' on the Ethereum
                Network. Diversify NFTs will be the rare jewel in your
                collection that provides proof of ownership and has unmatchable
                add-ons in its category, making it a pioneer among its peers.
                Crystal Ring 360 videos are easily the most secure piece of
                jewelry on the Web 3.0.
              </p>
            </Box>
            <h1 className="section-pad-top text-sm-center" data-aos="fade-up">
              Collection for the Connoisseurs
            </h1>
            <Box cssClasses={["col-md-8", "col-xxl-10", "mt-3", "mx-auto"]}>
              <p className="text-sm-center" data-aos="fade-up">
                DiversifyNFTs' Crystal Ring Stories are designed to dazzle the
                special someone. They carry the allure, the exquisiteness, and
                the magnificence. They are also giving the possibility of a
                tangible form of artistry. Our idea of taking the NFT world
                forward is through diversification while adding value to the
                buyers' lives.
              </p>
            </Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Box
                cssClasses={["col-lg-8", "col-12", "mt-5", "pt-5", "container"]}
              >
                <div data-aos="zoom-in" data-aos-duration="500">
                  <Slider
                    {...{
                      infinite: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                      nextArrow: <SliderArrow direction="next" />,
                      prevArrow: <SliderArrow direction="prev" />,
                    }}
                  >
                    {videos.map((video, index) => (
                      <VideoPlayer key={index} source={video.src} />
                    ))}
                  </Slider>
                </div>

                <Box cssClasses={["mt-4"]}>
                  <Flex
                    cssClasses={["pt-4"]}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <div data-aos="fade-up">
                      <Link to="/marketplace">
                        <Button secondary text="View Marketplace" />
                      </Link>
                    </div>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </div>
      </Box>
      <Box cssClasses={["bg-dark1"]}>
        <div id="roadmap" className="section-pad-top">
          <Flex
            cssClasses={["container"]}
            justifyContent="center"
            direction="row"
          >
            <Box cssClasses={["col-md-7", "col-12", "pe-md-4"]}>
              <div data-aos="flip-right" data-aos-duration="1000">
                <h2>Roadmap</h2>
                <p className="hero-text mt-2">
                  Here’s a breakdown of our achievements, transparency is a
                  major key in our organization.
                </p>
                <div className="mt-4">
                  <Link to="/roadmap">
                    <Button secondary text="View Roadmap" />
                  </Link>
                </div>
              </div>
            </Box>
            <div
              className="col-md-5 col-12 mt-4 mt-md-0"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Box
                cssClasses={["bg-dark2", "p-4"]}
                styles={{ borderRadius: "20px" }}
              >
                <Box cssClasses={["p-4", "text-center"]}>
                  <Image src={RoadMapImage} width="100%" height="auto" />
                  <h2 className="mt-3">
                    Our
                    <br /> Achievements
                  </h2>
                </Box>
              </Box>
            </div>
          </Flex>
        </div>
        <div className="section-pad-top" id="about">
          <Box cssClasses={["container"]}>
            <h1
              className="text-sm-center"
              data-aos="flip-left"
              data-aos-duration="800"
            >
              About Us
            </h1>
            <Box
              cssClasses={["col-md-10", "text-sm-center", "mt-2", "mx-auto"]}
            >
              <p data-aos="fade-up">
                Established in December 2021, Diversify is a team of friendly
                professionals whose intention is to bring your intentions out of
                detention. We develop and design your imaginations just as you
                want it. You and us only have one job respectively. Your job is
                to think it, our job is to construct it! We operate in
                diversities so, be rest assured of your diverse desires...
              </p>
            </Box>
            <Flex justifyContent="center" direction="row" alignItems="center">
              <div className="mt-4" data-aos="fade-up">
                <Link to="/aboutus">
                  <Button secondary text="View More" />
                </Link>
              </div>
            </Flex>
          </Box>
          <Flex
            cssClasses={["container", "section-pad-top"]}
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <h1 data-aos="flip-right" data-aos-duration="800">
              Meet the Team
            </h1>
            <Flex
              cssClasses={["mt-4", "d-none d-md-flex", "col-12"]}
              justifyContent="between"
              direction="row"
            >
              {teams.map((team, index) => (
                <Team index={index} key={index} team={team} />
              ))}
            </Flex>
            <Box cssClasses={["container", "mt-4", "d-md-none"]}>
              <Slider
                {...{
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  dots: true,
                  nextArrow: <SliderArrow direction="next" />,
                  prevArrow: <SliderArrow direction="prev" />,
                }}
              >
                {teams.map((team, index) => (
                  <Team index={index} key={index} team={team} />
                ))}
              </Slider>
            </Box>
          </Flex>
        </div>
        <Box cssClasses={["container", "mt-4"]}>
          <div className="section-pad-top" id="blog">
            <h1
              className="mt-2 text-center"
              data-aos="flip-left"
              data-aos-duration="800"
            >
              Blog Posts
            </h1>
            <Box cssClasses={["mt-4"]}>
              <Box
                cssClasses={["col-lg-11", "d-none", "d-md-block", "mx-auto"]}
              >
                <Flex justifyContent="center" direction="row">
                  {blogs.map((blog, index) => (
                    <Blog key={index} index={index} blog={blog} />
                  ))}
                </Flex>
              </Box>
            </Box>
            <Box cssClasses={["container", "mt-4", "d-md-none"]}>
              <Slider
                {...{
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  dots: true,
                  nextArrow: <SliderArrow direction="next" />,
                  prevArrow: <SliderArrow direction="prev" />,
                }}
              >
                {blogs.map((blog, index) => (
                  <Blog key={index} index={index} blog={blog} />
                ))}
              </Slider>
            </Box>
            <div className="mt-4 text-center pt-4" data-aos="fade-up">
              <a
                href="https://diversifynft.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Button secondary text="See More" />
              </a>
            </div>
          </div>
        </Box>
        <Box cssClasses={["container"]}>
          <div className="section-pad-top" id="faqs">
            <Flex direction={"row"} justifyContent="space-between">
              <Box cssClasses={["col-md-5", "col-12"]}>
                <h2 data-aos="fade-up">FAQs</h2>
                <p data-aos="fade-up">Frequently asked quetions</p>
              </Box>
              <Box cssClasses={["col-md-7", "col-12", "mt-4", "mt-md-0"]}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="bg-dark2 rounded-20 px-2 px-md-4"
                >
                  <Accordion data={faqs} />
                </div>
              </Box>
            </Flex>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Home;
