import { useContext } from 'react';
import ModelContext from '../context/ModelContext';
import Loader1 from './Shared/Loader1';
import '../App.css';
import Info from './Info';
function Result() {
  const { output, isLoading, isAudioFill, showResult } =
    useContext(ModelContext);

  const printResult = () => {
    if (output.status < 0) {
      return (
        <div className="font-primary text-center text-4xl text-[#FFC436]  md:text-2xl">
          Audio Invalid...
        </div>
      );
    } else {
      if (output.out === 0) {
        return (
          <div className="font-primary text-center text-4xl text-[#29ADB2] md:text-2xl ">
            Real Audio
          </div>
        );
      } else {
        return (
          <div className="font-primary text-center text-4xl text-[#D80032] md:text-2xl  ">
            DeepFaked Audio
          </div>
        );
      }
    }
  };
  const result1 = Object.keys(output).length !== 0 && printResult();

  if (!showResult) {
    return (
      <>
        <Info />
      </>
    );
  } else {
    if (isLoading || isAudioFill)
      return (
        <div className="text-center my-12 h-[200px]">
          <h1 className="text-4xl font-primary pb-8">RESULT</h1>
          <Loader1 />
        </div>
      );
    else
      return (
        <div className="flex bg-[#fafafa] flex-col items-center  h-auto">
          <h1 className="text-5xl font-primary mt-12 pb-7">RESULT</h1>
          {/* <div className="font-secondary glass bg-gradient-to-r from-indigo-600 to-pink-500 text-white opacity-70 p-4">
           */}
           <div className="font-secondary glass bg-[#ffffff] shadow-2xl border-solid border-2  border-white rounded-[24px] opacity-70 flex text-black p-6">
            {result1}
          </div>
        </div>
      );
  }
}

export default Result;
