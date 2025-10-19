import svgPaths from "./svg-pubagqtl22";
import imgMemoji from "../assets/memoji.png";
import imgFrame4 from "../assets/frame4.png";
import imgTopViewOfLaptopAndGlasses from "../assets/top-view-laptop-glasses.png";
import imgManWithLaptop from "../assets/man-with-laptop.png";

function Frame2() {
  return (
    <div className="box-border content-stretch flex font-['Work_Sans:Regular',_sans-serif] font-normal gap-[67px] items-center leading-[normal] pl-[59px] pr-0 py-0 relative shrink-0 text-[#212529] text-[24px] text-nowrap whitespace-pre">
      <p className="relative shrink-0">Designs</p>
      <p className="relative shrink-0">Writing Samples</p>
      <p className="relative shrink-0">About Me</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#212529] box-border content-stretch flex gap-[63.655px] items-center px-[35.862px] py-[17.931px] relative rounded-[4.483px] shadow-[0px_3.586px_17.931px_0px_rgba(0,0,0,0.25)] shrink-0">
      <p className="font-['Work_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[17px] text-nowrap text-white whitespace-pre">Reach Out</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[318px] items-center left-[calc(50%+0.362px)] pl-[43px] pr-[40px] py-[17px] rounded-[100px] top-[29px] translate-x-[-50%] opacity-0 pointer-events-none">
      <p className="font-['Work_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212529] text-[35px] text-nowrap whitespace-pre">{`J<`}</p>
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents leading-[normal] left-[202px] text-nowrap top-[308px] whitespace-pre">
      <p className="absolute font-['Work_Sans:SemiBold',_sans-serif] font-semibold left-[calc(50%-524.5px)] text-[#212529] text-[128px] top-[346px]">ProductDesigner</p>
      <p className="absolute font-['Work_Sans:Regular',_sans-serif] font-normal left-[calc(50%-211.5px)] text-[#212529] text-[24px] top-[308px]">👋, my name is Jeremiah and i am a</p>
      <p className="absolute font-['Work_Sans:SemiBold',_sans-serif] font-semibold left-[calc(50%-554.5px)] text-[128px] top-[491px]">{`& TechnicalWriter`}</p>
      <p className="absolute font-['Work_Sans:Regular',_sans-serif] font-normal left-[204px] text-[#212529] text-[24px] top-[646px]">based in Lagos, Nigeria</p>
    </div>
  );
}

function Memoji() {
  return (
    <div className="absolute bg-[#c5ecfd] left-[844px] overflow-clip rounded-[1830.2px] size-[469px] top-[660px]" data-name="▶ memoji">
      <div className="absolute bottom-[-5.86%] left-0 right-0 top-[5.86%]" data-name="memoji">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMemoji} />
      </div>
    </div>
  );
}

function Frame5() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      type="button"
      onClick={scrollToProjects}
      className="bg-[#212529] box-border content-stretch flex gap-[17px] items-center justify-center p-[20px] relative rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] shrink-0 cursor-pointer hover:bg-gray-800 transition-colors border-none"
    >
      <p className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre pointer-events-none">I need a designer</p>
    </button>
  );
}

function Frame6() {
  const scrollToWriting = () => {
    const element = document.getElementById('writing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      type="button"
      onClick={scrollToWriting}
      className="box-border content-stretch flex gap-[17px] items-center justify-center px-[39px] py-[20px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors border border-[#212529] bg-white"
    >
      <p className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#212529] text-[24px] text-nowrap whitespace-pre pointer-events-none">I need a writer</p>
    </button>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-1/2 top-[800px] translate-x-[-50%] z-40">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[982px] left-[calc(50%-0.5px)] overflow-clip top-0 translate-x-[-50%] w-[1513px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame4} />
      <div className="absolute bg-white h-[982px] left-0 top-0 w-[1512px]" />
      <Frame3 />
      <Group1 />
      <Memoji />
      <Frame7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[12.176px] left-[625.92px] top-[221.82px] w-[259.084px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 13">
        <g id="Group 2">
          <path d={svgPaths.p138d252} id="Line 1" stroke="var(--stroke-0, white)" />
          <line id="Line 2" stroke="var(--stroke-0, white)" x1="0.0841064" x2="259.084" y1="11.6759" y2="11.6759" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[625.92px] top-[168px]">
      <p className="absolute font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[calc(50%-113.5px)] text-[#f7f3bc] text-[48px] text-nowrap top-[168px] whitespace-pre">About Me</p>
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[12.176px] left-[197px] top-[354px] w-[259.084px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 13">
        <g id="Group 3">
          <path d={svgPaths.p138d252} id="Line 1" stroke="var(--stroke-0, #F7F3BC)" />
          <line id="Line 2" stroke="var(--stroke-0, #F7F3BC)" x1="0.0841064" x2="259.084" y1="11.6759" y2="11.6759" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[95px] top-[313px]">
      <Group3 />
      <div className="absolute font-['Work_Sans:Regular',_sans-serif] font-normal leading-[normal] left-1/2 text-[32px] text-center text-nowrap text-white top-[313px] translate-x-[-50%] whitespace-pre">
        <p className="mb-[6px]">
          <span>{`In `}</span>
          <span className="text-[#f7f3bc]">ProductDesign</span>
          <span className="text-[#f7f3bc]">,</span>
          <span>{` I specialize in creating visually appealing and accessible `}</span>
        </p>
        <p className="mb-[6px]">software interfaces.</p>
        <p className="mb-[6px]">{`Each design I craft prioritizes user experience without compromising on aesthetics, `}</p>
        <p>ensuring that every interaction is intuitive and engaging.</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[12.176px] left-[227px] top-[597px] w-[259.084px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 13">
        <g id="Group 3">
          <path d={svgPaths.p138d252} id="Line 1" stroke="var(--stroke-0, #F7F3BC)" />
          <line id="Line 2" stroke="var(--stroke-0, #F7F3BC)" x1="0.0841064" x2="259.084" y1="11.6759" y2="11.6759" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[153px] top-[562px]">
      <Group4 />
      <div className="absolute font-['Work_Sans:Regular',_sans-serif] font-normal leading-[normal] left-1/2 text-[32px] text-center text-nowrap text-white top-[562px] translate-x-[-50%] whitespace-pre">
        <p className="mb-[6px]">
          <span>{`As a `}</span>
          <span className="text-[#f7f3bc]">TechnicalWriter</span>
          <span className="text-[#f7f3bc]">,</span>
          <span>{` I simplify complex topics, making them understandable`}</span>
        </p>
        <p className="mb-[6px]">{` to all, empowering users with knowledge through clear and accessible `}</p>
        <p>{`documentation, whether it's software guides or user manuals`}</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[35px] items-start left-[calc(50%-0.5px)] top-[520px] translate-x-[-50%] w-[226px]">
      <div className="bg-white h-[5px] rounded-[100px] shrink-0 w-[52px]" />
      <div className="bg-white h-[5px] rounded-[100px] shrink-0 w-[52px]" />
      <div className="bg-white h-[5px] rounded-[100px] shrink-0 w-[52px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start left-[1252px] top-[820px]">
      <div className="relative shrink-0 size-[80px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <circle cx="40" cy="40" fill="var(--fill-0, #BC9AED)" id="Ellipse 4" r="40" />
        </svg>
      </div>
      <p className="absolute font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[19px] text-[#212529] text-[40.486px] text-nowrap top-[16.79px] whitespace-pre">{`>/`}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[982px] left-[-1px] overflow-clip top-[982px] w-[1513px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame4} />
      <div className="absolute bg-[#212529] h-[982px] left-0 top-0 w-[1512px]" />
      <Group7 />
      <Group6 />
      <Group5 />
      <Frame8 />
      <div className="absolute left-[1266px] size-[400px] top-[744px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 400">
          <path d={svgPaths.p33ba2500} fill="var(--fill-0, white)" id="Ellipse 1" />
        </svg>
      </div>
      <div className="absolute left-[1215px] size-[449px] top-[688px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 449 449">
          <path d={svgPaths.p1cd69800} fill="var(--fill-0, white)" id="Ellipse 2" />
        </svg>
      </div>
      <div className="absolute left-[1400px] size-[80px] top-[648px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <circle cx="40" cy="40" fill="var(--fill-0, #FEE443)" id="Ellipse 3" r="40" />
        </svg>
      </div>
      <Frame9 />
      <p className="absolute font-['Work_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[1419px] text-[#212529] text-[40.486px] text-nowrap top-[665px] whitespace-pre">UI</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9483463168144226)+(var(--transform-inner-height)*0.31723690032958984)))] items-center justify-center left-[1244px] top-[745px] w-[calc(1px*((var(--transform-inner-height)*0.9483463168144226)+(var(--transform-inner-width)*0.31723690032958984)))]" style={{ "--transform-inner-width": "360", "--transform-inner-height": "304" } as React.CSSProperties}>
        <div className="flex-none rotate-[288.496deg]">
          <div className="h-[304px] relative w-[360px]" data-name="top view of laptop and glasses">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgTopViewOfLaptopAndGlasses} />
          </div>
        </div>
      </div>
      <div className="absolute h-[456px] left-[450px] mix-blend-multiply top-[694px] w-[416px]" data-name="man with laptop">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgManWithLaptop} />
      </div>
    </div>
  );
}

export default function MacBookPro141() {
  return (
    <div className="relative size-full" data-name="MacBook Pro 14' - 1">
      <Frame4 />
      <Frame10 />
    </div>
  );
}