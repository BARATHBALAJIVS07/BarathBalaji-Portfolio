import React from "react";
import { saveAs } from 'file-saver';
import { AiFillFilePdf } from "react-icons/ai";
import '../style/mystyle.css';
import barathbalajicv from '../images/BarathBalaji_CV_paper.jpg';
function Resume()
{

    function handleDownload() {
      // Replace 'path/to/file.pdf' with the actual path to your PDF file
      const fileUrl = 'http://localhost:3000/BarathBalaji_CV.pdf';
    
      fetch(fileUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then(blob => {
          saveAs(blob, 'BarathBalaji_CV.pdf'); // Replace 'filename.pdf' with the desired filename
        })
        .catch(error => {
          console.error('There was an error downloading the file:', error);
        });
    }
  return(
    <body>
    <div className="downloadcv">
      <button onClick={handleDownload} className="pdfcv"><AiFillFilePdf size={20} className="pdfic"/> Download CV</button>
    </div>
    <div className="cv" style={{display:"flex",justifyContent:"center"}}>
        <div>
          <img src={barathbalajicv} alt="image not available" width={900}></img>
        </div>
    </div>
    </body>
  );
}
export default Resume;