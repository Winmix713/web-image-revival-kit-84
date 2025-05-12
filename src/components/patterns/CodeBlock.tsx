
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const CodeBlock = ({ 
  code, 
  language = 'tsx', 
  title, 
  showLineNumbers = true,
  className 
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCode = (code: string) => {
    // Simple code formatting with line numbers
    return code.split('\n').map((line, i) => (
      <div key={i} className="code-line group">
        {showLineNumbers && (
          <span className="line-number select-none text-xs opacity-40 w-8 inline-block text-right pr-2">
            {i + 1}
          </span>
        )}
        <span className="line-content whitespace-pre">
          {line || ' '}
        </span>
      </div>
    ));
  };

  return (
    <div className={cn(
      "relative rounded-lg overflow-hidden my-4 border border-[#3a36e0]/20",
      "bg-[#0F1122]/80 backdrop-blur-sm text-sm",
      className
    )}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#3a36e0]/20">
          <div className="text-sm font-medium text-[#9b87f5]">{title}</div>
          <div className="flex items-center">
            <div className="text-xs font-mono rounded-md px-2 py-0.5 bg-[#00F5FF]/10 text-[#00F5FF]">
              {language}
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <pre className="p-4 overflow-x-auto text-white/90 font-mono text-sm leading-relaxed">
          {formatCode(code)}
        </pre>

        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-white/70" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
