"""
Create an engine with this url:
sqlite:///dev.db
"""

from sqlalchemy import create_engine, text

engine = create_engine("sqlite:///dev.db")

with engine.connect() as connection:
    result = connection.execute(
        text("""
        SELECT o.first_name, o.last_name, p.name
        FROM owners o
        JOIN ponies p ON (o.id = p.owner_id)
        """)
    )
    for row in result:
        print(row[0], row[1], "owns", row[2])

engine.dispose()
