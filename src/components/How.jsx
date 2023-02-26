import React from 'react'
import "../styles/faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
const How = () => {
    const navigate = useNavigate();
    return (
        <div className='body-faq'>
            <div className='faq-heading'><p>How to Reach?</p> <button className='backbutton' onClick={() => {
                navigate("/");
            }}>Go To Home</button></div>
            <div className="accordion">
                <div className='accor'>
                Outstation participants can reach the IIT Madras campus via bus, auto or call-taxi which is available just outside the station.
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>IITM Campus</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <li>Is located adjacent to the Sardar Patel Road</li>
                                <li>Is midway between the Raj Bhavan and Adyar bus terminus</li>
                                <li>Is 12 kilometers from Chennai Central</li>
                                <li>Landmarks - Guindy Snake Park adjacent to the IIT Main Gate</li>
                                <li>Central Leather Research Institute campus opposite to ours</li>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>From Chennai Central</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <li>Hire an auto/taxi to IIT Madras. You can catch institute busses from the IIT Madras main gate to control room</li>
                                <li>You can catch the metro from central to little mount. Take 49A or 49 B and get down at iitm bus stop.</li>
                                <li>You can catch a bus just outside the Chennai Central. 18B and 19S are the direct buses to IITM (Get down at Gandhi Mandapam/IITM). From the gate there are IITM buses to the hostels, every 15 minutes</li>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>From Egmore Station</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <li>Catch 23C which heads directly to IITM. From the main gate there are IITM buses to the hostels, every 20 minutes</li>
                                <li>The auto and taxi fares from Egmore are approximately Rs.100 and Rs.150 respectively.</li>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>From Airport</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <li>Hire an auto/taxi to IIT Madras. Inside the campus, get down at the Hospitality Control Room</li>
                                <li>You can take metro from airport to little mount . Take 49A or 49B and get down at iitm bus stop.</li>
                                <li>Catch PP21 directly to institute or 21G to Gandhi Mandapam which is at a stone throw’s distance from out gate. From the main gate there are IITM buses to the hostels, every 20 minutes.</li>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>From CMBT</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <li>Hire an auto/taxi to IIT Madras (inside)</li>
                                <li>you can take a metro from CMBT to little mount.Take 49A or 49 B and get down at iitm bus stop.</li>
                                <li>Catch Bus number 23M or 5E which come directly to institute. From the main gate there are IITM buses to the hostels, every 20 minutes.</li>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    {/* <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion> */}
                </div>
            </div>

        </div>

    )
}

export default How;