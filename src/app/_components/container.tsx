type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className=" bg-sky-300 bg-dotted-spacing-4 bg-dotted-gray-200 container mx-auto px-5">{children}</div>;
};

export default Container;




