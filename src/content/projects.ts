export type ProjectItem = {
  id: number;
  title: string;
  href?: string;
  image: string;
  textColor: 'white' | 'black';
  visible?: boolean;
};

const project = (id: number, title: string, href?: string, visible = true): ProjectItem => ({
  id,
  title,
  href,
  image: `/images/projects/${id}.jpg`,
  textColor: id === 7 ? 'black' : 'white',
  visible
});

export const projects: ProjectItem[] = [
  project(1, 'NUTRI SIN EXCUSAS - Creación de contenido', 'https://www.instagram.com/reel/DXZ4xO5DHkp/?igsh=MWFyMnZxb3k5aWk2ZQ%3D%3D'),
  project(2, 'Retoque fotográfico para BIMANI', 'https://www.behance.net/gallery/236709947/FASHION-CAMPAIGN-RETOUCHING'),
  project(3, 'LALIA BENCHELEF - Creación de contenido', 'https://www.instagram.com/reel/DUgf1bWCB31/?igsh=OXRseGhmbHZ3dmJi'),
  project(4, 'Retoque fotográfico para BIMANI', 'https://www.behance.net/gallery/244128777/PRODUCT-PHOTO-RETOUCHING'),
  project(5, 'INÉS MARTÍN ALCALDE - Creación de contenido', 'https://www.instagram.com/reel/DMc29qIs-pZ/?igsh=MWh5bGNxaWJkcG5odw%3D%3D'),
  project(6, 'Retoque fotográfico para BIMANI', 'https://www.behance.net/gallery/220897913/FASHION-CAMPAIGN-RETOUCHING'),
  project(7, 'Branding - La Gallina Carola', 'https://www.lagallinacarola.com/'),
  project(8, 'JÚLIA SOLÉ - Creación de contenido', 'https://www.instagram.com/reel/DVWC3cMihyU/?igsh=ejV5ZTJ0MXB4NDdy'),
  project(9, 'Retoque fotográfico para BIMANI', 'https://www.behance.net/gallery/220897061/PRODUCT-PHOTO-RETOUCHING'),
  project(10, 'Retoque fotográfico para BIMANI', 'https://www.behance.net/gallery/236710923/CAMPAIGN-PHOTO-RETOUCHING'),
  project(11, 'PAULA CREMADES - Creación de contenido', 'https://www.instagram.com/p/DVbqypFiAqB/?igsh=MW83cnM5d3VmOGZjNQ%3D%3D'),
  project(12, 'NUTRI SIN EXCUSAS - Creación de contenido', 'https://www.instagram.com/reel/DWegTqbjAVu/?igsh=MTB3MzZxbWJmZmk5aA%3D%3D'),
  project(13, 'Retoque fotográfico para BIMANI', 'https://www.behance.net/gallery/244129447/FASHION-CAMPAIGN-RETOUCHING'),
  project(14, 'NURIA BLANCO - Creación de contenido', 'https://www.instagram.com/reel/DSaJDiwjJn4/?igsh=MTUxcXp4ZmZ2bG4zNQ%3D%3D'),
  project(15, 'Retoque fotográfico para MARTÍN ALCALDE', 'https://www.behance.net/gallery/244444941/CAMPAIGN-PHOTO-RETOUCHING'),
  project(16, 'PAULA CREMADES - Creación de contenido', 'https://www.instagram.com/p/DVd2z_dCD3Z/?igsh=MWFmNjRqbmFkdGhuZw%3D%3D&img_index=7'),
  project(17, 'Campaña gráfica para MARTÍN ALCALDE'),
  project(18, 'Retoque fotográfico para BIMANI', 'https://www.behance.net/gallery/244902855/CAMPAIGN-PHOTO-RETOUCHING'),
  project(19, 'Retoque fotográfico publicado en TELVA', 'https://www.behance.net/gallery/220905835/EDITORIAL-PHOTO-RETOUCHING'),
  project(20, 'ANA BASTOS - Creación de contenido', 'https://www.instagram.com/reel/DSQeLTDDXRl/?igsh=bmdscTU3MGN4cXBt'),
  project(21, 'Branding - Seven & Seven', 'https://www.seveninmoservices.com/'),
  project(22, 'Retoque fotográfico para BAYMO', 'https://www.behance.net/gallery/245838191/E-COMMERCE-PHOTO-RETOUCHING'),
  project(23, 'Retoque fotográfico para TOUS', 'https://www.behance.net/gallery/236709215/PRODUCT-PHOTO-RETOUCHING'),
  project(24, 'BEA GIMENO - Creación de contenido', 'https://www.tiktok.com/@beagimeno_/video/7603498716904852766?_r=1&_t=ZN-95wlFbilDzW'),
  project(25, 'Retoque fotográfico para YERSE', 'https://www.behance.net/gallery/245838559/PRODUCT-PHOTO-RETOUCHING'),
  project(26, 'BEA GIMENO - Creación de contenido', 'https://www.instagram.com/reel/DWljrr4jS9Z/?igsh=dm4xZ3RraDQzN28z'),
  project(27, 'NURIA BLANCO - Creación de contenido', 'https://www.instagram.com/reel/DR2DLHsDE8c/?igsh=Y2k2eXFmOG13Nnl6'),
  project(28, 'Retoque fotográfico para BIMANI', 'https://www.behance.net/gallery/244129739/CAMPAIGN-PHOTO-RETOUCHING'),
  project(29, 'Retoque fotográfico para NOUMAD', 'https://www.behance.net/gallery/236708933/FASHION-CAMPAIGN-RETOUCHING'),
  project(30, 'Diseño web para SEVEN & SEVEN', 'https://www.seveninmoservices.com/'),
  project(31, 'ANA BASTOS - Creación de contenido', 'https://www.instagram.com/reel/DRSo6HKDfKQ/?igsh=MWQ0dThveXdhemdmbw%3D%3D'),
  project(32, 'Campaña gráfica para MARTÍN ALCALDE'),
  project(33, 'Branding - Toro Toro Restaurante'),
  project(34, 'JÚLIA SOLÉ - Creación de contenido', 'https://www.instagram.com/p/DO-_nQ6ioVq/?igsh=OGszejJhdDRzaHA5'),
  project(35, 'Retoque fotográfico para BIMANI', 'https://www.behance.net/gallery/245838369/E-COMMERCE-PHOTO-RETOUCHING'),
  project(36, 'Retoque fotográfico para LADY PIPA', 'https://www.behance.net/gallery/248478455/CAMPAIGN-PHOTO-RETOUCHING'),
  project(37, 'Retoque fotográfico publicado en TELVA NOVIAS', 'https://www.behance.net/gallery/223633761/EDITORIAL-PHOTO-RETOUCHING'),
  project(38, 'Retoque fotográfico para MARTÍN ALCALDE', 'https://www.behance.net/gallery/223628893/FASHION-CAMPAIGN-RETOUCHING'),
  project(39, 'NURIA BLANCO - Creación de contenido', 'https://www.instagram.com/reel/DQMXe3RjLey/?igsh=MW9yM3o2NWlkNXY4aw%3D%3D'),
  project(40, 'Diseño de camisetas para SAMANTHA PALOS'),
  project(41, 'BEA GIMENO - Creación de contenido', 'https://www.instagram.com/reel/DSCsEvWDQ_Q/?igsh=MTZvdW1tem03dTRqYw%3D%3D'),
  // TODO: Make visible when public/images/projects/42.jpg is available.
  project(42, 'Diseño de Lookbook para INÉS MARTÍN ALCALDE', undefined, false)
];
