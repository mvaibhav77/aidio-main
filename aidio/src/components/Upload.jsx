import { useContext } from 'react';
import { toast } from 'react-toastify';
import ModelContext from '../context/ModelContext';
import Loader from '../components/Shared/Loader';
import { FaCheck } from 'react-icons/fa6';
import { MdOutlineCloudUpload } from 'react-icons/md';
function UploadAudio() {
  return (
    <div className="flex">
      <MdOutlineCloudUpload className="mr-3 my-1 " /> Upload Audio
    </div>
  );
}
function Upload() {
  const { isLoading, isAudioFill, uploadAudio, validateAudio } =
    useContext(ModelContext);

  // Handle Change Function
  const handleChange = (e) => {
    uploadAudio(e.target.files[0]);
  };

  // Handle Validate Function
  const handleValidate = (e) => {
    e.preventDefault();
    if (isAudioFill) {
      validateAudio();
    } else {
      toast.error('No Audio Uploaded');
    }
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 px-16 md:px-8 my-28 gap-8 items-center md:h-full ">
      <div className="text-white">
        <h1 className="font-primary text-4xl md:text-center">
          DEEPFAKE DETECTION
        </h1>
        <p className="mt-4 w-4/5 md:mt-6 md:w-full md:text-center">
          Introducing our cutting-edge Deepfake Detection App! Unmask deepfakes
          with ease by simply uploading an audio file. Using advanced
          spectrograph analysis, we accurately determine whether the audio is
          genuine or digitally altered. Protect your trust and authenticity with
          our reliable deepfake detection solution.
        </p>
      </div>
      <form className="text-black grid grid-rows-2 gap-6 justify-self-end md:justify-self-center md:p-4">
        <label className=" p-4 text-white bg-dark flex flex-row border-2 group justify-center hover:bg-gray-400 hover:shadow-lg hover:border-transparent hover:text-black rounded-xl h-fit w-72 md:w-100">
          <input type="file" className="hidden" onChange={handleChange} />
          {isLoading ? <Loader /> : <UploadAudio />}
          {isAudioFill ? <FaCheck className="mx-4" /> : ''}
        </label>
        <button
          className="p-4 bg-white h-fit group hover:bg-gray-400 hover:shadow-lg hover:border-2 hover:text-white rounded-xl w-72 md:w-100"
          onClick={handleValidate}
        >
          Detect
        </button>
      </form>
    </div>
  );
}

export default Upload;
{
  /* <MdOutlineCloudUpload className='mr-3 my-1 ' /> */
}
