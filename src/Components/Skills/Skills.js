import React from 'react'
import Card from 'react-bootstrap/Card';
import netlify from '../../Assets/Skills icons/netlify.png'
import materialui from '../../Assets/Skills icons/materialui.png' 
import vscode from '../../Assets/Skills icons/vscode.png'
import express from '../../Assets/Skills icons/express.png'
import render from '../../Assets/Skills icons/render.jpg'
import javascript from '../../Assets/Skills icons/javascript.png'

function Skills() {
  return (
    <>
      <div id='skills' className='' style={{height:'670px', marginTop:'100px'}}>
          <div className='border m-5 rounded'>
            <div className='mt-3' style={{marginLeft:'55px',maxWidth:'fit-content'}}>
              <h1 className='text-white' style={{letterSpacing:'3px'}}>SKILLS</h1>
            </div>
            <div className='m-4' style={{display:"grid", gridTemplateColumns:"auto auto auto auto", justifyContent:"space-evenly"}}>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='fs-4' style={{fontFamily:''}}><i className="fa-brands fa-html5 text-danger fs-2"></i> HTML5</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='fs-4' style={{fontFamily:'Trebuchet MS'}}><i className="fa-brands fa-css3-alt text-primary fs-2"></i> CSS3</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
              <Card.Body className='d-flex justify-content-center'>
                  <img src={javascript} alt="" style={{maxWidth:'30px', maxHeight:'30px'}} className='me-1'/>
                  <Card.Title className='fs-4 ms-1' style={{fontFamily:'Trebuchet MS'}}>JavaScript</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='fs-4' style={{fontFamily:'Trebuchet MS'}}><i className="fa-brands fa-bootstrap text-primary fs-2"></i> Bootstrap</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='fs-4' style={{fontFamily:'Trebuchet MS'}}><i className="fa-brands fa-react text-primary fs-2"></i> React.js</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body className='d-flex justify-content-center'>
                  <img src={express} alt="" style={{maxWidth:'30px', maxHeight:'30px'}} className='me-1'/>
                  <Card.Title className='fs-4 ms-1' style={{fontFamily:'Trebuchet MS'}}>Express.js</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='fs-4' style={{fontFamily:'Trebuchet MS'}}><i className="fa-brands fa-node text-success fs-2"></i> Node.js</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='fs-4' style={{fontFamily:'Trebuchet MS'}}><i className="fa-solid fa-database text-success fs-2"></i> MongoDB</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body className='d-flex justify-content-center'>
                  <img src={materialui} alt="" style={{maxWidth:'30px', maxHeight:'30px'}} className='me-1'/>
                  <Card.Title className='fs-4 ms-1' style={{fontFamily:'Trebuchet MS'}}>Material UI</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='fs-4' style={{fontFamily:'Trebuchet MS'}}><i className="fa-brands fa-font-awesome text-primary fs-3"></i> Font Awesome</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body className='d-flex justify-content-center'>
                  <img src={vscode} alt="" style={{maxWidth:'30px', maxHeight:'30px'}} className='me-1'/>
                  <Card.Title className='fs-4 ms-1' style={{fontFamily:'Trebuchet MS'}}>VScode</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body className='d-flex justify-content-center'>
                  <svg className='me-1' style={{maxWidth:'30px', maxHeight:'30px',}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="postman"><path fill="#F36933" d="M18.855 6.049a.145.145 0 0 0-.053.159v-.001a.412.412 0 0 1-.054.45l.001-.001a.139.139 0 0 0-.03.087c0 .044.021.084.053.11a.143.143 0 0 0 .084.03c.042 0 .08-.02.106-.05a.69.69 0 0 0 .086-.752.138.138 0 0 0-.193-.032zM19.049 6.082l-.002-.004.001.003z"></path><path fill="#F36933" d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.430 6.573.843 12.588-3.801 13.429-10.374C24.745 6.955 20.102.943 13.527.099zm2.471 7.485a.851.851 0 0 0-.593.25l-4.453 4.453-.95-.95c4.389-4.376 5.181-4.418 5.996-3.753zm-4.863 4.861 4.44-4.44a.62.62 0 1 1 .848.902l-.001.001-4.699 4.125-.588-.588zm.33.694-1.1.238a.057.057 0 0 1-.013.001.06.06 0 0 1-.054-.033.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459 1.172-1.172.879.878-1.979.426a.11.11 0 0 1-.019.002.074.074 0 0 1-.066-.041.071.071 0 0 1-.011-.039c0-.021.009-.041.024-.054zm-3.646 6.057a.074.074 0 0 1-.069-.075v-.008a.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.426-1.255a.227.227 0 0 0-.117.258v-.002l.203.865a.125.125 0 0 1-.211.117h-.003l-1.230-1.229 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.278-3.430h-.002l-.839-.839 4.699-4.125a.985.985 0 0 0 .117-.125l.002-.002c-.147 1.345-2.029 3.245-3.977 5.091zm4.942-5.930a1.81 1.81 0 0 1-1.305-.532h.001l-.003-.002a1.822 1.822 0 0 1 2.461-2.681l-.003-.002-1.61 1.613a.117.117 0 0 0-.035.084c0 .033.013.063.035.084l1.247 1.247a1.801 1.801 0 0 1-.808.189zm1.294-.532c-.081.08-.169.151-.265.214l-.006.004h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522z"></path></svg>
                  <Card.Title className='fs-4 ms-1' style={{fontFamily:'Trebuchet MS'}}>Postman</Card.Title>                 
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
              <Card.Body className='d-flex justify-content-center'>
                  <img src={render} alt="" style={{maxWidth:'30px', maxHeight:'30px'}} className='me-1'/>
                  <Card.Title className='fs-4 ms-1' style={{fontFamily:'Trebuchet MS'}}>Render</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body className='d-flex justify-content-center'>
                  <img src={netlify} alt="" style={{maxWidth:'30px', maxHeight:'30px'}} className='me-1'/>
                  <Card.Title className='fs-4 ms-1' style={{fontFamily:'Trebuchet MS'}}>Netlify</Card.Title>
                </Card.Body>
              </Card>
              <Card className='text-center m-3' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='fs-4' style={{fontFamily:'Trebuchet MS'}}><i className="fa-brands fa-github fs-2"></i> GitHub</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
      </div>
    </>
  )
}

export default Skills