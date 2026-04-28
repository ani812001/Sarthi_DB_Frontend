import { useState } from "react";
import { Upload, File, CheckCircle } from "lucide-react";

const files = [
  { name: "companies_mumbai.csv", size: "2.4 MB", records: 1250, status: "success" }
];

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fc] p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Data Upload</h1>
          <p className="text-gray-500 text-sm">
            Upload your company and institute data files
          </p>
        </div>

        {/* Upload Box */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
          }}
          className={`border-2 border-dashed rounded-xl p-12 text-center transition ${
            isDragging ? "border-violet-500 bg-violet-50" : "border-gray-200"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center">
              <Upload className="text-white w-6 h-6" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800">
            Drag & drop files here
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            or click to browse from your computer
          </p>

          <input type="file" className="hidden" id="fileInput" />
          <label
            htmlFor="fileInput"
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-500 text-white rounded-lg text-sm cursor-pointer"
          >
            Select Files
          </label>

          <p className="text-xs text-gray-400 mt-3">
            Supported formats: CSV, XLSX, JSON
          </p>
        </div>

        {/* Recent Uploads */}
        <div className="bg-white rounded-xl p-5 mt-6 shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Uploads
          </h2>

          {files.map((file, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 border rounded-lg mb-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                  <File className="w-5 h-5 text-violet-600" />
                </div>

                <div>
                  <p className="font-medium text-gray-800">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {file.size} • {file.records} records
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Success
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}