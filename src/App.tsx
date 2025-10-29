import { Tldraw } from 'tldraw'
import { DocxShapeUtil } from './tiptap_pages_shape/DocxShape'
import { CreateNewShape } from './CreateNewShape'

function App() {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw 
			shapeUtils={[DocxShapeUtil]}>
				<CreateNewShape />

				</Tldraw>
		</div>
	)
}

export default App
