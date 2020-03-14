This setting dictionary demonstrates how to choose starting parameters for the `m` and `u` probabilities in the Fellegi-Sunter model, and for `proportion_of_matches`, the overall proportion of record comparisons which are considered to be matches.

If you do not choose values, the defaults can be found [here](https://github.com/moj-analytical-services/splink/blob/d1125df09def0c9c9b41adc2d4fc98e94fdf8aa0/splink/settings.py#L108).

The probabilities are specified starting with the _lowest_ level of similarity.  For instancem consider `m_probabilities: [0.05,0.2,0.75]` for the `first_name` column. This is saying that, among record comparisons that match in reality:
- 5% of the time, the first name will not match at all (corresponding to a value of 0 in the comparison vector)
- 20% of the time, the first name will be similar but not an exact match (corresponding to a value of 1 in the comparison vector)
- 75% of the time, the first names will match exactly  (corresponding to a value of 2 in the comparison vector)
