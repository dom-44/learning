# JSON Cheatsheet
## Facts
* JavaScript Object Notation
* Lightweight data-interchange format
* Based on a subset of JavaScript
* Easy to read and write
* Often used with AJAX (Asynchronomous Javascript and XML)
  
## Data types
* **Number:** no difference between integer and floats
* **String:** Strong of Unicode charactes. Use double quote "String"
* **Boolean:** True or false
* **Array:** Ordered list of 0 or more values
* **Object:** Unordered collection of key/value pairs
* **Null:** Empty value

## JSON Syntax Rules
* Uses key/value pairs {"name":"Brad"}
* Uses double quotes around key and value
* Must use the specified data types
* File type is ".json"
* MIME type is "Application/json"

### Example
```json
{
        "name":"John Doe",
        "age":35,
        "address":{
            "street":"5 main st",
            "city":"Boston"
        },
        "children":["Brianna", "Nicholoas"]
}

```