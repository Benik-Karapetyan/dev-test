import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center pt-10 pb-12">
      <div className="flex flex-col gap-y-12 w-[400px]">
        <div className="flex flex-col gap-y-6 text-center">
          <h1 className="text-blue-950 text-5xl font-bold">Not Found</h1>

          <div className="text-blue-700 font-semibold text-lg">
            Ooops. It looks like the page doesn’t exist
          </div>
        </div>

        <Link
          className="flex items-center justify-center bg-blue-950 text-white text-xl h-14 rounded-lg"
          to="/"
        >
          Get me out of here
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
