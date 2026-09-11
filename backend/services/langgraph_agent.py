import json
from services.llm import client

def analyse_complaint(text):

    prompt = f"""
You are an AI for a Pharmaceutical Complaint Management System.

Extract the complaint details from the text.

Return ONLY valid JSON.

JSON format:

{{
    "complaintNumber":"",
    "customerName":"",
    "productName":"",
    "batchNumber":"",
    "manufacturingDate":"",
    "expiryDate":"",
    "quantity":"",
    "complaintType":"",
    "complaintDate":"",
    "description":"",
    "severity":"",
    "priority":""
}}

Complaint:

{text}
"""

    response = client.chat.completions.create(
        model="openai/gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0
    )

    content = response.choices[0].message.content.strip()

    if content.startswith("```"):
        content = content.replace("```json", "")
        content = content.replace("```", "")

    return json.loads(content)
    
