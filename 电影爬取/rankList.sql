/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : movie

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2021-07-06 10:12:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `ranklist`
-- ----------------------------
DROP TABLE IF EXISTS `ranklist`;
CREATE TABLE `ranklist` (
  `id` int(10) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `actor` varchar(100) DEFAULT NULL,
  `score` varchar(10) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL,
  `source` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ranklist
-- ----------------------------
INSERT INTO `ranklist` VALUES ('0', '哥斯拉大战金刚', '主演：亚历山大·斯卡斯加德 米莉·博比·布朗 丽贝卡·豪尔 凯莉·霍特尔 布莱恩·泰里·亨利 小栗旬 ', '7.8', 'https://v.qq.com/x/cover/babks6vmrn25n9c.html', 'https://v.qq.com/txp/iframe/player.html?vid=l0037j1ebig');
INSERT INTO `ranklist` VALUES ('1', '你的婚礼', '主演：许光汉 章若楠 丁冠森 晏紫东 郭丞 王莎莎 梁靖康 刘迅 ', '7.8', 'https://v.qq.com/x/cover/mzc002005bvno3g.html', 'https://v.qq.com/txp/iframe/player.html?vid=o0039bmfl4e');
INSERT INTO `ranklist` VALUES ('2', '我要我们在一起', '主演：屈楚萧 张婧仪 孙宁 张垚 李嘉灏 ', '7.7', 'https://v.qq.com/x/cover/mzc00200xlzptkj.html', 'https://v.qq.com/txp/iframe/player.html?vid=f0039ff2riq');
INSERT INTO `ranklist` VALUES ('3', '《你好，李焕英》独家纪录片', '主演：贾玲 沈腾 陈赫 张小斐 魏翔 刘佳 ', '7.7', 'https://v.qq.com/x/cover/mzc00200h97lhuv.html', 'https://v.qq.com/txp/iframe/player.html?vid=w0035wqosie');
INSERT INTO `ranklist` VALUES ('4', '唐人街探案3', '主演：王宝强 刘昊然 妻夫木聪 托尼·贾 三浦友和 长泽雅美 浅野忠信 染谷将太 铃木保奈美 尚语贤 肖央 张子枫 邱泽 张钧甯 文咏珊 马伯骞 程潇 陈哲远 李明轩 崔雨鑫 张一白 克拉拉 ', '7.7', 'https://v.qq.com/x/cover/tk3l27paq7sqr0z.html', 'https://v.qq.com/txp/iframe/player.html?vid=p0036mrfj8h');
INSERT INTO `ranklist` VALUES ('5', '悬崖之上', '主演：张译 于和伟 秦海璐 朱亚文 刘浩存 倪大红 李乃文 余皑磊 雷佳音 沙溢 ', '7.8', 'https://v.qq.com/x/cover/mzc00200qa6e0k8.html', 'https://v.qq.com/txp/iframe/player.html?vid=a0039ki42r6');
INSERT INTO `ranklist` VALUES ('6', '《僵尸先生》精彩看点', '主演：林正英 许冠英 钱小豪 李赛凤 楼南光 王小凤 ', '7.5', 'https://v.qq.com/x/cover/mzc00200g7w3u01.html', 'https://v.qq.com/txp/iframe/player.html?vid=n3220na2qz6');
INSERT INTO `ranklist` VALUES ('7', '宫锁沉香', '主演：周冬雨 陈晓 赵丽颖 朱梓骁 包贝尔 张卫健 陆毅 黄圣依 赵文瑄 ', '7.3', 'https://v.qq.com/x/cover/o2v24no985ntwdo.html', 'https://v.qq.com/txp/iframe/player.html?vid=n0025ppl6rn');
INSERT INTO `ranklist` VALUES ('8', '幸存者1937', '主演：苏鑫 孙昊 关笑天 马佳玮 王智 杨宇鑫 金靖承 ', '7.7', 'https://v.qq.com/x/cover/mzc00200ky6sung.html', 'https://v.qq.com/txp/iframe/player.html?vid=f0039ri04c4');
INSERT INTO `ranklist` VALUES ('9', '九叔归来2', '主演：葛帅 高兴 樊煦 董晓飞 范正军 伍月 王凯垚 ', '7.7', 'https://v.qq.com/x/cover/mzc00200uf2vwkp.html', 'https://v.qq.com/txp/iframe/player.html?vid=y0036m0dlfm');
