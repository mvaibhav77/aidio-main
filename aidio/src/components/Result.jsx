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
        <div className="font-primary text-center text-5xl  md:text-2xl">
          Audio Invalid...
        </div>
      );
    } else {
      if (output.out === 0) {
        return (
          <div className="font-primary text-center text-5xl md:text-2xl ">
            Real Audio
          </div>
        );
      } else {
        return (
          <div className="font-primary text-center text-5xl md:text-2xl  ">
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
        <div className="flex flex-col items-center my-12 h-[200px]">
          <h1 className="text-4xl font-primary pb-8">RESULT</h1>
          <div className="font-secondary glass bg-gradient-to-r from-indigo-600 to-pink-500 text-white opacity-70 p-4">
            {result1}
          </div>
        </div>
      );
  }
}

export default Result;
