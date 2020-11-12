import Link from 'next/link'
import { useEffect } from 'react';
import Layout from '../../components/Layout'
import { getHomePageContent } from '../api/contentManager';
import styles from './home.module.scss';

const Index = ({ siteContent }) => {

    return (
        <Layout title="About | Next.js + TypeScript Example" metas={siteContent.seo_data} >
            {siteContent ?

                <div className={styles['home-img']}>
                    <div className={styles['hero-txt-container']}>
                        <span className={styles['hero-txt']}>{siteContent.home_hero_text}</span>
                    </div>
                </div>

                : "loading"}
        </Layout>
    )
}


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    //  const res = await fetch(`https://.../data`)
    const data = { one: "data one" }
    //  const data2 = getHomePageContent();
    // Pass data to the page via props

    //  console.log("here", data2);
    const siteContent = await getHomePageContent(false);
    //  console.log("data2 await", siteContent);
    //sessionStorage.setItem('homeContent', JSON.stringify(siteContent));
    return { props: { siteContent } }
}
export default Index

//export default Home
