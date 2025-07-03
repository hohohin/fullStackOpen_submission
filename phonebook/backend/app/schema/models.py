from pydantic import BaseModel, Field
from uuid import UUID

class CreateContact(BaseModel):
    name:str = Field(max_length=10)
    number: str = Field(max_length=20)
    gender: str = Field(max_length=4) | None

class Contact(CreateContact):
    id: UUID