// components/StorageHeader.js
export default function StorageHeader() {
  const folders = [
    { name: "Strategy", files: 20, size: "654.8 mb" },
    { name: "Transactions", files: 37, size: "2.78 gb" },
    { name: "Design", files: 56, size: "8.92 gb" },
    { name: "Sprints", files: 91, size: "784.7 mb" },
  ];

  return (
    <div className="flex justify-between mb-8">
      {folders.map((folder) => (
        <div
          key={folder.name}
          className="bg-green-100 p-4 rounded-lg w-48 text-center"
        >
          <h3 className="text-lg font-semibold">{folder.name}</h3>
          <p className="text-gray-500 text-sm">{folder.files} files</p>
          <p className="text-gray-500 text-sm">{folder.size}</p>
        </div>
      ))}
    </div>
  );
}
