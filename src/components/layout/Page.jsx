import Header from "components/common/Header";
import Footer from "components/common/Footer";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-[#b2b2b2] p-11">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Page;