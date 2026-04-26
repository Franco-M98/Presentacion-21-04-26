/*
SQLyog Community v13.3.1 (64 bit)
MySQL - 10.4.32-MariaDB : Database - compumundo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`compumundo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `compumundo`;

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `Cod_Producto` int(11) NOT NULL,
  `Imagen` varchar(250) DEFAULT NULL,
  `Producto` varchar(250) DEFAULT NULL,
  `Categoria` varchar(250) DEFAULT NULL,
  `Descripcion` varchar(250) DEFAULT NULL,
  `Precio` int(11) DEFAULT NULL,
  PRIMARY KEY (`Cod_Producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `productos` */

insert  into `productos`(`Cod_Producto`,`Imagen`,`Producto`,`Categoria`,`Descripcion`,`Precio`) values 
(1000,'img/celulares/Samsung/s25.png','Samsung S25','Celulares','Snapdragon 8 Elite, pantalla Dynamic AMOLED 6.2\" FHD+ 120Hz, triple cámara 50MP, 12GB RAM, hasta 256GB, batería 4000mAh, IP68, Galaxy AI, Android 15.',1000000),
(1001,'img/celulares/Xiaomi/17max.png','Xiaomi 17 Pro Max','Celulares','Snapdragon 8 Elite Gen 5, pantalla AMOLED 6.9\" 120Hz, triple cámara Leica 50MP con zoom 5x, batería 7500mAh con carga 100W, 16GB RAM, hasta 1TB, IP68, pantalla trasera 2.9\"',2000000),
(2000,'img/notebooks/HP/HP250G7.jpg','HP 250 G7','Notebooks','Intel Core i5/i7 de 8va gen, pantalla HD 15.6\" antireflex, 8GB DDR4, SSD 256GB o HDD 1TB, gráficos Intel UHD 620, Wi-Fi, HDMI, USB 3.1, lector de huellas, Windows 10 Home, 1.78kg.',800000),
(2001,'img/notebooks/Lenovo/thinkpad14.png','Lenovo ThinkPad 14','Notebooks','Intel Core i5/i7 hasta 4.6GHz, pantalla IPS 14\" WUXGA 1920x1200, hasta 16GB DDR4, SSD 512GB NVMe, gráficos Intel integrados, Wi-Fi 6, Windows 11 Pro, 1.53kg, certificación MIL-STD-810H.',1400000),
(3000,'img/televisores/samsung43.png','Samsung 43\"','Telivisores','Smart TV LED 43\" 4K UHD (3840x2160), procesador Crystal 4K, PurColor, HDR10+, Motion Xcelerator, Tizen OS, Wi-Fi, 3x HDMI, 1x USB, modo juego ALLM, sonido 20W.',1200000),
(3001,'img/televisores/tcl55.png','TCL 55\"','Televisores','Smart TV LED 55\" 4K UHD (3840x2160), Google TV, procesador AIPQ con IA, HDR10+ / Dolby Vision, 60Hz, Dolby Atmos, Wi-Fi, 3x HDMI, Chromecast integrado, Google Assistant, modo juego ALLM.',80000),
(4000,'img/impresoras/ImpEpsonEcoTankL1300.jpg','Epson Tank L1300','Impresoras','Impresora color de formato ancho A3+, tanque de tinta recargable CMYK, resolución 5760x1440 dpi, velocidad 30ppm negro / 17ppm color, soporta hasta 33x48cm, rendimiento 7500 pág negro, USB, 12.2kg.',500000),
(4001,'img/impresoras/ImpEpsonEcoTankL1800.png','Epson Tank L1800','Impresoras','Impresora fotográfica A3+ de 6 colores (CcMmYK), tanque de tinta recargable, resolución 5760x1440 dpi, velocidad 15ppm, foto 10x15 en 45 seg, sin márgenes hasta 33x48cm, USB, 12.2kg.',700000);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
