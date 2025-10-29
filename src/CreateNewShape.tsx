import { useEditor } from 'tldraw'

export function CreateNewShape() {
  const editor = useEditor()

  const handleClick = async () => {
    //await createConversation()
    editor.createShapes([{
		type: 'docxShape',
		x: 0,
		y: 0,
		props: {
			w: 1000,
			h: 1000,
		},
	}])
  }

  return (
    <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', zIndex: 50 }}>
      <button 
        onClick={handleClick}
        style={{ 
          borderRadius: '12px', 
          padding: '8px 12px', 
          width: '200px', 
          cursor: 'pointer',
          border: 'none',
          background: 'green',
          color: 'white',
          fontSize: '20px',
        }}
      >
        Create new "Tiptap Pages" Shape
        
      </button>
    </div>
  )
}


