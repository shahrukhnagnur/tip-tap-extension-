import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
    ],
    content: `
      <p>Select text and use the buttons below to apply formatting.</p>
      <p><b>Bold</b>, <i>Italic</i>, <u>Underline</u>, and <s>Strikethrough</s> are supported.</p>
    `,
  });

  if (!editor) {
    return null;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>TipTap Editor with Formatting Buttons</h1>

      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          style={buttonStyle}
        >
          Bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          style={buttonStyle}
        >
          Italic
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          style={buttonStyle}
        >
          Underline
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          style={buttonStyle}
        >
          Strikethrough
        </button>

        <button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          style={{ ...buttonStyle, backgroundColor: '#FF6347' }}
        >
          Clear Formatting
        </button>
      </div>

      <EditorContent editor={editor} style={editorStyle} />
    </div>
  );
};

const buttonStyle = {
  marginRight: '10px',
  padding: '5px 10px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const editorStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  minHeight: '200px',
};

export default TiptapEditor;
