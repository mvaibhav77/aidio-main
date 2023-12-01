const posts = [
  
  {
    id: 1,
    title: 'Methodlogy',
    subtitle:[''],
    description:[
      '1. Accept the audio file path as input.','2. Perform resampling of the audio to ensure a standardized sample rate.','3. Generate a spectrogram from the resampled audio data.','4. Preprocess the spectrogram image by resizing it to a consistent dimension (e.g., 256x256 pixels).','5. Normalize the pixel values of the spectrogram image to the range [0, 1]','6. Feed the preprocessed spectrogram image into the trained Convolutional Neural Network (CNN) model','7. Execute the CNN model to obtain the authentication prediction.','8. If the prediction score is above a predefined threshold, classify the audio as genuine; otherwise, classify it as manipulated.','9. Output the authentication result.']
  },
];

function About() {
  return (
    <div className="bg-[#fafafa]  text-black py-24 sm:py-10 md:py-10">
      <hr className="w-96 md:w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="mx-auto max-w-7xl pt-8 lg:mx-0">
          <h2
            className="text-3xl text-center font-primary tracking-tight sm:text-4xl"
            id="how"
          >
            HOW THIS WORKS
          </h2>
        </div>
        {/* <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 border-t border-gray-200 pt-20 sm:mt-8  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="motion-safe:hover:scale-110 group bg-[#121212] shadow-lg	 shadow-[#2b2b2b]	 hover:bg-[#121212]
              hover:shadow-lg hover:shadow-[#2b2b2b] ease-in duration-200 hover:border-transparent border-solid border-2 border-black rounded-[24px] flex max-w-xl flex-col items-center justify-between min-h-[200px] md:min-h-0 p-6"
            >
              <div className="group relative">
                <h3 className="mt-6 font-reckoner text-center text-3xl leading-6 ">
                  <a>
                    <span className="absolute inset-0 " />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 px-8 font-secondary ease-in duration-200 text-md leading-6  pb-4">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div> */}
        <div className=" mx-auto mt-10 flex justify-center max-w-2xl gap-x-20 gap-y-16 pt-8 sm:mt-8  lg:mx-0 lg:max-w-none lg:grid-cols-1">
          {posts.map((post) => (
            <article
              key={post.id}
              className="motion-safe:hover:scale-110 group bg-[#ffffff] shadow-xl hover:bg-[#ffffff]
               hover:shadow-lg ease-in duration-200 hover:border-transparent border-solid border-2 border-white rounded-[24px] flex max-w-3xl flex-col items-center justify-between min-h-[200px] md:min-h-0 p-6"
            >
              <div className="group relative">
                <h3 className="mt-6 font-reckoner text-center text-4xl leading-6 group-hover:text-black">
                  <a>
                    <span className="absolute inset-0 " />
                    {post.title}
                  </a>
                </h3>
                <h3 className="mt-6 px-8 text-2xl font-primary ease-in duration-200 text-md leading-6 group-hover:text-black ">
                  <a>
                    <span className="absolute inset-0 " />
                    {post.subtitle}
                    {/* {post.subtitle.map((subtitles, index) => {
              return (
                <div key={index}>
                  <h2>{subtitles}</h2>
                </div>
              );
            })} */}
                  </a>
                </h3>
                <p className="mt-5 px-8 font-secondary ease-in duration-200 text-md leading-6 group-hover:text-black pb-4">
                {post.description.map((descriptions, index) => {
              return (
                <div key={index}>
                  <h2>{descriptions}</h2>
                </div>
              );
            })}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );

}
export default About;
