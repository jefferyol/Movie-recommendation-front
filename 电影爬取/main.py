import requests
from selenium import webdriver
from bs4 import BeautifulSoup
import time
import pandas as pd

urls = ['https://v.qq.com/channel/movie?_all=1&channel=movie&charge=1&itype=100018&listpage=1&sort=18',
        'https://v.qq.com/channel/movie?_all=1&channel=movie&charge=1&itype=100004&listpage=1&sort=18',
        'https://v.qq.com/channel/movie?_all=1&channel=movie&charge=1&itype=100061&listpage=1&sort=18',
        'https://v.qq.com/channel/movie?_all=1&channel=movie&charge=1&itype=100005&listpage=1&sort=18',
        'https://v.qq.com/channel/movie?_all=1&channel=movie&charge=1&itype=100010&listpage=1&sort=18',
        'https://v.qq.com/channel/movie?_all=1&channel=movie&charge=1&itype=4&listpage=1&sort=18',
        'https://v.qq.com/channel/movie?_all=1&channel=movie&charge=1&itype=100009&listpage=1&sort=18',
        'https://v.qq.com/channel/movie?_all=1&channel=movie&charge=1&itype=100006&listpage=1&sort=18',
        'https://v.qq.com/channel/movie?_all=1&channel=movie&charge=1&itype=100012&listpage=1&sort=18']
AllType = ["剧情", "喜剧", "动作", "爱情", "惊悚", "犯罪", "悬疑", "战争", "科幻"]
title = []
actor = []
score = []
img = []
link = []
source = []
MovieList = []

for i in urls:
    url = i
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get(url)
    time.sleep(1)

    response = requests.get(url=url)
    page_text = response.text.encode('iso-8859-1').decode('utf-8')
    soup = BeautifulSoup(page_text, "html.parser")

    title_list = soup.select('.figure_title')
    for index, li in enumerate(title_list):
        title.append(li.text)

    actor_list = soup.select('.figure_desc')
    for index, li in enumerate(actor_list):
        actor.append(li.attrs['title'])

    score_list = soup.select('.figure_score')
    for index, li in enumerate(score_list):
        score.append(li.text)

    img_list = soup.select('.figure_pic')
    for element in img_list:
        img.append(element.attrs['src'])

    link_list = soup.select('a[tabindex="-1"]')
    for element in link_list:
        link.append(element.attrs['href'])

for element in link:
    url = element
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get(url)
    response = requests.get(url=url)
    page_text = response.text
    soup = BeautifulSoup(page_text, "html.parser")

    videoList = soup.select('li[class="list_item"]')[0]
    source.append("https://v.qq.com/txp/iframe/player.html?vid=" + videoList.attrs["id"])

i = 0
while i < 270:
    ob = {'img': img[i], 'type': AllType[int(i/30)], 'title': title[i], 'actor': actor[i], 'score': score[i],
          'link': link[i], 'source': source[i]}
    MovieList.append(ob)
    i = i + 1

pd.DataFrame(MovieList).to_csv('Movie.csv')