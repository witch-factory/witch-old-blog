import * as React from "react"
import {graphql} from "gatsby";

const TableOfContents=({data})=>{
  return(
    <div className="toc-container">
      <h3>Contents</h3>
      <div className="toc" dangerouslySetInnerHTML={{__html:data.markdownRemark.tableOfContents}} />
    </div>
  )

}

export default TableOfContents
