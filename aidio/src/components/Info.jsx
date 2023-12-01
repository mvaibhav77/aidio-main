const posts = [
  {
    id: 1,
    title: 'Problem',
    subtitle:'Deepfake Voice Cloning',
    description:
      'The surge in deepfake voice cloning presents a significant challenge, allowing the creation of highly realistic fake audio recordings. This technology raises concerns about deceptive impersonation, privacy breaches, and the potential spread of false narratives. Threats include identity theft, fraud, and a decline in public trust regarding audio authenticity.      ',
  },

  {
    id: 2,
    title: 'Solution',
    subtitle:'Mitigating Deepfake Voice Cloning',
    description:
      'Our project plays a pivotal role in addressing the challenges of deepfake voice cloning. Utilizing advanced authentication techniques and an AI-powered detection system, we bolster security. The system focuses on legal compliance, contributing to ethical AI practices, and raising public awareness. Through continuous monitoring and collaboration with the tech industry, our project actively counters evolving threats. By providing a multifaceted approach, we strive to mitigate the risks associated with deepfake voice cloning and ensure a more secure and reliable audio environment.',
  },
  // {
  //   id: 3,
  //   title: 'User Friendly',
  //   description:
  //     'With a sleek and intuitive interface, our web app makes deepfake detection accessible to all users, regardless of their technical expertise.',
  // },
  // {
  //   id: 4,
  //   title: 'Boost your conversion rate',
  //   description:
  //     'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  // },
  // More posts...
];

const Info = () => {
  // return (
    // <div className="mx-auto px-20 my-12 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 h-[200px] md:h-auto">
    //   {posts.map((post) => (
    //     <article
    //       key={post.id}
    //       className="motion-safe:hover:scale-110 group hover:bg-[#fffff] bg-[#ffffff]
    //            hover:shadow-lg ease-in duration-200 border-solid border-2 border-black rounded-[24px]	 flex max-w-xl flex-col items-center justify-between min-h-[200px] md:min-h-0 "
    //     >
    //       <div className="group relative">
    //         <h3 className="mt-6 font-reckoner text-center text-3xl leading-6 group-hover:text-black">
    //           <a>
    //             <span className="absolute inset-0 " />
    //             {post.title}
    //           </a>
    //         </h3>
    //         <p className="mt-5 px-8 font-secondary ease-in duration-200 text-md leading-6 group-hover:text-black pb-4">
    //           {post.description}
    //         </p>
    //       </div>
    //     </article>
    //   ))}
    // </div>
  // );
  // return (
    // <div className="bg-[#fafafa] text-black py-24 sm:py-10 md:py-10">
    //   <div className="mx-auto max-w-7xl px-6 ">
    //     {/* <div className="mx-auto max-w-2xl lg:mx-0">
    //       <h2
    //         className="text-3xl font-primary tracking-tight sm:text-4xl"
    //         id="how"
    //       >
    //         HOW THIS WORKS
    //       </h2>
    //     </div> */}
    //     <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 border-t border-gray-200 pt-20 sm:mt-8  lg:mx-0 lg:max-w-none lg:grid-cols-3">
    //       {posts.map((post) => (
    //         <article
    //           key={post.id}
    //           className="motion-safe:hover:scale-110 group hover:bg-[#ffffff]
    //            hover:shadow-lg ease-in duration-200 hover:border-transparent border-solid border-2 border-white rounded-[24px] flex max-w-xl flex-col items-center justify-between min-h-[200px] md:min-h-0 p-6"
    //         >
    //           <div className="group relative">
    //             <h3 className="mt-6 font-reckoner text-center text-3xl leading-6 group-hover:text-black">
    //               <a>
    //                 <span className="absolute inset-0 " />
    //                 {post.title}
    //               </a>
    //             </h3>
    //             <p className="mt-5 px-8 font-secondary ease-in duration-200 text-md leading-6 group-hover:text-black pb-4">
    //               {post.description}
    //             </p>
    //           </div>
    //         </article>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  // );
  return(
    <div className="bg-[#fafafa] text-black py-24 sm:py-10 md:py-10">
      <div className="mx-auto max-w-7xl px-6">
      <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16  pt-4 sm:mt-8  lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="motion-safe:hover:scale-110 group bg-[#ffffff] shadow-xl hover:bg-[#ffffff]
               hover:shadow-lg ease-in duration-200 hover:border-transparent border-solid border-2 border-white rounded-[24px] flex max-w-xl flex-col items-center justify-between min-h-[200px] md:min-h-0 p-6"
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
                  </a>
                </h3>
                <p className="mt-5 px-8 font-secondary ease-in duration-200 text-md leading-6 group-hover:text-black pb-4">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Info;
