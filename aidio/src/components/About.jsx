const posts = [
  {
    id: 1,
    title: 'Analyzing Spectrograph',
    description:
      'Our web app employs sophisticated spectrograph analysis to distinguish genuine audio from deepfakes, ensuring unparalleled accuracy in audio verification.',
  },

  {
    id: 2,
    title: 'Better Accuracy',
    description:
      'Benefit from the most precise deepfake identification, thanks to our cutting-edge technology, providing unparalleled results in audio analysis.',
  },
  {
    id: 3,
    title: 'User Friendly',
    description:
      'With a sleek and intuitive interface, our web app makes deepfake detection accessible to all users, regardless of their technical expertise.',
  },
  // {
  //   id: 4,
  //   title: 'Boost your conversion rate',
  //   description:
  //     'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  // },
  // More posts...
];

function About() {
  return (
    <div className="bg-black text-white py-24 sm:py-10 md:py-10">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="text-3xl font-primary tracking-tight sm:text-4xl"
            id="how"
          >
            HOW THIS WORKS
          </h2>
        </div>
        <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 border-t border-gray-200 pt-20 sm:mt-8  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="motion-safe:hover:scale-110 group hover:bg-white
               hover:shadow-lg ease-in duration-200 hover:border-transparent border-solid border-2 border-white rounded-md flex max-w-xl flex-col items-center justify-between min-h-[200px] md:min-h-0"
            >
              <div className="group relative">
                <h3 className="mt-6 font-reckoner text-center text-3xl leading-6 group-hover:text-black">
                  <a>
                    <span className="absolute inset-0 " />
                    {post.title}
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
  );
}
export default About;
