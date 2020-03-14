In some datasets, one form of typographical error is an inversion of forename and surname.  This settings dictionary illustrates one option for how this can be dealt with in `splink`.

The effect of this settings dictionary is to create a specific value in the comparison vector reserved for record comparisons where we observe that the forename of the left record matches the surname of the right record and vice versa.  This prevents these comparisons being incorrectly identified as non-matches, and 'polluting' the probability distributions for non-matching records.

The SQL CASE expression we use fore forname is as follows:

```
CASE
WHEN surname_l is null or surname_r is null then -1
WHEN jaro_winkler(surname_l, surname_r) < 0.94 then 3
WHEN jaro_winkler(surname_l, surname_r) < 0.88 then 2
WHEN jaro_winkler(forename_l, surname_r) < 0.94 or jaro_winkler(surname_r, forename_l) < 0.94 then 1
ELSE 0
END
```

And a similar expression is used for surname.