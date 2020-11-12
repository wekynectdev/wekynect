import Link from 'next/link'
import Layout from '../../components/Layout'
import { getHomePageContent, getWhyPageContent } from '../api/contentManager';
import styles from './why.module.scss';

import { useEffect } from 'react';
import { createMarkup } from '../api/requestHelper';


const Why = ({ siteContent }) => {

    //  const [siteContent, setSiteContent] = React.useState<iGenericContent>();

    let URLParams: any;
    //  URLParams = useParams();
    useEffect(() => {



        //   getWhyContent(setSiteContent, URLParams.preview ? true : false);
    }, []);

    return (
        <Layout title="About | Next.js + TypeScript Example" metas={""} >

            <div className={styles.Why} data-testid="Why">

                {siteContent &&
                    <div>
                        <div className={styles['Why-img']}>
                            <div className={styles["why-top-img"]}>
                                <span className={styles["why-top-title"]} > {siteContent?.page_title}</span>

                            </div>
                            <div className={styles['hero-txt-container']}>
                                <br></br><br></br><br></br><br></br>
                                <div dangerouslySetInnerHTML={createMarkup(siteContent.page_content)}></div>
                            </div>
                            <div className={styles['why-bottom-img']}>
                                &nbsp;
              </div>
                        </div>
                    </div>
                }



            </div>
        </Layout>
    );
}



// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    //  const res = await fetch(`https://.../data`)
    const data = { one: "data one" }
    //  const data2 = getHomePageContent();
    // Pass data to the page via props

    //  console.log("here", data2);
    const siteContent = await getWhyPageContent(true, true);
    // console.log("data2 await", siteContent);
    //sessionStorage.setItem('homeContent', JSON.stringify(siteContent));
    return { props: { siteContent } }
}
export default Why

//export default Home
