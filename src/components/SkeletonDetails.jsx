export const SkeletonDetails = () => {
  return (
    <div className="animate-pulse max-w-6xl mx-auto px-6 py-12">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Flag Skeleton */}
        <div className="h-80 bg-gray-800 rounded-2xl"></div>

        {/* Details Skeleton */}
        <div className="space-y-6">
          <div className="h-8 bg-gray-700 rounded w-2/3"></div>

          <div className="space-y-3">
            <div className="h-4 bg-gray-800 rounded w-full"></div>
            <div className="h-4 bg-gray-800 rounded w-5/6"></div>
            <div className="h-4 bg-gray-800 rounded w-4/6"></div>
            <div className="h-4 bg-gray-800 rounded w-3/6"></div>
          </div>

          <div className="flex gap-3 mt-6">
            <div className="h-8 w-20 bg-gray-700 rounded-full"></div>
            <div className="h-8 w-20 bg-gray-700 rounded-full"></div>
            <div className="h-8 w-20 bg-gray-700 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};