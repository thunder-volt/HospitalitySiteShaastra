import React from 'react'
import "../styles/general.css"
const General = () => {
    return (
        <div className='gen-body'>
            <h1>General Informations</h1>

            <div className="steps">
                <h3>Steps for getting accommodation in Shaastra:</h3>
                <ol>
                    <li>After completion of payment and filling in all the details, you will get a unique Shaastra ID. A mail regarding the same will also be sent within 24 hrs of payment to the registered mail id.</li>
                    <li>
                        When you arrive report to either Hospitality Desk, set up in KV Ground or Control room set up in hostel whose details will be informed later by mail.
                    </li>
                    <li>
                        You must carry each of the following when reporting:
                        Shaastra ID,  your college ID and a self-attested copy of any govt. ID should be presented on the reporting centre.
                    </li>
                    <li>
                        After successful registration in control room, you will be provided with mattress, pillows, and keys to your respective rooms.
                    </li>
                    <li>Accommodation starts from 8am on 26th January 2023 and will be valid only till 8am on 30th   January 2023.</li>

                </ol>
            </div>
            <div className='instructions'>
                <h3>Instructions:</h3>
                <ol>
                    <li>Shaastra, IIT M will not be responsible for any costly items brought in by the guests. Safe keeping of them will be their own responsibility. Also, Shaastra will not be responsible for any mishaps that occur through the duration of stay for Shaastra.</li>
                    <li>
                        Mattress and pillow for the guests with confirmed accommodation can be collected from mattress rooms in the hostels and returned to the same while checking out.
                    </li>
                    <li>
                        All guests are required to carry their valid government photo id proofs at all times. In addition, participants from other colleges are also required to carry their valid college photo id card. Any guest failing to produce their id card will not be permitted inside the campus during Shaastra.
                    </li>
                    <li>
                        Alcohol, cigarettes or drugs of any kind is strictly prohibited inside the campus. Any other item if deemed unsafe will be prohibited.
                    </li>
                    <li>
                        The decision of Security section and Shaastra team will be final in case of any dispute.
                    </li>
                    <li>
                        All guests are required to maintain the propriety and cleanliness of the campus and follow the rules of the campus at all times.
                    </li>
                    <li>
                        ONLY the guests having confirmed accommodations will be allowed to stay in IIT M Hostels.
                    </li>
                    <li>
                        Random checks would be made to avoid any illegal stay at the campus.
                    </li>
                </ol>
            </div>

            <div className="accomodation">
                <h3>Accommodation</h3>
                <div className='acc-info'>
                    <b>Accommodation</b> will only be provided to those <b>who have registered</b> on the Shaastra website and have received a confirmation from us. Others will be requested to stay in Hotels outside the campus as said above. Boys and girls will be given hostels for the stay during Shaastra.
                    <br />
                    Accommodation Charges: <br />
                    Accommodation charges are INR 725 per day per candidates. <br />
                    Combo offers: <br />
                    For 2 Night Stay – 1400 <br />
                    For 3 Night stay – 2000 <br />
                    For 4 Night Stay – 2600 <br />

                    Also a penalty of Rs1000 per participant has to be charge by the participant who will harm the property or any materials of shaastra. <br />
                    Maximum of 4 night stay allowed (26 January – 29 January). <br />
                    Stay will only include <b>breakfast</b>. Guests can purchase their meals from the stalls set up for Shaastra or from restaurants inside.
                    <br />
                    Check-in & Check out:
                    <br />
                    Check in: 8am, 26th January 2023 <br />
                    Check out: 8am, 30th January 2023
                </div>

            </div>

            <div className="policy">
                <h3>
                    Cancellation Policy
                </h3>
                <div className="policy-info">
                    Confirmed Accomodation can be cancelled through <b>email only</b>.
                    In case you want to cancel, send an e-mail having your team ID and the number of members for whom the accommodation has to be cancelled along with their Shaastra ID at Hospitality.shaastra@gmail.com. The subject of email should be “Cancellation of Accommodation”. For any cancellations before deadline, 75% of the total amount shall be refunded. There shall be no refunds for cancellation after deadline.
                    Deadline of cancellation: 23rd January 2023.
                </div>
            </div>
            <div className='contact'>
                For any quiries contact: <br />
                Anuj Singh dhakad <br />
                +91 7909467433 <br />

                Tamanna <br />
                +91 92849 22898 <br />

                Nisarg Patel <br />
                +91 78018 54210 <br />
            </div>


        </div>
    )
}

export default General