const NAV = [
 { label: "Home", link: "#" },
 { label: "Services", link: "#services" },
 { label: "About", link: "#about" },
 { label: "Portfolio", link: "#testimonials" },
 { label: "Contact", link: "#contact" },
];

const SERVICES = [
 {
  icon: "📷",
  title: "CCTV Installation",
  desc:
   "Professional installation of Dahua high-definition surveillance systems with custom layouts that eliminate blind spots for any property.",
 },
 {
  icon: "🌐",
  title: "Network Setup & Cabling",
  desc:
   "Structured cabling, LAN/WAN config, and Wi-Fi deployment built for speed, stability, and scalability.",
 },
 {
  icon: "💾",
  title: "Data Services",
  desc:
   "NAS/NVR storage, cloud backup integration, and data recovery — your footage and business data always protected.",
 },
 {
  icon: "🔧",
  title: "CCTV Maintenance",
  desc:
   "Preventive maintenance, firmware updates, and rapid on-site response to keep systems running at peak performance.",
 },
 {
  icon: "📡",
  title: "Remote Monitoring",
  desc:
   "Monitor your cameras in real time from any device, anywhere in the world with seamless remote access setup.",
 },
 {
  icon: "💡",
  title: "IT Consulting",
  desc:
   "Technology roadmaps that balance performance, security, and budget tailored specifically to your business needs.",
 },
];

const STATS = [
 { val: "500+", label: "Projects Completed" },
 { val: "12+", label: "Years Experience" },
 { val: "100%", label: "Client Satisfaction" },
 { val: "24/7", label: "Support Available" },
];

const STEPS = [
 {
  n: "01",
  title: "Site Assessment",
  desc:
   "We visit your location, evaluate your security needs, and map out the ideal system layout with zero obligation.",
 },
 {
  n: "02",
  title: "System Design",
  desc:
   "Our engineers design a custom solution using Dahua Technology's latest AI-powered hardware and software.",
 },
 {
  n: "03",
  title: "Install & Support",
  desc:
   "We install, configure, test, and train your team — then stay on call for ongoing 24/7 technical support.",
 },
];

const FAQS = [
 {
  q: "What areas in the Philippines do you cover?",
  a: "We operate nationwide — from Metro Manila to Visayas and Mindanao. No site is too remote for our team.",
 },
 {
  q: "Do you use branded CCTV equipment?",
  a: "Yes. We are proud partners of Dahua Technology, one of the world's top surveillance manufacturers, known for AI-powered cameras and robust NVR systems.",
 },
 {
  q: "Do you offer maintenance contracts?",
  a: "Absolutely. We offer flexible annual maintenance packages including regular checkups, priority response, and parts replacement.",
 },
 {
  q: "How long does installation take?",
  a: "A standard small-to-medium installation is completed within 1–3 days. Large enterprise deployments are scoped individually.",
 },
];

const TESTIMONIALS = [
 {
  name: "Ramon V.",
  role: "Operations Manager",
  stars: 5,
  text:
   "DsTech installed 40+ cameras across our warehouse. The team was professional, fast, and the Dahua system quality is outstanding.",
 },
 {
  name: "Maria C.",
  role: "Business Owner",
  stars: 5,
  text:
   "From site survey to go-live in under a week. Excellent service and the remote viewing app works perfectly on my phone.",
 },
];

const WHY_US = [
 "4K Starlight Cameras",
 "AI Perimeter Protection",
 "Smart NVR Systems",
 "Cloud Video Management",
 "Mobile Remote Viewing",
];

const HERO_CIRCLE_ICONS = [
 { t: "AI Camera", i: "📷", top: "top-[20px]", left: "-left-[20px]" },
 { t: "Live 24/7", i: "📡", top: "top-[60px]", right: "-right-[30px]" },
 { t: "Dahua", i: "⚡", bottom: "bottom-[30px]", left: "-left-[10px]" },
];

const DAHUA_TECH = [
 {
  icon: "🏢",
  title: "Nationwide Coverage",
  desc: "From Metro Manila to Mindanao, we serve businesses everywhere.",
 },
 {
  icon: "🎓",
  title: "Expert Local Team",
  desc: "Trained technicians who understand Philippine infrastructure challenges.",
 },
 {
  icon: "🔄",
  title: "End-to-End Service",
  desc: "Survey, design, install, train, and ongoing support — all from one team.",
 },
 {
  icon: "💬",
  title: "Transparent Pricing",
  desc: "Clear, itemized quotations before any work begins. No surprises.",
 },
];

const FOOTER = [
 {
  main: "Services",
  links: [
   "CCTV Installation",
   "Network Setup",
   "Data Services",
   "Maintenance",
   "Remote Monitoring",
   "IT Consulting",
  ],
},
 {main: "Company", links: ["About Us", "Portfolio", "Blog", "Careers", "Contact"]},
 {
  main: "Contact",
  links: [
   "+63 (XXX) XXX-XXXX",
   "info@dstech.com.ph",
   "Philippines",
   "Mon–Sat 8AM–6PM",
  ],
},
];

const CTA = [
 {icon: "📞", text: "+63 (XXX) XXX-XXXX"},
 {icon: "📧", text: "info@dstech.com.ph"},
 {icon: "📍", text: "Philippines (Nationwide)"},
 {icon: "🕐", text: "Mon–Sat, 8:00 AM – 6:00 PM"},
];

const CTA_CONTACT = [
 {label: "Your Name", type: "text"},
 {label: "Email Address", type: "email"},
 {label: "Phone Number", type: "tel"},
];

const orange = "#f97316",
 dark = "#050a18";


export {
  NAV,
  SERVICES,
  STATS,
  STEPS,
  FAQS,
  TESTIMONIALS,
  WHY_US,
  HERO_CIRCLE_ICONS,
  DAHUA_TECH,
  FOOTER,
  CTA,
  CTA_CONTACT,
  orange,
  dark,
}