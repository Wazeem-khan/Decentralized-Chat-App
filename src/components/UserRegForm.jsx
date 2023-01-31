import { useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Link } from "react-router-dom";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const UserRegForm = () => {
  const [files, setFiles] = useState([]);
  return (
    <>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 tracking-wide">
          Username
        </label>
        <input
          className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
          type=""
          placeholder="e.g. John02"
        />
      </div>
      <div className="space-y-2">
        <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
          Avatar
        </label>
        <FilePond
          files={files}
          credits={false}
          allowMultiple={false}
          onupdatefiles={setFiles}
          labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
        />
      </div>
      <div className="pt-2">
        <Link
          to="/app"
          className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
        >
          Start Now 🚀
        </Link>
      </div>
    </>
  );
};

export default UserRegForm;
