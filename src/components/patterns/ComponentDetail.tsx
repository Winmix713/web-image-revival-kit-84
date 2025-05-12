
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TabsList, TabsTrigger, Tabs, TabsContent } from '@/components/ui/tabs';
import CodeBlock from './CodeBlock';

interface ComponentDetailProps {
  component: any;
  onClose: () => void;
}

const ComponentDetail = ({ component, onClose }: ComponentDetailProps) => {
  const [activeTab, setActiveTab] = useState('preview');

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.1,
        duration: 0.4
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}
      onClick={onClose}
    >
      <motion.div 
        className="w-full max-w-4xl max-h-[90vh] overflow-auto rounded-lg enhanced-glass"
        variants={contentVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-[#0F1122]/90 backdrop-blur-xl border-b border-[#00F5FF]/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">{component.title}</h2>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <p className="text-white/70 mt-1">{component.description}</p>
        </div>

        <div className="p-6">
          <Tabs 
            defaultValue="preview" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="relative overflow-hidden rounded-lg mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF]/20 via-[#B026FF]/15 to-[#FAFF00]/10 blur-lg opacity-30" />
              
              <TabsList className="bg-[#0F1122]/70 backdrop-blur-xl border border-[#00F5FF]/20 w-full flex justify-center relative z-10 p-1">
                <TabsTrigger 
                  value="preview"
                  className="relative px-6 py-2.5 data-[state=active]:bg-transparent data-[state=active]:text-[#00F5FF]"
                >
                  <span className="relative z-10">Preview</span>
                  {activeTab === "preview" && (
                    <motion.div 
                      layoutId="component-tab-highlight"
                      className="absolute inset-0 bg-[#00F5FF]/10 border border-[#00F5FF]/30 rounded-md shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </TabsTrigger>
                
                <TabsTrigger 
                  value="react"
                  className="relative px-6 py-2.5 data-[state=active]:bg-transparent data-[state=active]:text-[#00F5FF]"
                >
                  <span className="relative z-10">React</span>
                  {activeTab === "react" && (
                    <motion.div 
                      layoutId="component-tab-highlight"
                      className="absolute inset-0 bg-[#00F5FF]/10 border border-[#00F5FF]/30 rounded-md shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </TabsTrigger>
                
                <TabsTrigger 
                  value="css"
                  className="relative px-6 py-2.5 data-[state=active]:bg-transparent data-[state=active]:text-[#B026FF]"
                >
                  <span className="relative z-10">CSS</span>
                  {activeTab === "css" && (
                    <motion.div 
                      layoutId="component-tab-highlight"
                      className="absolute inset-0 bg-[#B026FF]/10 border border-[#B026FF]/30 rounded-md shadow-[0_0_10px_rgba(176,38,255,0.5)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="preview" className="rounded-lg border border-[#00F5FF]/20 p-6 bg-[#0F1122]/30">
              <div className="flex justify-center">
                {component.component}
              </div>
            </TabsContent>
            
            <TabsContent value="react">
              <CodeBlock 
                code={component.reactCode} 
                language="tsx" 
                title="React Component Code"
              />
            </TabsContent>
            
            <TabsContent value="css">
              <CodeBlock 
                code={component.cssCode} 
                language="css" 
                title="CSS Styling"
              />
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ComponentDetail;
