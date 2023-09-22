import React, { useState } from 'react';
import PdfViewer from './PdfViewer';
import SignaturePad from './SignaturePad';
import UserForm from './UserForm';

function PdfSigningApp() {
  const [pdfUrl, setPdfUrl] = useState('');
  const [signature, setSignature] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  const handleSign = (signatureData) => {
    setSignature(signatureData);
  };

  const handleSubmit = (userData) => {
    setUserInfo(userData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold mb-4">PDF Signing Application</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <PdfViewer pdfUrl={pdfUrl} />

        <SignaturePad onSign={handleSign} />

        <UserForm onSubmit={handleSubmit} />

        {userInfo && (
          <div>
            <h2 className="text-lg font-semibold mt-4">User Information:</h2>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>

            <h2 className="text-lg font-semibold mt-4">Signed PDF:</h2>
            <img src={signature} alt="Signature" className="w-64 h-32 border border-gray-300 mt-2" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PdfSigningApp;
