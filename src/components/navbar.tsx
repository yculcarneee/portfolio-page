import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';   
import { Link, scroller } from "react-scroll";
import { useEffect, useState } from "react";
import { SelectCallback } from "react-bootstrap/esm/helpers";

export default function NavbarComponent() {
    const [bgColor, setBgColor] = useState('#e63946');
    const [activeKey, setActiveKey] = useState('about');
    const [expanded, setExpanded] = useState(false);
    
    const changeBackground = () => {

        let prefix_sum:number[] = new Array(4);
        
        //@ts-ignore
        prefix_sum[0] = document.getElementById('about-card').clientHeight;
        //@ts-ignore
        prefix_sum[1] = prefix_sum[0] + document.getElementById('projects-card').clientHeight;
        //@ts-ignore
        prefix_sum[2] = prefix_sum[1] + document.getElementById('experience-card').clientHeight;
        //@ts-ignore
        prefix_sum[3] = prefix_sum[2] + document.getElementById('contact-card').clientHeight;

        // @ts-ignore
        if(window.scrollY < prefix_sum[0]) {
            setBgColor('#e63946');
            setActiveKey('about')
            // updateTextColor(0);
        }
        // @ts-ignore
        else if(window.scrollY >= prefix_sum[0] && window.scrollY < prefix_sum[1]) {
            setBgColor('#023e8a');
            setActiveKey('projects')
            // updateTextColor(1);
        }
        // @ts-ignore
        else if(window.scrollY >= prefix_sum[1] && window.scrollY < prefix_sum[2]) {
            setBgColor('#2a9d8f');
            setActiveKey('experience')
            // updateTextColor(2);
        }
        else {
            setBgColor('#e76f51');
            setActiveKey('contact')
            // updateTextColor(3);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <Navbar /*collapseOnSelect */ expanded={expanded} expand="lg" sticky="top" style={{backgroundColor: bgColor}} onToggle={()=>{if(expanded) setExpanded(false); else setExpanded(true);}} onSelect={()=>{setExpanded(false) /*console.log("HIT")*/}}>
            <Navbar.Brand href="#about" style={{color: 'white'}}>Yash Kulkarni</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav activeKey={activeKey} onSelect={(selectedKey)=>setActiveKey(String(selectedKey))}>
                    <Nav.Item style={{borderColor: 'transparent transparent white transparent', borderStyle: activeKey === 'about' ? 'solid' : 'none'}}>
                        <Nav.Link eventKey="about" style={{color: 'white'}} onClick={() => scroller.scrollTo('about', { smooth: true, offset: expanded ? -230 : -80, duration: 500, })}> About </Nav.Link>
                        {/* <Link to="about" spy={true} smooth={true}>About</Link> */}
                    </Nav.Item>
                    <Nav.Item style={{borderColor: 'transparent transparent white transparent', borderStyle: activeKey === 'projects' ? 'solid' : 'none'}}>
                        <Nav.Link eventKey="projects" style={{color: 'white'}} onClick={() => scroller.scrollTo('projects', { smooth: true, offset: expanded ? -230 : -70, duration: 500, })}> Projects </Nav.Link>
                        {/* <Link to="projects" spy={true} smooth={true}>Projects</Link> */}
                    </Nav.Item>
                    <Nav.Item style={{borderColor: 'transparent transparent white transparent', borderStyle: activeKey === 'experience' ? 'solid' : 'none'}}>
                        <Nav.Link eventKey="experience" style={{color: 'white'}} onClick={() => scroller.scrollTo('experience', { smooth: true, offset: expanded ? -230 : -70, duration: 500 })}> Experience </Nav.Link>
                        {/* <Link to="experience" spy={true} smooth={true}>Experience</Link> */}
                    </Nav.Item>                
                    <Nav.Item style={{borderColor: 'transparent transparent white transparent', borderStyle: activeKey === 'contact' ? 'solid' : 'none'}}>
                        <Nav.Link eventKey="contact" style={{color: 'white'}} onClick={() => scroller.scrollTo('contact', { smooth: true, offset: expanded ? -230 : -70, duration: 500 })}> Contact </Nav.Link>
                        {/* <Link to="contact" spy={true} smooth={true}>Contact</Link> */}
                    </Nav.Item>
                    </Nav>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}