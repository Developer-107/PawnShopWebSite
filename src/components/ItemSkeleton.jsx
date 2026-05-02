export default function ItemSkeleton() {
  return (
    <div className="flex justify-center animate-pulse">
      <div className="flex flex-col mt-[5rem] gap-10 contentContainer rounded-xl border border-[#ebebeb] items-center bg-white px-40 p-10 py-20 w-full">

        {/* IMAGE GRID SKELETON */}
        <div className="grid grid-cols-3 gap-2 w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-40 w-full bg-gray-200 rounded"
            />
          ))}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col w-full gap-4 border border-gray-100 p-10 rounded-xl">

          {/* TITLE */}
          <div className="h-6 w-1/3 bg-gray-200 rounded" />

          {/* LIST */}
          <div className="flex flex-col gap-3 mt-5">

            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between">
                <div className="h-4 w-1/3 bg-gray-200 rounded" />
                <div className="h-4 w-1/4 bg-gray-200 rounded" />
              </div>
            ))}

          </div>

          {/* PRICE + BUTTON */}
          <div className="flex sm:flex-row flex-col items-center justify-between mt-6 gap-4">

            <div className="h-8 w-40 bg-gray-200 rounded" />

            <div className="h-12 w-40 bg-gray-200 rounded" />

          </div>

        </div>
      </div>
    </div>
  )
}