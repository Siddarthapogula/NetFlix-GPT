export const Logo = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzIyMTkyMzgzZTE3MTVhZTliNmJmMTBkNzI2NDEyNSIsInN1YiI6IjY1Nzg0NTU5YWY1OGNiMDBhZWE1YmVhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mh-lFW-gW7MHFEhWe4oPScqqaLHMXTPh4h6X270Duoo',
    }
  };


  export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

  export const Langs = [
    { id:12, lang:"English"}
  ,  { id:13,lang:"Hindi"}
  , { id:14, lang:"Telugu"}
];

export const langSet = {
  English:{
    GptSearchHolder: "GPT at your service! Tell me keywords or preferences, and lets find your perfect movie. ",
    searchBtn:"Search",
  },
  Telugu:{
    GptSearchHolder: "మీ సేవలో జిపిటి! కీలక పదాలు లేదా ప్రాధాన్యతలను నాకు చెప్పండి మరియు మీ పరిపూర్ణ చలనచిత్రాన్ని కనుగొందాం. ",
    searchBtn:"వెతుకు",
  },
  Hindi:{
    GptSearchHolder: "जीपीटी आपकी सेवा में! मुझे कीवर्ड या प्राथमिकताएं बताएं, और अपनी सही फिल्म ढूंढें। ",
    searchBtn:"ढूँढ",
  }
}
export const OPENAI_KEY = "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";