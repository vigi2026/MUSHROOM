// ====== SETTINGS: change to your WhatsApp number (country code + number, no +) ======
const WHATSAPP_NUMBER = "919739190662";
const BASE_GRAMS = 200;           // price is set per 200 g
const GRAMS = [100, 200, 250, 500, 1000];

// price per 200 g for each type (white = Rs 150)
const TYPES = [
  {id:"oyster", p:150, c:"#f3eee2", en:"Oyster Mushroom", kn:"ಆಯ್ಸ್ಟರ್ ಅಣಬೆ"}
];

// Real photos: put your files in an "images" folder (or paste data URLs here)
const PHOTOS = {hero:"images/oyster-hero.jpg", steps:["images/step1.jpg","images/step2.jpg","images/step3.jpg","images/step4.jpg","images/step5.jpg"]};
function tryPhoto(el, src){ if(!src||!el) return; const i=new Image(); i.onload=()=>{el.innerHTML="";el.appendChild(i)}; i.alt="Oyster mushroom"; i.src=src; }

const BEN = [
 ["💪",{en:"Rich in Protein",kn:"ಪ್ರೋಟೀನ್ ಸಮೃದ್ಧ"},{en:"Gives strength to muscles. A great protein food for vegetarians.",kn:"ಸ್ನಾಯುಗಳಿಗೆ ಶಕ್ತಿ ನೀಡುತ್ತದೆ. ಸಸ್ಯಾಹಾರಿಗಳಿಗೆ ಉತ್ತಮ ಪ್ರೋಟೀನ್ ಆಹಾರ."}],
 ["❤️",{en:"Good for Heart",kn:"ಹೃದಯಕ್ಕೆ ಒಳ್ಳೆಯದು"},{en:"Very low fat and no cholesterol, so it is friendly for your heart.",kn:"ಕೊಬ್ಬು ತುಂಬಾ ಕಡಿಮೆ, ಕೊಲೆಸ್ಟ್ರಾಲ್ ಇಲ್ಲ. ಹೃದಯಕ್ಕೆ ಸ್ನೇಹಿ."}],
 ["🛡️",{en:"Boosts Immunity",kn:"ರೋಗನಿರೋಧಕ ಶಕ್ತಿ"},{en:"Has beta-glucan that helps your body fight common illnesses.",kn:"ಬೀಟಾ-ಗ್ಲೂಕನ್ ಇರುವುದರಿಂದ ಸಾಮಾನ್ಯ ರೋಗಗಳ ವಿರುದ್ಧ ದೇಹಕ್ಕೆ ಬಲ ನೀಡುತ್ತದೆ."}],
 ["⚖️",{en:"Weight Control",kn:"ತೂಕ ನಿಯಂತ್ರಣ"},{en:"Low calories and high fibre. You feel full for longer.",kn:"ಕ್ಯಾಲೊರಿ ಕಡಿಮೆ, ನಾರಿನಂಶ ಹೆಚ್ಚು. ಹೊಟ್ಟೆ ತುಂಬಿದ ಭಾವ ಹೆಚ್ಚು ಹೊತ್ತು ಇರುತ್ತದೆ."}],
 ["🩸",{en:"Good for Sugar Patients",kn:"ಸಕ್ಕರೆ ಕಾಯಿಲೆಗೆ ಸಹಾಯ"},{en:"Low sugar and low carbs, a smart choice for diabetics.",kn:"ಸಕ್ಕರೆ ಮತ್ತು ಕಾರ್ಬೋಹೈಡ್ರೇಟ್ ಕಡಿಮೆ. ಮಧುಮೇಹಿಗಳಿಗೆ ಉತ್ತಮ ಆಯ್ಕೆ."}],
 ["🌟",{en:"Vitamins & Minerals",kn:"ಜೀವಸತ್ವ ಮತ್ತು ಖನಿಜ"},{en:"Contains Vitamin B, Vitamin D, iron and potassium for daily health.",kn:"ವಿಟಮಿನ್ B, ವಿಟಮಿನ್ D, ಕಬ್ಬಿಣ ಮತ್ತು ಪೊಟ್ಯಾಸಿಯಮ್ ಇದ್ದು ದಿನನಿತ್ಯದ ಆರೋಗ್ಯಕ್ಕೆ ಸಹಾಯ."}]
];

const STEPS = [
 ["🌾","#e9d7a0",{en:"1. Straw Preparation",kn:"1. ಹುಲ್ಲು ಸಿದ್ಧತೆ"},{en:"Chop paddy straw, soak it in clean water for 6-8 hours, then boil or steam to kill germs. Drain till slightly damp.",kn:"ಭತ್ತದ ಹುಲ್ಲನ್ನು ಕತ್ತರಿಸಿ 6-8 ಗಂಟೆ ನೀರಲ್ಲಿ ನೆನೆಸಿ, ಕ್ರಿಮಿ ಸಾಯಲು ಕುದಿಸಿ ಅಥವಾ ಹಬೆಯಲ್ಲಿ ಬೇಯಿಸಿ. ತೇವ ಉಳಿಯುವಷ್ಟು ನೀರು ಬಸಿಯಿರಿ."}],
 ["🧫","#d9e8f2",{en:"2. Spawning (Seeds)",kn:"2. ಬೀಜ ಹಾಕುವುದು"},{en:"Fill straw in a plastic bag in layers and sprinkle mushroom spawn (seed) between layers. Tie the bag and make small holes.",kn:"ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲದಲ್ಲಿ ಹುಲ್ಲನ್ನು ಪದರ ಪದರವಾಗಿ ತುಂಬಿ, ನಡುವೆ ಅಣಬೆ ಬೀಜ (ಸ್ಪಾನ್) ಉದುರಿಸಿ. ಚೀಲ ಕಟ್ಟಿ ಸಣ್ಣ ರಂಧ್ರ ಮಾಡಿ."}],
 ["🌑","#cfc8de",{en:"3. Dark Room (15-20 days)",kn:"3. ಕತ್ತಲ ಕೋಣೆ (15-20 ದಿನ)"},{en:"Keep bags in a dark, clean room. White cotton-like threads (mycelium) spread through the straw.",kn:"ಚೀಲಗಳನ್ನು ಕತ್ತಲೆಯ ಸ್ವಚ್ಛ ಕೋಣೆಯಲ್ಲಿಡಿ. ಹುಲ್ಲಿನ ತುಂಬ ಹತ್ತಿಯಂತಹ ಬಿಳಿ ದಾರಗಳು (ಮೈಸೀಲಿಯಂ) ಹರಡುತ್ತವೆ."}],
 ["💧","#cfe9e2",{en:"4. Water & Light (Pinning)",kn:"4. ನೀರು ಮತ್ತು ಬೆಳಕು"},{en:"Move bags to a cool, airy room with soft light. Spray water 2-3 times a day. Tiny mushroom buds (pins) appear in 3-5 days.",kn:"ಚೀಲಗಳನ್ನು ತಂಪಾದ, ಗಾಳಿ ಇರುವ ಮಂದ ಬೆಳಕಿನ ಕೋಣೆಗೆ ತನ್ನಿ. ದಿನಕ್ಕೆ 2-3 ಬಾರಿ ನೀರು ಸಿಂಪಡಿಸಿ. 3-5 ದಿನದಲ್ಲಿ ಸಣ್ಣ ಮೊಗ್ಗುಗಳು ಮೂಡುತ್ತವೆ."}],
 ["🍄","#f4d9c4",{en:"5. Harvest (3-4 days later)",kn:"5. ಕೊಯ್ಲು (3-4 ದಿನದ ನಂತರ)"},{en:"When caps open fully and edges are still curled, twist and pick. You can harvest 3-4 times from one bag.",kn:"ಟೋಪಿಗಳು ಪೂರ್ತಿ ಅರಳಿ ಅಂಚು ಸ್ವಲ್ಪ ಮಡಚಿರುವಾಗ ತಿರುಚಿ ಕೀಳಿ. ಒಂದು ಚೀಲದಿಂದ 3-4 ಬಾರಿ ಕೊಯ್ಲು ಮಾಡಬಹುದು."}]
];

const I18N = {
 en:{brand:"Oyster Farm",n1:"Shop",n2:"Benefits",n3:"How it Grows",tag:"100% Fresh · Farm to Home",h1:"Fresh Oyster Mushrooms, Delivered Fresh",sub:"Soft, tasty and healthy oyster mushrooms grown cleanly. Pick your type and weight, and order on WhatsApp.",per:"Oyster mushroom: 200 g =",pick:"",wt:"1. Choose weight",tot:"Total Price",ord:"2. Your details",nm:"Your Name",mb:"Mobile Number (10 digits)",ad:"Delivery Address",wa:"Order on WhatsApp",next1:"Next: Benefits →",bh:"Health Benefits of Oyster Mushroom",bs:"Simple reasons why oyster mushroom is good food for the whole family.",back:"← Back",next2:"Next: How it Grows →",gh:"How Oyster Mushroom Grows",gs:"From a handful of straw to fresh mushrooms in about 4 weeks. See each stage below.",tipH:"💡 Easy growing tip",tipP:"Keep the room clean, cool (20-28°C) and damp. Never let the bag dry out and never use dirty water.",next3:"Order Now →",per200:"per 200 g",selTxt:"Selected",errN:"Please enter your name.",errM:"Enter a valid 10-digit mobile number.",errA:"Please enter your delivery address.",msg:"Hello! I want to order oyster mushroom."},
 kn:{brand:"ಆಯ್ಸ್ಟರ್ ಫಾರ್ಮ್",n1:"ಅಂಗಡಿ",n2:"ಪ್ರಯೋಜನಗಳು",n3:"ಬೆಳೆಯುವ ವಿಧಾನ",tag:"100% ತಾಜಾ · ತೋಟದಿಂದ ಮನೆಗೆ",h1:"ತಾಜಾ ಆಯ್ಸ್ಟರ್ ಅಣಬೆ, ನೇರವಾಗಿ ನಿಮ್ಮ ಮನೆಗೆ",sub:"ಸ್ವಚ್ಛವಾಗಿ ಬೆಳೆದ ಮೃದು, ರುಚಿಕರ, ಆರೋಗ್ಯಕರ ಆಯ್ಸ್ಟರ್ ಅಣಬೆ. ವಿಧ ಮತ್ತು ತೂಕ ಆರಿಸಿ, ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ.",per:"ಆಯ್ಸ್ಟರ್ ಅಣಬೆ: 200 ಗ್ರಾಂ =",pick:"",wt:"1. ತೂಕ ಆರಿಸಿ",tot:"ಒಟ್ಟು ಬೆಲೆ",ord:"2. ನಿಮ್ಮ ವಿವರಗಳು",nm:"ನಿಮ್ಮ ಹೆಸರು",mb:"ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (10 ಅಂಕಿ)",ad:"ವಿತರಣಾ ವಿಳಾಸ",wa:"ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ",next1:"ಮುಂದೆ: ಪ್ರಯೋಜನಗಳು →",bh:"ಆಯ್ಸ್ಟರ್ ಅಣಬೆಯ ಆರೋಗ್ಯ ಪ್ರಯೋಜನಗಳು",bs:"ಇಡೀ ಕುಟುಂಬಕ್ಕೆ ಆಯ್ಸ್ಟರ್ ಅಣಬೆ ಏಕೆ ಒಳ್ಳೆಯದು ಎಂಬುದನ್ನು ಸರಳವಾಗಿ ತಿಳಿಯಿರಿ.",back:"← ಹಿಂದೆ",next2:"ಮುಂದೆ: ಬೆಳೆಯುವ ವಿಧಾನ →",gh:"ಆಯ್ಸ್ಟರ್ ಅಣಬೆ ಹೇಗೆ ಬೆಳೆಯುತ್ತದೆ",gs:"ಒಂದು ಹಿಡಿ ಹುಲ್ಲಿನಿಂದ ಸುಮಾರು 4 ವಾರದಲ್ಲಿ ತಾಜಾ ಅಣಬೆ. ಪ್ರತಿ ಹಂತವನ್ನು ನೋಡಿ.",tipH:"💡 ಸುಲಭ ಬೆಳೆಯುವ ಸಲಹೆ",tipP:"ಕೋಣೆ ಸ್ವಚ್ಛ, ತಂಪು (20-28°C) ಮತ್ತು ತೇವವಾಗಿರಲಿ. ಚೀಲ ಒಣಗಲು ಬಿಡಬೇಡಿ, ಕೊಳಕು ನೀರು ಬಳಸಬೇಡಿ.",next3:"ಈಗ ಆರ್ಡರ್ ಮಾಡಿ →",per200:"200 ಗ್ರಾಂಗೆ",selTxt:"ಆಯ್ಕೆ",errN:"ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರು ಬರೆಯಿರಿ.",errM:"ಸರಿಯಾದ 10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನೀಡಿ.",errA:"ದಯವಿಟ್ಟು ವಿಳಾಸ ಬರೆಯಿರಿ.",msg:"ನಮಸ್ಕಾರ! ನಾನು ಆಯ್ಸ್ಟರ್ ಅಣಬೆ ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ."}
};

let lang = "en", type = TYPES[0], grams = 200;
const $ = id => document.getElementById(id);
const t = k => I18N[lang][k];
const calc = () => Math.round(type.p * grams / BASE_GRAMS);
const label = g => g >= 1000 ? (g/1000) + " kg" : g + " g";

function mush(c, s) {
  return `<svg viewBox="0 0 100 100" ${s||""}><path d="M44 58h12l3 30c0 4-18 4-18 0z" fill="#f4ead8"/><path d="M8 56C8 26 30 12 52 14c24 2 42 18 40 42-1 8-12 5-20 2-9 5-20 3-28 0-10 4-22 6-30 0-3 2-6 2-6 0z" fill="${c}"/><path d="M30 52q4-22 18-30M56 24q16 8 20 26" stroke="#0002" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`;
}

function renderStatic() {
  $("heroArt").innerHTML = mush("#f3eee2");
  $("grams").innerHTML = GRAMS.map(g => `<button class="gram" data-g="${g}">${label(g)}</button>`).join("");
  $("benefits").innerHTML = BEN.map(b => `<div class="ben"><div class="ic">${b[0]}</div><h4>${b[1][lang]}</h4><p>${b[2][lang]}</p></div>`).join("");
  $("steps").innerHTML = STEPS.map((s, i) => `<div class="step"><div class="pic" style="background:${s[1]}"><b>${i+1}</b><span>${s[0]}</span></div><div><h4>${s[2][lang]}</h4><p>${s[3][lang]}</p></div></div>`).join("");
  tryPhoto($("heroArt"), PHOTOS.hero);
  document.querySelectorAll(".pic").forEach((p,i)=>{const b=p.querySelector("b");const im=new Image();im.onload=()=>{p.innerHTML="";p.appendChild(im);p.appendChild(b)};im.src=PHOTOS.steps[i]});
  $("baseRate").textContent = "₹" + TYPES[0].p;
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  $("name").placeholder = lang === "en" ? "e.g. Ravi Kumar" : "ಉದಾ: ರವಿ ಕುಮಾರ್";
  $("addr").placeholder = lang === "en" ? "House no, street, city" : "ಮನೆ ಸಂಖ್ಯೆ, ಬೀದಿ, ಊರು";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  refresh();
}

function refresh() {
  document.querySelectorAll(".type").forEach(b => b.classList.toggle("on", b.dataset.t === type.id));
  document.querySelectorAll(".gram").forEach(b => b.classList.toggle("on", +b.dataset.g === grams));
  $("price").textContent = "₹" + calc();
  $("sel").textContent = `${t("selTxt")}: ${type[lang]} · ${label(grams)}`;
}

function route() {
  let h = (location.hash || "#shop").slice(1);
  if (!["shop", "benefits", "grow"].includes(h)) h = "shop";
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("on", p.id === "p-" + h));
  document.querySelectorAll("nav a").forEach(a => a.classList.toggle("on", a.dataset.page === h));
  window.scrollTo(0, 0);
}

function buildOrder() {
  const n = $("name").value.trim(), m = $("mobile").value.trim(), a = $("addr").value.trim();
  const err = !n ? t("errN") : !/^[6-9]\d{9}$/.test(m) ? t("errM") : !a ? t("errA") : "";
  $("err").textContent = err;
  if (err) return null;
  const text = [t("msg"), "", "🍄 Type: " + type.en, "⚖️ Weight: " + label(grams), "💰 Price: ₹" + calc(), "", "👤 Name: " + n, "📱 Mobile: " + m, "📍 Address: " + a].join("\n");
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
}

document.addEventListener("click", e => {
  const tb = e.target.closest(".type"), gb = e.target.closest(".gram"), lb = e.target.closest("[data-lang]");
  if (tb) { type = TYPES.find(x => x.id === tb.dataset.t); refresh(); }
  if (gb) { grams = +gb.dataset.g; refresh(); }
  if (lb) { lang = lb.dataset.lang; renderStatic(); }
});
$("send").addEventListener("click", e => {
  const url = buildOrder();
  if (!url) { e.preventDefault(); return; }
  $("send").href = url;
});
$("mobile").addEventListener("input", e => e.target.value = e.target.value.replace(/\D/g, ""));
window.addEventListener("hashchange", route);
renderStatic();
route();
