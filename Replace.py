# --*-- coding:utf-8 --*--
import os
import sys  
  
allFileNum = 0
filelist = os.listdir('./_posts/')

for x in filelist:
    print(x)
    all_text = open('./_posts/'+x,encoding='UTF-8').read()

    with open('./_posts/'+x,'w',encoding='UTF-8') as f:
        print(all_text)
        all_text = all_text.replace('ptzw9yyyp.bkt.clouddn.com','cdn.be-sunshine.cn')
        print(all_text)
        f.write(all_text)
        f.close()