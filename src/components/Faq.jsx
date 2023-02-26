import React from 'react'
import "../styles/faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
const Faq = () => {
    const navigate = useNavigate();
    return (
        <div className='body-faq'>
            <div className='faq-heading'><p>FAQ</p> <button className='backbutton' onClick={() => {
                navigate("/");
            }}>Go To Home</button></div>
            <div className="accordion">
                <div className='accor'>
                    <Accordion className='acc' sx={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)"
                    }}>
                        <AccordionSummary sx={{ color: "black" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>When is the largest Tech Fest of Asia going to Happen this year?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Started in the year 2000 Shaastra will be held from 26th to 29th of January. This time we have a lot in stock for each one of you !. So come witness the spectral splendors of Shaastra.
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
                            <Typography> How can the Registration for Shaastra be done?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can register for the event by registering through our registration form
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
                            <Typography>Rents for participants (hostel)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Sharing room: <br />
                                Our charges for a person for 2 days is Rs.1400 ,for 3 nights is Rs.2000 and for 4 nights Rs.2600
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
                            <Typography>Is there any additional Security Deposit amount to be paid during registration?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                No, We aren't taking any additional Security Deposit
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

export default Faq