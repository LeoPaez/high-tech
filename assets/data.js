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
    img: "assets/img/products/hdd/wd-red-4tb-35-sata3.webp",
    name: 'WD Red 4TB 3.5" SATA3',
    price: "103",
    category: "discos-rigidos", 
  },
  {
    img: "assets/img/products/hdd/wd-blue-2tb-35-sata3.webp",
    name: 'WD Blue 2TB 3.5" SATA3',
    price: "55",
    category: "discos-rigidos", 
  },
  {
    img: "assets/img/products/hdd/seagate-barracuda-2tb.webp",
    name: 'Seagate BarraCuda 3.5" 2TB SATA 3',
    price: "53",
    category: "discos-rigidos", 
  },
  {
    img: "assets/img/products/hdd/seagate-barracuda-1tb.webp",
    name: 'Seagate BarraCuda 3.5" 1TB SATA3',
    price: "42",
    category: "discos-rigidos", 
  },
  {
    img: "assets/img/products/hdd/wd-blue-1tb.webp",
    name: 'WD Blue 1TB 3.5" SATA3',
    price: "41",
    category: "discos-rigidos", 
  },

  //* SSD
  {
    img: "assets/img/products/ssd/msi-spatium-m480-ssd-2tb-m2-2280-s2-m-nvme-pcie.webp",
    name: "MSI Spatium M480 HeatSink SSD 2TB M.2 2280-S2-M NVMe PCIe",
    price: "322",
    category: "ssd", 
  },
  {
    img: "assets/img/products/ssd/samsung-980-ssd-1tb-pcie-30-nvme-m2.webp",
    name: "Samsung 980 SSD 1TB PCIe 3.0 NVMe M.2",
    price: "114",
    category: "ssd", 
  },
  {
    img: "assets/img/products/ssd/samsung-870-qvo-ssd-25-1tb-sata3-negro.webp",
    name: 'Samsung 870 EVO SSD 2.5" 1TB SATA3 Negro',
    price: "102",
    category: "ssd", 
  },
  {
    img: "assets/img/products/ssd/crucial-bx500-ssd-1tb-3d-nand-sata3.webp",
    name: "Crucial BX500 SSD 1TB 3D NAND SATA3",
    price: "80",
    category: "ssd", 
  },
  {
    img: "assets/img/products/ssd/kingston-ssd.webp",
    name: "Kingston A400 SSD 480GB",
    price: "38",
    category: "ssd", 
  },
  {
    img: "assets/img/products/ssd/kingston-ssd.webp",
    name: "Kingston A400 SSD 240GB",
    price: "24",
    category: "ssd", 
  },

  //* FUENTES
  {
    img: "assets/img/products/power-supplies/corsair-1200w-80-plus-platinum-modular.webp",
    name: "Corsair HX1200 1200W 80 Plus Platinum Modular",
    price: "248",
    category: "fuentes", 
  },
  {
    img: "assets/img/products/power-supplies/asus-rog-strix-1000g-1000w-80-plus-gold-modular.webp",
    name: "Asus ROG Strix 1000G 1000W 80 Plus Gold Modular",
    price: "200",
    category: "fuentes", 
  },
  {
    img: "assets/img/products/power-supplies/evga-supernova-650-g6-650w-80-plus-gold-full-modular.webp",
    name: "EVGA SuperNOVA 650 G6 650W 80 Plus Gold Full Modular",
    price: "117",
    category: "fuentes", 
  },
  {
    img: "assets/img/products/power-supplies/corsair-cv-series-cv650-650w-80-plus-bronze-v2.webp",
    name: "Corsair CV Series CV650 650W 80 Plus Bronze V2",
    price: "67",
    category: "fuentes", 
  },
  {
    img: "assets/img/products/power-supplies/thermaltake-smart-rgb-700w-80-plus.webp",
    name: "Thermaltake Smart RGB 700W 80 Plus",
    price: "58",
    category: "fuentes", 
  },
  {
    img: "assets/img/products/power-supplies/tempest-gaming-psu-x-650w-80-plus-bronce-modular.webp",
    name: "Tempest PSU X 650W 80+ Bronce Modular Fuente de Alimentación",
    price: "46",
    category: "fuentes", 
  },
  {
    img: "assets/img/products/power-supplies/tempest-psu-750w.webp",
    name: "Tempest PSU 750W Fuente de Alimentación",
    price: "35",
    category: "fuentes", 
  },

  //* GABINETES
  {
    img: "assets/img/products/cases/corsair-7000d-airflow-usb-30-negra.webp",
    name: "Corsair 7000D AIRFLOW USB 3.0 Negra",
    price: "355",
    category: "gabinetes", 
  },
  {
    img: "assets/img/products/cases/corsair-icue-5000x-rgb-ql-edition-cristal-templado-usb-31-blanca.webp",
    name: "Corsair iCUE 5000X RGB QL Edition Cristal Templado USB 3.1 Blanca",
    price: "334",
    category: "gabinetes", 
  },
  {
    img: "assets/img/products/cases/asus-rog-strix-helios-white-edition-cristal-templado.webp",
    name: "ASUS ROG STRIX HELIOS White Edition Cristal Templado USB 3.2",
    price: "291",
    category: "gabinetes", 
  },
  {
    img: "assets/img/products/cases/msi-mpg-velox-100p-airflow-cristal-templado.webp",
    name: "MSI MPG Velox 100P Airflow Cristal Templado USB 3.2",
    price: "133",
    category: "gabinetes", 
  },
  {
    img: "assets/img/products/cases/msi-mpg-sekira-100p-cristal-templado.webp",
    name: "MSI MPG SEKIRA 100P Cristal Templado USB 3.0",
    price: "83",
    category: "gabinetes", 
  },
]