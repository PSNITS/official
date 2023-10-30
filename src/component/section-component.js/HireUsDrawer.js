import React from 'react'
import "../../assets/css/hireUsSection.scss"
import "../../assets/css/hire-us-section.css"
import { useDispatch, useSelector } from 'react-redux'
import { hireUsFun } from '../../redux/actions/action'
import if4ab from "../../assets/imgs/1F44B.png"
import closePng from "../../assets/imgs/close.jpg"

const HireUsDrawer = () => {

    const dispatch = useDispatch()

    const hireData =  useSelector(state => state.userReducer.hireus)

    console.log(hireData);


  return (
    <>
    <div class={hireData ? "hireUsFRM open" : "hireUsFRM"}  >
        <div class="hireUsColLft">
            <div>
                <h2>Have a project in mind</h2>
                <h3>Let's talk !
                        <img src={if4ab} alt="" title="Flutter Application Development" /></h3>
            </div>
        </div>
        <div class="hireUsColRgt">
            <a href="javascript:;">
                <img onClick={()=>{dispatch(hireUsFun())}} src={closePng} alt="Close" title="Close" class="menuClse" /></a>

            <div class="cb-request-form">
                <form id="form1" class="cb-form" runat="server">
                    <div class="cb-form-group" style={{opacity: "1" ,transform: "translate(0px, 0px)" ,willChange: "auto"}}>
                        <div class="cb-form-label -smooth" style={{opacity: "1" ,transform: "translate(0px, 0px)" ,willChange: "auto"}}>I'm interested in...</div>
                        <div class="cb-checkbox-group">
                            <div runat="server" id="abced" onclick="Submit_Click" class="cb-checkbox cb-checkbox_rounded" data-magnetic="" style={{opacity: "1" ,transform: "translate3d(0px, 0px, 0px)" ,willChange: "auto"}}>
                                <label>
                                    <input runat="server" id="txtUIUX" type="checkbox" name="service[]" value="UX/UI Design" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title">
                                        <span runat="server" id="NewUIUX" onserverclick="Submit_Click" data-text="UI/UX">UX/UI Design</span></span>
                                        <span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span>
                                </label>
                            </div>
                            <div runat="server" id="abcd" onclick="Submit_Click" class="cb-checkbox cb-checkbox_rounded" data-magnetic="" style={{opacity: "1" ,transform: "translate3d(0px, 0px, 0px)" ,willChange: "auto"}}>
                                <label>
                                    <input type="checkbox" name="service[]" value="site-design" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title">
                                        <span data-text="Mobile App">Mobile App</span>
                                    </span>
                                        <span class="cb-checkbox_rounded-ripple -oofix"><span></span>
                                        </span></span>
                                </label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="" style={{opacity: "1" ,transform: "translate3d(0px, 0px, 0px)" ,willChange: "auto"}}>
                                <label>
                                    <input type="checkbox" name="service[]" value="app-design" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="Web App">Web App</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="" style={{opacity: "1" ,transform: "translate3d(0px, 0px, 0px)" ,willChange: "auto"}}>
                                <label>
                                    <input type="checkbox" name="service[]" value="aso" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="Shopify">Shopify</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="" style={{opacity: "1" ,transform: "translate3d(0px, 0px, 0px)" ,willChange: "auto"}}>
                                <label>
                                    <input type="checkbox" name="service[]" value="illustration" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="WordPress">WordPress</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="" style={{opacity: "1" ,transform: "translate3d(0px, 0px, 0px)" ,willChange: "auto"}}>
                                <label>
                                    <input type="checkbox" name="service[]" value="ios" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="iOS development">iOS development</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="" style={{opacity: "1" ,transform: "translate3d(0px, 0px, 0px)" ,willChange: "auto"}}>
                                <label>
                                    <input type="checkbox" name="service[]" value="concept-design" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="Desktop App">Desktop App</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="" style={{opacity: "1" ,transform: "translate(0px, 0px)" ,willChange: "auto"}}>
                                <label>
                                    <input type="checkbox" name="service[]" value="site-scratch" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="Site from scratch">Site from scratch</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                <label>
                                    <input type="checkbox" name="service[]" value="android" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="Android development">Android development</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                        </div>
                    </div>
                    <div class="cb-form-group">
                        <div class="cb-input cb-input_light">
                            <div class="cb-input_light-box">
                                <input type="text" name="name" placeholder="Your name" required="" aria-label="Your name"/>
                                <div class="cb-input_light-line"></div>
                            </div>
                            <div class="cb-input_light-message"></div>
                        </div>
                    </div>
                    <div class="cb-form-group">
                        <div class="cb-input cb-input_light">
                            <div class="cb-input_light-box">
                                <input type="email" name="email" placeholder="Your email" required="" aria-label="Your email"/>
                                <div class="cb-input_light-line"></div>
                            </div>
                            <div class="cb-input_light-message"></div>
                        </div>
                    </div>
                    <div class="cb-form-group">
                        <div class="cb-input cb-input_light">
                            <div class="cb-input_light-box">
                                <textarea name="mess" placeholder="Tell us about your project" aria-label="Tell us about your project" style={{overflow: "hidden" ,overflowWrap: "break-word", height: "93px"}}></textarea>
                                <div class="cb-input_light-line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="cb-form-group mrgnTop">
                        <div class="cb-form-label -smooth">Project budget (USD)</div>
                        <div class="cb-checkbox-group">
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="">
                                <label>
                                    <input type="radio" name="budget" value="less10k" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="< 10,000">&lt; 10,000</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="">
                                <label>
                                    <input type="radio" name="budget" value="10-20k" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="10-20k">10-20k</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="">
                                <label>
                                    <input type="radio" name="budget" value="30-40k" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="30-40k">30-40k</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="">
                                <label>
                                    <input type="radio" name="budget" value="40-50k" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="40-50k">40-50k</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                            <div class="cb-checkbox cb-checkbox_rounded" data-magnetic="">
                                <label>
                                    <input type="radio" name="budget" value="more50k" />
                                    <span class="cb-checkbox_rounded-box"><span class="cb-checkbox_rounded-title"><span data-text="> 50,000">&gt; 50,000</span></span><span class="cb-checkbox_rounded-ripple -oofix"><span></span></span></span></label>
                            </div>
                        </div>
                    </div>
                    <div class="cb-form-group mrgnTop">
                        <div class="cb-input cb-input_file">
                            <input type="file" multiple="" />
                            <button class="cb-input_file-btn" type="button">
                                <img src="images/attachment.jpg" alt="" title="" />
                                <span>Add attachment</span></button>
                            <div class="cb-input_file-items"></div>
                            <div class="cb-input_file-message"></div>
                        </div>
                    </div>
                    <div class="cb-form-submit">

                        <button class="cb-btn cb-btn_send" runat="server" id="BtnSubmit" type="submit" onserverclick="Submit_Click"
                            data-magnetic="" data-cursor="-opaque">
                            <span data-text="Send request">Send request</span></button>
                    </div>
                    <div class="cb-form-terms"><a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</div>
                </form>
            </div>
        </div>
        <div class="clr"></div>
    </div>
    </>
  )
}

export default HireUsDrawer