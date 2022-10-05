const paalssInfo = {
  "@context": "https://schema.org",
  "@type": "Person",
  familyName: "Stakvik",
  givenName: "Pål",
  gender: "http://schema.org/Male",
  birthDate: "1994-11-28",
  image: "../public/images/cvphoto2.webp",
  nationality: "Norwegian",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Trondheim",
    postalCode: "7022",
    addressCountry: "Norway",
  },
  worksFor: "http://extraoptical.no/",
  alumniOf: "https://www.ntnu.no/gjovik",
  knowsLanguage: [
    {
      "@type": "Language",
      name: "Norwegian",
      alternateName: "no",
    },
    {
      "@type": "Language",
      name: "English",
      alternateName: "en",
    },
  ],
  knowsAbout: ["webutvikling"],
  jobTitle: "webutvikler",
  sameAs: [
    "https://github.com/paalss",
    "https://www.linkedin.com/in/pal-stakvik/",
    "https://www.instagram.com/gassosaman/",
    "https://scratch.mit.edu/users/pa0110/",
  ],
  email: "mailto:paalss94@gmail.com",
};

export default paalssInfo;
