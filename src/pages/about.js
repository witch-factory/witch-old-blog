import * as React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage=({data, location})=>{
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout title={siteTitle} location={location}>
      <Seo
        title="about me"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div>
        <h1>About Me</h1>
        <div>
          <strong>김성현</strong>입니다. 서강대학교에서 기계공학/컴퓨터공학 복수전공을 하고 있습니다.
          연구실에서 학부생 인턴을 하고 있으며 프로그래밍 동아리에 소속되어 있습니다.
          그 외에도 파이썬 스터디, 웹 스터디, 알고리즘 스터디 등 여러가지 스터디를 했거나 하고 있습니다.
        </div>
        <p></p>
        <p>소속 :</p>
        <p><a href="https://rim.sogang.ac.kr/home">서강대학교 로봇공학 및 지능형 메커니즘 연구실</a></p>
        <p><a href="https://acm.sogang.ac.kr/">Sogang ICPC Team</a></p>
        <p><a href="http://sgcc.me/">서강대학교 컴퓨터 동아리 SGCC</a></p>

        <p><a href="https://www.acmicpc.net/user/dart">BOJ : dart</a></p>
        <p><a href="https://github.com/witch-factory">github : witch-factory</a></p>
        <p></p>
        contact : soakdma37@gmail.com

      </div>


    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`