interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className="flex w-full mb-6 justify-center">
      <h1 className="text-center text-3xl font-extrabold tracking-tight leading-none text-gray-200">
        {children}
      </h1>
    </div>
  );
};

export default Title;
