import "./Loader.css";
import { ClipLoader, MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="spinner">
        <MoonLoader color="#ffffff" size={50} />
      </div>
    </div>
  );
};

export default Loader;
