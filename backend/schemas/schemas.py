from typing import Optional
from pydantic import BaseModel

class UpdateTask(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = None

    class Config:
        from_atributtes = True
        populate_by_name = True
