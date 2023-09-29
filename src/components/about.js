import { AiTwotoneThunderbolt } from "react-icons/ai";
import cphoto from '../images/c.png';
import jphoto from '../images/java.png';
import jsphoto from '../images/javas.png';
import rphoto from '../images/reacts.png';
import nphoto from '../images/nodejs.png';
import sphoto from '../images/osql.png';
import hphoto from '../images/HTML5.png';
import cssphoto from '../images/css.png';
import ephoto from '../images/exp.png';
import mphoto from '../images/mdb.png';
import design1 from '../images/program4.gif';
import design2 from '../images/program.gif';
import '../style/mystyle.css';
function About()
{
    return(
        <body className="aboutcss">
            <div className="abcss">
                <p className="whatcss">What I do</p>
                <p className="whatpcss">CRAZY FULL STACK DEVELOPER AND SQL DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                <div className="fdesign">
                    <img src={design2} width={600} height={460} alt="gif not available"></img>
                    <div className="fdesignp">
                        <p className="whathcss">Full Stack development</p>
                        <p className="contentcss"><AiTwotoneThunderbolt color="gold"/>Building responsive Single-Page-Apps (SPA) & PWA in React.js</p>
                        <p className="contentcss"><AiTwotoneThunderbolt color="gold"/>Building responsive static websites using React.js and Javascript</p>
                        <p className="contentcss"><AiTwotoneThunderbolt color="gold"/>Contribute to front-end and back-end development processes</p>
                    </div>
                </div>
                <div className="fdesign1">
                    <img src={design1} width={650} height={440} alt="gif not available"></img>
                    <div className="fdesignp1">
                        <p className="whathcss">Sql Developer</p>
                        <p className="contentcss"><AiTwotoneThunderbolt color="gold"/>Migrate the data from the appropriate databases to the end databases</p>
                        <p className="contentcss"><AiTwotoneThunderbolt color="gold"/>Implement elements of Access queries and enhance business logic using UserDefined Function</p>
                        <p className="contentcss"><AiTwotoneThunderbolt color="gold"/>Takes charge of maintaining and building computer databases using Pl/SQL packages</p>
                        <p className="contentcss"><AiTwotoneThunderbolt color="gold"/>Maintain batch log files</p>
                    </div>
                </div>
            </div>
            <p style={{textAlign:"center",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSize:23,color:"rgb(33, 32, 32)"}}>Technical Skills</p>
            <div className="tskills">
                <div className="tooltip">
                    <div className="iconc">
                    <button className="cp"><img src={cphoto}></img></button><br></br>
                    <p>C</p>
                    </div>
                </div>
                <div className="tooltip">
                    <div className="iconjava">
                    <button className="javap"><img src={jphoto}></img></button>
                    <p>Java</p>
                    </div>
                </div>
                <div className="tooltip">
                    <div className="iconreact">
                    <button className="reactp"><img src={rphoto}></img></button>
                    <p>React JS</p>
                    </div>
                </div>
                <div className="tooltip">
                    <div className="iconnode">
                    <button className="nodep"><img src={nphoto}></img></button>
                    <p>Node JS</p>
                    </div>
                </div>                
                <div className="tooltip">
                    <div className="iconsql">
                    <button className="sqlp"><img src={sphoto}></img></button>
                    <p>SQL</p>
                    </div>
                </div>                
                <div className="tooltip">
                    <div className="iconjavascript">
                    <button className="javasscriptp"><img src={jsphoto}></img></button>
                    <p>JavaScript</p>
                    </div>
                </div>                
                <div className="tooltip">
                    <div className="iconhtml">
                    <button className="htmlp"><img src={hphoto}></img></button>
                    <p>HTML5</p>
                    </div>
                </div>                        
                <div className="tooltip">
                    <div className="iconcss">
                    <button className="cssp"><img src={cssphoto}></img></button>
                    <p>CSS3</p>
                    </div>
                </div>                 
                <div className="tooltip">
                    <div className="iconmongo">
                    <button className="mongop"><img src={mphoto}></img></button>
                    <p>Mongo DB</p>
                    </div>
                </div>                
                <div className="tooltip">
                    <div className="iconexpress">
                    <button className="expressp"><img src={ephoto}></img></button>
                    <p>Express JS</p>
                    </div>
                </div>
                
            </div>
            <br></br><br></br>
        <div  className="brs">
            <div class="skill-bars">
                <div class="bar">
                    <div class="info">
                        <span>java</span>
                    </div>
                    <div class="progress-line html">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>javascript</span>
                    </div>
                    <div class="progress-line css">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>react js</span>
                    </div>
                    <div class="progress-line jquery">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>jquery</span>
                    </div>
                    <div class="progress-line python">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>sql</span>
                    </div>
                    <div class="progress-line mysql">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}
export default About;