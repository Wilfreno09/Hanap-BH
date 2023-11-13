export default function NearbyLoadingSkeleton() {
  return (
    <>
      <div className="flex space-x-5s">
        {Array.from({ length: 15 }).map((i, index) => (
          <li key={index} className="flex flex-col mx-3 space-y-3">
            <span className="aspect-square h-40 w-auto rounded-lg bg-gray-600 animate-pulse"></span>
            <span
              className="w-3/4 bg-gray-600 animate-pulse h-3 rounded-lg"
              style={{
                animationDelay: `${index * 0.5}s`,
                animationDuration: "1s",
              }}
            ></span>
            <span
              className="w-1/5 bg-gray-600 animate-pulse h-3 rounded-lg"
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
