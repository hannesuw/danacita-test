// Animation
import Lottie from "react-lottie-player";
import lottieJson from "../animation/loading.json";

const Loading = () => {
  return <Lottie loop animationData={lottieJson} play className="h-20" />;
};

export default Loading;
