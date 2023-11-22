import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

const ModelContext = createContext();

const url = 'http://127.0.0.1:8080';

export const ModelProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [audioID, setAudioID] = useState(null);
  const [output, setOutput] = useState({});
  const [isAudioFill, setIsAudioFill] = useState(false);
  const [showResult, setShowResult] = useState(false);

  //  Upload audio file
  const uploadAudio = async (audio) => {
    console.log('Uploading audio....');
    setAudioID(audio);
    setIsAudioFill(false);
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', audio);

    fetch(`${url}/uploadfile`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data' is automatically set when using FormData
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        setAudioID(data.id);
        setIsLoading(false);
        setIsAudioFill(true);
      })
      .catch((error) => {
        // Handle errors
        setIsLoading(false);
        toast.error('Something went wrong!!!');
        console.error('Error:', error);
      });
  };

  //   Validate audio file
  const validateAudio = async () => {
    console.log('Validating audio....');
    setIsLoading(true);
    fetch(`${url}/status/?id=${audioID}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        if (data.status === 5 || data.status < 0) {
          setIsLoading(false);
          setIsAudioFill(false);
          console.log(data);
          setOutput(data);
          setShowResult(true);
        } else {
          validateAudio();
        }
      })
      .catch((error) => {
        // Handle errors
        setIsLoading(false);
        toast.error('Something went wrong!!!');
        console.error('Error:', error);
      });
  };

  return (
    <ModelContext.Provider
      value={{
        isLoading,
        showResult,
        audioID,
        output,
        isAudioFill,
        uploadAudio,
        validateAudio,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};

export default ModelContext;
