type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className=" bg-sky-300 container mx-auto px-5">{children}</div>;
};

export default Container;




