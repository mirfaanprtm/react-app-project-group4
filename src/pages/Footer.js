import React from "react"
import IconLink from "./IconLink"

import emailIcon from "../assets/email.svg"
import facebookIcon from "../assets/facebook2.svg"
import instagramIcon from "../assets/instagram2.svg"
import locationIcon from "../assets/location.svg"
import logo from "../assets/logofooter.svg"
import twitterIcon from "../assets/twitter2.svg"
import whatsAppIcon from "../assets/whatsapp.svg"
import youtubeIcon from "../assets/youtube2.svg"

import styles from "./FooterStyle"

const ICON_SOSMED = [
    { src: facebookIcon, href: "https://facebook.com"},
    { src: twitterIcon, href: "https://twitter.com"},
    { src: instagramIcon, href: "https://instagram.com"},
    { src: youtubeIcon, href: "https://youtube.com"}
]

const MENU = [
    { href: "#", label: "Tentang Kami" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Karir" },
    { href: "#", label: "Galeri" }
]

const Footer = () => {
    return (
        <div style={styles.container}>
            <div style={styles.itemContainer}>
                <div style={styles.leftSection}>
                    <img src={logo} />
                    <p style={styles.description}>
                        PDAM Purwa Tirta Dharma Menyediakan air bersih yang sehat yang mampu memberikan kontribusi PAD pada kabupaten Grobogan
                    </p>
                    <div style={styles.sosmed}>
                        { ICON_SOSMED.map((item, idx) => (
                            <IconLink 
                            key={idx} 
                            iconSrc={item.src} 
                            to={item.href} />
                        ))}
                    </div>
                </div>
                <div style={styles.centerSection}>
                    <div style={styles.navigasi}>
                        NAVIGASI
                    </div>
                    <div>
                        <a href="#" style={styles.menuHome}>Home</a>
                    </div>
                    <div>
                        {MENU.map((item, idx) => {
                            return (
                                <a 
                                  href={item.href}
                                  style={styles.menu}
                                  key={idx}
                                >
                                    {item.label}
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div style={styles.righSection}>
                    <div style={styles.kontak}>
                        KONTAK
                    </div>
                    <div style={styles.kontakSection}>
                        <img style={styles.locationIcon} src={locationIcon} />
                        <div style={styles.locationText}>
                            Jl. Gajah Mada No.3, Jetis 
                            Selatan, Purwodadi, Kec. 
                            Purwodadi, Kabupaten Grobogan, 
                            Jawa Tengah 58111
                        </div>
                    </div>
                    <div style={styles.kontakSection}>
                        <img style={styles.whatsAppIcon} src={whatsAppIcon} />
                        <div style={styles.whatsAppNumber}>
                            +62 896 666 666
                        </div>
                    </div>
                    <div style={styles.kontakSection}>
                        <img style={styles.emailIcon} src={emailIcon} />
                        <div style={styles.emailText}>
                            hallo@purwatirtadharma.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer