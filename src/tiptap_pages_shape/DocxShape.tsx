import { 
    HTMLContainer, 
    TLBaseShape, 
    TLResizeInfo, 
    resizeBox, 
    ShapeUtil,
    Geometry2d,
    Rectangle2d,
    clamp,
  } from 'tldraw'

import { InsideDocx } from './InsideDocx'


export type { DocxShape }



type DocxShape = TLBaseShape<
    'docxShape',
    {
        w: number
        h: number
    }
>
  
  export class DocxShapeUtil extends ShapeUtil<DocxShape> {
    static override type = 'docxShape' as const
   // static override props: RecordProps<DocxShape> = {}
      
  getDefaultProps(): DocxShape['props'] { 
    return { 
      w: 1000, 
      h: 1000, 
    } 
  }
  
    override canEdit() { return true }
    override canScroll() { return true }
    override canResize() { return true }
    override isAspectRatioLocked() { return false }
  
    getGeometry(shape: DocxShape): Geometry2d {
      return new Rectangle2d({
        width: shape.props.w,
        height: shape.props.h,
        isFilled: true,
      })
    }
  
    component(shape: DocxShape) {

      
      return (
          <>
           <HTMLContainer
            id={shape.id}
            style={{ 
              width: `${shape.props.w}px`, 
              height: `${shape.props.h}px`, 
              display: 'flex',
              alignItems: 'stretch',
              pointerEvents: 'all',
              justifyContent: 'stretch',
              overflow: 'visible',
              position: 'relative',

            }}
          >

                    <InsideDocx />
          </HTMLContainer>
          </>
            )
    }
  
    indicator(shape: DocxShape) { return <rect width={shape.props.w} height={shape.props.h} /> }
    
    override onResize(shape: DocxShape, info: TLResizeInfo<DocxShape>) {
      // Get the resized shape using the default resize behavior
      const resized = resizeBox(shape, info)
      
      // Define minimum and maximum size constraints
      const minWidth = 400
      const maxWidth = 2500
      const minHeight = 600
      const maxHeight = 3500
      
      // Apply size constraints using clamp
      const constrainedWidth = clamp(resized.props.w, minWidth, maxWidth)
      const constrainedHeight = clamp(resized.props.h, minHeight, maxHeight)
      
      // Return the shape with constrained dimensions
      return {
        ...resized,
        props: {
          ...resized.props,
          w: constrainedWidth,
          h: constrainedHeight
        }
      }
    }
  }
  

