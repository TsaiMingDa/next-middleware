# next-middleware
## 情境
page router + basePath + middleware

## 前情提要
因為有個需求需要將有query參數的網址redirect到沒有query參數的網址
所以，選擇使用middleware來做轉址

## 問題
在不是首頁(/hi)的其他頁面後再到首頁(/hi)
getServerSideProps回傳props在client會變成undefined，

會發生的情境
- 在非首頁第一次進入，<Link />到首頁。
- 首頁進入，在首頁使用<Link />(shallow為false)到其他頁面，再<Link />回到首頁(/hi)。
- 首頁進入，在首頁使用<Link />(shallow為false)到其他頁面，瀏覽器回上一頁到首頁(/hi)。
