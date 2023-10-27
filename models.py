from typing import Optional
from pydantic import BaseModel

class Task(BaseModel):
    title: str
    description: Optional[str] = None
    completed: bool = False

    def to_dict(self):
        return {
            "title": self.title,
            "description": self.description,
            "completed": self.completed
        }

    class Config:
        from_atributtes = True
        populate_by_name = True
