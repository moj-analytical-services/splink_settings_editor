In words, this setting dictionary says:
- We are performing a deduplication task (the other options are `link_only`, or `link_and_dedupe`)
- We are going generate comparisons subject to the blocking rules contained in the specified array
- When comparing records, we will use information from the `first_name`, `surname` and `fulladdress` columns to compute a match score.
- For `first_name` and `surname`, string comparisons will have three levels:
    - Level 2: Strings are (almost) exactly the same
    - Level 1: Strings are similar
    - Level 0: No match
- We will make adjustments for term frequencies on the `first_name` and `surname` columns

- For `fulladdress` instead of the default `jaro_winkler` comparator ,a custom string comparator will be used: the cosine similarity of  2-char shingles (substrings or Qgrams) of the `fulladdress` field. As before the string comparison will have three levels:

    - Level 2: Strings are (almost) exactly the same
    - Level 1: Strings are similar
    - Level 0: No match

- We will retain the `group` column in the results even though this is not used as part of comparisons.  This is a labelled dataset and `group` contains the true match - i.e. where group matches, the records pertain to the same person