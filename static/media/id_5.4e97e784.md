You can control the number of iterations and convergence using the `max_iterations` and `em_convergence` keys respectively.

`max_iterations` is the maximimum number of iterations that `splink` will attempt irrespective of whether convergence has occurred

`splink` will stop iterating (reach convergence) when the maximum change in any of the `m_probabilities`, `u_probabilities`, or `proportion_of_matches` between iterations is below the value of the `em_convergence` setting.