"use client";
import { Search, Upload, MoreVertical, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export default function Component() {
  const [isArchiveView, setIsArchiveView] = useState(false);

  const folders = [
    { name: "Strategy", files: 28, size: "654.8 mb" },
    { name: "Transactions", files: 37, size: "2.75 gb" },
    { name: "Design", files: 86, size: "8.92 gb" },
    { name: "Sprints", files: 51, size: "784.7 mb" },
  ];

  const files = [
    {
      name: "Logo presentation.png",
      tags: ["PNG"],
      size: "14.3 mb",
      modified: "24.02.2022",
      isArchived: false,
    },
    {
      name: "Company kit.fig",
      tags: ["UI Kits"],
      size: "89.18 mb",
      modified: "23.02.2022",
      isArchived: false,
    },
    {
      name: "Redesign process.mp4",
      tags: ["Design Guides"],
      size: "2.72 gb",
      modified: "23.02.2022",
      isArchived: true,
    },
    {
      name: "Avatar.jpg",
      tags: ["PNG"],
      size: "0.87 mb",
      modified: "23.02.2022",
      isArchived: false,
    },
    {
      name: "Ongoing works.xls",
      tags: ["University"],
      size: "0.29 mb",
      modified: "19.02.2022",
      isArchived: false,
    },
    {
      name: "Presentation.pdf",
      tags: [],
      size: "56.27 mb",
      modified: "18.02.2022",
      isArchived: true,
    },
    {
      name: "Design workflow.doc",
      tags: ["Design Guides"],
      size: "1.85 mb",
      modified: "17.02.2022",
      isArchived: false,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Navigation Panel */}
      <div className="w-64 bg-white p-4 flex flex-col">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-blue-500 rounded-lg mr-2" />
          <span className="text-xl font-semibold">Symmetric</span>
        </div>
        <nav className="space-y-2 mb-8">
          <Button variant="ghost" className="w-full justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Cloud
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            External
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            Storage
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Shared
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Recent
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Deleted
          </Button>
        </nav>
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-2">Tags</h3>
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
            >
              Design Guides
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
            >
              UI Kits
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
            >
              University
            </Button>
          </div>
        </div>
        <div className="mt-auto bg-gray-100 p-4 rounded-lg">
          <h3 className="text-sm font-semibold mb-2">Need more space?</h3>
          <p className="text-xs text-gray-500 mb-2">
            Upgrade storage for 200 gb for $9.99/month.
          </p>
          <Button className="w-full">Upgrade</Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-8"
              placeholder="Search by folder or file name"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Upload className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@username" />
              <AvatarFallback>JW</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Storage</h2>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {folders.map((folder) => (
            <div key={folder.name} className="bg-green-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-500 rounded mr-2" />
                <span className="font-semibold">{folder.name}</span>
              </div>
              <p className="text-sm text-gray-600">
                {folder.files} files, {folder.size}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">All Files</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">1-20 February</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsArchiveView(!isArchiveView)}
            >
              {isArchiveView ? "View Regular" : "View Archive"}
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Tags</th>
                <th className="px-4 py-2 text-left">Size</th>
                <th className="px-4 py-2 text-left">Last modified</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {files
                .filter((file) => file.isArchived === isArchiveView)
                .map((file) => (
                  <tr key={file.name} className="border-t">
                    <td className="px-4 py-2 flex items-center">
                      {file.isArchived && (
                        <Lock className="h-4 w-4 mr-2 text-gray-400" />
                      )}
                      <span className={file.isArchived ? "text-gray-500" : ""}>
                        {file.name}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {file.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </td>
                    <td className="px-4 py-2 text-gray-500">{file.size}</td>
                    <td className="px-4 py-2 text-gray-500">{file.modified}</td>
                    <td className="px-4 py-2">
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Storage Usage Panel */}
      <div className="w-64 bg-white p-4">
        <h3 className="text-lg font-semibold mb-4">Space</h3>
        <div className="relative w-48 h-48 mx-auto mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="10"
              strokeDasharray="220"
              strokeDashoffset="50"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">74.7</span>
            <span className="text-gray-500">of 100 gb</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Images</span>
            <span className="text-sm text-gray-500">1.64 gb</span>
          </div>
          <Progress value={33} />
          <div className="flex justify-between items-center">
            <span className="text-sm">Videos</span>
            <span className="text-sm text-gray-500">31.5 gb</span>
          </div>
          <Progress value={66} />
          <div className="flex justify-between items-center">
            <span className="text-sm">Audio</span>
            <span className="text-sm text-gray-500">450.8 mb</span>
          </div>
          <Progress value={10} />
          <div className="flex justify-between items-center">
            <span className="text-sm">Documents</span>
            <span className="text-sm text-gray-500">357.2 mb</span>
          </div>
          <Progress value={5} />
          <div className="flex justify-between items-center">
            <span className="text-sm">Other</span>
            <span className="text-sm text-gray-500">1.37 gb</span>
          </div>
          <Progress value={20} />
        </div>
      </div>
    </div>
  );
}
