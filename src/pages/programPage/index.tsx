import { Navigation } from "../../components";
import { motion } from "framer-motion";

const ProgramPage = () => {
  return (
    <motion.section
      initial={{ x: 2500 }}
      animate={{ x: 1 }}
      exit={{ x: 2500 }}
      transition={{ duration: 0.3 }}
    >
      <div className="sticky top-0 z-[100] bg-white/30 backdrop-blur-lg">
        <Navigation />
      </div>
      <section className="px-24 py-4 mlg:px-14 mxs:px-10">
        <div>
          <p className="text-center font-[600] text-[2rem]">Program Page</p>
        </div>
      </section>
    </motion.section>
  );
};

export { ProgramPage };
