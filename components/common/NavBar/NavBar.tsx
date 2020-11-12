import React, { useEffect } from "react";
import { createStyles, makeStyles, fade, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

import styles from "./NavBar.module.scss";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
//import Sponsor from "./Sponsor/Sponsor";
import { getNavBarContent } from './../../../pages/api/contentManager'
import { changeUserLanguage } from './../../../pages/api/requestHelper'
import { iNavBarContent, iSponsorData } from './../../../interfaces/index'

import { useSelector } from "react-redux";
import { KynectState } from "../../../reducers/kynectReducer";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { useRouter } from "next/router";

import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: fade(theme.palette.common.white, 0.25),
            flexGrow: 1,
            borderRadius: '0px',
            height: '80px',
            paddingTop: '10px',
            paddingLeft: '5px',
            zIndex: 1,
            position: 'fixed',
            display: 'block',
            justifyContent: 'center'

        },
        colorPrimary: {
            backgroundColor: theme.palette.common.white,
        },

        grow: {
            flexGrow: 1,
            backgroundColor: 'red'
        },
        menuButton: {
            marginRight: theme.spacing(2),

        },
        sectionLogo: {
            [theme.breakpoints.down('lg')]: {
                alignItems: 'center',
            },
        },
        title: {
            display: 'flex',
            '&:hover': {
                backgroundColor: 'none',

            },
            [theme.breakpoints.up('md')]: {
                // width: '60%',
                left: 0,
                margin: '0px 550px 0px 0px'
            },
            [theme.breakpoints.up('sm')]: {
                alignItems: 'center',
                justifyContent: 'center',
            },
            [theme.breakpoints.down('sm')]: {
                alignItems: 'center',
                //  margin: '0px auto 0px autopx',
                // width: '70%',
                justifyContent: 'center',
            },
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            width: '100%',
            [theme.breakpoints.up('md')]: {
                display: 'block',

            },
            [theme.breakpoints.down('lg')]: {
                width: '100%',
            },
        },
        sectionMobile: {
            display: 'block',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        menuLinks: {

            marginTop: theme.spacing(0),
            [theme.breakpoints.down('sm')]: {
                textAlign: "right",
                fontSize: 8,
            },
            [theme.breakpoints.down('md')]: {

                fontSize: 8,
            },
            [theme.breakpoints.up('md')]: {
                textAlign: "right",

            },
            [theme.breakpoints.up('lg')]: {
                textAlign: "right",
                paddingRight: 100,
            },

        },
    }),
);

const NavBar: React.FC<any> = (props) => {
    const [siteContent, setSiteContent] = React.useState<iNavBarContent>();
    const [isSponsored, setIsSponsored] = React.useState(false);
    const [sponsorInfo, setSponsorInfo] = React.useState(props.siteSponsor);
    // useSelector<KynectState, KynectState['sponsorInfo']>((state) => state.sponsorInfo)
    const [language, setLanguage] = React.useState("");
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const router = useRouter();

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleLoginMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >

            <MenuItem style={{ color: 'blue', fontFamily: 'Nunito Bold', textDecoration: "bold" }}>Go to Login</MenuItem>
            <MenuItem >
                <a className={styles['top-links-login']} href="https://office2.kynectcentral.com/#/Login">
                    Associate <img className={styles['img-arrow']} src={siteContent?.nav_bar_img_arrow_right} /></a>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
                <a className={styles['top-links-login']} href="https://mystream.com/account">
                    Energy
        <img className={styles['img-arrow']} src={siteContent?.nav_bar_img_arrow_right} />
                </a>
            </MenuItem>

            <MenuItem>
                <a className={styles['top-links-login']} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                    "https://" + sponsorInfo.webAlias + ".wekynect.com/auth/login" :
                    "https://www.wekynect.com/auth/login"}>
                    Wireless
          <img className={styles['img-arrow']} src={siteContent?.nav_bar_img_arrow_right} />
                </a>

            </MenuItem>

            <MenuItem onClick={handleMenuClose}>
                <a className={styles['top-links-login']} href="https://members.kynectprotectiveservices.com/">
                    Protective
           <img className={styles['img-arrow']} src={siteContent?.nav_bar_img_arrow_right} />
                </a>

            </MenuItem>
        </Menu >
    );


    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <a className={styles['top-links']} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                        "https://" + sponsorInfo.webAlias + ".wekynect.com/services" :
                        "https://www.wekynect.com/services"}>
                        {siteContent?.nav_bar_shop_services}

                    </a>
                </IconButton>

            </MenuItem>

            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <a className={styles['top-links']} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                        "https://" + sponsorInfo.webAlias + ".wekynect.com/business" :
                        "https://www.wekynect.com/business"}>
                        {siteContent?.nav_bar_we_kynect}

                    </a>
                </IconButton>

            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <a className={styles['top-links']} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                        "https://" + sponsorInfo.webAlias + ".wekynect.com/business" :
                        "https://www.wekynect.com/en/why"}>
                        {siteContent?.nav_bar_start_business}

                    </a>
                </IconButton>

            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">


                    <a className={styles['top-links']}
                        onClick={handleLoginMenuOpen}

                    >
                        {siteContent?.nav_bar_login}
                    </a>
                </IconButton>

            </MenuItem>

        </Menu>
    );
    useEffect(() => {
        // Update the document title using the browser API
        console.log("running");


        console.log("running", router);
    }, []);
    useEffect(() => {
        console.log("navbar");

        let sponsorInfoLS: iSponsorData = JSON.parse(localStorage.getItem("siteSponsor") + "");
        console.log("navbar sponsorInfo", sponsorInfo);
        sponsorInfoLS && sponsorInfoLS.webAlias != '' && setSponsorInfo(sponsorInfoLS) && setIsSponsored(true);
        getNavBarContent(setSiteContent, false);
    }, []);
    useEffect(() => {

        setLanguage(localStorage.getItem("browserLanguage") + "")

    }, []);
    const checkIsSponsored = () => {

        return isSponsored;
    }
    useEffect(() => {
        setSponsorInfo(props.siteSponsor)

    }, [props.siteSponsor]);

    return (

        <div className={classes.grow}>

            {siteContent && (
                <AppBar style={{ backgroundColor: 'white' }} color="primary" position="relative">
                    <div className={checkIsSponsored() ? styles["nav-bar-bg-sponspored"] : styles["nav-bar-bg"]}>

                        <Toolbar style={{ justifyContent: "center", height: 100 }} >

                            <div className={classes.sectionMobile}>
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    style={
                                        {
                                            color: 'black',

                                            marginLeft: 0,
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                        }}
                                    aria-label="open drawer"
                                    onClick={handleMobileMenuOpen}
                                >
                                    <MenuIcon fontSize="large" />
                                </IconButton>

                                <a style={{ display: 'inline', paddingBottom: 25 }} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                                    "https://" + sponsorInfo.webAlias + ".wekynect.com/" :
                                    "https://www.wekynect.com/"}>

                                    <img className={styles["logo"]} src={siteContent.nav_bar_img_logo} />


                                </a>
                            </div>

                            <div className={classes.sectionDesktop}>
                                {/*
                  <div className={classes.menuLinks}>
                    <a className={styles['top-links-login']}
                      onClick={handleLoginMenuOpen}

                    >
                      {siteContent?.nav_bar_login}
                    </a>
                  </div>




                  <a style={{ display: 'inline', marginRight: 25 }} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                    "https://" + sponsorInfo.webAlias + ".wekynect.com/" :
                    "https://www.wekynect.com/"}>

                    <img className={styles["logo"]} src={siteContent.nav_bar_img_logo} />


                  </a>
                  <div style={{ marginTop: 0, display: 'inline' }}>

                    <a className={styles['top-links']} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                      "https://" + sponsorInfo.webAlias + ".wekynect.com/services" :
                      "https://www.wekynect.com/services"}>
                      {siteContent?.nav_bar_shop_services}

                    </a>
                    <a className={styles['top-links']} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                      "https://" + sponsorInfo.webAlias + ".wekynect.com/business" :
                      "https://www.wekynect.com/business"}>
                      {siteContent?.nav_bar_start_business}

                    </a>


                    <a className={styles['top-links']} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                      "https://" + sponsorInfo.webAlias + ".wekynect.com/business" :
                      "https://www.wekynect.com/business"}>
                      {siteContent?.nav_bar_we_kynect}

                    </a>

                  </div>
                
                    */}

                                <Grid container spacing={0} style={{ maxWidth: 1280, textAlign: 'left', margin: 'auto' }}>
                                    <Grid item xs={6} md={4} lg={4}>
                                        <a style={{ display: 'inline', paddingBottom: 25 }} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                                            "https://" + sponsorInfo.webAlias + ".wekynect.com/" :
                                            "https://www.wekynect.com/"}>

                                            <img className={styles["logo"]} src={siteContent.nav_bar_img_logo} />


                                        </a>
                                    </Grid>
                                    <Grid item xs={6} md={8} lg={8}>

                                        <Grid container spacing={0} style={{ height: '100%', textAlign: 'right' }}>
                                            <Grid item xs={12} md={12} lg={12}>
                                                <a className={styles['top-links-login']}
                                                    onClick={handleLoginMenuOpen}

                                                >
                                                    {siteContent?.nav_bar_login}
                                                </a>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



                        <span style={{ color: 'black' }}>|    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                                                <a className={styles['top-links-login']}
                                                    onClick={changeUserLanguage}

                                                >
                                                    {language.includes("es") ? "English" : "Español"}
                                                </a>
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={12}>
                                                <a className={styles['top-links']} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                                                    "https://" + sponsorInfo.webAlias + ".wekynect.com/services" :
                                                    "https://www.wekynect.com/services"}>
                                                    {siteContent?.nav_bar_shop_services}

                                                </a>
                                                <a className={styles['top-links']} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                                                    "https://" + sponsorInfo.webAlias + ".wekynect.com/business" :
                                                    "https://www.wekynect.com/business"}>
                                                    {siteContent?.nav_bar_start_business}

                                                </a>


                                                <a className={styles['top-links']} href={sponsorInfo && sponsorInfo.webAlias != '' ?
                                                    "https://" + sponsorInfo.webAlias + ".wekynect.com/en/why" :
                                                    "https://www.wekynect.com/en/why"}>
                                                    {siteContent?.nav_bar_we_kynect}

                                                </a>
                                            </Grid>
                                        </Grid>


                                    </Grid>
                                </Grid>
                            </div>
                        </Toolbar>

                    </div>
                    {sponsorInfo && sponsorInfo.webAlias != "" && (


                        <div className={styles["section-sponsored"]}>

                            <div className={styles["section-sponsored-content"]}>
                                <Sponsor></Sponsor>
                            </div>
                        </div>

                    )}
                </AppBar>
            )
            }
            {renderMobileMenu}
            {renderMenu}
        </div >
    );
};

export default NavBar;
