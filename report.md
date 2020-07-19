# Report format
Report files are the core data of the a11y-report-format. These are either JSON or YAML with human friendly whitespace formatting enabled. They are located within the geohashed folder structure (see folder-structure.md) and named with a conflict avoidance strategy:

# Filename
`report-[timestampMs]-[authorID].json` for example. timestampMs should be an integer decimal string of milliseconds since unix epoch. authorID maybe an arbitrary code, or a username. In distributed systems the authorID maybe a domain name or something like that, representing one individual contributor. In federated systems, the authorID should be a concatination of a platform name, and an individual username with a hyphen. For example: `report-1595139497333-wheelcool.com-bluebie.json`

The goal of this naming convention is that files will naturally sort in to a chronological order when viewed through a filesystem navigator app like Finder or Github. The secondary goal is conflict avoidance.

# File structure
Reports are functionally an RFC 7386 JSON-Merge-Patch document, serialised either as JSON with Whitespace or YAML.

Reports must contain a JSON-like object/dictionary as the root element, and may contain any of these properties:

* location: [float lat, float long],
* names: ["en-AU:Name in Australian English", "en-GB:Name in British English"...],
* address: "string address in local format",
* mainEntrance: [list of physical access types],
* sideEntrance: [list of physical access types],
* rearEntrance: [list of physical access types],
* floors: positive integer,
* elevatorPresent: boolean,
* elevatorNotes: "free text about elevator",
* rampPresent: boolean,
* rampNotes: "free text about ramps",
* steepInclinesPresent: boolean,
* steepInclinesNotes,
* seatingTypes: [list of seating types present],
* seatingNotes: "free text about seating",
* bathroom: [list of bathroom access types],
* parking: [list of physical access types],
* signage: [list of signage access types],
* announcements: [list of audio access types],
* spokenMedia: [list of audio access types],
* visualMedia: [list of visual access types],
* reporterIdentity: "free text identity of author of report,

The initial report establishing an entity should always contain at a minimum: location, names, 

# physical access types
* staff-operated-wheelchair-lift - a wheelchair lift that requires staff to operate
* user-operated-wheelchair-lift - a wheelchair lift that can be operated independantly by a mobility aid user on their own
* street-access-elevator - an elevator that opens on to a sidewalk or other open area
* internal-only-elevator - an elevator which only opens indoors
* steep-ramp - a steep ramp that is challenging to safely use with mobility aids
* easy-ramp - an easy ramp that isn't especially steep, that features flat sections at reasonable intervals if it is longer than a few meters
* stairs-with-one-railing - stairs with one strong railing or railings too far apart to both be used by one person at the same time
* stairs-with-two-railings - stairs with two railings that can both be reached by a single person to support their weight safely
* stairs-with-no-railings - stairs that do not have any strong usable railings
* tactile-bumps - tactile bumps used appropriately to signal changes in terrain or danger
* high-contrast-steps - stairs that are painted or otherwise indicated with high contrast visuals making edges easy to recognise for visually impared people

# seating types
* stools - seating which supports the butt, with no backrest
* chairs-with-backs - firm chairs that have backrests
* couches-with-backs - soft chairs or couches that include a backrest
* recliner-chairs - soft chairs which can be adjusted in to a non-upright position
* fixed-reclined-firm-chairs - a hard chair which is in a fixed reclined position
* fixed-reclined-soft-chairs - a soft chair or lounge which is in a fixed reclined position

# signage access types
* large-print - text is large enough to be read with some vision imparement
* high-contrast - text is very high contrast on signage
* braille - signage features braille dots within reach
* loudspeaker - signage features a button trigger or automatic announcements of it's message
* illumination - signage is lit with a spotlight or is a digital sign like a TV
* readable-typefaces - signage uses clear readable typefaces
* dyslexia-typefaces - signage uses Dyslexia-friendly weighted typefaces

# audio access types
* open-captions - sonic media provides open captions any sighted person can read
* closed-captions-via-headset - sonic media offers closed captions via a wireless headset
* closed-captions-via-display - sonic media offers closed captions via a display you can position in front of you as needed
* closed-captions-via-app - sonic media offers closed captions via an app you can operate on your own phone or tablet
* alternative-audio-track-via-reciever - spoken content is available in a secondary language via a provided reciever device
* alternative-audio-track-via-app - spoken content is available in a secondary language via an app you can use on your own phone or tablet
* hearing-loop - a hearing loop or t-coil system is available for clearer audio pickup on hearing devices
* sign-language-interpreter - sign language interpreters provide access to spoken word media

# visual access types
* open-audio-description - visual content is audio described out loud for everyone to hear
* audio-description-via-reciever - visual content is audio described and available via a headset device this venue can supply
* audio-description-via-app - visual content is audio described and available via an app you can download and use on your own phone or tablet
* high-contrast - visual media is presented in high contrast
* enlarged - visual media is presented in a large format, like a movie screen
* shrunk - visual media is available in a small format, like a small display

# bathroom access types
* stepless-entry - bathroom is accessible without needing to get over a step or edge of any height
* wide-door - door to access bathroom is wider than the an average door
* large-bathroom - accessible bathroom has plenty of space to turn a large wheelchair around in, without any doors getting in the way
* child-change-table - a table is provided that can be used to swap the clothes on a child
* adult-change-table - a large table is provided that can be used to swap clothes on an adult
* sink-at-seated-height - sink is provided at a seated height comfortable for use on a wheelchair
* sink-within-reach - a sink is provided within arms reach of toilet, so mobility aid users can fully wash and dry their hands before transfering back on to a mobility aid
* transfer-railings - strong railings are provided around toilet, to aid transfering between toilet and a mobility aid via arms
* transfer-sling - a small ceiling crane with sling attachment aids mobility aid users in transfering to toilet without arm strength
* low-noise - this bathroom doesn't have loud noises from hand dryers or similar devices used by other people at the same time, suitable for people with sound sensory sensitivities
* no-perfume - this bathroom does not have any kind of automatic perfume dispenser that may cause allergies