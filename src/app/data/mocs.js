  const whiskys = [
    {
      id: 1,
      name: "Bulleit Bourbon 10 Year Old",
      avatar: "https://luxuryshopwines.com/wp-content/uploads/2025/07/Bulleit-Bourbon-10-Year-Old.png",
      pais: "Estados Unidos",
      status: "pocas_unidades"
    },
    {
      id: 2,
      name: "Aberlour 12 Years Double Cask",
      avatar: "https://luxuryshopwines.com/wp-content/uploads/2025/07/Aberlour-12-Years-Double-Cask.png",
      pais: "Escocia",
      status: "pocas_unidades"
    },
    {
      id: 3,
      name: "Nikka From The Barrel",
      avatar: "https://luxuryshopwines.com/wp-content/uploads/2025/07/Nikka-From-The-Barrel.png",
      pais: "Japón",
      status: "sin_stock"
    },
    {
      id: 4,
      name: "Jameson Black Barrel",
      avatar: "https://luxuryshopwines.com/wp-content/uploads/2025/07/Jameson-Black-Barrel.png",
      pais: "Irlanda",
      status: "varias_unidades"
    },
    {
      id: 5,
      name: "Old Parr 12 años",
      avatar: "https://luxuryshopwines.com/wp-content/uploads/2025/07/Old-Parr-12-anos.png",
      pais: "Escocia",
      status: "pocas_unidades"
    },
    {
      id: 6,
      name: "The Glenlivet Founder's Reserve",
      avatar: "https://luxuryshopwines.com/wp-content/uploads/2025/07/The-Glenlivet-Founders-Reserve.png",
      pais: "Escocia",
      status: "sin_stock"
    },
    {
      id: 7,
      name: "Jack Daniel's Tennessee Old No.7",
      avatar: "https://luxuryshopwines.com/wp-content/uploads/2025/03/Jack-Daniels-1.png",
      pais: "Estados Unidos",
      status: "pocas_unidades"
    },
    {
      id: 8,
      name: "Laphroaig",
      avatar: "https://luxuryshopwines.com/wp-content/uploads/2025/03/Laphroaig-10.png",
      pais: "Escocia",
      status: "varias_unidades"
    },
    {
      id: 9,
      name: "Macallan Sherry Oak 12 Years Old",
      avatar: "https://luxuryshopwines.com/wp-content/uploads/2025/03/The-Macallan-Sherry-Oak-12-Years-Old-Miniatura.png",
      pais: "Escocia",
      status: "varias_unidades"
    },
    {
      id: 10,
      name: "Johnnie Walker Blue Label",
      avatar: "https://luxuryshopwines.com/wp-content/uploads/2025/03/Johnnie-Walker-Blue-label.png",
      pais: "Escocia",
      status: "varias_unidades"
    }
  ];

  const mangas = [
   {
    name: "GTO",
    escritor: "Toru Fujisawa",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/gto-compressor.jpg"
   },
   {
    name: "Made in Abyss",
    escritor: "Akihito Tsukushi",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/IVRMADABY01-compressor-724x1024.jpg"
   },
   {
    name: "Monogatari Series",
    escritor: "Nisio Isin",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/Bakemonogatari-1-compressor.png"
   },
   {
    name: "20th Century Boys",
    escritor: "Naoki Urasawa",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/portada_20th-century-boys-n-0111-nueva-edicion_naoki-urasawa_201710031459-compressor.jpg"
   },
   {
    name: "Solo Levelling",
    escritor: "Chugong",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/il_570xN.2205078869_kc58-compressor.jpg"
   },
   {
    name: "Slam Dunk",
    escritor: "Takehiko Inoue",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/63792c2fa11d4d869a5e2db99026d705-compressor.jpg"
   },
   {
    name: "Grand Blue",
    escritor: "Kenji Inoue",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/Volumen_01-compressor.jpg"
   },
   {
    name: "Kingdom",
    escritor: "Yasuhisa Hara",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/91IhAnTuK8L-compressor-724x1024.jpg"
   },
   {
    name: "Buenas noches Punpun",
    escritor: "Inio Asano",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/01300800101_G-compressor.jpg"
   },
   {
    name: "Vagabond",
    escritor: "Takehiko Inoue",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/1ed93bff3f3049dca156ddb003cf2221-compressor.jpg"
   },
   {
    name: "One Piece",
    escritor: "Eiichiro Oda",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/portada_one-piece-n-01_eiichiro-oda_201908291630-compressor.jpg"
   },
   {
    name: "Monster",
    escritor: "Naoki Urasawa",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/monster-kanzenban-n1_9788467476613-compressor.jpg"
   },
   {
    name: "Fullmetal Alchemist",
    escritor: "Hiromu Arakawa",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/51MxzXV5B-L._SX353_BO1204203200_-compressor.jpg"
   },
   {
    name: "Jojo's Bizarre Adventure",
    escritor: "Hirohiko Araki",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/Phantom_Blood_-_Volumen_01_-_Ivrea_Espa_a-Argentina-compressor.jpg"
   },
   {
    name: "Bersek",
    escritor: "Kentaro Minura",
    label:
    "https://www.omegacenter.es/blog/wp-content/uploads/2020/05/sbema001_0-compressor.jpg"
   }
 ];

export { whiskys, mangas };