import React from 'react'
import{ RecommendBox, PersonaliseBox,
        PopularBox,PopularTitle,PopularList,Ul,Li,
        PopularRank,PopularMovie,PopularScore,
        PersonaliseHeader,PersonaliseTitle,PersonaliseChange,
        MovieList,Title,Picture,Actor,Score,    
    } from './style';
import { Link } from 'react-router-dom';
class Recommend extends React.Component{
    state = {
        movie:[{img: '//puui.qpic.cn/vcover_vt_pic/0/ge1vg9evjfeb6l01568013388/220', title: '夏洛特烦恼', actor: '主演：沈腾 马丽 尹正 王智 艾伦 田雨 宋阳', score: '8.7 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/ujnamwpqg1xg8qm1559139238/220', 'title': '西游·降魔篇', 'actor': '主演：文章 舒淇 黄渤 罗志祥', 'score': '8.5 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/b40ff7kummjfp7e1566963062/220', 'title': '澳门风云3', 'actor': '主演：周润发 张家辉 刘德华 张学友 李宇春 刘嘉玲 余文乐', 'score': '7 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/q8xwiu8yyxahzz8t1453946418.jpg/220', 'title': '功夫熊猫3', 'actor': '主演：杰克·布莱克 詹姆斯·洪 安吉丽娜·朱莉 塞斯·罗根', 'score': '8.8 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/msbt3iret5tgwu81567135959/220', 'title': '赌神', 'actor': '主演：周润发 王祖贤 刘德华 张敏', 'score': '9 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/3v5ksc6jiwskqw41480909679/220', 'title': '倒霉特工熊', 'actor': '主演：汤水雨 杨默', 'score': '7.1 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/xgyd6mjl7vo6kpb1566899623/220', 'title': '爱情公寓', 'actor': '主演：陈赫 袁弘 娄艺潇 邓家佳 孙艺洲 李佳航 李金铭', 'score': '6.5 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/qxlvauamtoi399d1567675979/220', 'title': '恐龙王', 'actor': '恐龙父子大冒险', 'score': '7.7 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/cgeg2g3t7b8gm6l1481535277/220', 'title': '西游·伏妖篇', 'actor': '主演：吴亦凡 林更新 姚晨 王丽坤 林允', 'score': '7.6 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/3o56brnhunm5bwxt1444824302.jpg/220', 'title': '西游记之大圣归来', 'actor': '大圣脱胎换骨惊艳四方', 'score': '9 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/jpjl78i91mx05bu1509087554/220', 'title': '羞羞的铁拳', 'actor': '主演：艾伦 马丽 沈腾 宋阳 田雨', 'score': '8.3 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/w0p8sj2lhtdup961531896398/220', 'title': '金装鬼打鬼', 'actor': '主演：林正英 楼南光 陈颖芝 金十二 谢伟杰 何沛东', 'score': '7.8 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/kep6vp3yaheymko1567406134/220', 'title': '一吻定情', 'actor': '主演：王大陆 林允 陈柏融 蔡思韵 邰智源', 'score': '7.2 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/q4enmfhbv50hqnc1568019614/220', 'title': '王牌保镖', 'actor': '主演：塞缪尔·杰克逊 加里·奥德曼 萨尔玛·海耶克 艾洛蒂·袁 瑞恩·雷诺兹', 'score': '8.4 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/5y95zy4idzqf6hc1515143734/220', 'title': '捉妖记2', 'actor': '主演：梁朝伟 白百何 井柏然 李宇春 杨祐宁', 'score': '7.4 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/hdavca20ujfapqy1567073135/220', 'title': '胖子行动队', 'actor': '主演：包贝尔 文章 郭京飞 克拉拉 辣目洋子', 'score': '7 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/jnerh30ho8ghhe71556009213/220', 'title': '港囧', 'actor': '主演：徐峥 赵薇 包贝尔 杜鹃', 'score': '7.7 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/h05z5bsjxw544er1575449796/220', 'title': '前任3：再见前任', 'actor': '主演：韩庚 郑恺 于文文 曾梦雪 罗米', 'score': '7.6 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/rtxppsa2dqxd6ok1567664933/220', 'title': '擦枪走火', 'actor': '主演：喻恩泰 倪虹洁 李锐', 'score': '7 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/luxx8xe8hybi2vp1556009315/220', 'title': '一念天堂', 'actor': '主演：沈腾 马丽 杜晓宇 林雪', 'score': '7.7 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/q36vxbd95odijk11506398254/220', 'title': '缝纫机乐队', 'actor': '主演：大鹏 乔杉 古力娜扎 李鸿其 韩童生 曲隽希', 'score': '8.2 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/uxcy3k044fczp2jt1450859412.jpg/220', 'title': '恶棍天使', 'actor': '主演：邓超 孙俪 代乐乐 梁超 杨新鸣', 'score': '6.9 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/rj5vksslchkvh631565665617/220', 'title': '猪猪侠·不可思议的世界', 'actor': '超萌小猪开启奇幻之旅', 'score': '7.2 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/39d0cimjjr9hmd11568114930/220', 'title': '武林怪兽', 'actor': '主演：古天乐 陈学冬 郭碧婷 包贝尔 王太利', 'score': '6.6 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/xprp6khqsxeq8m21576394631/220', 'title': '美食大冒险之英雄烩', 'actor': '“寿气包”CP闯荡江湖', 'score': '8.7 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/qmefcsfx2vkifaat1444965084.jpg/220', 'title': '功夫之王', 'actor': '主演：成龙 李连杰 刘亦菲 迈克尔·安格拉诺', 'score': '7.6 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/1dc6xsgwwa0t98c1547433001/220', 'title': '印度暴徒', 'actor': '主演：阿米尔·汗 卡特莉娜·卡芙 阿米特巴·巴强 劳埃德·欧文 法缇玛·萨那·纱卡', 'score': '7.8 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/bojb6fxtqh2ekw01566966247/220', 'title': '李茶的姑妈', 'actor': '主演：黄才伦 艾伦 宋阳 卢靖姗 沈腾', 'score': '7.1 '}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/6wx9pvukqzx9mkx1543738220/220', 'title': '猛鬼学堂', 'actor': '主演：张学友 许冠英 林忆莲 楼南光', 'score': '8.1 '}]
    ,
        RankList:[{'title': '哥斯拉大战金刚', 'actor': '主演：亚历山大·斯卡斯加德 米莉·博比·布朗 丽贝卡·豪尔 凯莉·霍特尔 布莱恩·泰里·亨利 小栗旬 ', 'score': '7.8', 'link': 'https://v.qq.com/x/cover/babks6vmrn25n9c.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=l0037j1ebig'}, {'title': '你的婚礼', 'actor': '主演：许光汉 章若楠 丁冠森 晏紫东 郭丞 王莎莎 梁靖康 刘迅 ', 'score': '7.8', 'link': 'https://v.qq.com/x/cover/mzc002005bvno3g.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=o0039bmfl4e'}, {'title': '《你好，李焕英》独家纪录片', 'actor': '主演：贾玲 沈腾 陈赫 张小斐 魏翔 刘佳 ', 'score': '7.7', 'link': 'https://v.qq.com/x/cover/mzc00200h97lhuv.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=w0035wqosie'}, {'title': '我要我们在一起', 'actor': '主演：屈楚萧 张婧仪 孙宁 张垚 李嘉灏 ', 'score': '7.7', 'link': 'https://v.qq.com/x/cover/mzc00200xlzptkj.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=f0039ff2riq'}, {'title': '唐人街探案3', 'actor': '主演：王宝强 刘昊然 妻夫木聪 托尼·贾 三浦友和 长泽雅美 浅野忠信 染谷将太 铃木保奈美 尚语贤 肖央 张子枫 邱泽 张钧甯 文咏珊 马伯骞 程潇 陈哲远 李明轩 崔雨鑫 张一白 克拉拉 ', 'score': '7.7', 'link': 'https://v.qq.com/x/cover/tk3l27paq7sqr0z.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=p0036mrfj8h'}, {'title': '中国医生', 'actor': '主演：张涵予 袁泉 朱亚文 李晨 易烊千玺 欧豪 ', 'score': '7.6', 'link': 'https://v.qq.com/x/cover/mzc0020092lw1rc.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=d3257nndjup'}, {'title': '悬崖之上', 'actor': '主演：张译 于和伟 秦海璐 朱亚文 刘浩存 倪大红 李乃文 余皑磊 雷佳音 沙溢 ', 'score': '7.8', 'link': 'https://v.qq.com/x/cover/mzc00200qa6e0k8.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=a0039ki42r6'}, {'title': '《僵尸先生》精彩看点', 'actor': '主演：林正英 许冠英 钱小豪 李赛凤 楼南光 王小凤 ', 'score': '7.5', 'link': 'https://v.qq.com/x/cover/mzc00200g7w3u01.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=n3220na2qz6'}, {'title': '幸存者1937', 'actor': '主演：苏鑫 孙昊 关笑天 马佳玮 王智 杨宇鑫 金靖承 ', 'score': '7.7', 'link': 'https://v.qq.com/x/cover/mzc00200ky6sung.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=f0039ri04c4'}, {'title': '九叔归来2', 'actor': '主演：葛帅 高兴 樊煦 董晓飞 范正军 伍月 王凯垚 ', 'score': '7.7', 'link': 'https://v.qq.com/x/cover/mzc00200uf2vwkp.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=y0036m0dlfm'}]

    }
    render(){
        return(
            <RecommendBox>
               <PersonaliseBox>
                    <PersonaliseHeader>
                        <PersonaliseTitle>猜你喜欢</PersonaliseTitle>
                        <PersonaliseChange>🌀 不喜欢，换一批</PersonaliseChange>
                    </PersonaliseHeader>
                    {
                    this.state.movie.map((element,index)=>{
                        return(
                            <Link to={{
                                pathname:`detail`
                            }}>
                                <MovieList key = {index}>
                                    <Picture src={element.img}/>
                                    <Title>{element.title}</Title>
                                    <Actor>{element.actor}</Actor>
                                    <Score>{'评分：'+element.score}</Score>
                                </MovieList>
                            </Link>
                            
                        )
                        
                    })
                }                    
               </PersonaliseBox>
               <PopularBox>
                    <PopularTitle>🔥&nbsp;热门电影排行榜</PopularTitle>
                    <PopularList>
                        <Ul>
                            {
                                this.state.RankList.map((element,index)=>{
                                    return(
                                        <Link to={
                                            {
                                                pathname:`detail`
                                            }
                                        }>
                                            <Li>
                                                <PopularRank>{index+1}</PopularRank>
                                                <PopularMovie>{element.title}</PopularMovie>
                                                <PopularScore>{element.score}</PopularScore>
                                            </Li>
                                        </Link>
                                        
                                    )
                                })
                            }                           
                        </Ul>
                    </PopularList>                     
               </PopularBox>
            </RecommendBox>
        )
    }

}
export default Recommend;