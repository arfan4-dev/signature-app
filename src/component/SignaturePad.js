import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

function SignaturePad({ onSign }) {
  const sigCanvas = useRef();

  const handleClear = () => {
    sigCanvas.current.clear();
  };

  const handleSave = () => {
    const signatureData = sigCanvas.current.toDataURL();
    onSign(signatureData);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <SignatureCanvas ref={sigCanvas} canvasProps={{ width: 300, height: 150 }} className="border border-gray-300" />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleClear}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-red-200"
        >
          Clear
        </button>
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
        >
          Save Signature
        </button>
      </div>
    </div>
  );
}

export default SignaturePad;
