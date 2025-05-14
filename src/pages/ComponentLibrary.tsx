
import React from 'react';
import AppLayout from '@/components/common/AppLayout';
import { 
  ComponentDocumentation, 
  DesignTokens, 
  ComponentShowcase, 
  CssUtilities,
  InstallationGuide,
  PackageExport
} from '@/components/system/';

const ComponentLibrary = () => {
  return (
    <AppLayout backgroundVariant="subtle">
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-white">Component Library</h1>
        
        <div className="space-y-12">
          {/* Use proper component implementations without passing unrecognized props */}
          <InstallationGuide />
          <DesignTokens />
          <ComponentShowcase />
          <ComponentDocumentation />
          <CssUtilities />
          <PackageExport />
        </div>
      </div>
    </AppLayout>
  );
};

export default ComponentLibrary;
