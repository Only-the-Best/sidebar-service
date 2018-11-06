import React from 'react';


var starImg = [];

var startList= function() {
    for( var i = 0; i < 3; i++) {
        starImg.push(<img className='agent-img' src={require('./tempsnip.png')} alt='stars'></img>) 
    }
    for(var j = 0; j < 2; j++) {
        starImg.push(<img className='agent-img' src={require('./tempsnip2.png')} alt='stars'></img>)
    }
}
startList();

var size = 5;

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
                        <input id="INPUT_1" name="preapproval" type="checkbox" value="true" />
                        <label  id="LABEL_1">
                            I want financing information
                        </label>
                    </div>
                    <p className='agreement'>By pressing Contact Agent, you agree that Zillow Group and real estate professionals 
                        may call/text you about your inquiry, which may involve use of automated means and 
                        prerecorded/artificial voices. You don't need to consent as a condition of buying any 
                        property, goods or services. Message/data rates may apply. You also agree to our Terms 
                        of Use. Zillow does not endorse any real estate professionals.</p>
                    <hr className='separator'></hr>
                    {props.topInfo.slice(0, size).map((item, index) => (
                            <div id='recipients' className='container'>
                            {/* <div className='sig-content'> */}
                                <div className='sig-photo'>
                                    <div className='sig-photo-container'>
                                        <input id='first-select' className='select-input' type='radio'></input>
                                        <label id='first-pic' className='select-label'>
                                        <img className='agent-pic' src={props.topInfo[Math.floor(Math.random() * props.topInfo.length)].imageUrl}></img>
                                        </label>
                                    </div>
                                </div>
                                <div className='sig-info'>
                                    <div className='display-name'>
                                        <a href='#' className='profile-link'>
                                            <span className='name'>{props.topInfo[Math.floor(Math.random() * props.topInfo.length)].name}</span>
                                        </a>
                                    </div>
                                    <span className='display-rating'>
                                        <span className='stars-container'>
                                            <a href='#' className='stars-link'>
                                                <span className='stars-rating'>
                                                    {starImg}
                                                </span>
                                            </a>
                                        </span>
                                        <span className='count-rating'>
                                            (<a href='#' className='ratings-num'>{props.topInfo[Math.floor(Math.random() * props.topInfo.length)].rating}</a>)
                                        </span>
                                    </span>
                            
                                    <span className='recent-sales'>
                                        <a href='#' className='profile-link'>
                                            <span className='sales-count'>{props.topInfo[Math.floor(Math.random() * props.topInfo.length)].sales}</span>
                                            <span className='sales-text'>Recent sales</span>
                                        </a>
                                    </span>
                                    <span className='phone-num'>{props.topInfo[Math.floor(Math.random() * props.topInfo.length)].phone}</span>
                                </div>                           
                                    <span className='agent-badge'>
                                        Listing Agent
                                    </span>
                            </div>                                                      
                    ))}
                </div>   
            </form>
        </div>
    </article>
);

export default TopBar;


