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
        movie:[{'img': '//puui.qpic.cn/vcover_vt_pic/0/4xf4ni3vwii9kl11506674275/220', 'type': '剧情', 'title': '建军大业', 'actor': '主演：刘烨 朱亚文 黄志忠 欧豪 王景春 杨大鹏 霍建华 关晓彤', 'score': '7.6 ', 'link': 'https://v.qq.com/x/cover/4xf4ni3vwii9kl1.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=p00246at0hr'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/pv1noxn2wtgzasht1444957124.jpg/220', 'type': '剧情', 'title': '赤道', 'actor': '主演：张家辉 张学友 张震 王学圻 池珍熙 崔始源 余文乐 文咏珊', 'score': '8 ', 'link': 'https://v.qq.com/x/cover/pv1noxn2wtgzash.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=q00168qh74n'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/msbt3iret5tgwu81567135959/220', 'type': '剧情', 'title': '赌神', 'actor': '主演：周润发 王祖贤 刘德华 张敏', 'score': '9 ', 'link': 'https://v.qq.com/x/cover/msbt3iret5tgwu8.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=m0025c8sgbz'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/piegqd6mz97tr8b1559743696/220', 'type': '剧情', 'title': '机械师', 'actor': '主演：杰森·斯坦森 本·福斯特 托尼·戈德温 唐纳德·萨瑟兰 杰夫·蔡斯', 'score': '8.4 ', 'link': 'https://v.qq.com/x/cover/piegqd6mz97tr8b.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=i00227leh0g'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/7hg5nr3x10ingpj1564383305/220', 'type': '剧情', 'title': '三生三世十里桃花', 'actor': '主演：刘亦菲 杨洋 罗晋 严屹宽', 'score': '6.9 ', 'link': 'https://v.qq.com/x/cover/7hg5nr3x10ingpj.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=a0024e92mp5'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/hu9th0blgco6c891481622249/220', 'type': '剧情', 'title': '金陵十三钗', 'actor': '主演：克里斯蒂安·贝尔 佟大为 聂远 窦骁 渡部笃郎 黄海波', 'score': '9 ', 'link': 'https://v.qq.com/x/cover/hu9th0blgco6c89.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=h0034diznzc'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/3fvg46217gw800n1566963547/220', 'type': '剧情', 'title': '流浪地球', 'actor': '主演：屈楚萧 吴京 李光洁 吴孟达 赵今麦', 'score': '8.9 ', 'link': 'https://v.qq.com/x/cover/3fvg46217gw800n.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=h0030qj4fov'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/j22edv0k6xtn65p1567580929/220', 'type': '剧情', 'title': '毒战', 'actor': '主演：孙红雷 古天乐 黄奕', 'score': '8.6 ', 'link': 'https://v.qq.com/x/cover/j22edv0k6xtn65p.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=u0012k5fks6'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/skl46pqqu1e7bmx1567406424/220', 'type': '剧情', 'title': '僵尸', 'actor': '主演：钱小豪 陈友 惠英红 楼南光 鲍起静 吴耀汉', 'score': '8.8 ', 'link': 'https://v.qq.com/x/cover/skl46pqqu1e7bmx.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=b0021iwtlcp'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/wtr1lrmk9w72j6x1555916464/220', 'type': '剧情', 'title': '巴霍巴利王：开端', 'actor': '主演：帕拉巴斯 拉纳·达格巴提 安努舒卡·谢蒂 特曼娜·芭蒂亚', 'score': '8.5 ', 'link': 'https://v.qq.com/x/cover/wtr1lrmk9w72j6x.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=y0021n00kgf'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/3xk72twalaqaku01574761643/220', 'type': '剧情', 'title': '鬼吹灯之寻龙诀', 'actor': '主演：陈坤 黄渤 舒淇 Angelababy 夏雨', 'score': '8.6 ', 'link': 'https://v.qq.com/x/cover/3xk72twalaqaku0.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=n0019nf7q8j'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/fvqtezz7d8l98ly1566972978/220', 'type': '剧情', 'title': '封神传奇', 'actor': '主演：李连杰 范冰冰 黄晓明 古天乐', 'score': '6.6 ', 'link': 'https://v.qq.com/x/cover/fvqtezz7d8l98ly.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=r00213z4sml'}, {'img': '//puui.qpic.cn/vcover_vt_pic/0/phk4s9bkfs8xdn41560248264/220', 'type': '剧情', 'title': '一九四二', 'actor': '主演：张国立 徐帆 张默 陈道明 李倩 冯远征 李雪健 张涵予 范伟 阿德里安·布洛迪 王子文', 'score': '8.7 ', 'link': 'https://v.qq.com/x/cover/phk4s9bkfs8xdn4.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=r0012fmwaf2'}]
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
                                pathname:`detail`,
                                query:{
                                    title:element.title,
                                    score:element.score,
                                    actor:element.title,
                                    source:element.source
                                }
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
                                                pathname:`detail`,
                                                query:{
                                                    title:element.title,
                                                    score:element.score,
                                                    actor:element.title,
                                                    source:element.source
                                                }
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