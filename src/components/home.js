import '../style/mystyle.css';
import React from "react";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import hphoto from '../images/program5.gif';
function Home(props)
{
    return(
        <body>
            <div className='home1'>
                <div homep>
                    <h1>Hi all, <span>I'm Barath Balaji </span></h1>
                    <div className='content'>
                        <p className='v2'>I'm passionate Full Stack web developer having an experience of web applications with JavaScript, Node.js, React.js, Mongodb, Express.js development and Sql Developer.</p>
                    </div><br/><br/>
                    <div className="socialicons">
                        <a href="https://www.linkedin.com/in/barath-balaji-v-s-2258791a6"><button className='linkedin'><FaLinkedin size={20}/></button></a>
                        <a href="https://github.com/BARATHBALAJIVS07"><button className='github'><FaGithub size={20}/></button></a>
                        <a href="https://instagram.com/barathbalajivs?igshid=ZDdkNTZiNTM="><button className='instagram'><FaInstagram size={20}/></button></a>
                        <a href="https://www.facebook.com/barath.balaji.581?mibextid=ZbWKwL"><button className='fb'><FaFacebook size={20}/></button></a>
                        <a href="https://twitter.com/BarathBalajiVS?t=HXKNPwIk5bX2tLmTW533fw&s=09"><button className='twitter'><FaTwitter size={20}/></button></a>
                    </div>
                </div>
                
            </div>
        </body>
    );
}
export default Home;