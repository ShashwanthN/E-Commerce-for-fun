import defaultImg from "../assets/default.png";
import  {Voting}  from "../components/Voting";
import Sort from "../components/sort";
import Footer from "../components/Footer";
import listItems from "../components/brand";
import Sidebar from "../components/sidebar";


const ProductSearchListing = () => {
  const render = listItems.map(
    ({ brandname, model, specs, img, Price }, index) => (
      <Voting
        key={index}
        brandname={brandname}
        model={model}
        specs={specs ? specs.pr : "N/A"}
        battery={specs ? specs.battery : "N/A"}
        ram={specs ? specs.ram : "N/A"}
        image={img ? img : defaultImg}
        PriceOffer={Price ? Price.Offer : "--,---"}
        PriceOriginal={Price ? Price.Original : "--,---"}
      />
    )
  );
  return (
    <div className="text-textPrimary overflow-x-hidden bg-bgPrimary">
      <div className="">
        <Sort />
      </div>
      <div className="p-3">
        <div className="text-4xl pb-4 w-2/6">
          <span className="font-medium">Find new</span>{" "}
          <span className="text-textSecondary  italic">"smartphones"</span>....
          <h6 className="italic text-textPrimary text-lg pb-2">
            4,006 results found
          </h6>
        </div>
        <div className="flex-row flex">
          <Sidebar />
          <div className=" w-5/6 divide-divider pl-2 md:w-full text-textPrimary ">
            {render}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductSearchListing;
