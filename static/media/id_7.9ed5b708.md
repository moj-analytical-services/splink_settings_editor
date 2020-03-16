To link or deduplicate data, the only output that is strictly required are pairs of record ids and a corresponding score, like this:

| unique_id_l | unique_id_r | match_probability |
|-------------|-------------|-------------------|
| id_1        | id_2        | 0.99              |
| id_1        | id_3        | 0.01              |

This means that once the comparison vector has bee calculated, other columns can be dropped, resulting in faster processing times.

In practice, however, the user will often want to inspect records to quality assure the results or otherwise understand whether the parameter estimates are sensible.

By default, `splink` therefore includes a variety of additional columns in its results.  The relevant settings are:

- `retain_matching_columns`: If set to true, the original data is retained in the output.  For instance, if `first_name` is a comparison column, the values of `first_name_l` and `first_name_r` will be retainined in the results.

- `retain_intermediate_calculation_columns`:  If set to true, additional intermediate columns are included in the calculation representing the various `m` and `u` probabilities computed for each individual column.

In addition, the user can ask to retain addition columns which are not being used as part of data linking using the `additional_columns_to_retain` setting.  The The most common example of where this is useful is where the user has labelled data (i.e. a training set), and wants to include the labels in the results.

Note that for columns where `term_frequency_adjustments` are set to true, these columns will always be included in the results because the original values are required for the term frequency adjustment calculation.