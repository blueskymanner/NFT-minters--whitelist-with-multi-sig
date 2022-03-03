import Flex from "../common/Flex";
import Image from "../common/Image";
import LogoImage from "../../assets/images/new_logo.png";
import Box from "../common/Box";
import TelegramImage from "../../assets/icons/telegram.png";
import GithubImage from "../../assets/icons/github.png";
import InstagramImage from "../../assets/icons/instagram.png";
import TwitterImage from "../../assets/icons/twitter.png";
import FacebookImage from "../../assets/icons/facebook.png";
import MediumImage from "../../assets/icons/medium.png";
import DiscordImage from "../../assets/icons/discord.png";
import SocialIcon from "../common/SocialIcon";

const Footer = () => {
  const menus = [
    { menu: "The Collection" },
    { menu: "Marketplace" },
    { menu: "Roadmap" },
    { menu: "Blog" },
    { menu: "Art" },
    { menu: "Faqs" },
  ];

  const socialIcons = [
    { icon: MediumImage, link: "https://diversifynft.medium.com/" },
    { icon: DiscordImage, link: "https://discord.gg/DvdTthWew8" },
    { icon: TelegramImage, link: "https://t.me/deviversiynfts" },
    { icon: GithubImage, link: "https://github.com/DiversifyNFTs" },
    { icon: InstagramImage, link: "https://www.instagram.com/diversifynft/" },
    { icon: TwitterImage, link: "https://twitter.com/DiversifyNfts" },
    { icon: FacebookImage, link: "https://m.facebook.com/diversifynfts" },
  ];

  return (
    <Box cssClasses={["bg-dark1", "section-pad-top", "footer"]}>
      <Flex
        cssClasses={["container"]}
        direction={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <Image src={LogoImage} width="100px" />
        <Flex
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          cssClasses={["my-4"]}
        >
          {menus.map((menu, index) => (
            <Box
              key={index}
              cssClasses={["px-2", "my-1", "px-md-3", "my-md-2"]}
            >
              <p className="text-sm">{menu.menu}</p>
            </Box>
          ))}
        </Flex>
        <Flex direction={"row"} justifyContent="center" alignItems="center">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} link={icon.link} img={icon.icon} />
          ))}
        </Flex>
        <p className="mt-4 text-sm">
          <a
            className="text-white"
            style={{ textDecoration: "none" }}
            href="mailto:support@diversifynfts.com"
          >
            support@diversifynfts.com
          </a>
        </p>
      </Flex>
    </Box>
  );
};

export default Footer;
