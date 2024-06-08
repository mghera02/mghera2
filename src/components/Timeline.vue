<template>
    <div class="timeline">
        <div class="container left">
            <div class="content">
                <h2>2019</h2>
                <div class="subsection">
                    <div class="subsectionTitle">
                        Indiana IoT Lab – Intern
                    </div>
                    <ul class="bullets">
                        <li>Created/designed a Smart Fan with the following features: Bluetooth accessibility, variable speeds, portable design, white noise, and programmable temperature control system</li>
                        <li>Used various 3D printing (CAD) hardware/software, laser cutting, and an Arduino ESP32 to create physical prototype</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container right large">
            <div class="content">
                <h2>2019 - 2021</h2>
                <div class="subsection">
                    <div class="subsectionTitle">
                        SchedLink LLC – CEO & Founder & Full-Stack Developer
                    </div> 
                    <ul class="bullets">
                        <li> 
                            <a href="https://youtu.be/HQGwd_BH2-Y" target="blank" class="link"> Identified the business need and technical solution to aid students/faculty by creating an app/website</a>
                        </li>
                        <li> 
                            <a href="https://github.com/codingforfishers/SchedLinkBeta" target="blank" class="link">Designed full-stack systems (PHP, MySQL database, HTML, CSS, JS)</a>
                        </li>
                        <li>
                            Developed the initial vision, mission, and project management structure for the team. Achieved 10k unique views/day for one school system, and initiated replication in other high schools to eliminate costs for administration by having a free, multi-tool site
                        </li>
                        <li> 
                            <div @click="goToElemOnDifferentPage(SchedElem)" class="link">View in the Gallery</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container left medium">
            <div class="content">
                <h2>2021</h2>
                <div class="subsection">
                    <div class="subsectionTitle">
                        Google Computer Science Summer Institute (CSSI)
                    </div>
                    <ul class="bullets">
                        <li>Completed an introductory, project-based JavaScript and Firebase curriculum taught by Google engineers</li>
                        <li>Created web-based product, collaborated with other CSSI students, and presented to Google employees</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container right small">
            <div class="content">
                <h2>2022</h2>
                <div class="subsection">
                    <div class="subsectionTitle">
                        Amazon – Software Development Engineer Intern
                    </div>
                    <ul class="bullets">
                        <li>Created webpage for Customer Service Representatives and Developers to debug issues on Amazon’s sellerCentral site</li>
                        <li>Developed using Vue.JS, wrote unit tests and documentation, deployed webpage to production</li>
                        <li>Designed the user interface and built robust code infrastructure to allow future additions</li>
                        <li> 
                            <div @click="goToElemOnDifferentPage(APAEElem)" class="link">View in the Gallery</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container left large">
            <div class="content">
                <h2>2023</h2>
                <div class="subsection">
                    <div class="subsectionTitle">
                        Amazon (AWS) – Software Development Engineer Intern
                    </div>
                    <ul class="bullets">
                        <li>
                            Developed several bash scripts that bypass the need for operators to SSH into file systems and still execute the respective command
                        </li>
                        <li>
                            Designed extendable and customizable dashboard for operators that retrieves real-time per-filesystem metrics (built using Ruby on Rails/HAML/AWS CloudWatch API)
                        </li>
                        <li>
                            Reduced operator time-to-mitigate customer issues for Lustre filesystems
                        </li>
                        <li> 
                            <div @click="goToElemOnDifferentPage(s3Elem)" class="link">View in the Gallery</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Timeline',
        meta: [
            { name: 'description', content: "Matthew Ghera's Website" },
        ],
        data() {
            return {
                s3Elem: 'S3 Integration Dashboard',
                APAEElem: 'Accessible Partner Account Explorer',
                SchedElem: 'SchedLink',
            }
        },
        methods: {
            goToElemOnDifferentPage(elemName) {
                const routeData = this.$router.resolve({ path: '/Gallery', query: { 'elem': elemName } });
                window.open(routeData.href, '_blank');
            }
        },
        props: {
        },
        components: {
        },
        mounted: function () {
          
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono');
    @import url('https://fonts.googleapis.com/css2?family=Orbitron');

    * {
        box-sizing: border-box;
    }

    h2 {
        font-size: 2em;
        font-weight: bold !important;
    }

    .timeline {
        position: relative;
        margin: 0 auto;
    }

    .timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: rgba(190,190,190,.30);
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
    }

    .container {
        padding: 10px 40px;
        position: relative;
        width: 50%;
    }

    .container::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: #ff9999;
        border: 4px solid rgba(0,0,0,0);
        box-shadow: 0rem 0rem 1.5rem 0.75rem #aa2222;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }

    .left {
        left: 0;
    }

    .right {
        left: 50%;
    }

    .left::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
    }

    .right::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }

    .right::after {
        left: -16px;
    }

    .small {
        position: relative;
        margin-top: -5.0em;
    }

    .medium {
        position: relative;
        margin-top: -9em;
    }

    .large{
        position: relative;
        margin-top: -11em;
    }
    

    .content {
        padding: 20px 30px;
        background-color: rgba(0,0,0,0);
        border: solid;
        border-color: white;
        position: relative;
        border-radius: 6px;
    }

    @media screen and (max-width: 600px) {
        .timeline::after {
            left: 31px;
        }

        .container {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
        }

        .container::before {
            left: 60px;
            border: medium solid white;
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
        }

        .left::after, .right::after {
            left: 15px;
        }

        .right {
            left: 0%;
        }

        h2 {
            font-size: 1.25em;
            font-weight: bold !important;
        }

        .small, .medium, .large {
            margin-top: 0em;
        }
    }
</style>