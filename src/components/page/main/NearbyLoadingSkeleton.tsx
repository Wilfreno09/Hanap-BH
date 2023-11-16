export default function NearbyLoadingSkeleton() {
  return (
    <>
      <div className="flex overflow-x-auto scrollbar-hide">
        {Array.from({ length: 5 }).map((i, index) => (
          <li
            key={index}
            className="flex flex-col mx-3 space-y-3 justify-between"
          >
            <span className="aspect-video h-40 w-auto rounded-lg bg-gray-600 animate-pulse"></span>
            <span
              className="w-3/4 bg-gray-500 animate-pulse h-3 rounded-lg"
              style={{
                animationDelay: `${index * 0.5}s`,
                animationDuration: "1s",
              }}
            ></span>
            <span
              className="w-1/5 bg-gray-500 animate-pulse h-3 rounded-lg"
              style={{
                animationDelay: `${index * 0.5}s`,
                animationDuration: "1s",
              }}
            ></span>
          </li>
        ))}
      </div>
    </>
  );
}
