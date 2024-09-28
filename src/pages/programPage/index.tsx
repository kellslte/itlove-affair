import { Navigation } from "../../components";

const ProgramPage = () => {
  return (
    <section>
      <div className="sticky top-0 z-[100] bg-white/30 backdrop-blur-lg">
        <Navigation />
      </div>
      <section className="px-24 py-4 mlg:px-14 mxs:px-10">
        <div>
          <p className="text-center font-[600] text-[2rem]">Program Page</p>
        </div>
      </section>
    </section>
  );
};

export { ProgramPage };
