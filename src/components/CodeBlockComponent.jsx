import { CodeBlock, atomOneLight, atomOneDark } from "react-code-blocks";
import { theme } from '../stores/themeStore';

export const CodeBlockComponent = ({ code, language, showLineNumbers, startingLineNumber }) => {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={ theme == "light" ? atomOneLight : atomOneDark }
    />
  );
}
