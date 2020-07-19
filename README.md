# a11y-report-format
Sketching out what a reasonable filesystem/git based format for representing accessibility reports relating to physical places might look like.

In conversations with Marlene over The Accessibility Project, it became clear that we could benefit from a clear database format to store notes about public and semi-public venue space's accessibility issues and successes.

Many projects have tried to create siloed datasets of information over building accessibility to help variously disabled people make better plans around how to use public spaces. These efforts have been severly fragmented and largely failed to build a robust enough dataset to be useful enough to motivate people to open a dedicated app or website to check for information that probably isn't there. They have also often suffered from expecting people writing reports to be able to fully assess the accessibility of a space, asking questions like how to rate the parking situation of people who may not drive. This repo is an exploration of what a better designed data structure might look like.

# Design Goals
* People should write about what they know. A wheelchair user may have insights on the bathroom accessibility for wheelchair users in a venue, that might not be as applicable to an Autistic person.
* Data should, where possible, be in easy human readable formats like YAML, with thoughtful design towards inclusion in versioning systems like Git.
* Data should, where possible, be indexed by keys that are conflict resistant, to simplify merging when data may become fragmented between several git clones, or maybe represented across a large collection of dat or ipfs repositories.
* Reports must be clearly timestamped at all levels, so old data can be downranked in preference to newer reports where reports describe the same information.
* Data that makes use of geocoordinates should be timestamped to allow positioning to be corrected later when land masses shift.
* Data should be open access simply by cloning a repository, and easy to index or aggregate by anyone interested in data sciences

# Potential Uses
* Simple mapping websites should be able to aggregate and present data along side map objects
* Data scientists could do analysis of streets, cities, or countries and see how different places are doing on accessibility for various specific disabilities, potentially aiding travel planning.
* Data should be easy for commercial users to integrate to create better wheelchair accessible routes for example.
