const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md mx-auto bg-gray-900 overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0 flex flex-col items-center">
            <img
              className="h-60 w-full object-cover"
              src="/images/image.jpg"
              alt="Ayub Sufian"
            />
            <h1 className="block mt-2 text-2xl leading-tight font-medium text-white">
              Ayub Sufian
            </h1>
            <h2 className="block text-xs text-green-600 mt-1">
              Software Engineer
            </h2>
          </div>
          <div className="p-6">
            <div className="tracking-wide text-2xl text-white font-bold">
              About Me
            </div>
            <div className="flex mt-2">
              <span className="text-green-600 text-xs mr-1">21 years</span>
              <span className="text-gray-200 text-xs mr-1">/</span>
              <span className="text-green-600 text-xs mr-1">Addis Ababa</span>
            </div>
            <p className="mt-4 text-xs text-gray-300">
              Aspiring front-end developer passionate about creating responsive
              and intuitive user interfaces using React.js. Currently honing my
              skills in front-end technologies while eager to delve into
              back-end development to become a well-rounded full-stack
              developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
