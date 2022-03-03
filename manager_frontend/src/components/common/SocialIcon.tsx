const SocialIcon = ({ img, link }: { img: any; link: string }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="social-icon rounded-circle">
        <img width="24" src={img} alt="social icon" />
      </div>
    </a>
  );
};

export default SocialIcon;
