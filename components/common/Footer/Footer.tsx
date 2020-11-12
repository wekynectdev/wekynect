import React, { useEffect } from "react";
import styles from "./Footer.module.scss";
import axios from "axios";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import { getFooterContent } from "./../../../pages/api/contentManager";
import { iFooterContent } from "../../../interfaces/index";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    MuiLink: {
      // Name of the rule
      root: {
        // Some CSS
        color: "#ff9900",
        fontSize: "16px",
        fontFamily: "Nunito Bold",
        fontWeight: "normal",
        letterSpacing: "0.5px",
        lineHeight: "24px",
        textTransform: "capitalize",
      },
      underlineHover: {
        // color: "red",
      },
    },
    item1to2: {
      order: 2,
      [theme.breakpoints.up("md")]: {
        order: 1,
      },
    },
    item2to1: {
      order: 1,
      [theme.breakpoints.up("md")]: {
        order: 2,
      },
    },
    item2to3: {
      order: 3,
      backgroundColor: 'white',
      [theme.breakpoints.up("md")]: {
        order: 2,
        backgroundColor: '#f7f9fa'
      },
    },
    item3to2: {
      order: 2,
      [theme.breakpoints.up("md")]: {
        order: 3,

      },
    },
    hideOnSm: {
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      },
    },
  })
);

const Footer: React.FC<any> = (props) => {
  const classes = useStyles();
  const [siteContent, setSiteContent] = React.useState<iFooterContent>();

  useEffect(() => {
    getFooterContent(setSiteContent, false);

  }, []);
  const sponsorInfo = {
    webAlias: "",
  }
  const createMarkup = () => {
    return (
      siteContent && {
        __html: siteContent.footer_copyright
          .replace("<p>", "")
          .replace("</p>", ""),
      }
    );
  };

  const createMarkupLinks = (content: string) => {

    if (siteContent) {
      if (sponsorInfo.webAlias != "" && sponsorInfo.webAlias != process.env.NEXT_PUBLIC_CNAME) {

        return {
          __html: content
            .replace(/<p>/g, "")
            .replace(/<\/p>/g, "<br/>")
            .replace(/siteURL/g, sponsorInfo.webAlias + "." + process.env.NEXT_PUBLIC_CNAME),
        };
      } else {

        return {
          __html: content
            .replace(/<p>/g, "")
            .replace(/<\/p>/g, "<br/>")
            .replace(/siteURL/g, "" + process.env.NEXT_PUBLIC_CNAME),
        };
      }
    }
  };
  return (
    <React.Fragment>
      <div className={styles["Footer"]}>

        {siteContent && (
          <div className={styles["section-footer"]}>
            <div className={styles["links-section"]}>
              <Grid container spacing={0}>
                <Grid item xs={12} md={3} lg={3}>
                  <div className={styles["section-footer-links"]}>
                    <span className={styles["footer-title"]}>
                      {siteContent.footer_about_title}
                    </span>
                    <br></br> <br></br>
                    <span
                      className={styles["footer-link"]}
                      dangerouslySetInnerHTML={createMarkupLinks(
                        siteContent.footer_col_about_us
                      )}
                    ></span>
                  </div>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <div className={styles["section-footer-links"]}>
                    <span className={styles["footer-title"]}>
                      {siteContent.footer_oportunity_title}
                    </span>
                    <br></br> <br></br>
                    <span
                      className={styles["footer-link"]}
                      dangerouslySetInnerHTML={createMarkupLinks(
                        siteContent.footer_col_oportunity
                      )}
                    ></span>
                    <br></br>
                  </div>

                  {/*
                    
                  
https://noreensavage.wekynect.com/services/wireless
https://noreensavage.wekynect.com/services/protective

https://noreensavage.wekynect.com/contact
https://noreensavage.wekynect.com/support

*/}
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <div className={styles["section-footer-links"]}>
                    <span className={styles["footer-title"]}>
                      {" "}
                      {siteContent.footer_services_title}
                    </span>
                    <br></br> <br></br>
                    <span
                      className={styles["footer-link"]}
                      dangerouslySetInnerHTML={createMarkupLinks(
                        siteContent.footer_col_services
                      )}
                    ></span>
                  </div>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <div className={styles["section-footer-links"]}>
                    <span className={styles["footer-title"]}>
                      {" "}
                      {siteContent.footer_faq_title}
                    </span>
                    <br></br> <br></br>
                    <span
                      className={styles["footer-link"]}
                      dangerouslySetInnerHTML={createMarkupLinks(
                        siteContent.footer_col_support
                      )}
                    ></span>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  style={{ minHeight: 30 }}
                  className={classes.item2to3}
                >
                  <span
                    className={styles["footer-copyright"]}
                    dangerouslySetInnerHTML={createMarkupLinks(
                      siteContent.footer_copyright
                    )}
                  ></span>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  style={{ minHeight: 30, }}
                  className={classes.item3to2}
                >
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={3} lg={3} className={classes.hideOnSm}>
                      <div className={styles["footer-bottom"]} id="footer-bottom">
                        <div className={styles[""]}>
                          <a
                            className={styles["footer-link-img"]}
                            href={
                              sponsorInfo.webAlias != ""
                                ? "https://" + sponsorInfo.webAlias + ".wekynect.com/"
                                : " https://www.wekynect.com/"
                            }
                          >
                            <img src={siteContent.footer_img_logo} />
                          </a>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} className={classes.item2to3}>
                      <div className={styles["footer-bottom"]} id="footer-bottom">
                        <a
                          target="_blank"
                          href="https://www.bbb.org/us/tx/dallas/profile/energy/kynect-ltd-0875-91036854">
                          {" "}
                          <img
                            className={styles["bbb-badge"]}
                            src={siteContent.footer_img_bbb_badge}
                          />
                        </a>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} className={classes.item3to2} >
                      <div className={styles["footer-bottom"]} id="footer-bottom">
                        <div className={styles["social-media-area"]}>
                          <a href="https://www.facebook.com/lifekynected">
                            {" "}
                            <img
                              className={styles["social-media-links"]}
                              src={siteContent.footer_img_facebook}
                            />
                          </a>
                          <a href="https://www.instagram.com/lifekynected">
                            {" "}
                            <img
                              className={styles["social-media-links"]}
                              src={siteContent.footer_img_instagram}
                            />
                          </a>
                          <a href="https://twitter.com/lifekynected">
                            {" "}
                            <img
                              className={styles["social-media-links"]}
                              src={siteContent.footer_img_twitter}
                            />
                          </a>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>

          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Footer;
