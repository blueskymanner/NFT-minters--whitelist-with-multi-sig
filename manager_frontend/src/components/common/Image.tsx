interface ImageProps {
  height?: string;
  width?: string;
  cssClasses?: string[];
  styles?: { [key: string]: string };
  handleClick?: () => any;
  src?: any;
}

const Image = ({
  height,
  width,
  cssClasses,
  styles,
  handleClick,
  src,
}: ImageProps) => {
  return (
    <>
      <img
        width={width}
        height={height}
        src={src}
        style={styles}
        className={cssClasses ? cssClasses.join(" ") : ""}
        alt=""
      />
    </>
  );
};

export default Image;
