export default function Sidebar() {
  return (
    <div className="bg-white w-64 h-screen p-5 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Symmetric</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
              Cloud
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
              External
            </a>
          </li>
        </ul>
        <hr className="my-6" />
        <h3 className="text-gray-500 uppercase text-xs font-bold mb-3">
          Files
        </h3>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
              Storage
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
              Shared
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
              Recent
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
              Deleted
            </a>
          </li>
        </ul>
        <hr className="my-6" />
        <h3 className="text-gray-500 uppercase text-xs font-bold mb-3">Tags</h3>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
              Design Guides
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
              UI Kits
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
              University
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto pt-5">
        <div className="bg-gray-100 p-3 rounded-lg text-center">
          <p className="text-gray-500 text-sm">Need more space?</p>
          <button className="bg-black text-white w-full py-2 mt-2 rounded-lg">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
