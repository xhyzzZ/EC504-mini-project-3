# EC504-mini-project-3
# MongoDB download and method of using it
1. Download mongoDB from offcial website https://www.mongodb.com/download-center/community, rename it to "mongo", save it to path /Users/username/
2. For my computer, the path is /Users/kobale/mongo
3. Create 'mongo-data' folder in the same path
4. In terminal, get into my path '/Users/kobale/mongo', run './mongod --dbpath ~/mongo-data'
5. For saving pictires, run 'image.upload.js'
6. For saving text, run 'text.upload.js' 
7. For querying, get into the path '/mongo/bin', run './mongo', print 'use nodejs-demo' -> 'show collections' -> 'db.images.find()' or 'db.texts.find()'
