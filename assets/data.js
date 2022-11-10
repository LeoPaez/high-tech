const products = [
  //* PROCESADORES
  {
    img: "assets/img/products/processors/i9-13900k.webp",
    name: "Intel Core i9-13900K 3 GHz Box",
    price: "789",
    category: "procesadores",
  },
  {
    img: "assets/img/products/processors/ryzen-9-5900x.webp",
    name: "AMD Ryzen 9 5900X 3.7 GHz",
    price: "410",
    category: "procesadores", 
  },
  {
    img: "assets/img/products/processors/i7-11700k.webp",
    name: "Intel Core i7-11700K 3.6 GHz",
    price: "351",
    category: "procesadores", 
  },
  {
    img: "assets/img/products/processors/ryzen-7-5800x.webp",
    name: "AMD Ryzen 7 5800X 3.8GHz",
    price: "276",
    category: "procesadores", 
  },
  {
    img: "assets/img/products/processors/i5-12400f.webp",
    name: "Intel Core i5-12400F 2.5 GHz",
    price: "212",
    category: "procesadores", 
  },
  {
    img: "assets/img/products/processors/ryzen-5-5600x.webp",
    name: "AMD Ryzen 5 5600X 3.7GHz",
    price: "195",
    category: "procesadores", 
  },
  {
    img: "assets/img/products/processors/i3-12100.webp",
    name: "Intel Core i3-12100 3.3 GHz",
    price: "161",
    category: "procesadores", 
  },
  {
    img: "assets/img/products/processors/i5-10400f.webp",
    name: "Intel Core i5-10400F 2.90 GHz",
    price: "150",
    category: "procesadores", 
  },
  {
    img: "assets/img/products/processors/ryzen-5-5500.webp",
    name: "AMD Ryzen 5 5500 3.6GHz Box",
    price: "107",
    category: "procesadores", 
  },
  {
    img: "assets/img/products/processors/ryzen-3-3200g.webp",
    name: "AMD Ryzen 3 3200G 3.6 GHz BOX",
    price: "95",
    category: "procesadores", 
  },
  {
    img: "assets/img/products/processors/i3-10100f.webp",
    name: "Intel Core i3-10100F 3.60 GHz",
    price: "85",
    category: "procesadores", 
  },
  {
    img: "assets/img/products/processors/pentium-gold-g6405.webp",
    name: "Intel Pentium Gold G6405 4.1 GHz",
    price: "76",
    category: "procesadores", 
  },

  //* MOTHERBOARDS
  {
    img: "assets/img/products/motherboards/asus-tuf-gaming-x670e-plus.webp",
    name: "ASUS TUF GAMING X670E-PLUS",
    price: "339",
    category: "motherboards", 
  },
  {
    img: "assets/img/products/motherboards/msi-mag-z690-tomahawk.webp",
    name: "MSI MAG Z690 TOMAHAWK WIFI DDR4",
    price: "280",
    category: "motherboards", 
  },
  {
    img: "assets/img/products/motherboards/asus-tuf-gaming-x570-pro.webp",
    name: "Asus TUF GAMING X570-PRO (WI-FI)",
    price: "226",
    category: "motherboards", 
  },
  {
    img: "assets/img/products/motherboards/gigabyte-b550-aorus-elite-v2.webp",
    name: "Gigabyte B550 AORUS ELITE V2",
    price: "157",
    category: "motherboards", 
  },
  {
    img: "assets/img/products/motherboards/asus-prime-b550-plus.webp",
    name: "Asus PRIME B550-PLUS",
    price: "119",
    category: "motherboards", 
  },
  {
    img: "assets/img/products/motherboards/gigabyte-b560m-ds3h-v2.webp",
    name: "Gigabyte B560M DS3H V2",
    price: "111",
    category: "motherboards", 
  },
  {
    img: "assets/img/products/motherboards/gigabyte-b450-aorus-elite-v2.webp",
    name: "Gigabyte B450 Aorus Elite V2",
    price: "107",
    category: "motherboards", 
  },
  {
    img: "assets/img/products/motherboards/asus-prime-b450m-a-ii.webp",
    name: "Asus PRIME B450M-A II",
    price: "85",
    category: "motherboards", 
  },

  //* RAM
  {
    img: "assets/img/products/ram/G.Skill-Trident-Z-Neo-DDR4-32GB-2x16GB.webp",
    name: "G.Skill Trident Z Neo DDR4 3600 PC4-28800 32GB 2x16GB CL16",
    price: "224",
    category: "ram", 
  },
  {
    img: "assets/img/products/ram/corsair-vengeance-rgb-pro-sl-ddr4-32gb-2x16gb.webp",
    name: "Corsair Vengeance RGB Pro SL DDR4 3600 PC4-28800 32GB 2x16GB CL18 Optimizado AMD Ryzen    ",
    price: "125",
    category: "ram", 
  },
  {
    img: "assets/img/products/ram/corsair-vengeance-rgb-pro-ddr416gb-2x8gb.webp",
    name: "Corsair Vengeance RGB Pro Optimizado AMD DDR4 3200 16GB 2x8GB CL16",
    price: "87",
    category: "ram", 
  },
  {
    img: "assets/img/products/ram/team-group-t-force-vulcan-z-ddr4-16-gb-2x8gb.webp",
    name: "Team Group T-Force Vulcan Z DDR4 3200Mhz PC4-25600 16 GB 2x8GB CL16 Gris",
    price: "69",
    category: "ram", 
  },
  {
    img: "assets/img/products/ram/corsair-vengeance-lpx-ddr4-16gb-2x8gb.webp",
    name: "Corsair Vengeance LPX DDR4 3200 PC4-25600 16GB 2X8GB CL16 Negro",
    price: "67",
    category: "ram", 
  },
  {
    img: "assets/img/products/ram/kingston-fury-beast-ddr4-2666-mhz-8gb.webp",
    name: "Kingston FURY Beast DDR4 2666 MHz 8GB CL16",
    price: "36",
    category: "ram", 
  },

  //* PLACAS DE VIDEO
  {
    img: "assets/img/products/graphics-cards/evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x.webp",
    name: "EVGA GeForce RTX 3090 FTW3 ULTRA GAMING 24GB GDDR6X",
    price: "2262",
    category: "placas-de-video", 
  },
  {
    img: "assets/img/products/graphics-cards/msi-amd-radeon-rx-6800-xt-gaming-x-trio-16gb-gddr6.jpg",
    name: "MSI AMD Radeon RX 6800 XT GAMING X TRIO 16GB GDDR6",
    price: "1415",
    category: "placas-de-video", 
  },
  {
    img: "assets/img/products/graphics-cards/msi-geforce-rtx-3080-gaming-z-trio-lhr-10gb-gddr6.webp",
    name: "MSI GeForce RTX 3080 GAMING Z TRIO LHR 10GB GDDR6",
    price: "1000",
    category: "placas-de-video", 
  },
  {
    img: "assets/img/products/graphics-cards/gigabyte-geforce-rtx-3080-gaming-oc-v2-10gb-gddr6x.webp",
    name: "Gigabyte GeForce RTX 3080 GAMING OC V2 LHR 10GB GDDR6X",
    price: "889",
    category: "placas-de-video", 
  },
  {
    img: "assets/img/products/graphics-cards/sapphire-nitro-amd-radeon-rx-6800-gaming-16gb-gddr6.webp",
    name: "Sapphire NITRO+ AMD Radeon RX 6800 Gaming 16GB GDDR6",
    price: "600",
    category: "placas-de-video", 
  },
  {
    img: "assets/img/products/graphics-cards/asus-dual-geforce-rtx-3060-oc-edition-v2-12gb-gddr6.webp",
    name: "Asus Dual GeForce RTX 3060 OC Edition V2 12GB GDDR6",
    price: "390",
    category: "placas-de-video", 
  },
  {
    img: "assets/img/products/graphics-cards/msi-geforce-rtx-2060-ventus-oc-12gb-gddr6.webp",
    name: "MSI GeForce RTX 2060 VENTUS OC 12GB GDDR6",
    price: "320",
    category: "placas-de-video", 
  },
  {
    img: "assets/img/products/graphics-cards/asus-tuf-gaming-geforce-gtx-1660-super-oc-edition-6gb-gddr6.webp",
    name: "ASUS TUF Gaming GeForce GTX 1660 SUPER OC Edition 6GB GDDR6",
    price: "260",
    category: "placas-de-video", 
  },
  {
    img: "assets/img/products/graphics-cards/msi-amd-radeon-rx-6600-mech-2x-8gb-gddr6.webp",
    name: "MSI AMD Radeon RX 6600 MECH 2X 8GB GDDR6",
    price: "250",
    category: "placas-de-video", 
  },
  {
    img: "assets/img/products/graphics-cards/gigabyte-geforce-gt-710-2gb-ddr3.webp",
    name: "Gigabyte GeForce GT 710 2GB DDR3",
    price: "85",
    category: "placas-de-video", 
  },

  //* DISCOS RIGIDOS
  {
    img: "",
    name: "",
    price: "",
    category: "discos-rigidos", 
  },
]