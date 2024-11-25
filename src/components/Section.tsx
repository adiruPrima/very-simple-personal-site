type Props = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
