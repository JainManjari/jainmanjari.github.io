var list = document.querySelectorAll(".nav-item a");
var id1;
let header = document.getElementById("body-header");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function (event) {
    event.preventDefault();
    $("#navbarNav").removeClass("show");
    var value = this.textContent.trim().toLowerCase();
    var sectionId = document.getElementById(value);
    var curr = 0;
    var targetPos = sectionId.getBoundingClientRect().y - 50;
    if (value == "contact") {
      targetPos = sectionId.getBoundingClientRect().y - 80;
    }
    if (value == "about me") {
      targetPos = sectionId.getBoundingClientRect().y + 10;
    }
    //console.log(sectionId,targetPos)
    $(" #leaves i", sectionId).css("-webkit-animation", "none");
    $(" #leaves i:nth-of-type(2n)", sectionId).css("-webkit-animation", "none");
    $(" #leaves i:nth-of-type(3n)", sectionId).css("-webkit-animation", "none");
    // id1=setInterval(jsnav,10,targetPos);
    //  id1=setInterval(function()
    //  {
    //      scrollVertical(sectionId)
    //  },10);
    function jsnav() {
      if (targetPos >= 0) {
        if (curr >= targetPos) {
          $(" #leaves i", sectionId).css(
            "-webkit-animation",
            "falling 5s 0s 1"
          );
          $(" #leaves i:nth-of-type(n)", sectionId).css(
            "-webkit-animation-delay",
            "1.9s"
          );
          $(" #leaves i:nth-of-type(2n)", sectionId).css(
            "-webkit-animation",
            "falling2 5s 0s 1;"
          );
          $(" #leaves i:nth-of-type(2n)", sectionId).css(
            "-webkit-animation-delay",
            "3.9s"
          );
          $(" #leaves i:nth-of-type(3n)", sectionId).css(
            "-webkit-animation-delay",
            "2.3s"
          );
          $(" #leaves i:nth-of-type(4n)", sectionId).css(
            "-webkit-animation-delay",
            "4.4s"
          );
          $(" #leaves i:nth-of-type(5n)", sectionId).css(
            "-webkit-animation-delay",
            "5.s"
          );
          $(" #leaves i:nth-of-type(3n)", sectionId).css(
            "-webkit-animation",
            "falling3 5s 0s 1;"
          );
          clearInterval(id1);
          return;
        }
        window.scrollBy(0, 200);
        curr += 200;
      } else {
        if (curr <= targetPos) {
          $(" #leaves i", sectionId).css(
            "-webkit-animation",
            "falling 5s 0s 1"
          );
          $(" #leaves i:nth-of-type(n)", sectionId).css(
            "-webkit-animation-delay",
            "1.9s"
          );
          $(" #leaves i:nth-of-type(2n)", sectionId).css(
            "-webkit-animation",
            "falling2 5s 0s 1;"
          );
          $(" #leaves i:nth-of-type(2n)", sectionId).css(
            "-webkit-animation-delay",
            "3.9s"
          );
          $(" #leaves i:nth-of-type(3n)", sectionId).css(
            "-webkit-animation-delay",
            "2.3s"
          );
          $(" #leaves i:nth-of-type(4n)", sectionId).css(
            "-webkit-animation-delay",
            "4.4s"
          );
          $(" #leaves i:nth-of-type(5n)", sectionId).css(
            "-webkit-animation-delay",
            "5.s"
          );
          $(" #leaves i:nth-of-type(3n)", sectionId).css(
            "-webkit-animation",
            "falling3 5s 0s 1;"
          );
          clearInterval(id1);
          return;
        }
        window.scrollBy(0, -200);
        curr -= 200;
      }
    }
    var id1 = setInterval(jsnav, 5);
  });
}

// function scrollVertical(sectionId)
// {
//     var secCor=sectionId.getBoundingClientRect().top;
//     if(secCor<=0)
//     {
//         clearInterval(id1);
//         return;
//     }
//     window.scrollBy(0,50);
// }

var skillDisplay = document.getElementsByClassName("skill-display")[0];
var progessBars = document.querySelectorAll(".skill-progress > div");
var progessBar = document.querySelectorAll(".skill-progress");
var sections = $("section");
var animationDoneSection = new Array(sections.length);
for (let i = 0; i < animationDoneSection.length; i++) {
  animationDoneSection[i] = false;
}

let skillDisplayHeaders = $(
  ".skill-display .skill-display-box .accordion-item .accordion-header"
);

let experienceTimelineContents = $("#experience .timeline .timeline-content");

for (let skillDisplayHeader of skillDisplayHeaders) {
  skillDisplayHeader.addEventListener("click", function (e) {
    e.preventDefault();
    let id = skillDisplayHeader.attributes.id.value;
    let accordionCollapseId = skillDisplayHeader.attributes.id.value.replace(
      "heading",
      "collapse"
    );
    let button = $(`#${id} button`);
    let isCollapsed = button.attr("class").includes("collapsed");
    if (isCollapsed) {
      let progessBars = $(`#${accordionCollapseId} .skill-progress`);
      for (var i = 0; i < progessBars.length; i++) {
        initialisedBar(progessBars[i].firstElementChild);
        fillBar(progessBars[i].firstElementChild);
      }
    }
  });
}

let intuitExp = `	<div class="timeline-exp-display-close">
					<button>
						<img src="assets/images/icons8-cross-48.png">
					</button>
				</div>
				<br>
				<div class="inside-timeline-box">
					<div>
						<img src="assets/images/intuit.jpeg" style="width: 85px;height: 85px;">
					</div>
					<div class="companytag">
						<span class="heading1"> Software Engineer 2 </span>
						<p class="heading2"> Intuit </p>
					</div>
				</div>

				<div class="timeline-date">
					<span>Jul 2024-Jan 2025</span>
				</div>

				<br>

				<div class="description accordion" id="accordion-intuit">
					<div class="accordion-item">
						<h2 class="accordion-header" id="accordion-intuit-heading-1">
							<button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#accordion-intuit-collapse-1" aria-expanded="false" aria-controls="accordion-intuit-collapse-1">
								<b style="color:#1E1818"> <img src="assets/images/icons8-travel-itinerary-64.png">
									Journey </b>
								<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
							</button>
						</h2>
						<div id="accordion-intuit-collapse-1" class="accordion-collapse collapse" aria-labelledby="accordion-intuit-heading-1">
							<div class="accordion-body">
								<span style="font-size: 15.5px;"> 
									I am part of the <strong>QuickBooks-Print Team</strong>, responsible for rendering and printing customizable invoices, 
									estimates, sales receipts, and more, via PDF preview, PDF generation, or email delivery. 
									TechStack used <strong>Java, Spring, React, graphQL, REST APIs, AWS Lambda, DynamoDB and MySQL</strong>.
								</span>
							</div>
						</div>
					</div>

					<div class="accordion-item">
						<h2 class="accordion-header" id="accordion-intuit-heading-2">
							<button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#accordion-intuit-collapse-2" aria-expanded="false" aria-controls="accordion-intuit-collapse-2">
								 <b style="color:#1E1818">
									<img src="assets/images/icons8-applaud-68 (1).png">
									Accolades
								</b>
								<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
							</button>
						</h2>
						<div id="accordion-intuit-collapse-2" class="accordion-collapse collapse" aria-labelledby="accordion-intuit-heading-2">
							<div class="accordion-body">
								<ul>
									<li>
										<strong> Developer’s Velocity Spotlight</strong>: Awarded <strong>INR 4000</strong> for consistent coding for 
										Print ‐ QuickBooks, Intuit in November 2024.
									</li>
									<li>
										<strong> New Joinee’s Bug Bounty Spotlight</strong>: Awarded <strong> INR 25K </strong> for resolving +13 
										(out of SLA) bugs within 45 days for Print ‐ QuickBooks, Intuit in 2024.
									</li>
									<li>
										<strong> Developer’s Velocity Spotlight</strong>: Awarded <strong>INR 4000</strong> for consistent coding for 
										Print ‐ QuickBooks, Intuit in July 2024.
									</li>
								</ul>
							</div>
						</div>



					</div>
</div>`;

let paypalExp = `	<div class="timeline-exp-display-close">
					           <button>
						           <img src="assets/images/icons8-cross-48.png">
				            </button>
				         </div>
				         <br>

                 		<div class="inside-timeline-box">
						<div style="background: white;
						border-radius: 50%;
						height: 65px;
						padding: 5px;">
							<img src="assets/images/paypallogo.png" style="width: 65px;height: 65px;">
						</div>
						<div class="companytag">
							<span class="heading1"> Software Engineer 2 </span>
							<p class="heading2"> PayPal </p>
						</div>
					</div>
					<div class="timeline-date">
						<span>Sept 2021-Jul 2024</span>
					</div>
					<br>
					<div class="description accordion" id="accordion-paypal">
						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-paypal-heading-1">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse" 
								data-target="#accordion-paypal-collapse-1" aria-expanded="false" aria-controls="accordion-paypal-collapse-1">
									<b style="color:#1E1818"> <img src="assets/images/icons8-travel-itinerary-64.png">
										Journey </b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-paypal-collapse-1" class="accordion-collapse collapse" aria-labelledby="accordion-paypal-heading-1"
								>
								<div class="accordion-body">
									<span style="font-size: 15.5px;"> I work within <strong>Risk as a Service</strong>,
										specifically
										in Fraud Protection, which focuses on combating fraudulent activities through
										meticulous
										risk analysis and investigations powered by advanced machine learning models and
										analytics.
										<br>
										<br>
										In my role, I've been involved in several impactful projects:
										<br>
										1. Integration of a <strong>new merchant fee charging platform</strong> tailored
										to the
										services/products utilized. TechStack used <strong> Kotlin
										and postgres </strong>. Performance and automation testing was carried out through <strong> Kotlin worksheets </strong>.
										<br>
										2. I achieved a <strong>35% reduction in REST API response time</strong> through
										centralized
										critical data handling, eliminating redundant <strong>aerospike cache</strong> and <strong>MySQL db</strong> calls, and
										optimizing
										nested loops in <strong>Java</strong>.
										<br>
										3. Streamlined <strong> aerospike cache and MySQL space utilization by 28%</strong> via a single data
										source
										implementation, simplifying merchant onboarding and eliminating duplicate data
										storage.
										<br>
										4.I enhanced data retrieval efficiency and cost management by reducing nested query
										depth from over ten levels to just two or fewer for complex <strong> big  queries</strong>.
										<br>
										5. Boosted revenue by approximately 11% by expanding the activity tab for
										merchants to
										monitor CRUD operations on the Reports feature, alongside 
										introducing a 
										<strong> scheduler for computing top fields </strong>
										used in report generations.
										<br>
										6. <strong>Automated complex algorithms using PayPal Iguanas</strong>, a machine
										learning model, to provide customized recommendations based on merchant-set filters,
										significantly
										reducing manual intervention.
										<br>
										<br>
										In addition to these projects, I handle various responsibilities such as on-call
										support,
										conducting interviews, delivering presentations, and mentoring.
										I've also been actively involved in cross-platform product development, spanning
										<strong>backend (Java | Spring | Kafka), frontend (using React), and data engineering (Iguanas)</strong> domains.</span>
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-paypal-heading-2">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-paypal-collapse-2" aria-expanded="false" aria-controls="accordion-paypal-collapse-2">
									 <b style="color:#1E1818">
										<img src="assets/images/icons8-applaud-68 (1).png">
										Accolades
									</b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-paypal-collapse-2" class="accordion-collapse collapse" aria-labelledby="accordion-paypal-heading-2"
								>
								<div class="accordion-body">
									<ul>
										<li>My hackathon team <strong>SaMuRais</strong> was lauded with <strong>People's Choice Award, ($2500
												USD)</strong> in 2023
											RaaS
											(Simility) PayPal Hackathon.</li>
										<li>My cyber security hackathon team <strong>Cyborgs</strong> secured <strong>6th Rank in the 2023 PayPal
												Cyber‑Security</strong>
											Competition. Received Bravo on PayPal Profile.</li>
										<li>My hackathon team <strong>Udaan</strong> was <strong>winner, ($1000 USD)</strong> in 2022 RaaS
											(Simility) PayPal
											Hackathon.
										</li>
										<li>My cybersecurity hackathon team <strong>Cyborgs</strong> secured <strong> 16th Rank in the 2022 PayPal
												Cyber‑Security
												Competition.</strong></li>
										<li>Received multiple bravos, badges, spot awards and recognition on my PayPal
											Profile.
										</li>
										<li>I was promoted from Software Engineer 1 to Software Engineer 2 within 1 year
											of
											joining.
										</li>
									</ul>
								</div>
							</div>



						</div>

					</div>
				



					`;

let bofaExp = `	<div class="timeline-exp-display-close">
          <button>
            <img src="assets/images/icons8-cross-48.png">
         </button>
      </div>
      <br>
      					<div class="inside-timeline-box">
						<div style="background: white;
						border-radius: 50%;
						height: 60px;
						padding: 4px;">
							<img src="assets/images/Bank-Of-America-Logo.png" style="width: 65px;height: 50px;">
						</div>
						<div class="companytag">
							<span class="heading1"> Senior Technical Associate</span>
							<p class="heading2"> Bank of America </p>
						</div>
					</div>
					<div class="timeline-date">
						<span>July 2020-Sept 2021</span>
					</div>
					<br>
					<div class="description accordion" id="accordion-bofa">
						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-bofa-heading-1">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-bofa-collapse-1" aria-expanded="false"
									aria-controls="accordion-bofa-collapse-1">
									<b style="color:#1E1818"> <img src="assets/images/icons8-travel-itinerary-64.png">
										Journey </b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-bofa-collapse-1" class="accordion-collapse collapse"
								aria-labelledby="accordion-bofa-heading-1">
								<div class="accordion-body">
									<span style="font-size: 15.5px;">
										I was briefly part of the CARES Project from October 2020 to March 2021. 
										Then, I was employed in the <strong>GBT (Global Banking Technologies) WCBT (Wholesale
										Credit Banking Technologies)</strong>.
										<br>
										<br>
										1. Worked with a dedicated team of 30 professionals focused on developing <strong>Squirrel UI using React</strong>. 
										<br>
										2. This application was instrumental in securely storing and retrieving documents for <strong> NLP activities like 
										   data classification and classification pipelines</strong>.
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-bofa-heading-2">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-bofa-collapse-2" aria-expanded="false"
									aria-controls="accordion-bofa-collapse-2">
									 <b style="color:#1E1818"><img src="assets/images/icons8-applaud-68 (1).png">Accolades</b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-bofa-collapse-2" class="accordion-collapse collapse"
								aria-labelledby="accordion-bofa-heading-2">
								<div class="accordion-body">
									<ul>
										<li>I was lauded with the <strong>Bronze Medal (Global Recognition)</strong> for
											my prominent involvement in
											the CARES Project.</li>
									</ul>
								</div>
							</div>
						</div>

					</div>



`;

let cnExp = `	<div class="timeline-exp-display-close">
          <button>
            <img src="assets/images/icons8-cross-48.png">
         </button>
      </div>
      <br>
      				<div class="inside-timeline-box">
						<div>
							<img src="assets/images/codingninajsicon.png" width="55px" height="55px">
						</div>
						<div class="companytag">
							<span class="heading1"> Teaching Assistant</span>
							<p class="heading2"> Coding Ninjas </p>
						</div>
					</div>
					<div class="timeline-date">
						<span>Feb 2020-June 2020</span>
					</div>
					<br>
					<div class="description accordion" id="accordion-cn">
						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-cn-heading-1">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-cn-collapse-1" aria-expanded="false"
									aria-controls="accordion-cn-collapse-1">
									<b style="color:#1E1818"> <img src="assets/images/icons8-travel-itinerary-64.png">
										Journey 
									</b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-cn-collapse-1" class="accordion-collapse collapse"
								aria-labelledby="accordion-cn-heading-1">
								<div class="accordion-body">
									<span style="font-size: 15.5px;"><strong>Web Development:</strong> I was responsible
										for debugging codes, taking doubts sessions, and helping students with their
										assignments and projects.
										<br>
										<br>
										1. <strong> Served as a Teaching Assistant for an 86 student batch </strong> in the Full Stack Development Course (MERN).
										<br>
										2. Engaged in 300+ meetings and addressed 750+ inquiries, maintaining an <strong> impressive rating of 4.86 out of 5 </strong>.
									</span>
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-cn-heading-2">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-cn-collapse-2" aria-expanded="false"
									aria-controls="accordion-cn-collapse-2">
									 <b style="color:#1E1818">
										<img src="assets/images/icons8-applaud-68 (1).png">
										Accolades
									</b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-cn-collapse-2" class="accordion-collapse collapse"
								aria-labelledby="accordion-cn-heading-2">
								<div class="accordion-body">
									<ul>
										<li>Evaluated 61 assignments, and solved 820 doubts with <strong>an average
												rating of
												4.89/5</strong>.</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
`;

let wiproExp = `	<div class="timeline-exp-display-close">
          <button>
            <img src="assets/images/icons8-cross-48.png">
         </button>
      </div>
      <br>
      					<div class="inside-timeline-box">
						<div>
							<img src="assets/images/wipro.png" width="55px" height="55px">
						</div>
						<div class="companytag">
							<span class="heading1"> Software Development Intern</span>
							<p class="heading2"> Wipro Limited </p>
						</div>
					</div>
					<div class="timeline-date">
						<span>May 2019-July 2019</span>
					</div>
					<br>
					<div class="description accordion" id="accordion-wipro">
						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-wipro-heading-1">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-wipro-collapse-1" aria-expanded="false"
									aria-controls="accordion-wipro-collapse-1">
									<b style="color:#1E1818"> <img src="assets/images/icons8-travel-itinerary-64.png">
										Journey </b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-wipro-collapse-1" class="accordion-collapse collapse"
								aria-labelledby="accordion-wipro-heading-1">
								<div class="accordion-body">
									<span style="font-size: 15.5px;">I was part of a group dedicated to SAP Hybris.
										During the initial onboarding days, I learned about agile and waterfall
										methodologies.
										I was assigned a project to automate an <strong>E-commerce application using
											Selenium</strong>.
										Additionally, I automated other web applications within the team that were
										dedicated to Google APIs.</span>
								</div>
							</div>
						</div>


					</div>
`;

let ericssonExp = `	<div class="timeline-exp-display-close">
          <button>
            <img src="assets/images/icons8-cross-48.png">
         </button>
      </div>
      <br>
      		<div class="inside-timeline-box">
						<div>
							<img src="assets/images/erricsonicon.png" width="55px" height="55px">
						</div>
						<div class="companytag">
							<span class="heading1"> Trainee</span>
							<p class="heading2">Ericsson </p>
						</div>
					</div>
					<div class="timeline-date">
						<span>March 2019-March 2019</span>
					</div>
					<br>
					<div class="description accordion" id="accordion-eric">
						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-eic-heading-1">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-eric-collapse-1" aria-expanded="false"
									aria-controls="accordion-eric-collapse-1">
									<b style="color:#1E1818"> <img src="assets/images/icons8-travel-itinerary-64.png">
										Journey </b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-eric-collapse-1" class="accordion-collapse collapse"
								aria-labelledby="accordion-eic-heading-1">
								<div class="accordion-body">
									<span style="font-size: 15.5px;"><strong>Ericsson Career Connect Program:</strong>
										This program provided in-depth learning about Telecommunication Networks,
										including 1G, 2G, 3G, 4G, and 5G.</span>
								</div>
							</div>
						</div>
					</div>
`;


let rivieraVitRR = `	<div class="timeline-exp-display-close">
          <button>
            <img src="assets/images/icons8-cross-48.png">
         </button>
      </div>
      <br>
      			<div class="inside-timeline-box">
						<div>
							<img src="assets/images/rivieraicon2.png" class="riviera-img">
						</div>
						<div class="companytag">
							<span class="heading1"> Coordinator</span>
							<p class="heading2"> Riviera, VIT Vellore </p>
						</div>
					</div>
					<div class="timeline-date">
						<span>Dec 2018-Feb 2019</span>
					</div>
					<br>
					<div class="description accordion" id="accordion-vit-19">
						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-vit-19-heading-1">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-vit-19-collapse-1" aria-expanded="false"
									aria-controls="accordion-vit-19-collapse-1">
									<b style="color:#1E1818"> <img src="assets/images/icons8-travel-itinerary-64.png">
										Journey </b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-vit-19-collapse-1" class="accordion-collapse collapse"
								aria-labelledby="accordion-vit-19-heading-1">
								<div class="accordion-body">
									<span style="font-size:15.5px;">
										During my third year at VIT, I coordinated the <strong>Registration and
											Reception Committee</strong> for our cultural fest, Riviera.
										Our committee served as the initial point of contact for external participants,
										ensuring they felt comfortable both on and off campus.
										We assisted them in exploring activities aligned with their preferences and
										provided support for their registration.
									</span>
								</div>
							</div>
						</div>
					</div>		
`;


let belExp = `	<div class="timeline-exp-display-close">
          <button>
            <img src="assets/images/icons8-cross-48.png">
         </button>
      </div>
      <br>	
      				<div class="inside-timeline-box">
						<div>
							<img src="assets/images/bhelicon.png">
						</div>
						<div class="companytag">
							<span class="heading1">Intern</span>
							<p class="heading2">Bharat Electronics Limited</p>
						</div>
					</div>
					<div class="timeline-date">
						<span>May 2018-June 2018</span>
					</div>
					<br>
					<div class="description accordion" id="accordion-bel">
						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-bel-heading-1">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-bel-collapse-1" aria-expanded="false"
									aria-controls="accordion-bel-collapse-1">
									<b style="color:#1E1818"> <img src="assets/images/icons8-travel-itinerary-64.png">
										Journey </b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-bel-collapse-1" class="accordion-collapse collapse"
								aria-labelledby="accordion-bel-heading-1">
								<div class="accordion-body">
									<span style="font-size: 15.5px;">
										During this internship, I was familiarized with all the major departments of the
										company through the rotational program.
										These departments included <strong>Radar Lab, Works Assembly</strong>, Quality
										Control, Printed Circuit Boards,
										Test Automation and Repairing, Magnetic, and P & S Electrical.
										This comprehensive exposure provided me with a well-rounded understanding of the
										company's operations
										and enhanced my technical skills across various domains.</span>
								</div>
							</div>
						</div>
					</div>
`;

let rivieraVitGC = `	<div class="timeline-exp-display-close">
          <button>
            <img src="assets/images/icons8-cross-48.png">
         </button>
      </div>
      <br>	
      				<div class="inside-timeline-box">
						<div>
							<img src="assets/images/rivieraicon2.png" class="riviera-img">
						</div>
						<div class="companytag">
							<span class="heading1"> Volunteer</span>
							<p class="heading2"> Riviera, VIT Vellore </p>
						</div>
					</div>
					<div class="timeline-date">
						<span>Dec 2016-Feb 2017</span>
					</div>
					<br>
					<div class="description accordion" id="accordion-vit-17">
						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-vit-17-heading-1">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-vit-17-collapse-1" aria-expanded="false"
									aria-controls="accordion-vit-17-collapse-1">
									<b style="color:#1E1818"> <img src="assets/images/icons8-travel-itinerary-64.png">
										Journey </b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-vit-17-collapse-1" class="accordion-collapse collapse"
								aria-labelledby="accordion-vit-17-heading-1">
								<div class="accordion-body">
									<span style="font-size: 15.5px;">I volunteered for the <strong>Guest Care
											Committee</strong>, which was responsible for the welfare of celebrities
										attending "Riviera."
										We ensured that all their needs were met and that they had a comfortable and
										enjoyable experience.
										This role taught me valuable skills in hospitality and coordination and helped
										me grow significantly in managing responsibilities and handling high-pressure
										situations effectively.</span>
								</div>
							</div>
						</div>
					</div>
`;


let ecellVit = `	<div class="timeline-exp-display-close">
          <button>
            <img src="assets/images/icons8-cross-48.png">
         </button>
      </div>
      <br>
      			<div class="inside-timeline-box">
						<div>
							<img src="assets/images/ecellviticon.jpg">
						</div>
						<div class="companytag">
							<span class="heading1"> Core Committee Member</span>
							<p class="heading2"> Entrepreneurship Cell, VIT Vellore </p>
						</div>
					</div>
					<div class="timeline-date">
						<span>Feb 2017-Feb 2018</span>
					</div>
					<br>
					<div class="description accordion" id="accordion-ecell">
						<div class="accordion-item">
							<h2 class="accordion-header" id="accordion-ecell-heading-1">
								<button class="accordion-button collapsed" type="button" data-toggle="collapse"
									data-target="#accordion-ecell-collapse-1" aria-expanded="false"
									aria-controls="accordion-ecell-collapse-1">
									<b style="color:#1E1818"> <img src="assets/images/icons8-travel-itinerary-64.png">
										Journey </b>
									<div class="dropdown"><img src="assets/images/icons8-dropdown-50.png"></div>
								</button>
							</h2>
							<div id="accordion-ecell-collapse-1" class="accordion-collapse collapse"
								aria-labelledby="accordion-ecell-heading-1">
								<div class="accordion-body">
									I was part of the <strong>Entrepreneurship Cell</strong> at VIT Vellore, a student
									club dedicated to revitalizing entrepreneurial spirits.
									We organized various cultural events such as the <strong>Entrepreneurship Awareness
										Camp, Hackerton, and the 3-Days Internship Boot Camp</strong>.
									My role as a Content Writer allowed me to explore my innovative side, contributing
									to the club's mission of fostering creativity and entrepreneurship among students.
								</div>
							</div>
						</div>
					</div>
`;



let expDisplayBox = $("#experience .timeline-exp-display-box");
let expDisplayBoxCloseButton = $(
  "#experience .timeline-exp-display-box .timeline-exp-display-close button"
);
let educationAeroplane = $("#education .aeroplane");
let educationDisplayBox = $("#education .timeline-box");
console.log("educationDisplayBox", educationDisplayBox);

for (let experienceTimelineContent of experienceTimelineContents) {
  experienceTimelineContent.addEventListener("click", function (e) {
    e.preventDefault();
    let id = experienceTimelineContent.attributes.id.value;
    console.log("id", id);
    if (id === "intuit") {
      expDisplayBox.append(intuitExp);
    } else if(id==="paypal"){
      expDisplayBox.append(paypalExp);
    } else if(id==="bofa") {
      expDisplayBox.append(bofaExp);
    } else if(id==="coding-ninjas") {
      expDisplayBox.append(cnExp);
    } else if(id==="wipro"){
      expDisplayBox.append(wiproExp);
    } else if(id==="ericsson"){
      expDisplayBox.append(ericssonExp);
    } else if(id==="riviera-vit-rr") {
      expDisplayBox.append(rivieraVitRR);
    } else if(id==="bel"){
      expDisplayBox.append(belExp);
    } else if(id==="riviera-vit-gc"){
      expDisplayBox.append(rivieraVitGC);
    } else {
      expDisplayBox.append(ecellVit);
    }
    expDisplayBox.css({ display: "block" });
    expDisplayBoxCloseButton = $(
      "#experience .timeline-exp-display-box .timeline-exp-display-close button"
    );
    educationAeroplane.css({"zIndex":0});
    educationDisplayBox.after().css({"zIndex":0});
    expDisplayBoxCloseButton.click(function (e) {
      e.preventDefault();
      expDisplayBox.empty();
      expDisplayBox.css({ display: "none" });
      educationAeroplane.css({"zIndex":2});
      educationDisplayBox.after().css({"zIndex":1});
    });
  });
}

function isInViewPort(ele) {
  var coordinates = ele.getBoundingClientRect();
  return coordinates.top <= window.innerHeight;
}

function isInView(ele) {
  var coordinates = ele.getBoundingClientRect();
  return coordinates.y == 75;
}

var animationDone = new Array(progessBar.length);
for (var i = 0; i < animationDone.length; i++) {
  animationDone[i] = false;
}

// top layers animation
var topLayers = $(".toplayer");
var animationDoneTopLayers = new Array(topLayers.length);
for (let i = 0; i < animationDoneTopLayers.length; i++) {
  animationDoneTopLayers[i] = false;
}

function initialiseTopLayers() {
  for (let toplayer of topLayers) {
    initialiseTopLayer(toplayer);
  }
}

initialiseTopLayers();

function initialiseTopLayer(toplayer) {
  toplayer.style.left = 0 + "%";
}

function shiftTopLayers() {
  for (let toplayer of topLayers) {
    shiftTopLayer(toplayer);
  }
}

function shiftTopLayer(toplayer) {
  let curr = 0;
  let value = 100;
  function shift() {
    if (curr >= value) {
      clearInterval(id);
      return;
    }
    curr += 1;
    toplayer.style.left = curr + "%";
  }
  var id = setInterval(shift, 10);
}

function initialisedBars() {
  for (let i of progessBars) {
    i.style.width = 0 + "%";
    i.style.padding = 0 + "px";
  }
}

initialisedBars();

function initialisedBar(bar) {
  bar.style.width = 0 + "%";
  bar.style.padding = 0 + "px";
}

function fillBars() {
  for (let i of progessBars) {
    let value = i.getAttribute("data-bar");
    i.style.padding = 2 + "px";
    let curr = 0;
    function barFill() {
      if (curr >= value) {
        clearInterval(b);
        return;
      }
      curr++;
      i.style.width = curr + "%";
    }
    var b = setInterval(barFill, 1);
  }
}

function fillBar(bar) {
  let value = bar.getAttribute("data-bar");
  bar.style.padding = 2 + "px";
  let curr = 0;
  function barFill() {
    if (curr >= value) {
      clearInterval(b);
      return;
    }
    curr++;
    bar.style.width = curr + "%";
  }
  var b = setInterval(barFill, 3);
}

var html = document.documentElement;
var body = document.getElementsByTagName("body")[0];
var number = document.getElementById("percent-number");
var bodyHeight = body.offsetHeight;
let endtextAnimation = false;
window.addEventListener("scroll", function () {
  if (header.offsetHeight <= pageYOffset) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
  // for (var i = 0; i < progessBar.length; i++) {
  //   if (!animationDone[i] && isInViewPort(progessBar[i])) {
  //     fillBar(progessBar[i].firstElementChild);
  //     animationDone[i] = true;
  //     //console.log("skill");
  //   } else if (!isInViewPort(progessBar[i])) {
  //     animationDone[i] = false;
  //     initialisedBar(progessBar[i].firstElementChild);
  //   }
  // }

  for (let i = 0; i < topLayers.length; i++) {
    if (!animationDoneTopLayers[i] && isInViewPort(topLayers[i])) {
      shiftTopLayer(topLayers[i]);
      animationDoneTopLayers[i] = true;
    } else if (!isInViewPort(topLayers[i])) {
      animationDoneTopLayers[i] = false;
      initialiseTopLayer(topLayers[i]);
    }
  }

  let ele = document.querySelector("#contact #gitSocialIcon");
  let eleview = ele.getBoundingClientRect().top <= window.innerHeight;
  if (eleview && !endtextAnimation) {
    i1 = 0;
    endtextAnimation = true;
    document.getElementById("theend").innerHTML = "";
    setTimeout(typewriter2(), 500);
  }

  for (var i = 0; i < sections.length; i++) {
    if (!animationDoneSection[i] && isInViewPort(sections[i])) {
      $(" #leaves i", sections[i]).css("-webkit-animation", "falling 5s 0s 1");
      $(" #leaves i:nth-of-type(n)", sections[i]).css(
        "-webkit-animation-delay",
        "1.9s"
      );
      $(" #leaves i:nth-of-type(2n)", sections[i]).css(
        "-webkit-animation",
        "falling2 5s 0s 1;"
      );
      $(" #leaves i:nth-of-type(2n)", sections[i]).css(
        "-webkit-animation-delay",
        "3.9s"
      );
      $(" #leaves i:nth-of-type(3n)", sections[i]).css(
        "-webkit-animation-delay",
        "2.3s"
      );
      $(" #leaves i:nth-of-type(4n)", sections[i]).css(
        "-webkit-animation-delay",
        "4.4s"
      );
      $(" #leaves i:nth-of-type(5n)", sections[i]).css(
        "-webkit-animation-delay",
        "5.s"
      );
      $(" #leaves i:nth-of-type(3n)", sections[i]).css(
        "-webkit-animation",
        "falling3 5s 0s 1;"
      );
      animationDoneSection[i] = true;
      // console.log(i)
    } else if (!isInViewPort(sections[i])) {
      animationDoneSection[i] = false;
      $(" #leaves i", sections[i]).css("-webkit-animation", "none");
      $(" #leaves i:nth-of-type(2n)", sections[i]).css(
        "-webkit-animation",
        "none"
      );
      $(" #leaves i:nth-of-type(3n)", sections[i]).css(
        "-webkit-animation",
        "none"
      );
    }
  }
});

var text =
  "Hi, I am Manjari Jain. This is just a brief tale of my eclectic life.. 😃🎃☃️";
var speed = 120;
var i = 0;

$(document).ready(function () {
  setTimeout(typewriter(), 900);
  if (header.offsetHeight <= pageYOffset) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
});

var endText = "You know that an end signifies a new beginning, right?";

function typewriter() {
  if (i < text.length) {
    document.getElementById("my-name").innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

var i1 = 0;

function typewriter2() {
  if (i1 < endText.length) {
    document.getElementById("theend").innerHTML += endText.charAt(i1);
    // document.getElementById("contact").style.cssText = 'height:auto;';
    // document.getElementById("contact").style.cssText = 'height:' + document.getElementById("contact").scrollHeight + 'px';
    i1++;
    setTimeout(typewriter2, 60);
  }
}

// var typed=new Typed('.typing',{
//     strings:["","hard worker.","believer.","full stack developer."],
//     loop:true,
//     typeSpeed:60,
//     backSpeed:60
// })

function autosize(textarea) {
  var el = textarea;
  setTimeout(function () {
    el.style.cssText = "height:auto; padding:0";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
}

let mailIcon = $("#mailicon");
$("#mailicon-box").mouseover(function () {
  mailIcon.removeClass("fa-envelope");
  mailIcon.addClass("fa-envelope-open");
});
$("#mailicon-box").mouseout(function () {
  mailIcon.addClass("fa-envelope");
  mailIcon.removeClass("fa-envelope-open");
});

let submitMessage = function () {
  $("form").submit(function (e) {
    e.preventDefault(),
      $.ajax({
        url: "/send-message",
        type: "post",
        data: $("form").serialize(),
        success: function (e) {
          swal({
            title: "Message Sent Successfully!",
            text: `Thank you ${e.data.user.name} for your time!`,
            icon: "success",
          });
        },
        error: function (e) {
          console.log(e.responseText);
        },
      });
  });
};
submitMessage();
