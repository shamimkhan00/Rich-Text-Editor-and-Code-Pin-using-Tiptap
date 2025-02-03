import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight, all } from "lowlight";

const lowlight = createLowlight(all);

const Codelines = CodeBlockLowlight.extend({
  addNodeView() {
    return ({ node }) => {
      const language = node.attrs.language || "javascript";
      const codeContent = node.textContent || "";

      return (
        <NodeViewWrapper as="div" style={{ position: "relative", background: "#f5f5f5", padding: "10px" }}>
          {/* ✅ Code Block with Syntax Highlighting */}
          <pre>
            <code className={`language-${language}`}>
              {codeContent.split("\n").map((line, index) => (
                <span key={index} style={{ display: "block" }}>
                  {index + 1}. {line}
                </span>
              ))}
            </code>
          </pre>

          {/* ✅ Editable Content */}
          <NodeViewContent as="code" />
        </NodeViewWrapper>
      );
    };
  },
}).configure({ lowlight });



export default Codelines;
