import pandas as pd
import requests
from selenium import webdriver
from bs4 import BeautifulSoup
import re

url = 'https://v.qq.com/biu/ranks/?t=hotsearch&channel=movie'

chrome_opt = webdriver.ChromeOptions()
prefs = {'profile.managed_default_content_settings.images': 2}
chrome_opt.add_experimental_option('prefs',prefs)
browser = webdriver.Chrome(chrome_options=chrome_opt)
browser.get(url)
# driver = webdriver.Chrome()
# driver.maximize_window()
# driver.get(url)



response = requests.get(url=url)
page_text = response.text.encode('iso-8859-1').decode('utf-8')
soup = BeautifulSoup(page_text, "html.parser")

title = []
hot = []
f_link = []
s_link = []
source = []
actor = []
score = []

TitleList = soup.select('.name')
for element in TitleList:
    title.append(element.attrs['title'])
title = title[0:5]+title[6:11]
print(title)

FlinkList = soup.select('.name')
for element in TitleList:
    f_link.append(element.attrs['href'])
f_link = f_link[0:5] + f_link[6:11]
print(f_link)

# HotList = soup.select('.bar_inner')
# for element in HotList:
#     string = element.attrs['style']
#     num = re.findall(r'\d+', string)[0]
#     hot.append(num)
# hot = hot[0:12]
# print(hot)

for i in f_link:
    url = i
    chrome_opt = webdriver.ChromeOptions()
    prefs = {'profile.managed_default_content_settings.images': 2}
    chrome_opt.add_experimental_option('prefs', prefs)
    browser = webdriver.Chrome(chrome_options=chrome_opt)
    browser.get(url)
    # driver = webdriver.Chrome()
    # driver.maximize_window()
    # driver.get(url)
    response = requests.get(url=url)
    page_text = response.text
    soup = BeautifulSoup(page_text, "html.parser")

    link1 = soup.select('a[_stat="video:poster_tle"]')
    if len(link1):
        s_link.append(link1[0].attrs['href'])
        scoreList = soup.select('.result_score')
        score.append(scoreList[0].text)
    else:
        link1 = soup.select('a[dt-eid="title_pstr"]')
        s_link.append(link1[0].attrs['href'])
        scoreList = soup.select('.result_score')
        if len(scoreList):
            score.append(scoreList[0].text)
        else:
            score.append('8.7')
print(score)
print(s_link)

for element in s_link:
    url = element
    chrome_opt = webdriver.ChromeOptions()
    prefs = {'profile.managed_default_content_settings.images': 2}
    chrome_opt.add_experimental_option('prefs', prefs)
    browser = webdriver.Chrome(chrome_options=chrome_opt)
    browser.get(url)
    # driver = webdriver.Chrome()
    # driver.maximize_window()
    # driver.get(url)
    response = requests.get(url=url)
    response.encoding = 'gbk'
    response.encoding = 'utf-8'
    page_text = response.text
    soup = BeautifulSoup(page_text, "html.parser")
    videoList = soup.select('li[class="list_item"]')[0]
    source.append("https://v.qq.com/txp/iframe/player.html?vid=" + videoList.attrs["id"])
    print("https://v.qq.com/txp/iframe/player.html?vid=" + videoList.attrs["id"])

    everyActor = "主演："
    actorList = soup.select('a[_stat="star:click"]' and 'a[class="name"]')
    for ele in actorList:
        everyActor = everyActor + ele.attrs['title'] + ' '
    print(everyActor)
    actor.append(everyActor)
print(source)
i = 0
RankList = []
while i < 10:
    ob = {'title': title[i], 'actor': actor[i], 'score': score[i], 'link': s_link[i], 'source': source[i]}
    RankList.append(ob)
    i = i + 1
print(RankList)
pd.DataFrame(RankList).to_csv('RankList.csv')

