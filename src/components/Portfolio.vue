<template>
    <div id="portfolioBody">
        <div class="title">Matthew Ghera</div>
        <div id="medallionCollection">
            <mediaMedallion class="medallion" :medallionType='github.name' :medallionColor='github.color' :medallionLink='github.link'></mediaMedallion>
            <mediaMedallion class="medallion" :medallionType='linkedIn.name' :medallionColor='linkedIn.color' :medallionLink='linkedIn.link'></mediaMedallion>
            <mediaMedallion class="medallion" :medallionType='email.name' :medallionColor='email.color' :medallionLink='email.link'></mediaMedallion>
        </div>
        <div class="section">
            <div class="sectionTitle">
                Education
            </div>
            <hr>
            <div class="subsection">
                <div class="subsectionTitle">
                    Purdue University - Bachelor's in Computer Engineering | Aug 2021 - May 2024
                </div> 
                <ul class="bullets">
                    <li> 
                        <a href="./transcript.pdf" target="blank" class="link">GPA: 4.0</a> | 
                        Trustees Scholarship Recipient | 
                        <a href="https://www.purdue.edu/commencement/students/gpaStandards/" target="blank" class="link">Graduation with Highest Distinction</a>
                    </li>
                    <li>Notable Courses</li>
                    <ul class="bullets">
                        <li>Data Structures & Algorithms</li>
                        <li>Software Engineering</li>
                        <li>Microprocessor Systems & Interfacing</li>
                        <li>Computer Security</li>
                        <li>Operating Systems</li>
                        <li>Signals & Systems</li>
                        <li>Data Science</li>
                        <li>Digital System Design</li>
                        <li>Electrical Engineering Fundamentals I, II</li>
                    </ul>
                </ul>
            </div>
        </div>
        <div class="section">
            <div class="sectionTitle">
                Projects
            </div>
            <hr>
            <div class="subsection" id="gallerySection">
                Enter <a href="/Gallery" id="galleryButton" target="blank">The Gallery</a> to view my projects in-depth <a href="/Gallery" id="galleryButton2" target="blank">Enter &#8594;</a>
            </div>
        </div>
        <div class="section">
            <div class="sectionTitle">
                Experience
            </div>
            <hr>
            <timeline> </timeline>
        </div>
        <div class="section">
            <div class="sectionTitle">
                Awards & Honors
            </div>
            <hr>
            <ul class="bullets">
                <li>Graduation with Highest Distincion | May 2024</li>
                <li>Dean’s List | Dec 2021, May 2022, Dec 2022, May 2023, Dec 2023, May 2024</li>
                <li>Purdue Computer Engineering Scholarship | July 2022</li>
                <li>Purdue Trustee’s Scholarship | April 2021</li> 
                <li>Amazon Future Engineer Scholarship | April 2021</li>
            </ul>
        </div>
        <div class="section">
            <div class="sectionTitle">
                Skills
            </div>
            <hr>
            <ul class="bullets">
                <li>
                    <span class="skillHeader">Programming/Web development languages: </span>
                    <span id="skills" v-for="programmingLanguage in programmingLanguages" :key="programmingLanguage">
                        <span><skillTag :skill="programmingLanguage" :color="red"/></span>
                    </span>
                </li>
                <li>
                    <span class="skillHeader">Frameworks & technical tools:</span>
                    <span id="skills" v-for="tool in tools" :key="tool">
                        <span><skillTag :skill="tool" :color="red"/></span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import skillTag from './skillTag.vue'
    import mediaMedallion from './mediaMedallion.vue'
    import timeline from './Timeline.vue'

    export default {
        name: 'Portfolio',
        meta: [
            { name: 'description', content: "Matthew Ghera's Website" },
        ],
        data() {
            return {
                red: '#aa0000',
                programmingLanguages: ['Python', 'C', 'C++', 'Java', 'CSS', 'HTML', 'JavaScript (JS)', 'TypeScript', 'PHP', 'MATLAB', 'System Verilog', 'Bash', 'Ruby on Rails', 'HAML'],
                tools: ['Vue.JS', 'version control (GIT)', 'Linux', 'REST API', 'OpenCV', 'CAD in Fusion 360', '3D printing troubleshooting', 'Circuit Schematic Editing in KiCad', 'PCB design', 'AWS (EC2/S3/CloudWatch)', 'Lustre File Systems', 'Microcontroller Sensors/Peripherals(GPIO, PWM)', 'Communication Protocols (SPI, I2C, USART)' ],
                github:{name: "github", color: "rgb(120,100,200)", link: "https://github.com/mghera02"},
                linkedIn:{name: "linkedIn", color: "rgb(50,65,255)", link: "https://www.linkedin.com/in/matthewghera/"},
                email:{name: "email", color: "rgb(20,120,255)", link: "mailto:gheramatt02@gmail.com"},
            }
        },
        methods: {
        },
        props: {
        },
        components: {
            skillTag,
            mediaMedallion,
            timeline
        },
        mounted: function () {
          
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono');
    @import url('https://fonts.googleapis.com/css2?family=Orbitron');
 
    #portfolioBody {
        position: relative;
        top: 50px;
        width: 100%;
        /*border: solid;
        border-color: blue;*/
        font-family: 'Michroma';
    }

    #portfolioBody .title {
        position: relative;
        width: 100vw;
        text-align:center;
        /*border: solid;
        border-color: red;*/
        font-size: 3rem;
        font-weight: bold;
    }

    #portfolioBody .sectionTitle {
        font-size: 2rem;
    }

    #portfolioBody .section {
        position: relative;
        left: 5%;
        width: 90%;
        margin-top: 30px;
        /*border: solid;
        border-color: green;*/
    }

    #portfolioBody .subsectionTitle {
        color: #ff7799;
        font-size: 1.25rem;
        position: relative;
        top: 10px;
    }

    #portfolioBody .bullets {
        position: relative;
        font-size: 1.15rem;
    }

    @media screen and (max-width: 600px) {
        #portfolioBody .bullets {
            font-size: .85rem;
        }

        #portfolioBody .subsectionTitle {
            font-size: 1rem;
            top: 0px;
        }
    }

    ul {
        position: relative;
        list-style: none;
        margin-left: 20px;
        padding-left: 1.2em;
    }

    ul li:before {
        content: "○";
        position: absolute;
        left: 0px;
        color:#ffccee;
        text-shadow: 
            0rem 0rem 1px #ff7788,
            0rem 0rem 2px #ff5566, 
            0rem 0rem 3px #ff4444, 
            0rem 0rem 4px #ff2222, 
            0rem 0rem 5px #ff0000,   
            0rem 0rem 6px #ff0000, 
            0rem 0rem 7px #ff0000;
    }

    #portfolioBody .link {
        color: #aa0000;
        cursor: pointer;
    }

    #galleryButton {
        color:#ffccee;
        font-size: 2rem;
        font-family: 'Iceland';
        text-shadow: 
            0rem 0rem 1rem #ff7788,
            0rem 0rem 2rem #ff5566, 
            0rem 0rem 4rem #ff4444, 
            0rem 0rem 6rem #ff2222, 
            0rem 0rem 8rem #ff0000,   
            0rem 0rem 10rem #ff0000, 
            0rem 0rem 12rem #ff0000;
    }

    #galleryButton2 {
        margin-left: 50px;
        color:#ffccee;
        font-size: 2rem;
        font-family: 'Iceland';
        text-shadow: 
            0rem 0rem 1rem #ff7788,
            0rem 0rem 2rem #ff5566, 
            0rem 0rem 4rem #ff4444, 
            0rem 0rem 6rem #ff2222, 
            0rem 0rem 8rem #ff0000,   
            0rem 0rem 10rem #ff0000, 
            0rem 0rem 12rem #ff0000;
    }

    #gallerySection {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: "Orbitron";
    }

    .skillHeader {
        position: relative;
        top:-10px;
    }

    #skillTag {
        position: relative;
        top:-10px;
    }

    #medallionCollection {
        position: relative;
        left: 5%;
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .medallion {
        margin-left: 20px; 
        margin-right: 20px; 
        margin-top: 20px;
    }
</style>