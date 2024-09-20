// components/StorageUsage.js
export default function StorageUsage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Storage Usage</h3>
      <div className="relative w-48 h-48 mx-auto">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              className="stroke-current text-green-500"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke-width="3.8"
              stroke-dasharray="70, 100"
            />
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">74.7 gb</span>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        <li>Images: 16.4 gb</li>
        <li>Videos: 71.6 gb</li>
        <li>Documents: 357.2 mb</li>
        <li>Other: 1.27 gb</li>
      </ul>
    </div>
  );
}
