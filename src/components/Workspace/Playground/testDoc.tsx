// DocumentViewer.tsx
import React from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';

interface DocumentViewerProps {
  documentUrl: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ documentUrl }) => {
  const openInNewTab = () => {
    window.open(documentUrl, '_blank');
  };

  return (
    <div className="flex flex-row items-center h-screen mt-12 ml-8 relative">
      <div className="w-full">

        <div>
        <button
          className="absolute top-4 right-0 bg-blue-100 hover:bg-blue-700 text-slate-400 font-bold py-2 px-4 rounded "
          onClick={openInNewTab}
        >
          <AiOutlineFullscreen />
        </button>
        </div>
        <div>
        <iframe
          src={documentUrl}
          className="w-full"
          style={{ height: 'calc(100vh - 7rem)' }}
          title="Document Viewer"
          frameBorder="0"
        /></div>
      </div>
    </div>
  );
};

export default DocumentViewer;
