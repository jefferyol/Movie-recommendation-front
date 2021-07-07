import requests
from selenium import webdriver
from bs4 import BeautifulSoup

url = 'https://v.qq.com/x/cover/o2v24no985ntwdo.html'
driver = webdriver.Chrome()
driver.maximize_window()

driver.get(url)

response = requests.get(url=url)
page_text = response.text
soup = BeautifulSoup(page_text, "html.parser")

everyActor = "主演："
actorList = soup.select('a[_stat="star:click"]' and 'a[class="name"]')
for element in actorList:
    everyActor = everyActor + element.attrs['title']+' '
print(everyActor)

