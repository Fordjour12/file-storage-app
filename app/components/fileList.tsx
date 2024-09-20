// components/FileList.js
export default function FileList() {
  const files = [
    {
      name: "Logo Presentation.png",
      tag: "UI Kits",
      size: "1.23 mb",
      date: "24.02.2022",
    },
    {
      name: "Company Kit.fig",
      tag: "UI Kits",
      size: "39.18 mb",
      date: "23.02.2022",
    },
    {
      name: "Redesign Process.mp4",
      tag: "Design Guides",
      size: "2.77 gb",
      date: "23.02.2022",
    },
    { name: "Avatar.jpg", tag: "no tag", size: "0.87 mb", date: "23.02.2022" },
    // Add more files as needed
  ];

  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-100 text-gray-600 text-sm">
        <tr>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Tag</th>
          <th className="py-2 px-4">Size</th>
          <th className="py-2 px-4">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, index) => (
          <tr key={index} className="border-t">
            <td className="py-2 px-4">{file.name}</td>
            <td className="py-2 px-4">{file.tag}</td>
            <td className="py-2 px-4">{file.size}</td>
            <td className="py-2 px-4">{file.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
