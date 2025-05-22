import Image from "next/image";

export default function Home() {
  return (
    <>
    <body className="max-md:mx-fixed max-sm:mx-auto max-md:mx-0">
      {/* header section start*/}
      <header className="bg-white max-md:max-w-full max-sm:max-w-full shadow-md">
        <div className="max-md:max-w-full mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyWebsite</h1>
          <button
            id="menu-btn"
            class="md:hidden text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav id="menu" className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
        {/* <!-- Mobile Menu --> */}
        <div id="mobile-menu" className="md:hidden hidden px-4 pb-4">
          <a href="#" className="block py-2 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-blue-600">
            About
          </a>
          <a href="#" className="block py-2 hover:text-blue-600">
            Contact
          </a>
        </div>
      </header>

      {/* heading section end */}
      {/* first section start*/}
      <section className="">
      <div className="self-stretch px-6 py-10 inline-flex flex-col justify-start items-center gap-6">
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="inline-flex justify-start items-center gap-2.5">
                <div className="w-4 h-4 relative">
                    <div className="w-3.5 h-3.5 left-[0.67px] top-[1.33px] absolute">
                      <img src="mdi_magic.svg" width={15} height={8}></img>
                    </div>
                </div>
                <div className="justify-start text-lime-100 text-xs font-medium font-['Inter'] leading-none">Introducing AI Automation</div>
            </div>
            <div className="self-stretch justify-start"><span class="text-white text-4xl font-semibold font-['Sora']">From </span><span className="bg-gradient-to-r from-[#EDBF79] to-[#D95494] bg-clip-text text-transparent text-4xl font-semibold font-['Sora']">Concept</span><span className="text-white text-4xl font-semibold font-['Sora']"> to </span><span className="bg-gradient-to-r from-[#A5ED79] to-[#2680D3] bg-clip-text text-transparent text-4xl font-semibold font-['Sora']">Reality</span></div>
            <div className="self-stretch justify-start text-green-200 text-base font-normal font-['Sora'] leading-7">We Engineer your Software Success & Digital Transformation.</div>
        </div>
        <div className="self-stretch h-0  outline-offset-[-0.50px] outline-white/10"></div>
        <div className="self-stretch justify-start text-white/80 text-sm font-normal font-['Sora'] leading-normal">At Chromezy, we translate your ideas into market-ready solutions quickly and precisely. Leveraging the power of technology and prioritizing user needs, we deliver products that are both cutting-edge and user-centric.</div>
    </div>
    <div className="w-96 h-72 relative">
        <img className="w-40 h-36 left-[-31.25px] top-[55px] absolute" src="image 48.png" />
        <img className="w-56 h-40 left-[157.35px] top-[63.33px] absolute blur-[6.45px]" src="image 49.png" />
        <img className="w-56 h-44 left-[-5.59px] top-[142.32px] absolute" src="image 50.png" />
    </div>
</div>
</section>
      {/* first section end */}
      {/* second section start */}
      <section className="max-md:w-full max-md:flex max-md:justify-center max-md:pt-[90px] max-md:pb-[80px]">
     <div >
      <div className="max-md:flex max-md:flex-col px-6 max-md:gap-[16px]">
       <div className="text-white max-md:text-2xl font-semibold font-['Sora'] leading-normal">
        BRANDS <span className="bg-gradient-to-r from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">WORKED WITH</span>
       </div>
       <div className="text-white/80 text-sm font-normal font-['Sora'] leading-normal">
Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
       </div>
       </div>
       <div className="max-md:grid max-md:grid-cols-2 max-md:gap-2 max-md:px-6 max-md:pt-[90px] ">
        <div><img src="Group 20396.png" width={200}></img></div>
        <div><img src="Group 20400.png" width={200}></img></div>
        <div><img src="Group 20395.png" width={200}></img></div>
        <div><img src="Group 20399.png" width={200}></img></div>
        <div><img src="Group 20394.png" width={200}></img></div>
        <div><img src="Group 20398.png" width={200}></img></div>
        <div><img src="Group 20393.png" width={200}></img></div>
        <div><img src="Group 20397.png" width={200}></img></div>
       </div>
       <div>
        <div className="max-md:py-5">
          <div className="max-md:flex max-md:mx-6 max-md:px-3 ">
            <div className="text-white  max-md:p-5">
              <div className="text-2xl text-bold font-semibold font-['Sora'] bg-gradient-to-r from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">
                200%
              </div>
              <div>
                Revenue Growth

              </div>
            </div>
            <div className="text-white max-md:p-5 max-md:ml-5">
              <div className="text-2xl text-bold font-semibold font-['Sora'] bg-gradient-to-r from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">
                4X
              </div>
              <div>
                Speed to Market
              </div>
            </div>

          </div>

          <div className="max-md:flex max-md:mx-6 max-md:px-3 ">
            <div className="text-white max-md:p-5">
              <div className="text-2xl text-bold bg-gradient-to-r font-semibold font-['Sora'] from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">
                73%
              </div>
              <div>
                New Orders

              </div>
            </div>
            <div className="text-white max-md:p-5 max-md:ml-[52px]">
              <div className="text-2xl text-bold bg-gradient-to-r font-semibold font-['Sora'] from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">
                10K+
              </div>
              <div>
                Speed to Market
              </div>
            </div>

          </div>
          <div>
          <div className="max-md:p-6 bg-[#000000] max-md:rounded-[40px] max-md:flex max-md:justify-center max-md:mx-6 max-md:flex-row max-md:gap-1 border-red-700">
            <div className="max-md:mt-[1px] max-md:ml-2">
            <img className="max-md:ml-[12px] max-md:w-[20px]" src="arrow-up-right.svg"></img>
            </div>
            <div className="text-white font-normal font-['sora'] ">
              See More Projects
            </div>
          </div>
          </div>

        </div>
        
        
       </div>
     </div>

      </section>
      {/* second section end */}
       {/* thard section start */}
       <section className="max-md:py-[64px] max-md:mx-6 ">
        <div className="max-md:flex max-md:flex-col max-md:gap-6">
          <div className="self-stretch justify-start text-white max-md:text-2xl font-semibold font-['sora'] uppercase">
            <span className="bg-gradient-to-r from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">Product</span> Engineering
          </div>
          <div className="text-white/80">
            Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements. Our experienced team of professionals ensures you receive outstanding results that consistently exceed your expectations.
          </div>
        </div>
        <div className="max-md:flex max-md:flex-col max-md:gap-5 max-md:py-[45px]">
        <div className="">
          <div className="max-md:bg-[#2F41A3] second-[#2F41A3] rounded-[15px] max-md:py-[30px] max-md:justify-center">
            <div className="max-md:px-4 max-md:flex max-md:flex-row max-md:gap-15">
              <div className="">
            <div className="max-md:w-full max-md:px-[15px] max-md:py-[8px] rounded-[50px] text-white outline-white/10 capitalize leading-7 outline-1 outline-offset-[-1px]">Our Services</div>
            </div>
            <div>
            <div className="max-md:w-full"><img src="Black and White Collection 18.svg"></img></div>
            </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:px-4 max-md:gap-[16px] max-md:pt-[45px]">
              <div className="text-2xl text-white leading-7 font-semibold font-['sora']">MVP</div>
              <div className="text-white">We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.</div>
              <div>
                <div className="max-md:p-6 bg-[#000000] max-md:rounded-[40px] max-md:flex max-md:justify-center max-md:mx-0 max-md:flex-row max-md:gap-1 border-red-700">
            
            <div className="text-white font-normal font-['sora'] ">
              See More Projects
            </div>
            <div className="max-md:mt-[1px] max-md:ml-2">
            <img className="max-md:ml-[12px] max-md:w-[20px]" src="arrow-up-right.svg"></img>
            </div>
          </div>
              </div>
            </div>
          </div>
 
        </div>
        <div>
          <div className="bg-gradient-to-r  from-[#7E2148] to-[#7E2148] bg-clip-bg text-transparent rounded-[15px] max-md:py-[30px] max-md:justify-center">
            <div className="max-md:px-4 max-md:flex max-md:flex-row max-md:gap-15">
              <div className="">
            <div className="max-md:w-full max-md:px-[15px] max-md:py-[8px] rounded-[50px] text-white outline-white/10 capitalize leading-7 outline-1 outline-offset-[-1px]">Our Services</div>
            </div>
            <div>
            <div className="max-md:w-full"><img src="Black and White Collection 13.svg"></img></div>
            </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:px-4 max-md:gap-[16px] max-md:pt-[45px]">
              <div className="text-2xl text-white leading-7 font-semibold font-['sora']">SaaS</div>
              <div className="text-white">Take your business to new heights with our all-inclusive SaaS development services, delivering seamless and digital experiences that are platform-agnostic and tailored to your customers' needs.</div>
              <div>
                <div className="max-md:p-6 bg-[#000000] max-md:rounded-[40px] max-md:flex max-md:justify-center max-md:mx-0 max-md:flex-row max-md:gap-1 border-red-700">
            
            <div className="text-white font-normal font-['sora'] ">
              See More Projects
            </div>
            <div className="max-md:mt-[1px] max-md:ml-2">
            <img className="max-md:ml-[12px] max-md:w-[20px]" src="arrow-up-right.svg"></img>
            </div>
          </div>
              </div>
            </div>
          </div>
 
        </div>
        <div>
          <div className="max-md:bg-[#AA7333] second-[#2F41A3] rounded-[15px] max-md:py-[30px] max-md:justify-center">
            <div className="max-md:px-4 max-md:flex max-md:flex-row max-md:gap-10">
              <div className="">
            <div className="max-md:max-w-full max-md:px-[15px] max-md:py-[8px] rounded-[50px] text-white outline-white/10 capitalize leading-7 outline-1 outline-offset-[-1px]">Our Services</div>
            </div>
            <div>
            <div className="max-md:w-full"><img src="ph_open-ai-logo-duotone.svg"></img></div>
            </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:px-4 max-md:gap-[16px] max-md:pt-[45px]">
              <div className="text-2xl text-white leading-7 font-semibold font-['sora']">AI</div>
              <div className="text-white">We develop tailored AI solutions, leveraging machine learning, NLP, and computer vision to automate, optimize, and enhance decision-making processes</div>
              <div>
                <div className="max-md:p-6 bg-[#000000] max-md:rounded-[40px] max-md:flex max-md:justify-center max-md:mx-0 max-md:flex-row max-md:gap-1 border-red-700">
            
            <div className="text-white font-normal font-['sora'] ">
              See More Projects
            </div>
            <div className="max-md:mt-[1px] max-md:ml-2">
            <img className="max-md:ml-[12px] max-md:w-[20px]" src="arrow-up-right.svg"></img>
            </div>
          </div>
              </div>
            </div>
          </div>
 
        </div>
        <div>
          <div className="max-md:bg-[#224A38] second-[#2F41A3] rounded-[15px] max-md:py-[30px] max-md:justify-center">
            <div className="max-md:px-4 max-md:flex max-md:flex-row max-md:gap-10">
              <div className="">
            <div className="max-md:max-w-full max-md:px-[15px] max-md:py-[8px] rounded-[50px] text-white outline-white/10 capitalize leading-7 outline-1 outline-offset-[-1px]">Our Services</div>
            </div>
            <div>
            <div className="max-md:w-full"><img src="Black and White Collection 10.svg"></img></div>
            </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:px-4 max-md:gap-[16px] max-md:pt-[45px]">
              <div className="text-2xl text-white leading-7 font-semibold font-['sora']">B2B & B2C Commerce Transformation</div>
              <div className="text-white">We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and Woocommerce to boost online orders and enhance customer shopping experiences, keeping you competitive.</div>
              <div>
                <div className="max-md:p-6 bg-[#000000] max-md:rounded-[40px] max-md:flex max-md:justify-center max-md:mx-0 max-md:flex-row max-md:gap-1 border-red-700">
            
            <div className="text-white font-normal font-['sora'] ">
              See More Projects
            </div>
            <div className="max-md:mt-[1px] max-md:ml-2">
            <img className="max-md:ml-[12px] max-md:w-[20px]" src="arrow-up-right.svg"></img>
            </div>
          </div>
              </div>
            </div>
          </div>
 
        </div>
        
        </div>
       </section>

       {/* thard section end */}
       {/* fourth section start */}
       <section className="max-md:mx-6 max-md:my-[64px] max-md:pb-[25px]">
       <div>
        <div className="max-md:flex max-md:flex-col max-md:gap-6">
          <div className="text-white text-2xl max-md:font-semibold font-['sora'] ">
Our <span className="bg-gradient-to-r font-semibold font-['Sora'] from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">Happy</span> Clients
          </div>
          <div className="text-white font-[sora]">
Dummy ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className="max-md:p-[24px] max-md:my-10 outline-1 outline-white/90 rounded-[20px]">
<div className="max-md:flex max-md:flex-col max-md:gap-30">
  <div className="max-md:flex max-md:flex-col max-md:gap-2">
    <div className="justify-start"><img src="bi_quote.svg"></img></div>
    <div className="text-[#8FD797] font-['sora']  max-md:font-[30px]">We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA 
      and Australia. Chromezy is very professional, efficient, and reliable.</div>
  </div>
  <div className="max-md:flex max-md:flex-col max-md:gap-8">
  <div>
    <div className="text-white text-sx font-bold font-['sora'] ">JEFTA MUGWENI</div>
    <div className="text-white/60 font-['sora']">(CEO), Campion Savings Club</div>
  </div>
  <div> <hr className="bg-white/90"></hr>
  </div>
 
  
  <div className="max-md:flex max-md:flex-col max-md:gap-4">
    <div>
      <div><img src="logos_airflow.svg"></img> </div>
      
    </div>
    <div className="text-white/60 font-['sora'] text-xs max-md:flex max-md:flex-col max-md:gap-2">
<div>Star Rating  - 5 / 5</div>
<div>Project - Custom CRM MVP Development</div>
<div>Country - Zimbabwe</div>
    </div>
  </div>
  </div>
</div>
</div>
       </div>
       <div className="max-md:flex justify-center max-md:flex-row max-md:gap-2.5">
        <div className="w-2 h-2 bg-zinc-300"></div>
        <div className="w-2 h-2 border border-zinc-300/40"></div>
        <div className="w-2 h-2 border border-zinc-300/40"></div>
        <div className="w-2 h-2 border border-zinc-300/40"></div>
       </div>
       </section>
       {/* fourth section end */}
       {/* fifth section start */}
       <section className="max-md:my-[64px] max-md:mx-6">
        <div className="max-md:flex max-md:flex-col max-md:gap-5">
          <div>
            <div className="max-md:flex max-md:flex-col max-md:gap-4.5">
              <div className="text-white text-2xl font-semibold font-['sora']"><span className="bg-gradient-to-r font-semibold font-['Sora'] from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">Success</span> Stories</div>
              <div className="text-white/80 font-['sora']">Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>

            </div>

          </div>
          <div>
            
            <div className="max-md:flex max-md:flex-col max-md:gap-4">
              <div className="relative"><img className="rounded-3xl" src="Rectangle 3157.png" width={450}></img>
              <div className="">
              <div className="absolute max-md:m-[15px] max-md:py-1 max-md:px-2 rounded-full text-black max-md:top-0 max-md:left-0 bg-white shadow-lg outline-white shadow-white-500/50   outline-1 outline-offset-[-1px] font-xs font-['sora'] ">Success Stories</div>
              </div>
              <div className="absolute max-md:top-0 max-md:right-0 ">
                <div className="">
                  <img className="max-md:m-[18px] rounded-full max-md:p-[10px] bg-black/60 max-md:top-0 max-md:right-0" src="arrow-up-right.svg"width={50}></img>

                </div>
                </div>
                <div className="text-black max-md:flex max-md:flex-col max-md:gap-2 bg-white absolute max-md:bottom-0 w-full max-md:px-[15px] max-md:py-[20px] rounded-tr-4xl rounded-br-2xl rounded-bl-2xl">
                  <div className="text-2xl font-semibold font-['sora']">FinConnect</div>
                  <div className="font-['sora']">Customer Relationship Management (CRM)</div>
                </div>
                </div>
<div className="max-md:flex max-md:flex-col max-md:gap-8">
  <div className="text-white/70">
    Chromezy enhanced customer profile management and streamlined
     the sales pipeline, boosting the bank team's efficiency and daily 
     performance significantly.
  </div>
  <div className="text-white/60 max-md:flex max-md:flex-col max-md:gap-2">
    <div className="max-md:flex max-md:col-row max-md:gap-2">
      <div className="max-md:pt-1"><img src="ph_seal-check-fill.svg"></img></div>
      <div>Upselling success rate</div>
    </div>
    <div className="max-md:flex max-md:col-row max-md:gap-2">
      <div className="max-md:pt-1"><img src="ph_seal-check-fill.svg"></img></div>
      <div>Real-time customer insights</div>
    </div>
    <div className="max-md:flex max-md:col-row max-md:gap-2">
      <div className="max-md:pt-1"><img src="ph_seal-check-fill.svg"></img></div>
      <div>Prompt Issue Resolution</div>
    </div>
    <div className="max-md:flex max-md:col-row max-md:gap-2"> 
      <div className="max-md:pt-1"><img src="ph_seal-check-fill.svg"></img></div>
      <div>Omnichannel support accessibility</div>
    </div>
    <div className="max-md:flex max-md:col-row max-md:gap-2">
    <div className="max-md:pt-1"><img src="ph_seal-check-fill.svg"></img></div>
    <div>Faster Communication</div>
    </div>
    <div className="max-md:flex max-md:col-row max-md:gap-2">
    <div className="max-md:pt-1"><img src="ph_seal-check-fill.svg"></img></div>
    <div>Swift Operations</div>
  </div>
  </div>
  <div className="max-md:flex max-md:flex-row max-md:gap-2.5 max-md:justify-center">
  <div className="w-2 h-2 bg-zinc-300"></div>
  <div className="w-2 h-2 border-2 border-white/60"></div>
  <div className="w-2 h-2 border-2 border-white/60"></div>
  <div className="w-2 h-2 border-2 border-white/60"></div>
  <div className="w-2 h-2 border-2 border-white/60"></div>
 </div>
</div>
 
<div>
 
</div>
              
            </div>

            

          </div>
          <div>
            <div className="max-md:w-full max-md:flex max-md:flex-row max-md:gap-2 max-md:justify-center max-md:p-6 bg-black rounded-full">
              
              <div className="max-md:lr-2"><img src="arrow-up-right.svg" width={20}></img></div>
              <div className="text-white font-['sora']">Read more success stories</div>
              
            </div>
          </div>
        </div>
       </section>
       {/* fifth section end */}
       {/* sixth section start */}
       <section className="bg-[#BDD5F4] max-md:py-[64px]">
        <div className="max-md:flex max-md:flex-col max-md:gap-5">
        <div>
          <div className="max-md:pt-6"><img src="1506.png" width={500}></img></div>
        </div>
        <div className="max-md:px-6 max-md:flex max-md:flex-col max-md:gap-4">
          <div className=" text-neutral-900 text-5xl font-bold font-['Sora'] uppercase">Innovative Technologies Keeping Us Ahead</div>
          <div className="text-black font-['sora']">Discover the impact of bespoke digital solutions tailored precisely 
            to your business's distinct requirements.</div>
        </div>
        {/* box-1 start */}
        <div className="max-md:px-6 max-md:mx-6 rounded-xl  bg-gradient-to-r  from-[#DBEBFF] to-[#DBEBFF] bg-clip-bg text-transparent" >
          <div className="max-md:px-[10px] max-md:py-[24px]">
          <div className="text-black max-md:flex max-md:flex-col max-md:gap-4">
            <div>
                  01
            </div>
            <div className="text-2xl font-semibold font-['Sora']">
              Web App Development
            </div>
            <div>
              <div className="grid max-md:grid-cols-3 max-md:grid-rows-3 max-md:gap-3">
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div className=""><img src="react.svg" width={18}></img></div>
                  <div>React</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="nodejs.svg" width={18}></img></div>
                  <div>Node</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>

              </div>
            </div>
          </div>
         </div>
        </div>  
        {/* box-1 end */}
        {/* box-2 start */}
        <div className="max-md:px-6 max-md:mx-6 rounded-xl  bg-gradient-to-r  from-[#DBEBFF] to-[#DBEBFF] bg-clip-bg text-transparent" >
          <div className="max-md:px-[10px] max-md:py-[24px]">
          <div className="text-black max-md:flex max-md:flex-col max-md:gap-4">
            <div>
                  02
            </div>
            <div className="text-2xl font-semibold font-['Sora']">
             Mobile App Development
            </div>
            <div>
              <div className="grid max-md:grid-cols-3 max-md:grid-rows-3 max-md:gap-3">
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div className=""><img src="react.svg" width={18}></img></div>
                  <div>React</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="nodejs.svg" width={18}></img></div>
                  <div>Node</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>

              </div>
            </div>
          </div>
         </div>
        </div>
        {/* box-2 end */}
        {/* box-3 start */}
        <div className="max-md:px-6 max-md:mx-6 rounded-xl  bg-gradient-to-r  from-[#DBEBFF] to-[#DBEBFF] bg-clip-bg text-transparent" >
          <div className="max-md:px-[10px] max-md:py-[24px]">
          <div className="text-black max-md:flex max-md:flex-col max-md:gap-4">
            <div>
                  03
            </div>
            <div className="text-2xl font-semibold font-['Sora']">
              E-commerce
            </div>
            <div>
              <div className="grid max-md:grid-cols-3 max-md:grid-rows-3 max-md:gap-3">
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div className=""><img src="react.svg" width={18}></img></div>
                  <div>React</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="nodejs.svg" width={18}></img></div>
                  <div>Node</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>

              </div>
            </div>
          </div>
         </div>
        </div>
        {/* box-3 end */}
        {/* box-4 start */}
        <div className="max-md:px-6 max-md:mx-6 rounded-xl  bg-gradient-to-r  from-[#DBEBFF] to-[#DBEBFF] bg-clip-bg text-transparent" >
          <div className="max-md:px-[10px] max-md:py-[24px]">
          <div className="text-black max-md:flex max-md:flex-col max-md:gap-4">
            <div>
                  04
            </div>
            <div className="text-2xl font-semibold font-['Sora']">
              Analytics
            </div>
            <div>
              <div className="grid max-md:grid-cols-3 max-md:grid-rows-3 max-md:gap-3">
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div className=""><img src="react.svg" width={18}></img></div>
                  <div>React</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="nodejs.svg" width={18}></img></div>
                  <div>Node</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>

              </div>
            </div>
          </div>
         </div>
        </div>
       {/* box-4 end */}
       {/* box-5 start */}
        <div className="max-md:px-6 max-md:mx-6 rounded-xl  bg-gradient-to-r  from-[#DBEBFF] to-[#DBEBFF] bg-clip-bg text-transparent" >
          <div className="max-md:px-[10px] max-md:py-[24px]">
          <div className="text-black max-md:flex max-md:flex-col max-md:gap-4">
            <div>
                  05
            </div>
            <div className="text-2xl font-semibold font-['Sora']">
              Data & Cloud
            </div>
            <div>
              <div className="grid max-md:grid-cols-3 max-md:grid-rows-3 max-md:gap-3">
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div className=""><img src="react.svg" width={18}></img></div>
                  <div>React</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="nodejs.svg" width={18}></img></div>
                  <div>Node</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><img src="Angular.svg" width={18}></img></div>
                  <div>Angular</div>
                </div>

              </div>
            </div>
          </div>
         </div>
        </div>
        {/* box-5 end */}



        </div>
       </section>
       {/* sixth section end */}

      </body>
    </>
  );
}
