import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    // ... your existing keys ...
    goodMorning: "Good Morning 👋",
    vendorLabel: "Vegetable Vendor • Mysuru",
    earned: "Earned",
    saved: "Saved",
    quickActions: "Quick Actions",
    myShop: "My Shop",
    listProducts: "List your products",
    learnSkills: "Learn Skills",
    growIncome: "Grow your income",
    findGigs: "Find Gigs",
    earnExtra: "Earn extra today",
    // UPDATED KEYS
    payments: "Payments",
    receivePayments: "Receive Payments",
    upiLabel: "UPI & QR Code",
    yourQR: "Your Business QR",
    bankSettlement: "Bank Settlement",
    recentIncome: "Recent Income",
    linkedAccount: "Linked Account",
    aiTip: "AI Price Tip!",
    aiMsg: "Tomatoes are in high demand today in Mysuru. Suggested price: ₹35/kg — you're selling at ₹28. Increase price to earn ₹210 more today!",
  },
  kn: {
    // ... your existing keys ...
    goodMorning: "ಶುಭ ಬೆಳಿಗ್ಗೆ 👋",
    vendorLabel: "ತರಕಾರಿ ವ್ಯಾಪಾರಿ • ಮೈಸೂರು",
    earned: "ಗಳಿಸಿದ್ದು",
    saved: "ಉಳಿಸಿದ್ದು",
    quickActions: "ತ್ವರಿತ ಕ್ರಿಯೆಗಳು",
    myShop: "ನನ್ನ ಅಂಗಡಿ",
    listProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಿ",
    learnSkills: "ಕೌಶಲ್ಯ ಕಲಿಯಿರಿ",
    growIncome: "ಆದಾಯ ಬೆಳೆಸಿ",
    findGigs: "ಕೆಲಸ ಹುಡುಕಿ",
    earnExtra: "ಇಂದು ಹೆಚ್ಚು ಗಳಿಸಿ",
    // UPDATED KEYS
    payments: "ಪಾವತಿಗಳು",
    receivePayments: "ಹಣ ಸ್ವೀಕರಿಸಿ",
    upiLabel: "UPI ಮತ್ತು QR ಕೋಡ್",
    yourQR: "ನಿಮ್ಮ ವ್ಯಾಪಾರ QR",
    bankSettlement: "ಬ್ಯಾಂಕ್ ಇತ್ಯರ್ಥ",
    recentIncome: "ಇತ್ತೀಚಿನ ಆದಾಯ",
    linkedAccount: "ಲಿಂಕ್ ಮಾಡಲಾದ ಖಾತೆ",
    aiTip: "AI ಬೆಲೆ ಸಲಹೆ!",
    aiMsg: "ಇಂದು ಮೈಸೂರಿನಲ್ಲಿ ಟೊಮೇಟೊಗೆ ಹೆಚ್ಚು ಬೇಡಿಕೆ ಇದೆ. ಸೂಚಿತ ಬೆಲೆ: ₹35/ಕೆಜಿ.",
  },
  hi: {
    // ... your existing keys ...
    goodMorning: "शुभ प्रभात 👋",
    vendorLabel: "सब्जी विक्रेता • मैसूर",
    earned: "कमाया",
    saved: "बचाया",
    quickActions: "त्वरित कार्य",
    myShop: "मेरी दुकान",
    listProducts: "उत्पाद सूचीबद्ध करें",
    learnSkills: "कौशल सीखें",
    growIncome: "आमदनी बढ़ाएं",
    findGigs: "काम खोजें",
    earnExtra: "आज अतिरिक्त कमाएं",
    // UPDATED KEYS
    payments: "भुगतान",
    receivePayments: "भुगतान प्राप्त करें",
    upiLabel: "UPI और QR कोड",
    yourQR: "आपका बिजनेस QR",
    bankSettlement: "बैंक सेटलमेंट",
    recentIncome: "हाल की आय",
    linkedAccount: "जुड़ा हुआ खाता",
    aiTip: "AI मूल्य सुझाव!",
    aiMsg: "आज मैसूर में टमाटर की मांग अधिक है। सुझाया मूल्य: ₹35/किग्रा।",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}