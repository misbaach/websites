import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Home": "Home",
      "About": "About",
      "Features": "Features",
      "Download": "Download",
      
      "Home Title": "Let's Study With",
      "Home Content": "is your go-to app for making learning a breeze! Dive into a world of knowledge with dual language support.",
      
      "About Title": "Why",
      "About Content 1": "is here to revolutionize your educational experience! Our interactive apps combines engaging content with the flexibility of dual language support in Indonesian and English.",
      "About Content 2": "Not only will you master your subjects, but you'll also significantly improve your language skills. Say goodbye to dull textbooks and hello to a fun and effective learning journey with",
      
      "Feature Title 1": "SmiLearn just got more fun! ",
      "Feature Content 1.1": "Now you can collect new question categories with the coins you collect.",
      "Feature Content 1.2": "Each category has unique flashcards and quizzes that make learning less boring. Ready to be a learning champion?",
      "Feature Content 1.3": "Let's collect coins and unlock new question categories!",

      "Feature Title 2": "New challenges, new rewards!",
      "Feature Content 2.1": "SmiLearn comes with new problem categories that you can earn coins for. Each category has fun problems that will make you smarter.",
      "Feature Content 2.2": "Are you ready for the challenge? Collect as many coins as you can and unlock all the question categories!",

      "Download Text": "Get it now on Google Play Store"
    },
  },
  id: {
    translation: {
      "Home": "Beranda",
      "About": "Tentang",
      "Features": "Fitur",
      "Download": "Unduh",
      
      "Home Title": "Ayo Belajar Dengan",
      "Home Content": "adalah aplikasi andalan Anda untuk membuat belajar menjadi mudah! Selami dunia pengetahuan dengan dukungan dua bahasa.",
      
      "About Title": "Mengapa",
      "About Content 1": "hadir untuk merevolusi pengalaman belajar Anda! Aplikasi interaktif kami menggabungkan konten yang menarik dengan fleksibilitas dukungan dua bahasa, yaitu Bahasa Indonesia dan Inggris.",
      "About Content 2": "Anda tidak hanya akan menguasai mata pelajaran Anda, tetapi Anda juga akan meningkatkan kemampuan bahasa Anda secara signifikan. Ucapkan selamat tinggal pada buku pelajaran yang membosankan dan selamat datang pada perjalanan belajar yang menyenangkan dan efektif dengan",
      
      "Feature Title 1": "SmiLearn makin asyik!",
      "Feature Content 1.1": "Sekarang kamu bisa koleksi kategori soal baru dengan koin yang kamu kumpulkan.",
      "Feature Content 1.2": "Setiap kategori punya flashcard dan kuis unik yang bikin belajar jadi nggak membosankan. Siap jadi juara belajar?",
      "Feature Content 1.3": "Yuk, kumpulin koinnya dan buka kategori soal baru!",

      "Feature Title 2": "Tantangan baru, hadiah baru!",
      "Feature Content 2.1": "SmiLearn hadir dengan kategori soal baru yang bisa kamu dapatkan dengan koin. Setiap kategori punya soal-soal seru yang bikin kamu makin pintar.",
      "Feature Content 2.2": "Siap terima tantangannya? Kumpulkan koin sebanyak-banyaknya dan buka semua kategori soal!",

      "Download Text": "Dapatkan sekarang di Google Play Store"
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "id", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
