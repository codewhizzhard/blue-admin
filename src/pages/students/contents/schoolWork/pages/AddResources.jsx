import React, { useState } from "react";

const ResourceManager = ({ isOpen, onClose, onSubmit }) => {
  const [resourceUrl, setResourceUrl] = useState("");
  const [file, setFile] = useState(null);
  const [materialTitle, setMaterialTitle] = useState("Physics 101");
  const [additionalNote, setAdditionalNote] = useState(
    "Introduction to physics"
  );

  if (!isOpen) return null;

  const handleImportSubmit = (e) => {
    e.preventDefault();
    onSubmit({ resourceUrl, file });
    setResourceUrl("");
    setFile(null);
    onClose();
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onSubmit({ materialTitle, additionalNote });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-6 space-y-12 max-h-[90vh] overflow-y-auto">
        {/* Import New Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Import New Resources</h2>
          <p className="mb-6 text-gray-600">
            Add new educational materials to your library.
          </p>
          <form onSubmit={handleImportSubmit}>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Resource URL</label>
              <input
                type="text"
                value={resourceUrl}
                onChange={(e) => setResourceUrl(e.target.value)}
                placeholder="Enter resource URL or upload file"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="text-center border-2 border-dashed border-gray-300 p-8 rounded-lg">
                <p className="mb-4 text-gray-600">
                  Browse and choose the files you want to upload from your
                  computer
                </p>
                <label
                  htmlFor="file-upload"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center space-x-2"
                >
                  <span>+</span>
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Import
              </button>
            </div>
          </form>
        </div>

        {/* Edit Material */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Edit Material</h2>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Material Title</label>
              <input
                type="text"
                value={materialTitle}
                onChange={(e) => setMaterialTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Additional Note</label>
              <input
                type="text"
                value={additionalNote}
                onChange={(e) => setAdditionalNote(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResourceManager;
