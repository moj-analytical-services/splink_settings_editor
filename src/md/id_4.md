Some users may wish to manually specify the model parameters rather than estimate them using the Expectation Maximisation algorithm.  This may be desirable, for instance, if you have a labelled training set.

In order to do this, set the `m` and `u` probabilities and the `proportion_of_matches` manually, and set `max_iterations` to 0.

See also the 'starting parameters' example for more information on how to correctly set the `m_probabilities` and `u_probabilities`.