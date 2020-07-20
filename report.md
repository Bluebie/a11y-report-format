# Report format
Report files are the core data of the a11y-report-format. These are either JSON or YAML with human friendly whitespace formatting enabled. They are located within the geohashed folder structure (see folder-structure.md) and named with a conflict avoidance strategy:

# Filename
`report-[timestampMs]-[authorID].json` for example. timestampMs should be an integer decimal string of milliseconds since unix epoch. authorID maybe an arbitrary code, or a username. In distributed systems the authorID maybe a domain name or something like that, representing one individual contributor. In federated systems, the authorID should be a concatination of a platform name, and an individual username with a hyphen. For example: `report-1595139497333-wheelcool.com-bluebie.json`

The goal of this naming convention is that files will naturally sort in to a chronological order when viewed through a filesystem navigator app like Finder or Github. The secondary goal is conflict avoidance.

# File structure
Reports are functionally an RFC 7386 JSON-Merge-Patch document, serialised either as JSON with Whitespace or YAML.

The root object in these files must comply with the formats specified with JSDOC in `types.js`, with the root object being of the A11yReport type.
