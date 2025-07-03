
from app.base.base import db

def db_insert_one():
    try:
        db.insert_one({
        "name":"hinhohin",
        "number":1573
    })
    except Exception as e:
        print(e)


test = db_insert_one()