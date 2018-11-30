# EC504-mini-project-3
# MongoDB download and method of using it
1. Download mongoDB from offcial website https://www.mongodb.com/download-center/community, rename it to "mongo", save it to 2. path /Users/username/
3. For my computer, the path is /Users/kobale/mongo
4. Create 'mongo-data' folder in the same path
5. In terminal, get into my path '/Users/kobale/mongo', run './mongod --dbpath ~/mongo-data'
6. For querying, get into the path '/mongo/bin', run './mongo', print 'use nodejs-demo' -> 'show collections' -> 'db.images.find()' or 'db.texts.find()'
