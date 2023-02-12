import React from "react"


export default function Main(){
    return(
        <div  className="main">
           <div  className="allBoxs html">
                <div className="move"></div>
                <h1 className="main_hadding">HTML</h1>
                <ul>
                    <li>HTML stand for HyperText Markup Language.</li>
                    <li>HTML use as markup language for Web pages.</li>
                    <li>HTML5 is latest version of HTML published in Oct 2014.</li>
                    <li>HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages. </li>
                    <li>HTML uses tags to define what manipulation has to be done on the text</li>
                    <li>In HTML Style tag is use for css and Script tag use for js code, We can also connect these code of file externally by putting link tag. </li>
                </ul>
           </div>

            <div className="allBoxs css">
               <div className="move"></div>
               <h1 className="main_hadding">CSS</h1>
                <ul>
                    <li>CSS was first intended in 1994 by Håkon Wium Lie while working at CERN with a computer scientist Tim Berners-Lee.</li>
                    <li>The specifications of CSS are maintained by World Wide Web Consortium (W3C).</li>
                    <li>With CSS we can play with the images and animation.The page layout, animation and quality of images make the first impact before the content catches a viewer’s attention.</li>
                    <li>Without using CSS, it is very typical thing for web designers to lay out their pages with techniques like HTML tables that obstruct accessibility for the vision-impaired users</li>
                    <li>CSS use to make layout of HTML pages.</li>
                    <li>CSS makes HTML page more attrective.</li>
                </ul>

              
            </div>


            <div className="allBoxs js">
                <div className="move"></div>
                <h1 className="main_hadding">JS</h1>

                <ul>
                    <li>JavaScript was invented in 1995 by Brendan Eich for use with the Netscape 2 browser</li>
                    <li>The original name for JavaScript was Mocha</li>
                    <li>JavaScript took just 10 days to develop.</li>
                    <li>JavaScript was probably named after Java.</li>
                    <li>GitHub says JavaScript is the Most Popular language in the world.</li>
                    <li>JavaScript is responsible for Web2, precursor to Web3</li>
                    <li>JavaScript has many implementations, but a single “owner”: ECMA</li>
                </ul>
                
            </div>
            <div  className="allBoxs react">
                <div className="move"></div>
                <h1 className="main_hadding">React</h1>

                <ul>
                    <li>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. </li>
                    <li>React is maintained by Facebook</li>
                    <li> React can be used as a base in the development of single-page, mobile, or server-rendered applications.</li>
                    <li>JSX, or JavaScript Syntax Extension, is an extension to the JavaScript language syntax that is used in React.</li>
                    <li>React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called "FaxJS".</li>
                    <li>React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook's.</li>

                    <a id="aTag" href="#scrollTop">Go to Top</a>
                    <p>(React also having id and we can use to move from one componant to other componant ,eg. here i am using move to main componant to nav componant)</p>
                </ul>

            </div>
        </div>
    )
}