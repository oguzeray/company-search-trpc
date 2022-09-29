interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className="mb-6 flex w-full justify-center">
      <h1 className="text-center text-3xl font-extrabold leading-none tracking-tight text-gray-200">
        {children}
      </h1>
    </div>
  );
};

export default Title;
