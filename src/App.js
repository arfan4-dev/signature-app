import React from 'react';
import PdfSigningApp from './component/PdfSigningApp';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {/* <h1 className="text-3xl font-semibold mb-8">PDF Signing Application</h1> */}
      <PdfSigningApp />
    </div>
  );
}

export default App;
