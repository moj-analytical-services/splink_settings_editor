Comparison columns in `splink` are assumed to be strings unless otherwise specified.

You can use the `data_type` setting to designate a column as numeric.

This will cause `splink` to use a different `case_expression`.  The defaults can be found [here](https://github.com/moj-analytical-services/splink/blob/d1125df09def0c9c9b41adc2d4fc98e94fdf8aa0/splink/settings.py#L40)

For instance, if `num_levels` is not specified, it will default to `2`, and the case statement will be of the form:

```
case
when col_l is null or col_r is null then -1
when abs(col_l - col_r) < 0.00001 then 1
else 0 end
```

For numeric columns, providing defaults that accomodate different types of numerical data is difficult.  Generally, we recommend the user specifies a `case_expression` explicitly, which they can generate from one of the library of case functions in `splink.case_statements`.

And example is as follows for a user who want a case expression that has the following levels
- level 2 (most similar):  The values being compared are exactly the same (within floating point tolerance)
- Level 1: The values being compared are within 5% of each other
- Level 0: The values being compared are more than 5% different


```python
from splink.case_statements import sql_gen_case_stmt_numeric_perc_3

case_expr = sql_gen_case_stmt_numeric_perc_3("income_gbp", per_diff = 0.05)

settings = {
    comparison_columns: [
        {"col_name": "income_gbp",
         "case_expression": case_expr,
         "num_levels": 3
        }
    ]
}
```