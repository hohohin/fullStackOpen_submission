from app.base.base import db
from pymongo import MongoClient

class ContactCrud:
    def __init__(self):
        self.db = db.connect() #self.db 是连上数据库之后，在crud盒子里的db，后面的db则是数据库实例
        self.collection = self.db.contacts

    def test_connection_and_create(self):
        try:
            # 1. 先看看现有的collections
            print("当前database:", self.db.name)
            
            # 2. 插入一条测试数据
            result = self.collection.insert_one({
                "name": "测试用户",
                "phone": "12345678"
            })
            print("插入数据成功，ID:", result.inserted_id)
            
            # 3. 再次查看collections
            print("插入后的collections:", self.db.list_collection_names())
            
            # 4. 验证数据
            doc = self.collection.find_one({"name": "测试用户"})
            print("查询结果:", doc)
            
        except Exception as e:
            print(f"操作失败: {e}")

    def insert_contact(self, data):
        try:
            return self.collection.insert_one(data)
        except Exception as e:
            print(f"插入联系人失败: {e}")
            raise


contact_crud = ContactCrud()

"""if __name__ == "__main__":
    crud = ContactCrud()
    crud.test_connection_and_create()"""