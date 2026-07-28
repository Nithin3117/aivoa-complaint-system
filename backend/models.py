from sqlalchemy import Column, Integer, String, Text
from database import Base


class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)

    complaint_number = Column(String(100))
    customer_name = Column(String(200))
    product_name = Column(String(200))
    batch_number = Column(String(100))

    manufacturing_date = Column(String(50))
    expiry_date = Column(String(50))

    quantity = Column(String(50))

    complaint_type = Column(String(100))

    complaint_date = Column(String(100))

    description = Column(Text)

    severity = Column(String(50))

    priority = Column(String(50))