Data is sharded using Geohash. For a given entity, it should be geohashed to a precision of 6
and then the geohash should be split in to three groups of two characters.

For a geohash of uhe9m3 the groups would be uh/e9/m3.

Folders should be established in /entities/uh/e9/m3, and then inside that folder, a folder for the entity should be created with a suitable name.

Suitable name can be calculated in any way, but suggested here is either an arbitrary alphanumeric code, or a URI formatted version of the human readable name of the entity. For example, a shop named "The Avocado Collective" maybe transformed to "the-avocado-collective"

The path now becomes /entities/uh/e9/m3/the-avocado-collective/

In to this folder, report files can be stored. See report.md