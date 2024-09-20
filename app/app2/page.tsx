import FileList from "../components/fileList";
import Sidebar from "../components/side";
import StorageHeader from "../components/storageHeader";
import StorageUsage from "../components/storageUsage";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between">
          <StorageHeader />
          <StorageUsage />
        </div>
        <FileList />
      </main>
    </div>
  );
}
