import React from 'react';

const TopBar = props => (
    <article id="ARTICLE_3">
        <div id="TOP">
            <h2 className="contact">
            CONTACT AGENT
            </h2>
        <form id="ca-agent">
            <div id="DIV_1">
                <div id="DIV_2">
                    <div id="nameFill">
                        <input name="name" type="text" placeholder="Your Name" id="NAME" />
                        {/* <p id="P_5">
                            Please enter your name.
                        </p> */}
                    </div>
                    <div id="phoneFill">
                        <input name="phone" type="tel" placeholder="Phone" id="PHONE" />
                        {/* <p id="P_8">
                            Please enter a valid phone number, beginning with + for international numbers.
                        </p> */}
                    </div>
                    <div id="emailFill">
                        <input name="email" type="email" placeholder="Email" id="EMAIL" />
                        {/* <p id="P_11">
                            Please enter a valid email address.
                        </p> */}
                    </div>
                </div>
                <div id="messageFill">
                    <textarea name="message" id="MESSAGE">
                        I am interested in 1665 Euston Rd, SAN MARINO, CA 91108.
                    </textarea>
                    {/* <p id="P_14">
                        Please fill in a valid message.
                    </p> */}
                </div>
                <div id="submitButton">
                    <button type="submit" id="submit">
                        <span id="contact">Contact Agent</span>
                    </button>
                </div>
                <div id="check">
                    <input id="checkmark" name="preapproval" type="checkbox" value="true" />
                    <label className="label">
                        I want financing information
                    </label>
                </div>
            </div>                
        </form> 
        </div>
    </article>
);

export default TopBar;


