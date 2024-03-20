import React, { useEffect, useState } from "react";
import vector3 from "../../Assets/SVGs/Vector 3.svg"
import frame10 from "../../Assets/SVGs/Frame 1000001716.svg"
import vector2 from "../../Assets/SVGs/Vector 2.svg"
import group3 from "../../Assets/SVGs/Group 3.svg"
import line70 from "../../Assets/SVGs/line-70.svg"
import link2 from "../../Assets/SVGs/link-2.svg"
import elipse2 from "../../Assets/SVGs/ellipse-2.svg"
import edit from "../../Assets/SVGs/edit.svg"
import grid from "../../Assets/SVGs/grid.svg"
import activity from "../../Assets/SVGs/activity.svg"
import checkCircle from "../../Assets/SVGs/check-circle.svg"
// import vector8 from "../../Assets/SVGs/vector8.svg"
import magicWand from "../../Assets/SVGs/magic-wand.svg"
import vector4 from "../../Assets/SVGs/vector4.svg"
import vector5 from "../../Assets/SVGs/vector5.svg"
import vector6 from "../../Assets/SVGs/vector6.svg"
import vector9 from "../../Assets/SVGs/vector9.svg"
import minus from "../../Assets/SVGs/minus.svg"
import plus from "../../Assets/SVGs/plus.svg"
import svg1 from "../../Assets/SVGs/1.svg"
import svg2 from "../../Assets/SVGs/2.svg"
import svg3 from "../../Assets/SVGs/3.svg"
import svg4 from "../../Assets/SVGs/4.svg"
import svg5 from "../../Assets/SVGs/5.svg"
import svg6 from "../../Assets/SVGs/6.svg"
import svg7 from "../../Assets/SVGs/7.svg"
import svg8 from "../../Assets/SVGs/8.svg"
import svg9 from "../../Assets/SVGs/9.svg"
import svg10 from "../../Assets/SVGs/10.svg"
import svg11 from "../../Assets/SVGs/11.svg"
import svg12 from "../../Assets/SVGs/12.svg"
import { Alert, Box, Collapse, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import { Check, CopyAll, CopyAllRounded, FileCopySharp, Lock } from "@mui/icons-material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QRCode from 'qrcode.react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const [urlInput, setUrlInput] = useState('')
  const [domain, setDomain] = useState("Choose Domain")
  const domainOptions = ["Choose Domain", 'scissorsolution.netlify.app', 'Add Domain']
  const [shortUrl, setShortUrl] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    setTimeout(() => { setError(''); setCopied(false) }, 6000)
  }, [error, copied])


  const handleDownload = () => {
    // Convert the QR code to a data URL
    const dataUrl = document.getElementById('qrcode').toDataURL('image/png');

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'qrcode.png'; // Specify the file name
    link.click();
  };

  const shortenUrl = async (url) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        "apikey": "bc81226d8f114696994626515293f574",
        // "workspace": "YOUR_WORKSPACE_ID"
      }
      let endpoint = "https://api.rebrandly.com/v1/links";
      let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
        //, slashtag: "A_NEW_SLASHTAG"
        //, title: "Rebrandly YouTube channel"
      }
      const apiCall = {
        method: 'post',
        url: endpoint,
        data: linkRequest,
        headers: headers
      }
      try {
        let apiResponse = await axios(apiCall)
        setShortUrl(apiResponse.data.shortUrl)
      } catch (e) {
        console.log(e)
        setError(e.response.data.message + '/Url must be https://url')
      };
    } catch {
      setError('Paste a valid URL')
    }
  }

  return <main class="main">
    <header class="header">
      
      <section class="hero-section">
        <h1 class="hero-header">Optimize Your Online Experience with Our Advanced <span class="text-style">URL
          Shortening</span> Solution<img class="under-hero-header" src={vector3}
            alt="" /></h1>
        <p class="hero-subheader">Personalize your shortened URLs to align with your brand identity. Utilize
          custom slugs, branded links, and domain customization options to reinforce your brand presence and
          enhance user engagement.</p>
        <div class="cta"> <button class="btn">Sign up</button> <button class="btn">Learn more</button> </div>
        {/* <div class="frame">                    <img class="group1" src="../../Assets/Images/Group 2.png" alt="" />                </div>  */}
        <div class="frame"> <img class="frame-image" src={frame10} alt="" />
          <p class="frame-text">Seamlessly transform your long URLs into <span
            style={{ fontWeight: 600 }}>concise</span> and <span style={{ fontWeight: 600 }}>shareable
              links</span> with just few clicks.</p> <img class="frame-back"
                src={vector2} alt="" />
        </div>
      </section>
    </header>
    <div class="image"> <img class="group2" src={group3} alt="" /> </div>
    <section class="sec2">
      <section class="section2">
        <div>
          <h1 class="section2-header">One Stop.</h1>
          <h1 class="section2-header">Four <span class="text-style">Possibilities.</span></h1>
        </div>
        <div class="items">
          <div class="item">
            <h1 class="text-bold">3M</h1>
            <p class="text-light">Active users</p>
          </div>
          <div class="item">
            <h1 class="text-bold">60M</h1>
            <p class="text-light">Links & QR codes created</p>
          </div>
          <div class="item">
            <h1 class="text-bold">1B</h1>
            <p class="text-light">Clicked & Scanned connections</p>
          </div>
          <div class="item">
            <h1 class="text-bold">300K</h1>
            <p class="text-light">App Integrations</p>
          </div>
        </div>
      </section>
    </section>
    <section class="sec3">
      <div id="section3">
        <div class="headers"> <img src={line70} alt="" />
          <div class="text-section">
            <h1 class="section3-header"> Why choose <span class="text-style">Scissors</span> </h1>
            <p class="section3-subheader">Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones for your personal,
              business, event usage. Our swift QR code creation, management and usage tracking with
              advance analytics for all of these is second to none.</p>
          </div>
        </div>
        <div class="all-items">
          <div class="section3-items">
            <div class="section3-item">
              <div class="eclipse-container"> <img src={link2} alt="" /> <img
                class="eclipse" src={elipse2} alt="" /> </div>
              <h1 class="item-header">URL Shortening</h1>
              <p class="item-subheader">Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.</p>
            </div>
            <div class="section3-item">
              <div class="eclipse-container"> <img src={edit} alt="" /> <img
                class="eclipse" src={elipse2} alt="" /> </div>
              <h1 class="item-header">Custom URLs</h1>
              <p class="item-subheader">With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.</p>
            </div>
          </div>
          <div class="section3-items">
            <div class="section3-item">
              <div class="eclipse-container"> <img src={grid} alt="" /> <img
                class="eclipse" src={elipse2} alt="" /> </div>
              <h1 class="item-header">QR Codes</h1>
              <p class="item-subheader">Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.</p>
            </div>
            <div class="section3-item">
              <div class="eclipse-container"> <img src={activity} alt="" /> <img
                class="eclipse" src={elipse2} alt="" /> </div>
              <h1 class="item-header">Data Analytics</h1>
              <p class="item-subheader">Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section4">
      <div class="header"> <img src={line70} alt="" />
        <div class="text-section">
          <h1 class="section4-header"> A <span class="text-style">price perfect</span> for your needs. </h1>
          <p class="section4-subheader">From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.</p>
        </div>
      </div>
      <div class="pricing-options">
        <div class="pricing-option">
          <p class="txt-medium">Basic</p>
          <h1 class="txt-bold">Free</h1>
          <p class="txt-medium">Free plans for all users</p>
          <ul class="options">
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Unlimited URL Shortening</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Basic Link Analytics</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Customizable Short Links</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Standard Support</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Ad-supported</p>
            </li>
          </ul>
        </div>
        <div class="pricing-option">
          <p class="txt-medium">Professional</p>
          <h1 class="txt-bold">$15/month</h1>
          <p class="txt-medium">Ideal for business creators</p>
          <ul class="options">
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Enhanced Link Analytics</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Custom Branded Domains</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Advanced Link Customization</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Priority Support</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Ad-free Experience</p>
            </li>
          </ul>
        </div>
        <div class="pricing-option">
          <p class="txt-medium">Teams</p>
          <h1 class="txt-bold">$25/month</h1>
          <p class="txt-medium">Share with up to 10 users</p>
          <ul class="options">
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Team Collaboration</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">User Roles and Permissions</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Enhanced Security</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">API Access</p>
            </li>
            <li class="option"> <img src={checkCircle} alt="" />
              <p class="option-title">Dedicated Account Manager</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="cta"> <button class="button btn1" onClick={() => navigate('/login')}>Log in</button> <button class="button btn2" onClick={() => navigate('/sign-up')}>Try for
        free</button> </div>
    </section>
    <div class="sec">
      <section class="section5">
        <div class="card">

          <div class="input-container"> <input value={urlInput} onChange={(e) => setUrlInput(e.target.value)} type="text" placeholder="Paste URL here..." />
            <div class="card-row">
              <div>
                {/* <p>Choose Domain</p> <img src={vector8} alt="" /> */}
                <TextField
                  fullWidth
                  sx={{ fontSize: "16px", color: "#3284ff" }}
                  id="domain"
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  select
                  InputProps={{
                    sx: {
                      border: 'none',
                      borderRadius: "12px", // Apply border radius to the input element
                      height: "3rem",
                      borderColor: "#3284ff",
                      fontSize: "16px",
                      color: "#3284ff",
                    },
                  }}
                  placeholder="Choose domain"
                >
                  {domainOptions.map((method, i) => (
                    <MenuItem value={method} key={i} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pointerEvents: method === 'Add Domain' ? 'none' : 'all' }}>
                      {method}
                      {method === 'Add Domain' && <Lock />}
                    </MenuItem>
                  ))}{" "}
                </TextField>
              </div> <input type="text" placeholder="Type alias here" />
            </div>
          </div>
          {shortUrl && <><Box width='100%' display='flex' alignItems='center' gap='20px'>
            <Alert sx={{ width: '100%', display: 'flex', alignItems: 'center' }} severity="success">{shortUrl}</Alert> <Box>{copied ? <Box><Check fontSize="24px" /></Box>
              :
              <CopyToClipboard text={shortUrl} style={{ cursor: 'pointer' }} onCopy={() => setCopied(true)}>
                <CopyAllRounded fontSize="24px" color='#000' />
              </CopyToClipboard>
            }
            </Box>
          </Box><Box display='flex' alignItems='center' gap='30px'><QRCode id='qrcode' value={shortUrl} /><button style={{ backgroundColor: '#3284ff', padding: '12px 16px', border: 'none', color: '#fff', borderRadius: '12px' }} onClick={handleDownload}>Download QR Code</button></Box></>}
          <button class="button" onClick={() => domain === 'scissorsolution.netlify.app' ? shortenUrl(urlInput) : setError('Please choose a domain')}>Trim URL <img src={magicWand} alt="" /></button>
          <p class="card-bottom">By clicking TrimURL, I agree to the Terms of Service, Privacy Policy and Use
            of Cookies.</p>
        </div> <img class="img img1" src={vector4} alt="" /><img class="img img4"
          src={vector5} alt="" /><img class="img img3" src={vector6}
            alt="" /><img class="img img2" src={vector9} alt="" />
      </section>
    </div>
    <section id="faq-section">
      <div>
        <div class="faq-top"> <img src={line70} alt="" />
          <h1 class="faq-header">FAQs</h1>
        </div>
        <div class="faq-container">
          <div class="faq">
            <p class="faq-title">How does URL shortening work?</p> <img src={minus}
              alt="" />
          </div>
          <div class="faq">
            <p class="faq-title">URL shortening works by taking a long URL and creating a shorter, condensed
              version that redirects to the original URL. When a user clicks on the shortened link, they
              are redirected to the intended destination. </p>
          </div>
          <div class="line"></div>
          <div class="faq">
            <p class="faq-title">Is it necessary to create an account to use the URL shortening service?</p>
            <img src={plus} alt="" />
          </div>
          <div class="line"></div>
          <div class="faq">
            <p class="faq-title">Are the shortened links permanent? Will they expire?</p> <img
              src={plus} alt="" />
          </div>
          <div class="line"></div>
          <div class="faq">
            <p class="faq-title">Are there any limitations on the number of URLs I can shorten?</p> <img
              src={plus} alt="" />
          </div>
          <div class="line"></div>
          <div class="faq">
            <p class="faq-title">Can I customize the shortened URLs to reflect my brand or content?</p> <img
              src={plus} alt="" />
          </div>
          <div class="line"></div>
          <div class="faq">
            <p class="faq-title">Can I track the performance of my shortened URLs?</p> <img
              src={plus} alt="" />
          </div>
          <div class="line"></div>
          <div class="faq">
            <p class="faq-title">How secure is the URL shortening service? Are the shortened links protected
              against spam or malicious activity?</p> <img src={plus} alt="" />
          </div>
          <div class="line"></div>
          <div class="faq">
            <p class="faq-title">What is a QR code and what can it do?</p> <img src={plus}
              alt="" />
          </div>
          <div class="line"></div>
          <div class="faq">
            <p class="faq-title">Is there an API available for integrating the URL shortening service into
              my own applications or websites?</p> <img src={plus} alt="" />
          </div>
        </div>
      </div> <img src={svg1} alt="" class="img img-left" /><img src={svg2} alt=""
        class="img img-left" /><img src={svg3} alt="" class="img img-left" /> <img
        src={svg4} alt="" class="img img-right" /><img src={svg5} alt=""
          class="img img-right" /><img src={svg6} alt="" class="img img-right" />
    </section>
    <section class="section7">
      <div class="content">
        <h1 class="section7-header">Revolutionizing Link Optimization</h1> <button class="button">Get
          Started</button>
      </div> <img src={svg7} alt="" class="img img-left" /><img src={svg8} alt=""
        class="img img-left" /><img src={svg9} alt="" class="img img-left" /> <img
        src={svg10} alt="" class="img img-right" /><img src={svg11} alt=""
          class="img img-right" /><img src={svg12} alt="" class="img img-right" />
    </section>
    {error && <Collapse in={error.length > 0}><Box position='fixed' width='300px' right={'50px'} top='150px' zIndex={5}  >
      <Alert severity="error" onClose={() => { setError('') }}>{error}</Alert>
    </Box></Collapse>}
    {copied && <Collapse in={copied}><Box position='fixed' width='300px' right={'50px'} top='150px' zIndex={5} >
      <Alert severity="success" onClose={() => { setCopied(false) }}>copied!</Alert>
    </Box></Collapse>}
  </main>

};

export default Home;
