//import { useEditor, EditorContent, EditorContext } from '@tiptap/react'
import { useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Pages } from '@tiptap-pro/extension-pages'

//import { useMemo } from 'react'



export function InsideDocx() {

   const pages_setup =  Pages.configure({
    pageFormat: 'A4',
  });  

  const extensions = [
    StarterKit,
    pages_setup,
  ];
  

   

  const editor = useEditor(
    {
      //content: sync.initialContent,
      extensions: extensions as any,

      immediatelyRender: false,
      shouldRerenderOnTransaction: false,
      injectCSS: true,


    }
  ) 

 /*  if (!editor) {
    return null // Prevent rendering until the editor is initialized
  } */

  //const providerValue = useMemo(() => ({ editor }), [editor])


  return (
   /*        <EditorContext.Provider value={{ editor }}> */
    //<div className="w-full h-full flex flex-col rounded-b-2xl overflow-hidden">
    <EditorContent editor={editor} />
    //</div>
 /*    </EditorContext.Provider> */

  );
}
