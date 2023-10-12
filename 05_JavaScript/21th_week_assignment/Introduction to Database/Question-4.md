
# Question - 4 

## Explain 5 challenges of File-based storage system which was tackled by DBMS.

**Answer :** Database Management Systems (DBMS) were developed to address several key challenges of file-based storage systems. Here are five of the most significant challenges and how DBMS tackles them:

**1. Data Redundancy :**

* **Challenge (File-based) :** In file-based systems, data redundancy is common because the same information may be duplicated across multiple files. This redundancy not only consumes storage space but also increases the risk of inconsistencies in data.

* **DBMS Solution :** DBMS eliminates or reduces data redundancy through normalization techniques, allowing data to be stored efficiently in a centralized manner. Data is stored in structured tables, with relationships defined to minimize duplication.

**2. Data Integrity :**

* **Challenge (File-based) :** Ensuring data integrity can be challenging in file-based systems, as there are limited mechanisms to enforce data constraints and rules. Inconsistent or inaccurate data can easily creep in.

* **DBMS Solution :** DBMS enforces data integrity by defining and enforcing constraints, such as primary keys, foreign keys, and data types. It ensures that data adheres to predefined rules, reducing the risk of errors.

**3. Data Retrieval and Querying :**

* **Challenge (File-based) :** Retrieving specific data from multiple files is cumbersome and inefficient in file-based systems. Writing complex queries is often impractical.

* **DBMS Solution :** DBMS provides query languages like SQL, which enable users to retrieve specific data efficiently. It offers indexing and optimization techniques to speed up data retrieval, even from large datasets.

**4. Data Relationships :**

* **Challenge (File-based) :** Establishing relationships between different pieces of data is difficult in file-based systems, making it hard to represent complex data structures and connections between entities.

* **DBMS Solution :** DBMS allows for the establishment of relationships between data entities using foreign keys and joins. This enables the efficient representation of complex data structures, such as connecting customers to their orders or students to their courses.

**5. Concurrency Control :**

* **Challenge (File-based) :** When multiple users or applications access and modify data simultaneously in file-based systems, it can lead to data conflicts and integrity problems.

* **DBMS Solution :** DBMS manages concurrent access and transactions, ensuring that data remains consistent. It employs various techniques like locking and timestamps to coordinate access and prevent data corruption.

In summary, DBMS addresses these challenges by providing a structured and organized environment for data storage, management, and retrieval. It significantly improves data consistency, eliminates redundancy, enhances data integrity, simplifies data querying, and enables the efficient representation of data relationships. These advantages make DBMS a vital tool for organizations dealing with complex and large datasets.