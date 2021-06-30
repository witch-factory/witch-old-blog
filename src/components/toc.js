import * as React from "react"
import './toc.css'

const TableOfContents=({data})=>{
  return(
    <div className="toc-container">
      <h3>Contents</h3>
      <div className="toc-contents" dangerouslySetInnerHTML={{__html:data}} />

    </div>
  )

}

export default TableOfContents
